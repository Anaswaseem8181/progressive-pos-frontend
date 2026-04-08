
const Header = ({ onLoginClick }) => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Progressive POS</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              Log in
            </button>
            <button
              onClick={onLoginClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20 active:scale-95 duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
