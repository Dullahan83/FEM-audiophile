import React from "react";
import { Link, useParams } from "react-router-dom";
import BackButton from "../Components/BackButton/BackButton";
import LightProductCard from "../Components/LightProductCard/LightProductCard";
import Modal from "../Components/Modal/Modal";
import ProductCard from "../Components/ProductCard/ProductCard";
import PublicityCard from "../Components/PublicityCard/PublicityCard";
import ThumbnailGroup from "../Components/Thumbnail/ThumbnailGroup";
import { useAppSelector } from "../Features/Hooks";
import Layout from "../Layout/Layout";

interface Props {}
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

interface Product {
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
}

function Product(props: Props) {
   const {} = props;
   const id = useParams().id;
   const prodArray: Array<Product> = useAppSelector((store) =>
      store.products.productsList.filter(
         (product: Product) => product.id == Number(id)
      )
   );
   const { showCart } = useAppSelector((store) => store.cart);
   const product = prodArray[0];
   return (
      <>
         <Layout>
            <main className=" px-6 pb-6 md:pb-[70px] md:px-[5.21%] lg:px-[11.46%] lg:pb-160 relative">
               <BackButton />
               <ProductCard product={product} btnStyle="orangeBtn" />
               <div className="flex flex-col space-y-120 lg:space-y-160 mt-[88px]">
                  <div className="flex flex-col space-y-[88px] md:space-y-120 lg:space-y-0  lg:flex-row lg:space-x-[126px]">
                     <div>
                        <h2 className="font-bold text-3.2xl tracking-wide">
                           features
                        </h2>
                        <p className=" whitespace-pre-line  text-black text-opacity-50 text-sm+ mt-6 lg:mt-8">
                           {product && product.features}
                        </p>
                     </div>
                     <div className="flex flex-col md:flex-row md:justify-between md:w-[79.6%] lg:flex-col lg:w-full lg:justify-normal">
                        <h2 className="font-bold text-3.2xl">in the box</h2>
                        <ul className="mt-6 space-y-2 md:mt-0 lg:mt-8">
                           {product &&
                              product.includes.map((item, key) => {
                                 return (
                                    <li className="capitalize" key={key}>
                                       <span className="text-primary mr-6">{`${item["quantity"]}x`}</span>
                                       {item["item"]}
                                    </li>
                                 );
                              })}
                        </ul>
                     </div>
                  </div>
                  <div className="space-y-5 rounded-lg md:flex md:flex-col md:flex-wrap md:h-[368px]  md:justify-between md:content-between  md:space-y-0 lg:h-[592px]">
                     <img
                        src={`./${product && product.gallery.first.mobile}`}
                        srcSet={`./${
                           product && product.gallery.first.mobile
                        } 654w, ./${
                           product && product.gallery.first.tablet
                        } 554w, ./${
                           product && product.gallery.first.desktop
                        } 445w`}
                        sizes="(max-width: 767px) 654px, (max-width: 1023px) 554px,100vw"
                        alt=""
                        className="rounded-[inherit] w-full aspect-[1.88] md:w-[40.27%]  md:h-[47.3%] md:order-1"
                     />
                     <img
                        src={`./${product && product.gallery.second.mobile}`}
                        srcSet={`./${
                           product && product.gallery.second.mobile
                        } 654w, ./${
                           product && product.gallery.second.tablet
                        } 554w, ./${
                           product && product.gallery.second.desktop
                        } 445w`}
                        sizes="(max-width: 767px) 654px, (max-width: 1023px) 554px,100vw"
                        alt=""
                        className="rounded-[inherit] w-full aspect-[1.88] md:w-[40.27%] md:h-[47.3%] md:order-2"
                     />
                     <img
                        src={`./${product && product.gallery.third.mobile}`}
                        srcSet={`./${
                           product && product.gallery.third.mobile
                        } 654w, ./${
                           product && product.gallery.third.tablet
                        } 790w, ./${
                           product && product.gallery.third.desktop
                        } 635w`}
                        sizes="(max-width: 767px) 654px, (max-width: 1023px) 790px,100vw"
                        alt=""
                        className="rounded-[inherit] w-full aspect-[0.89] md:w-[57.5%] md:h-full md:order-3"
                     />
                  </div>
                  <div className="flex flex-col space-y-14 md:space-y-0 md:space-x-3  md:flex-row lg:space-x-[30px]">
                     {product &&
                        product.others.map((item, index) => {
                           return (
                              <LightProductCard product={item} key={index} />
                           );
                        })}
                  </div>
                  <ThumbnailGroup />
                  <PublicityCard />
               </div>
            </main>
            {showCart && <Modal />}
         </Layout>
      </>
   );
}

export default Product;
