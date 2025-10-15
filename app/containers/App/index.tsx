// import RouterHelper from 'commons/share_app/components/RouterHelpers';
import { FC, memo } from 'commons/utils/react';

import Navbar from 'components/Navbar';

const App: FC = () => (
  <div className="min-h-screen bg-gray-200">
    <Navbar />

    {/* Główny kontener - wyśrodkowany, max 1024px szerokości, jasnoszary */}
    <main className="pt-16">
      <div className="max-w-[1024px] mx-auto bg-gray-100 min-h-[calc(100vh-4rem)] p-6">
        {/* Tutaj będzie routing do dwóch widoków */}
      </div>
    </main>
  </div>
);

export default memo(App);
