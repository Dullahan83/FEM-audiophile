import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Features/Hooks";
import { clearCart, toggleCartModal } from "../../Features/Slices/CartSlice";
import Button from "../Button/Button";
import ProductCartCard from "../ProductCartCard/ProductCartCard";
interface Props {
   children?: React.ReactNode;
}
type cartProduct = {
   id: number;
   name: string;
   cartImg: string;
   price: number;
   quantity: number;
};
function Cart(props: Props) {
   const {} = props;
   const { total, totalQuantity, productInCart, showCart } = useAppSelector(
      (store) => store.cart
   );
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const handleCartClear = () => {
      dispatch(clearCart());
   };
   const handleCheckout = () => {
      navigate("/checkout");
      dispatch(toggleCartModal(false));
   };
   const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Escape" || e.key === "Escape") {
         dispatch(toggleCartModal(false));
      }
      return;
   };

   useEffect(() => {
      showCart && document.addEventListener("keydown", handleKeyPress);
      return () => document.removeEventListener("keydown", handleKeyPress);
   }, []);
   return (
      <div
         className={
            "fixed w-full h-full bg-black bg-opacity-40 top-0 left-0 p-6 py-[116px] flex flex-col lg:py-32  lg:px-[165px] z-10"
         }
      >
         <div
            className={
               "px-7 py-8 bg-white rounded-lg relative flex flex-col z-0 md:px-8 md:w-[377px] md:self-end group/body"
            }
         >
            <div className={"flex justify-between mb-8"}>
               <h3 className="font-bold text-h6">{`Cart (${totalQuantity})`}</h3>
               <button className="hover:text-primary" onClick={handleCartClear}>
                  Remove all
               </button>
            </div>
            <div className={"flex flex-col space-y-6 peer"}>
               {productInCart &&
                  productInCart.map((product: cartProduct, index: number) => {
                     return <ProductCartCard id={product.id} key={index} />;
                  })}
            </div>
            <div className={"flex justify-between  mt-8 mb-6 items-center"}>
               <p className="uppercase text-sm+ text-black text-opacity-50">
                  total
               </p>
               <p className="text-lg font-bold">{`$ ${new Intl.NumberFormat(
                  "en-us"
               ).format(total)}`}</p>
            </div>
            <Button
               buttonStyle="cartBtn"
               isDisabled={productInCart.length ? false : true}
               handleClick={handleCheckout}
            >
               checkout
            </Button>
            <span
               className={
                  "absolute w-5 hidden z-0 aspect-square border-[1px] hover:cursor-pointer peer-hover:hidden group-hover/body:flex border-black top-0 left-0 -translate-y-1/3 -translate-x-1/3 bg-white rounded-full before:content-[''] before:w-[2px] before:absolute before:h-[70%] before:bg-[red] before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:rotate-45 before:rounded-md zerfg after:content-[''] after:w-[2px] after:absolute after:h-[70%] after:bg-[red] after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:-rotate-45 after:rounded-md "
               }
               onClick={() => dispatch(toggleCartModal(false))}
            ></span>
         </div>
      </div>
   );
}

export const Confirmation = (props: Props) => {
   const {} = props;
   const { productInCart, endPrice } = useAppSelector((store) => store.cart);
   const myRef = useRef<HTMLDivElement>(null);
   const firstChild = myRef.current?.firstElementChild;
   const [fullView, setFullView] = useState(false);
   const [height, setHeight] = useState<number | undefined>(0);

   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const handleConfirmation = () => {
      navigate("/");
      dispatch(clearCart());
   };
   useEffect(() => {
      setHeight(firstChild?.getBoundingClientRect().height);
   }, [firstChild]);

   useEffect(() => {
      setHeight(
         fullView
            ? myRef.current?.getBoundingClientRect().height
            : firstChild?.getBoundingClientRect().height
      );
   }, [fullView]);

   return (
      <div className="fixed w-full h-full bg-black bg-opacity-40 top-0 left-0 p-6 flex justify-center flex-col  z-10 md:items-center">
         <div className="flex flex-col w-full bg-white rounded-lg p-8  md:w-3/4 md:p-12 md:max-w-[540px]">
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
               <g fill="none" fillRule="evenodd">
                  <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                  <path
                     stroke="#FFF"
                     strokeWidth="4"
                     d="m20.754 33.333 6.751 6.751 15.804-15.803"
                  />
               </g>
            </svg>
            <h1 className="text-2xl font-bold  tracking-wide mt-6 mb-4 md:text-h3 md:mt-8 md:mb-6 ">
               thank you <br /> for your order
            </h1>
            <p className="mb-6 text-body text-neutral-500 md:mb-8">
               You wil receive an email confirmation shortly
            </p>

            <div className="flex flex-col md:flex-row mb-6 md:w-full md:mb-12">
               <div className="bg-tertiary rounded-t-lg p-6 space-y-3 md:w-[55.43%]  md:rounded-tr-none md:rounded-l-lg">
                  <div className="overflow-hidden" style={{ height }}>
                     <div className="space-y-3 flex-flex-col" ref={myRef}>
                        {productInCart &&
                           productInCart.map(
                              (product: cartProduct, index: number) => {
                                 return (
                                    <ProductCartCard
                                       checkout
                                       id={product.id}
                                       key={index}
                                    />
                                 );
                              }
                           )}
                     </div>
                  </div>
                  {productInCart.length > 1 && <hr />}
                  {productInCart.length > 1 && (
                     <button
                        className="flex w-fit text-label mx-auto text-neutral-500"
                        onClick={() => setFullView((prev) => !prev)}
                     >
                        {fullView
                           ? "View Less"
                           : `and ${productInCart.length - 1} other item(s)`}
                     </button>
                  )}
               </div>
               <div className="px-6 py-4 bg-black rounded-b-lg md:rounded-b-none md:flex md:items-center md:rounded-r-lg md:flex-1 lg:items-end lg:py-10">
                  <div className="space-y-2">
                     <h2 className="text-body text-neutral-500 font-medium">
                        grand total
                     </h2>
                     <p className="text-lg text-white">{`$ ${new Intl.NumberFormat(
                        "en-US"
                     ).format(endPrice)}`}</p>
                  </div>
               </div>
            </div>

            <Button
               buttonStyle="cartBtn"
               isDisabled={productInCart.length ? false : true}
               handleClick={handleConfirmation}
            >
               back to home
            </Button>
         </div>
      </div>
   );
};

export default Cart;
