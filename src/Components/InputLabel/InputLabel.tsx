import React, {
   ChangeEvent,
   ComponentPropsWithoutRef,
   useEffect,
   useState,
} from "react";
import { checkValidity } from "../../Utils/Utils";
import { useDebounce } from "../hooks";
import { FormField, FormType } from "../../Pages/Checkout";
type InputProps = {
   ID: string;
   Type: string;
   // setState?: (value: string) => void;
   setState?: (key: keyof Partial<FormType>, value: string) => void;
   Class?: string;
   children?: React.ReactNode;
   Placeholder?: string;
   regex?: RegExp;
} & ComponentPropsWithoutRef<"input">;

function InputLabel({
   ID,
   Type,
   setState,
   Class,
   children,
   Placeholder,
   ...props
}: InputProps) {
   const [hasError, setHasError] = useState<boolean | undefined>();
   const [inputValue, setInputValue] = useState("");
   const debouncedvalue = useDebounce(inputValue, 800);
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      setState && setState(ID as keyof FormType, e.target.value);
   };
   const handleCheckValidity = () => {
      setHasError(!checkValidity(inputValue, ID));
   };
   useEffect(() => {
      handleCheckValidity();
   }, [debouncedvalue]);
   return (
      <div
         className={`h-fit w-full flex flex-col  relative ${
            Class === "full" ? "md:w-full" : "md:w-[48.9%]"
         }`}
      >
         {hasError && (
            <p className="absolute w-fit top-0 right-0 text-xs text-error font-medium ">
               Wrong Format
            </p>
         )}
         <label
            className={`capitalize text-label ${hasError && "text-error"}`}
            htmlFor={ID}
         >
            {children}
         </label>
         <input
            type={Type}
            {...props}
            placeholder={Placeholder && Placeholder}
            id={ID}
            onChange={handleChange}
            value={inputValue}
            className={` placeholder:text-sm font-bold tracking-tight px-6 py-[18px] border-[1px] mt-2 outline-none outline-2 -outline-offset-2 rounded-lg focus:outline-primary ${
               hasError && "border-error"
            }`}
         />
      </div>
   );
}

export default InputLabel;
