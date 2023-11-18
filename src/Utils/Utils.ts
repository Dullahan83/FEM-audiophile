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

const nameRegex = new RegExp(/^[A-Z]{1}[a-z]{3,}/);
const mailRegex = new RegExp(
   /[a-zA-Z0-9.]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,5}/
);
const phoneRegex = new RegExp(/^[+]{1}[0-9-]{9,13}/);
const addressRegex = new RegExp(/^[0-9]{1,4}[ ]{1}[a-zA-Z ]{4,}/);
const zipCodeRegex = new RegExp(/[0-9]{3,5}/);
const cityCountryRegex = new RegExp(/[a-zA-Z -]{5,}/);
const eMoneyRegex = new RegExp(/[0-9]{9}/);
const ePinRegex = new RegExp(/[0-9]{4}/);

const checkFormValidity = () => {
   const inputs = [
      ...document.querySelectorAll<HTMLInputElement>(
         "input:not([type=checkbox])"
      ),
   ];
   let isValid = false;
   let shouldSkip = false;
   inputs.forEach((input) => {
      // console.log(input);
      if (shouldSkip) {
         return;
      }
      if (!checkFieldValidity(input)) {
      console.log(input.id, checkFieldValidity(input))

         // console.log(`${input.id} est pas bon`);
         shouldSkip = true;
         isValid = false;
         return;
      }
      isValid = true;
   });
   return isValid;
};
const checkFieldValidity = (input: HTMLInputElement) => {
   switch (input.id) {
      case "name":
         return nameRegex.test(input.value);
      case "email":
         return mailRegex.test(input.value);
      case "phoneNumber":
         return phoneRegex.test(input.value);
      case "address":
         return addressRegex.test(input.value);
      case "zipCode":
         return zipCodeRegex.test(input.value);
      case "city":
         return cityCountryRegex.test(input.value);
      case "country":
         return cityCountryRegex.test(input.value);
      case "eNumber":
         return eMoneyRegex.test(input.value);
      case "ePin":
         return ePinRegex.test(input.value);
      default:
         return false;
   }
};

export { formatNameCart, getTotalPrice, getTotalQuantity, checkFormValidity };
