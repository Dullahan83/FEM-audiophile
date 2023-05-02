import React from "react";
import { useAppSelector } from "../../Features/Hooks";
import Button from "../Button/Button";
import { Product } from "../../Features/Slices/productSlice";

interface Props {
   product: {
      slug: string;
      name: string;
      image: {
         desktop: string;
         tablet: string;
         mobile: string;
      };
   };
}

function LightProductCard({ product }: Props) {
   const productElement = useAppSelector((store) =>
      store.products.productsList.filter(
         (item: Product) => item.slug === product.slug
      )
   );
   const { id } = productElement[0] && productElement[0];
   return (
      <div className={"flex flex-col items-center md:w-1/3"}>
         <img
            src={`/src/${product && product.image.mobile}`}
            srcSet={`/src/${product && product.image.mobile} 654w, /src/${
               product && product.image.tablet
            } 562w, /src/${product && product.image.desktop} 1080w`}
            sizes="(max-width: 767px) 654px, (max-width: 1023px) 562px, 100vw"
            className="rounded-lg"
         />
         <h3 className="text-2xl font-bold tracking-[1.71px] my-8 md:mt-10 ">
            {product && product.name}
         </h3>
         <Button target={`/product/${id && id}`} buttonStyle="orangeBtn">
            see product
         </Button>
      </div>
   );
}

export default LightProductCard;
