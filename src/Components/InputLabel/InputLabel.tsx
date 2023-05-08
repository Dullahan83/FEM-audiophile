import React, {
   ChangeEvent,
   ComponentPropsWithoutRef,
   useEffect,
   useState,
} from "react";
import { useDebounce } from "../hooks";
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
   type: string;
   label: string;
   pattern: string;
   required: boolean;
   Class?: string;
   setState?: (key: keyof Partial<FormType>, value: string) => void;
} & ComponentPropsWithoutRef<"input">;
// function InputLabel({
//    ID,
//    Type,
//    setState,
//    Class,
//    children,
//    Placeholder,
//    ...props
// }: InputProps) {
//    const [hasError, setHasError] = useState<boolean | undefined>();
//    const [inputValue, setInputValue] = useState("");
//    const debouncedvalue = useDebounce(inputValue, 800);
//    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setInputValue(e.target.value);
//       setState && setState(ID as keyof FormType, e.target.value);
//    };
//    const handleCheckValidity = () => {
//       setHasError(!checkValidity(inputValue, ID));
//    };
//    useEffect(() => {
//       handleCheckValidity();
//    }, [debouncedvalue]);
//    return (
//       <div
//          className={`h-fit w-full flex flex-col  relative ${
//             Class === "full" ? "md:w-full" : "md:w-[48.9%]"
//          }`}
//       >
//          {hasError && (
//             <p className="absolute w-fit top-0 right-0 text-xs text-error font-medium ">
//                Wrong Format
//             </p>
//          )}
//          <label
//             className={`capitalize text-label ${hasError && "text-error"}`}
//             htmlFor={ID}
//          >
//             {children}
//          </label>
//          <input
//             type={Type}
//             {...props}
//             placeholder={Placeholder && Placeholder}
//             id={ID}
//             onChange={handleChange}
//             value={inputValue}
//             className={` placeholder:text-sm font-bold tracking-tight px-6 py-[18px] border-[1px] mt-2 outline-none outline-2 -outline-offset-2 rounded-lg focus:outline-primary ${
//                hasError && "border-error"
//             }`}
//          />
//       </div>
//    );
// }
const InputLabel = ({ Class, id, label, setState, ...props }: InputProps2) => {
   const [focused, setFocused] = useState(false);
   const [inputValue, setInputValue] = useState("");
   const debouncedvalue = useDebounce(inputValue, 800);
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // setInputValue(e.target.value);
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
            className={`peer placeholder:text-sm  font-bold tracking-tight px-6 py-[18px] border-[#cfcfcf] border-[1px] mt-2 outline-none outline-2 -outline-offset-2 rounded-lg focus:outline-primary invalid:border-error data-[focused=false]:border-[#cfcfcf]`}
            id={id}
            data-focused={focused.toString()}
            {...props}
            onBlur={handleFocus}
            onChange={handleChange}
            onFocus={() => setFocused(false)}
         />
         <span className="absolute hidden peer-invalid:flex peer-data-[focused='false']:hidden w-fit top-0 right-0 text-xs text-error font-medium ">
            Wrong Format
         </span>
         <label
            className={`capitalize text-label peer-invalid:text-error peer-data-[focused='false']:text-black`}
            htmlFor={id}
         >
            {label}
         </label>
      </div>
   );
};

export default InputLabel;
