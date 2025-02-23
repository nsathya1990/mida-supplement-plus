const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
