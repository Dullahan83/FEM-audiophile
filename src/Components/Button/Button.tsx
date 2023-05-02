import React, { ComponentPropsWithoutRef } from "react";
import { Link, useNavigate } from "react-router-dom";
type ButtonProps = {
   target?: string;
   buttonStyle: string;
   children: string;
   handleClick?: () => void;
   isDisabled?: boolean;
} & ComponentPropsWithoutRef<"button">;

function Button({
   target,
   buttonStyle,
   children,
   handleClick,
   isDisabled,
   ...props
}: ButtonProps) {
   const navigate = useNavigate();
   const handleBtnClick = () => {
      target && navigate(target);
      handleClick && handleClick();
      target && window.scrollTo(0, 0);
   };
   if (buttonStyle === "blackBtn") {
      return (
         <button
            className={`py-[15px] px-[30px] w-fit bg-black hover:bg-[#4c4c4c] text-white text-[13px] tracking-[1px] uppercase `}
            onClick={handleBtnClick}
            disabled={isDisabled ? isDisabled : false}
            {...props}
         >
            {children}
         </button>
      );
   }
   if (buttonStyle === "transparentBtn") {
      return (
         <button
            className={`py-[15px] px-[30px] border-[1px] w-fit border-black text-black hover:bg-black hover:text-white text-[13px] tracking-[1px] uppercase  `}
            onClick={handleBtnClick}
            disabled={isDisabled ? isDisabled : false}
            {...props}
         >
            {children}
         </button>
      );
   }
   return (
      <button
         className={`py-[15px] px-[30px] bg-primary hover:bg-[#FBAF85] hover:cursor-pointer text-white text-[13px] tracking-[1px] uppercase disabled:hover:cursor-auto  disabled:bg-gray-500 ${
            buttonStyle === "cartBtn" && "w-full"
         }`}
         onClick={handleBtnClick}
         disabled={isDisabled ? isDisabled : false}
         {...props}
      >
         {children}
      </button>
   );
}

export default Button;
