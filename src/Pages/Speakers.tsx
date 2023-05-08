import React from "react";
import CategoryHeading from "../Components/CategoryHeading/CategoryHeading";
import Modal from "../Components/Modal/Modal";
import ProductCard, {
   CategoryCard,
} from "../Components/ProductCard/ProductCard";
import PublicityCard from "../Components/PublicityCard/PublicityCard";
import ThumbnailGroup from "../Components/Thumbnail/ThumbnailGroup";
import { useAppSelector } from "../Features/Hooks";

interface Props {}
import Layout from "../Layout/Layout";
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

function Speakers(props: Props) {
   const {} = props;
   const speakers = useAppSelector((store) =>
      store.products.productsList.filter(
         (product: Product) => product["category"] === "speakers"
      )
   );
   const { showCart } = useAppSelector((store) => store.cart);

   return (
      <>
         <Layout>
            <CategoryHeading pageStyle="categoryPage">
               <h1 className="text-2.5xl font-bold tracking-[2px]">Speakers</h1>
            </CategoryHeading>
            <main className="flex flex-col px-[6.4%] md:px-[5.21%] pt-16 pb-[120px] space-y-[120px] md:pt-24 md:pb-24 lg:pt-[120px] lg:pb-[200px] lg:px-[11.46%] lg:space-y-40">
               {speakers.length &&
                  speakers.reverse().map((speaker: Product, key: number) => {
                     return (
                        <CategoryCard
                           product={speaker}
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

export default Speakers;
