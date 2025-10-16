import logo from 'images/logo.png';
import history from 'utils/history';
import { FC, memo, useCallback } from 'utils/react';

const Navbar: FC = () => {
  const onClick = useCallback(() => {
    history.push('/');
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 h-20 z-50">
      <div className="h-full flex items-center justify-between px-6">
        <button
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none p-0"
          onClick={onClick}
          type="button"
        >
          <img
            alt="Bluestone Logo"
            className="h-10 brightness-0 invert"
            src={logo}
          />
          <span className="text-white text-xl font-semibold">
            Hello Bluestone!
          </span>
        </button>
      </div>
    </nav>
  );
};

export default memo(Navbar);
