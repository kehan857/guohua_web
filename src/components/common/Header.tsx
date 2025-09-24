import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import routes from '../../routes';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = routes.filter(route => route.visible !== false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-health-green-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-health-green-500 to-health-green-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-health-green-600 to-health-green-700 bg-clip-text text-transparent">
                糖尿病健康管理平台
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-base font-medium rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-health-green-100 text-health-green-700 shadow-md'
                    : 'text-gray-700 hover:text-health-green-600 hover:bg-health-green-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-gray-600 hover:text-health-green-600 hover:bg-health-green-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-health-green-200">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-health-green-100 text-health-green-700'
                      : 'text-gray-700 hover:text-health-green-600 hover:bg-health-green-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;