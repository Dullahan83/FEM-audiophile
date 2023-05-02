import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ThumbnailGroup from "../Thumbnail/ThumbnailGroup";

interface Props {}

function Header(props: Props) {
   const [showMenu, setShowMenu] = useState(false);

   useEffect(() => {
      const body = document.querySelector("body");
      showMenu
         ? body?.classList.add("noscroll")
         : body?.classList.remove("noscroll");
   }, [showMenu]);
   return (
      <header className="flex bg-black px-6 py-8 md:px-10 lg:px-[11.46%] lg:py-9  relative">
         <Navbar
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            inHeader={true}
         />
         {showMenu && <Menu />}
      </header>
   );
}
const Menu = () => {
   return (
      <div className="absolute top-full z-40 left-0 w-full h-[100vh] bg-black bg-opacity-30">
         <div className=" px-6 py-8 bg-white rounded-b-lg">
            <ThumbnailGroup />
         </div>
      </div>
   );
};
export default React.memo(Header);
