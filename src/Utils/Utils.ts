type cartProduct = {
   id: number;
   name: string;
   cartImg: string;
   price: number;
   quantity: number;
};

const formatNameCart = (id: number) => {
   switch (id) {
      case 1:
         return "YX1";
      case 2:
         return "XX59";
      case 3:
         return "XX99 MK I";
      case 4:
         return "XX99 MK II";
      case 5:
         return "ZX7";
      case 6:
         return "ZX9";
      default:
         break;
   }
};
const getTotalQuantity = (cartProducts: cartProduct[]) => {
   let sum = 0;
   cartProducts.forEach((product) => {
      sum += product.quantity;
   });
   return sum;
};

const getTotalPrice = (cartProducts: cartProduct[]) => {
   let sum = 0;
   cartProducts.forEach((product) => {
      sum += product.price * product.quantity;
   });
   return sum;
};

const generalRegex = new RegExp(/^[a-zA-Z]{1}[a-z]{3,}/);
const addressRegex = new RegExp(/^[0-9]{1,}[a-zA-Z ]{3,}/);
const numberRegex = new RegExp(/[0-9-]/);
const checkValidity = (inputValue: string, id: string) => {
   if (inputValue.length !== 0) {
      switch (id) {
         case "name":
            return generalRegex.test(inputValue);
         case "email":
            return true;
         case "phoneNumber":
            return inputValue.length > 8 && inputValue.length < 15;
         case "address":
            return addressRegex.test(inputValue);
         case "zipCode":
            return inputValue.length > 3 && inputValue.length < 6;
         case "city":
            return generalRegex.test(inputValue);
         case "country":
            return generalRegex.test(inputValue);
         case "eNumber":
            return numberRegex.test(inputValue) && inputValue.length === 9;
         case "ePin":
            return numberRegex.test(inputValue) && inputValue.length === 4;

         default:
            break;
      }
   } else {
      return true;
   }
};

export { formatNameCart, getTotalPrice, getTotalQuantity, checkValidity };
