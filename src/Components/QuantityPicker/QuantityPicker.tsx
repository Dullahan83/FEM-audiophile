import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../Features/Hooks";
import {
   decrementQuantity,
   incrementQuantity,
} from "../../Features/Slices/CartSlice";

interface Props {
   Count: number;
   setWantedCount: (val: number) => void;
   Class?: string;
   id?: number;
}

function QuantityPicker({ Count, setWantedCount, Class, id }: Props) {
   const [count, setCount] = useState<number>(Count);
   const dispatch = useAppDispatch();
   const handleIncrement = () => {
      id && dispatch(incrementQuantity(id));
      setCount((prev) => (prev + 1 > 99 ? 99 : (prev += 1)));
   };
   const handleDecrement = () => {
      id && dispatch(decrementQuantity(id));
      setCount((prev) => (prev - 1 < 1 ? 1 : (prev -= 1)));
   };

   useEffect(() => {
      setCount(Count);
   }, [Count]);
   useEffect(() => {
      setWantedCount(count);
   }, [count]);

   return (
      <>
         <span className={`flex items-center h-fit bg-tertiary font-bold`}>
            <button
               onClick={handleDecrement}
               disabled={count > 1 ? false : true}
               className={`p-[15px] text-black disabled:text-black disabled:text-opacity-20 hover:text-primary ${
                  Class === "cartPicker" && "px-[11px] py-[7px]"
               }`}
            >
               -
            </button>

            <p
               className={`text-[13px] px-[15px] text-center ${
                  Class === "cartPicker" && "px-[11px]"
               }`}
            >
               {count.toString()}
            </p>
            <button
               onClick={handleIncrement}
               disabled={count < 99 ? false : true}
               className={`p-[15px]  text-black disabled:text-black disabled:text-opacity-20 hover:text-primary ${
                  Class === "cartPicker" && "px-[11px] py-[7px]"
               }`}
            >
               +
            </button>
         </span>
      </>
   );
}

export default QuantityPicker;
