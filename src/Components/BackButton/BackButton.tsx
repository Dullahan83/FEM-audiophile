import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {}

function BackButton(props: Props) {
   const {} = props;
   const navigate = useNavigate();
   const handleClick = () => {
      navigate(-1);
   };
   return (
      <button
         className="mt-4 mb-6 capitalize text-sm+ text-black text-opacity-50 md:mt-8 lg:mt-20 lg:mb-14 hover:text-primary"
         onClick={handleClick}
      >
         go back
      </button>
   );
}

export default BackButton;
