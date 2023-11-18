import React from "react";
import { Link } from "react-router-dom";
interface Props {
   title: string;
   imgSource: string;
}

function Thumbnail({ title, imgSource }: Props) {
   const path = "../assets/shared";
   return (
      <>
         <div className="flex flex-col relative items-center lg:w-1/3 uppercase after:content-[''] after:z-[-1] after:rounded-lg after:absolute after:bottom-0 after:w-full after:aspect-[1.98] after:max-h-[68%] after:md:aspect-[1.35] after:md:max-h-[72%] after:lg:aspect-[1.71]  after:bg-tertiary">
            <img
               src={`${path}/desktop/${imgSource}`}
               className="w-[45%] md:w-[63%] lg:w-[61%] aspect-[1]"
            />
            <h2 className=" text-lg font-bold -mt-3 lg:-mt-[20px]">{title}</h2>
            <Link
               className="flex items-center mt-4 mb-[22px] lg:mb-[30px] text-black text-opacity-50 hover:text-primary"
               to={`/${title}`}
               onClick={() => window.scrollTo(0, 0)}
            >
               Shop
               <svg
                  width="8"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-4"
               >
                  <path
                     d="M1.322 1l5 5-5 5"
                     stroke="#D87D4A"
                     strokeWidth="2"
                     fill="none"
                     fillRule="evenodd"
                  />
               </svg>
            </Link>
         </div>
      </>
   );
}

export default Thumbnail;
