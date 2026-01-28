import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none rounded-sm shadow-md";
  
  const variants = {
    primary: "bg-[#014E86] text-white hover:bg-[#003d6a] shadow-blue-900/20",
    accent: "bg-stone-800 text-white hover:bg-black shadow-stone-900/20",
    secondary: "bg-amber-400 text-stone-900 hover:bg-amber-500 shadow-amber-900/20",
    outline: "border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;