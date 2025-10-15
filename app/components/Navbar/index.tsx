import logo from 'images/logo.png';
import { FC, memo } from 'utils/react';

const Navbar: FC = () => (
  <nav className="fixed top-0 left-0 right-0 bg-gray-800 h-20 z-50">
    <div className="h-full flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <img
          alt="Bluestone Logo"
          className="h-10 brightness-0 invert"
          src={logo}
        />
        <span className="text-white text-xl font-semibold">
          Hello Bluestone!
        </span>
      </div>
    </div>
  </nav>
);

export default memo(Navbar);
