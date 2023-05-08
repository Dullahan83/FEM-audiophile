import React, { useEffect } from "react";
import CategoryHeading from "../Components/CategoryHeading/CategoryHeading";
import ProductCard, {
   CategoryCard,
} from "../Components/ProductCard/ProductCard";
import PublicityCard from "../Components/PublicityCard/PublicityCard";
import ThumbnailGroup from "../Components/Thumbnail/ThumbnailGroup";
import { useAppSelector } from "../Features/Hooks";
import Modal from "../Components/Modal/Modal";

interface Props {}
type Product = {
   id: number;
   slug: string;
   name: string;
   image: image;
   category: string;
   categoryImage: image;
   new: boolean;
   price: number;
   description: string;
   features: string;
   includes: [];
   gallery: Gallery;
   others: [];
};
type Gallery = {
   first: image;
   second: image;
   third: image;
};
type image = {
   mobile: string;
   tablet: string;
   desktop: string;
};
import Layout from "../Layout/Layout";

function Headphones(props: Props) {
   const {} = props;
   const headphones = useAppSelector((store) =>
      store.products.productsList.filter(
         (product: Product) => product.category === "headphones"
      )
   );
   const { showCart } = useAppSelector((store) => store.cart);

   return (
      <>
         <Layout>
            <CategoryHeading pageStyle="categoryPage">
               <h1 className="text-2.5xl font-bold tracking-[2px]">
                  Headphones
               </h1>
            </CategoryHeading>
            <main className="flex flex-col px-[6.4%] md:px-[5.21%] pt-16 pb-[120px] space-y-[120px] md:pt-24 md:pb-24 lg:pt-[120px] lg:pb-[200px] lg:px-[11.46%] lg:space-y-40">
               {headphones.reverse().map((headphone: Product, key: number) => {
                  return (
                     <CategoryCard
                        product={headphone}
                        key={key}
                        btnStyle="orangeBtn"
                     />
                  );
               })}
               <ThumbnailGroup />
               <PublicityCard />
            </main>
            {showCart && <Modal />}
         </Layout>
      </>
   );
}

export default Headphones;
