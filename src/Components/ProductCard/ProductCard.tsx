import React, { useState } from "react";
import { useAppDispatch } from "../../Features/Hooks";
import {
   addToCart,
   clearCart,
   removeItem,
} from "../../Features/Slices/CartSlice";
import { formatNameCart } from "../../Utils/Utils";
import Button from "../Button/Button";
import QuantityPicker from "../QuantityPicker/QuantityPicker";
import { Product } from "../../Features/Slices/productSlice";

interface Props {
   product: Product;
   children?: React.ReactNode;
   btnStyle: string;
}

type cartProduct = {
   id: number;
   name: string | undefined;
   cartImg: string;
   price: number;
   quantity: number;
};

export const HomeCard = ({ product, children, btnStyle }: Props) => {
   return (
      <article className={`flex items-center content-between  relative `}>
         <div
            className={`h-full w-full z-10 my-28 md:flex md:justify-center lg:justify-start lg:w-fit lg:mx-0 lg:my-64 `}
         >
            <div
               className={`flex flex-col md:w-1/3 lg:w-full items-center text-center lg:items-start lg:text-start`}
            >
               {product && product.new && (
                  <p
                     className={
                        "uppercase mb-4 text-white text-opacity-50 lg:text-sm tracking-[10px] "
                     }
                  >
                     new product
                  </p>
               )}
               <h1 className=" text-4xl tracking-[1.43px] font-bold">
                  {" "}
                  {product && product.name}
               </h1>
               <p className=" mt-6 mb-7 text-white text-opacity-50 w-3/4 lg:w-[86%]">
                  {children}
               </p>
               <Button
                  target={`/product/${product && product.id}`}
                  buttonStyle={btnStyle}
               >
                  see product
               </Button>
            </div>
         </div>
         <div
            className={
               "absolute w-full h-full lg:relative lg:w-full lg:h-auto lg:rounded-full lg:overflow-hidden "
            }
         >
            <img
               src="/dist/assets/home/desktop/Bitmap.png"
               srcSet="/dist/assets/home/mobile/Bitmap.png 375w, /dist/assets/home/tablet/Bitmap.png 768w, /dist/assets/home/desktop/Bitmap.png 1024w"
               sizes="(max-width: 767px) 375px, (max-width:1023px) 768px, 100vw"
               className="  object-cover md:object-contain lg:object-cover w-full h-full"
            />
         </div>
      </article>
   );
};

const ProductCard = ({ product }: Props) => {
   const [wantedCount, setWantedCount] = useState(1);
   const dispatch = useAppDispatch();
   const cartProduct: cartProduct = {
      id: product && product.id,
      name: product && formatNameCart(product.id),
      cartImg: product && product.slug,
      price: product && product.price,
      quantity: wantedCount,
   };
   const handleClick = () => {
      dispatch(addToCart(cartProduct));
      setWantedCount(1);
   };
   return (
      <article
         className={` flex flex-col-reverse  md:flex-row-reverse md:justify-between md:items-center  lg:justify-between`}
      >
         <div className={` mt-8 md:text-start md:w-[47%] lg:w-[40%] lg:mt-0`}>
            {product && product.new && (
               <p className={"uppercase text-sm text-primary tracking-[10px]"}>
                  new product
               </p>
            )}
            <h1 className="text-2.5xl font-bold leading-none md:text-[40px]  mt-6 md:mt-4 lg:px-0 lg:pr-[170px]">
               {product && product.name}
            </h1>
            <p className="text-black text-sm+ text-opacity-50 leading-[25px] my-6 md:mt-8  lg:mb-10 lg:pl-0 lg:pr-0">
               {product && product.description}
            </p>

            <p className={"text-lg font-bold mb-8"}>
               {product &&
                  `$ ${new Intl.NumberFormat("en-US").format(product.price)}`}
            </p>

            <div className={"flex space-x-4"}>
               <QuantityPicker
                  Count={wantedCount}
                  setWantedCount={setWantedCount}
               />
               <Button buttonStyle="orangeBtn" handleClick={handleClick}>
                  add to cart
               </Button>
            </div>
         </div>

         <img
            src={`./${product && product.image.mobile}`}
            srcSet={`./${product && product.image.mobile} 654w, ./${
               product && product.image.tablet
            } 562w, ./${product && product.image.desktop} 1080w`}
            sizes="(max-width: 767px) 654px, (max-width: 1023px) 562px, 100vw"
            alt=""
            className=" rounded-lg md:w-[39%] lg:w-[48.65%]"
         />
      </article>
   );
};

export const CategoryCard = ({ product, children, btnStyle }: Props) => {
   return (
      <article
         className={` flex flex-col-reverse lg:flex-row lg:odd:flex-row-reverse lg:items-center lg:justify-between`}
      >
         <div className={`text-center mt-8 lg:text-start lg:w-[40%] lg:mt-0`}>
            {product && product.new && (
               <p className={"uppercase text-sm text-primary tracking-[10px]"}>
                  new product
               </p>
            )}
            <h1 className="text-2.5xl font-bold leading-none md:text-[40px] md:px-[215px] mt-6 md:mt-4 lg:px-0 lg:pr-[170px]">
               {product && product.name}
            </h1>
            <p className="text-black text-sm+ text-opacity-50 leading-[25px] my-6 md:mt-8 md:px-16 lg:mb-10 lg:pl-0 lg:pr-0">
               {product && product.description}
            </p>
            <p className=" ">{children}</p>
            <p className="text-h6 font-bold mb-8">
               {product &&
                  `$ ${new Intl.NumberFormat("en-US").format(product.price)}`}
            </p>
            <Button
               target={`/product/${product && product.id}`}
               buttonStyle={btnStyle}
            >
               see product
            </Button>
         </div>
         <img
            src={`./${product && product.categoryImage.mobile}`}
            srcSet={`./${product && product.categoryImage.mobile} 654w, ./${
               product && product.categoryImage.tablet
            } 1378w, ./${product && product.categoryImage.desktop} 1080w`}
            sizes="(max-width: 767px) 654px, (max-width: 1023px) 1378px,  100vw"
            alt=""
            className=" rounded-lg w-full aspect-[0.93] md:aspect-[1.95] lg:aspect-[0.964] lg:w-[48.65%]"
         />
      </article>
   );
};
export default ProductCard;
