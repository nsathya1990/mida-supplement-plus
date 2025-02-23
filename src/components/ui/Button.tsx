const Button = ({ children, className = "" }: { children: any; className?: string }) => {
  return (
    <button
      className={`bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
