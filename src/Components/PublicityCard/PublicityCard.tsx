import React from "react";
interface Props {}

function PublicityCard(props: Props) {
   const {} = props;

   return (
      <figure className="flex flex-col space-y-10 lg:flex-row-reverse lg:space-y-0 lg:w-full lg:justify-between">
         <img
            className="rounded-lg lg:w-[48.65%] lg:aspect-[0.918]"
            src="./assets/shared/desktop/image-best-gear.jpg"
            srcSet="./assets/shared/mobile/image-best-gear.jpg 654w, ./assets/shared/tablet/image-best-gear.jpg 1378w, ./assets/shared/desktop/image-best-gear.jpg 540w"
            sizes="(max-width: 767px) 654px, (min-width:1023px) 540px, 100vw"
            alt=""
         />
         <figcaption className="flex items-center lg:w-[40%]">
            <div className="flex flex-col h-fit text-center space-y-8 md:items-center lg:items-start lg:text-start">
               <h4 className="text-2.5xl tracking-[1px] font-bold px-4 md:text-[40px] md:w-[77%] lg:w-full lg:px-0">
                  Bringing you the <span className=" text-primary">best</span>{" "}
                  audio gear
               </h4>
               <p className="text-sm+ leading-6 lg:pr-1 text-black text-opacity-50">
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products. Stop by our store to meet some
                  of the fantastic people who make Audiophile the best place to
                  buy your portable audio equipment.
               </p>
            </div>
         </figcaption>
      </figure>
   );
}

export default PublicityCard;
