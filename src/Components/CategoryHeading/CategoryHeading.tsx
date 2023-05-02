import React from "react";
interface Props {
   children: React.ReactNode;
   pageStyle: string;
}

function CategoryHeading({ children, pageStyle }: Props) {
   return (
      // <div className={`${styles.heading} ${styles[pageStyle]}`}>{children}</div>
      <div
         className={` bg-black text-white ${
            pageStyle === "categoryPage" && "flex justify-center py-8"
         } lg:px-[165px]`}
      >
         {children}
      </div>
   );
}

export default CategoryHeading;
