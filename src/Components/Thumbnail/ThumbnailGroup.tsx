import React from "react";
import Thumbnail from "./Thumbnail";

interface Props {}

function ThumbnailGroup(props: Props) {
   const {} = props;

   return (
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-[10px] md:flex-row lg:space-x-[30px]">
         <Thumbnail
            title="headphones"
            imgSource="image-category-thumbnail-headphones.png"
         />
         <Thumbnail
            title="earphones"
            imgSource="image-category-thumbnail-earphones.png"
         />
         <Thumbnail
            title="speakers"
            imgSource="image-category-thumbnail-speakers.png"
         />
      </div>
   );
}

export default ThumbnailGroup;
