import React, { useEffect, useState } from "react";
import Button from "../Components/Button/Button";
import CategoryHeading from "../Components/CategoryHeading/CategoryHeading";
import ProductCard from "../Components/ProductCard/ProductCard";
import PublicityCard from "../Components/PublicityCard/PublicityCard";
import ThumbnailGroup from "../Components/Thumbnail/ThumbnailGroup";
import { useAppDispatch, useAppSelector } from "../Features/Hooks";
import { fetchDatas } from "../Features/Slices/productSlice";
import Layout from "../Layout/Layout";
import Modal from "../Components/Modal/Modal";

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

interface Props {}

function Home(props: Props) {
   const mark2 = useAppSelector((store) =>
      store.products.productsList.filter((product: Product) => product.id == 4)
   );
   const zx9 = useAppSelector((store) =>
      store.products.productsList.filter(
         (product: Product) => product.name == "ZX9 Speaker"
      )
   );
   const zx7 = useAppSelector((store) =>
      store.products.productsList.filter(
         (product: Product) => product.name == "ZX7 Speaker"
      )
   );
   const yx1 = useAppSelector((store) =>
      store.products.productsList.filter(
         (product: Product) => product.name == "YX1 Wireless Earphones"
      )
   );
   const { showCart } = useAppSelector((store) => store.cart);

   const {} = props;
   return (
      <>
         <Layout>
            <CategoryHeading pageStyle="homepage">
               <ProductCard
                  product={mark2[0]}
                  btnStyle="orangeBtn"
                  style="homeCard"
               >
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
               </ProductCard>
            </CategoryHeading>

            <main className="flex flex-col px-6 md:px-10 pt-10 pb-[120px] relative  md:pt-24 md:pb-24 lg:pt-[120px] lg:pb-[200px] lg:px-[165px]">
               {showCart && <Modal />}

               <ThumbnailGroup />
               <div className="flex flex-col w-full space-y-8 my-[120px] md:my-24 lg:mt-[168px] lg:mb-[200px]">
                  <div className="bg-[#d87d4a] py-[55px] lg:py-0 relative w-full lg:h-[38.88vw] overflow-hidden lg:pl-[118px] lg:pr-24 rounded-lg">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" w-[171%] max-w-[600px] aspect-square left-1/2 top-0 -translate-y-[21%] -translate-x-[50%] absolute lg:-translate-x-[15%] lg:translate-y-0 lg:max-w-none lg:w-[85%]  lg:left-0 "
                     >
                        <g
                           stroke="#FFF"
                           fill="none"
                           fillRule="evenodd"
                           opacity=".202"
                        >
                           <circle cx="50%" cy="50%" r="25%" />
                           <circle cx="50%" cy="50%" r="28.7%" />
                           <circle cx="50%" cy="50%" r="50%" />
                        </g>
                     </svg>
                     <div className="flex flex-col  space-y-8 h-full items-center md:space-y-16 lg:justify-between lg:flex-row ">
                        <img
                           className="w-[53%] max-w-[197px] lg:max-w-none lg:h-auto lg:w-[42%] lg:self-end z-0 lg:-mb-4"
                           src="./assets/home/mobile/image-speaker-zx9.png"
                           srcSet="./assets/home/mobile/image-speaker-zx9.png 320w, ./assets/home/tablet/image-speaker-zx9.png 366w, ./assets/home/desktop/image-speaker-zx9.png 756w"
                           sizes="(max-width: 767px) 320px, (max-width: 1023px) 366px, 100vw "
                        />
                        <div className=" flex flex-col items-center max-w-[325px] md:max-w-[350px]  text-white space-y-6 text-center lg:max-w-none lg:text-start lg:w-1/3 lg:min-w-[260px] lg:items-start z-0">
                           <h3 className="font-bold text-4xl w-2/3 lg:w-full md:text-[56px] md:leading-[58px] tracking-[2px]">
                              {zx9.length && zx9[0].name}
                           </h3>
                           <p className=" text-sm+  text-white text-opacity-75 px-4 leading-[25px] lg:p-0 lg:mt-6 lg:mb-10">
                              Upgrade to premium speakers that are phenomenally
                              built to deliver truly remarkable sound.
                           </p>
                           <Button
                              target={`/product/${zx9.length && zx9[0].id}`}
                              buttonStyle="blackBtn"
                           >
                              see product
                           </Button>
                        </div>
                     </div>
                  </div>

                  <div className="relative rounded-lg w-full aspect-[1.02] md:aspect-[2.15] md:max-h-[320px] lg:aspect-[3.5] lg:max-h-full">
                     <img
                        src="./assets/home/mobile/image-speaker-zx7.jpg"
                        srcSet="./assets/home/mobile/image-speaker-zx7.jpg 654w, ./assets/home/tablet/image-speaker-zx7.jpg 689w, ./assets/home/desktop/image-speaker-zx7.jpg 1110w"
                        sizes="(max-width: 767px) 654px, (max-width: 1023px) 689px, 100vw"
                        className="w-full h-full rounded-lg "
                     />
                     <div className="absolute top-1/2 left-[8.5%] -translate-y-1/2">
                        <h3 className="text-2.5xl lg:text-[32px] mb-8 tracking-[2px]">
                           {zx7.length && zx7[0].name}
                        </h3>
                        <Button
                           target={`/product/${zx7.length && zx7[0].id}`}
                           buttonStyle="transparentBtn"
                        >
                           see product
                        </Button>
                     </div>
                  </div>
                  <div className="flex rounded-lg flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-3 lg:space-y-0 lg:space-x-[30px]">
                     <img
                        src="./assets/home/desktop/image-earphones-yx1.jpg"
                        alt=""
                        srcSet="./assets/home/mobile/image-earphones-yx1.jpg 654w, ./assets/home/tablet/image-earphones-yx1.jpg 678w, ./assets/home/desktop/image-earphones-yx1.jpg 540w"
                        sizes=" (max-width:767px) 654px, (max-width:1023px) 678px, 100vw"
                        className="flex rounded-lg w-full aspect-[1.55] md:w-1/2 md:aspect-[1.2] lg:aspect-[1.73] "
                     />
                     <div className="bg-[#f1f1f1] flex flex-col w-full aspect-[1.55] md:w-1/2 md:aspect-[1.25] py-10 px-6 rounded-lg  justify-center  lg:px-24 lg:w-1/2 lg:aspect-[1.73]">
                        <h3 className=" text-[28px] mb-8">yx1 earphones</h3>
                        <Button
                           target={`/product/${yx1.length && yx1[0].id}`}
                           buttonStyle="transparentBtn"
                        >
                           see product
                        </Button>
                     </div>
                  </div>
               </div>
               <PublicityCard />
            </main>
         </Layout>
      </>
   );
}

export default Home;
