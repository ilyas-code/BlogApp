import React from "react"   
import { useState } from "react"
// import { cn } from "./lib/utils"

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

export default function STButton({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  icon,
  iconPosition = "left",
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false)

  const variantStyles = {
    primary:
      "bg-zinc-600 text-white hover:bg-zinc-700 shadow-sm",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 shadow-sm",
    outline: "bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
  }

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-md",
    md: "text-sm px-4 py-2 rounded-lg",
    lg: "text-base px-6 py-3 rounded-xl",
  }

  return (
    <button
      className={cn(
        "relative font-medium transition-all duration-200 ease-in-out",
        "flex items-center justify-center gap-2",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      disabled={isLoading || disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      <span className={cn("flex items-center gap-2", isLoading ? "opacity-0" : "")}>
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </span>
    </button>
  )
}

