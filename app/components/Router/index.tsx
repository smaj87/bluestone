import Product from 'containers/Product';
import Products from 'containers/Products';
import history from 'utils/history';
import { FC, memo, useEffect, useState } from 'utils/react';

const Router: FC = () => {
  const [location, setLocation] = useState(history.location);

  useEffect(() => {
    const unlisten = history.listen(({ location: newLocation }) => {
      setLocation(newLocation);
    });

    return () => {
      unlisten();
    };
  }, []);

  // Routing logic
  if (location.pathname === '/') {
    return <Products />;
  }

  // Match /product/:name
  const productMatch = location.pathname.match(/^\/product\/([^/]+)$/);

  if (productMatch) {
    const productName = decodeURIComponent(productMatch[1]);
    return <Product name={productName} />;
  }

  // 404 - nieznana ścieżka
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">404 - Nie znaleziono strony</h1>
      <p>Ścieżka: {location.pathname}</p>
    </div>
  );
};

export default memo(Router);
