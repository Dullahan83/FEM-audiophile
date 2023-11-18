import React, {
   ChangeEvent,
   ComponentPropsWithoutRef,
   useEffect,
   useState,
} from "react";
import { useDebounce } from "../hooks";
import {
   UseFormRegister,
   FieldValues,
   FieldError,
   FieldErrors,
} from 'react-hook-form'
import { FormField, FormType } from "../../Pages/Checkout";
// type InputProps = {
//    ID: string;
//    type: string;
//    // setState?: (value: string) => void;
//    setState?: (key: keyof Partial<FormType>, value: string) => void;
//    Class?: string;
//    children?: React.ReactNode;
//    Placeholder?: string;
//    regex?: RegExp;
// } & ComponentPropsWithoutRef<"input">;

type InputProps2 = {
   index: number;
   id: string;
   name: string;
   placeholder: string;
   options?: any
   type: string;
   label: string;
   pattern?: string;
   required: boolean;
   Class?: string;
   setState?: (key: keyof Partial<FormType>, value: string) => void;
   register: UseFormRegister<FieldValues>
   errors: FieldErrors
} & ComponentPropsWithoutRef<"input">;

const InputLabel = ({ Class, id, label, setState,register, options, errors, ...props }: InputProps2) => {
   const [focused, setFocused] = useState(false);
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState && setState(id as keyof FormType, e.target.value);
   };

   const handleFocus = () => {
      setFocused(true);
   };
   return (
      <div
         className={`h-fit w-full flex flex-col-reverse  relative ${
            Class === "full" ? "md:w-full" : "md:w-[48.9%]"
         }`}
      >
         <input
            className={`peer placeholder:text-sm  font-bold tracking-tight px-6 py-[18px] border-[#cfcfcf] border-[1px] mt-2 outline-none outline-2 -outline-offset-2 rounded-lg focus:outline-primary  ${errors[props.name] && "border-red-500"}`}
            id={id}
            data-focused={focused.toString()}
            // {...props}
            // // onBlur={handleFocus}
            // // onChange={handleChange}
            onFocus={() => setFocused(false)}
            {...register(props.name, options)}

         />
         {/* <span className={`absolute hidden ${errors[props.name] && "flex"} peer-invalid:flex peer-data-[focused='false']:hidden w-fit top-0 right-0 text-xs text-error font-medium `}>
            Wrong Format
         </span> */}
         <label
            className={`capitalize text-label relative  ${errors[props.name] ? "text-red-500": "text-black"}`}
            htmlFor={id}
         >
            {label}
            {errors[props.name] && (
            <p
               className={`bg-white absolute font-normal top-0 right-0 text-red-500 text-xs
         `}
            >
               {"Wrong Format"}
            </p>
         )}
         </label>
         
      </div>
   );
};

export default InputLabel;
