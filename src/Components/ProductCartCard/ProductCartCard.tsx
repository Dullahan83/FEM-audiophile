import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Features/Hooks";
import { removeItem } from "../../Features/Slices/CartSlice";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import { cartProduct } from "../../Features/Slices/CartSlice";
type ProductProps = {
   id: number;
   checkout?: boolean;
   confirmation?: boolean;
};

function ProductCartCard({ id, checkout }: ProductProps) {
   const product = useAppSelector((store) =>
      store.cart.productInCart.filter((el: cartProduct) => el.id === id)
   );
   const { cartImg, quantity, name, price } = product[0];

   const dispatch = useAppDispatch();
   const [count, setCount] = useState(quantity);
   const newProduct = {
      cartImg,
      id,
      name,
      price,
      quantity: count,
   };
   const handleRemove = () => {
      dispatch(removeItem(newProduct));
   };
   return (
      <div className="flex justify-between items-center" data-id={id}>
         <figure className="relative flex items-center w-full group">
            {!checkout && (
               <span
                  className="absolute w-5 hidden aspect-square border-[1px] hover:cursor-pointer group-hover:flex border-black top-0 left-0 -translate-y-1/3 -translate-x-1/3 bg-white rounded-full before:content-[''] before:w-[2px] before:absolute before:h-[70%] before:bg-[red] before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-md zerfg after:content-[''] after:w-[2px] after:absolute after:h-[70%] after:bg-[red] after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:-rotate-45 after:rounded-md "
                  onClick={handleRemove}
               ></span>
            )}
            <img
               src={`../assets/cart/image-${cartImg && cartImg}.jpg`}
               alt=""
               className={`${
                  checkout ? "w-[50px]" : "w-16"
               } aspect-square rounded-lg`}
            />
            <figcaption className="ml-4 w-full">
               <div className="flex justify-between items-center">
                  <h4 className="text-sm+ font-bold">{name && name}</h4>
                  {checkout && (
                     <p className="text-body text-neutral-500 font-bold">{`x${quantity}`}</p>
                  )}
               </div>
               <p className="text-sm text-black text-opacity-50 font-bold">{`$ ${new Intl.NumberFormat(
                  "en-US"
               ).format(price * quantity)}`}</p>
            </figcaption>
         </figure>
         {!checkout && (
            <QuantityPicker
               Count={quantity}
               setWantedCount={setCount}
               Class="cartPicker"
               id={id}
            />
         )}
      </div>
   );
}

export default React.memo(ProductCartCard);
