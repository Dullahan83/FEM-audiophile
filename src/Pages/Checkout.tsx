import React, { useEffect, useReducer, useRef, useState } from "react";
import BackButton from "../Components/BackButton/BackButton";
import Button from "../Components/Button/Button";
import InputLabel from "../Components/InputLabel/InputLabel";
import Modal, { Confirmation } from "../Components/Modal/Modal";
import ProductCartCard from "../Components/ProductCartCard/ProductCartCard";
import { useAppSelector } from "../Features/Hooks";
import { checkFormValidity } from "../Utils/Utils";

interface Props {}
import Layout from "../Layout/Layout";
type cartProduct = {
   id: number;
   name: string;
   cartImg: string;
   price: number;
   quantity: number;
};
export type FormType = {
   name: string;
   email: string;
   phoneNumber: string;
   address: string;
   zipCode: string;
   city: string;
   country: string;
   eNumber: string;
   ePin: string;
};
export type FormField = Partial<FormType>;

function Checkout(props: Props) {
   const {} = props;
   const {
      showCart,
      productInCart,
      total,
      endPrice,
      totalQuantity,
      vat,
      shipping,
   } = useAppSelector((store) => store.cart);
   const [onCash, setOnCash] = useState(false);
   const [eMoney, setEmoney] = useState(true);
   const [isConfirmed, setIsConfirmed] = useState(false);
   let isValid = checkFormValidity();
   const formRef = useRef(null);
   const [formState, setFormState] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      eNumber: "",
      ePin: "",
   });

   const handleChange = (key: keyof FormType, value: string) => {
      setFormState((prev) => {
         const newState = { ...prev };
         newState[key] = value;
         return newState;
      });
   };
   const InputGroup1 = [
      {
         index: 1,
         type: "text",
         placeholder: "Alexei Ward",
         name: "name",
         id: "name",
         label: "Name",
         pattern: "^[A-Z]{1}[a-z]{3,}[ -]{1}[A-Z]{1}[a-z]{1,}",
         required: true,
         value: formState["name"],
         setState: handleChange,
      },
      {
         index: 2,
         type: "email",
         placeholder: "alexeiward@mail.com",
         name: "email",
         id: "email",
         label: "Email Address",
         pattern: "[a-zA-Z0-9.]{3,}@[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,5}",
         required: true,
         value: formState["email"],
         setState: handleChange,
      },
      {
         index: 3,
         type: "text",
         placeholder: "+1202-555-0136",
         name: "phoneNumber",
         id: "phoneNumber",
         label: "Phone Number",
         pattern: "^[+]{1}[0-9-]{8,13}",
         required: true,
         value: formState["phoneNumber"],
         setState: handleChange,
      },
   ];
   const InputGroup2 = [
      {
         index: 1,
         type: "text",
         placeholder: "1137 Williams Avenue",
         name: "address",
         id: "address",
         label: "Address",
         pattern: "^[0-9]{1,4}[ ]{1}[a-zA-Z ]{4,}",
         required: true,
         value: formState["address"],
         setState: handleChange,

         Class: "full",
      },
      {
         index: 2,
         type: "text",
         placeholder: "10001",
         name: "zipCode",
         id: "zipCode",
         label: "ZIP Code",
         pattern: "[0-9]{3,5}",
         required: true,
         value: formState["zipCode"],
         setState: handleChange,
      },
      {
         index: 3,
         type: "text",
         placeholder: "New York",
         name: "city",
         id: "city",
         label: "City",
         pattern: "[a-zA-Z -]{5,}",
         required: true,
         value: formState["city"],
         setState: handleChange,
      },
      {
         index: 4,
         type: "text",
         placeholder: "United States",
         name: "country",
         id: "country",
         label: "Country",
         pattern: "[a-zA-Z -]{5,}",
         required: true,
         value: formState["country"],
         setState: handleChange,
      },
   ];
   const InputGroup3 = [
      {
         index: 1,
         type: "text",
         placeholder: "238521993",
         name: "eNumber",
         id: "eNumber",
         label: "e-Money Number",
         pattern: "[0-9]{9}",
         required: true,
         value: formState["eNumber"],
         setState: handleChange,
      },
      {
         index: 2,
         type: "text",
         placeholder: "10001",
         name: "ePin",
         id: "ePin",
         label: "e-Money Pin",
         pattern: "[0-9]{4}",
         required: true,
         value: formState["ePin"],
         setState: handleChange,
      },
   ];
   const handleEmoneyMethod = () => {
      setEmoney(true);
      setOnCash(false);
   };
   const handleCashMethod = () => {
      setEmoney(false);
      setOnCash(true);
      isValid = checkFormValidity();
   };
   const handleConfirmation = () => {
      if (isValid) {
         setIsConfirmed(true);
      }
      setIsConfirmed(false);
   };

   return (
      <>
         <Layout>
            <main className="px-[6.4%] pb-24 relative md:px-[5.21%] lg:px-[11.46%]">
               <BackButton />
               <section className="  space-y-8 flex flex-col lg:flex-row lg:space-y-0 lg:justify-between">
                  <article className="bg-white rounded-lg p-6 pb-8 h-fit md:px-7 lg:w-[65.77%]">
                     <h1 className="text-2.5xl font-bold tracking-[1px] mb-8 md:text-h3">
                        checkout
                     </h1>
                     <form className="space-y-8 ">
                        <div className="flex flex-wrap space-y-6 md:justify-between">
                           <p className="w-full text-sub uppercase text-primary -mb-2">
                              billing details
                           </p>
                           {InputGroup1.map((input) => {
                              return (
                                 <InputLabel key={input.index} {...input} />
                              );
                           })}
                        </div>
                        <div className="flex flex-wrap space-y-6 md:justify-between">
                           <p className="w-full text-sub uppercase text-primary -mb-2">
                              shipping info
                           </p>
                           {InputGroup2.map((input) => {
                              return (
                                 <InputLabel key={input.index} {...input} />
                              );
                           })}
                        </div>
                        <div className="flex flex-wrap space-y-6">
                           <p className="w-full text-sub uppercase text-primary -mb-2">
                              payment details
                           </p>
                           <div className="flex flex-wrap justify-between w-full">
                              <p className="text-label capitalize mb-4">
                                 payment method
                              </p>
                              <div className="flex flex-col w-full space-y-4 md:w-[48.9%]">
                                 <div className="flex px-4 py-[18px] border-[1px] rounded-lg items-center font-bold text-sm">
                                    <input
                                       type="checkbox"
                                       name="emoney"
                                       id="emoney"
                                       checked={eMoney}
                                       onChange={() => handleEmoneyMethod()}
                                    />
                                    <label htmlFor="emoney">e-Money</label>
                                 </div>
                                 <div className="flex px-4 py-[18px] border-[1px] rounded-lg items-center font-bold text-sm">
                                    <input
                                       type="checkbox"
                                       name="cash"
                                       id="cash"
                                       checked={onCash}
                                       onChange={() => handleCashMethod()}
                                    />
                                    <label htmlFor="cash">
                                       Cash on Delivery
                                    </label>
                                 </div>
                              </div>
                              <div className="space-y-6 mt-8 w-full">
                                 {eMoney ? (
                                    <div className="flex flex-col space-y-6 justify-between md:space-y-0 md:flex-row">
                                       {InputGroup3.map((input) => {
                                          return (
                                             <InputLabel
                                                key={input.index}
                                                {...input}
                                             />
                                          );
                                       })}
                                    </div>
                                 ) : (
                                    <div className="flex pt-[22px] items-center justify-between">
                                       <svg
                                          width="48"
                                          height="48"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                                             fill="#D87D4A"
                                          />
                                       </svg>
                                       <p className="w-[80%] text-body text-neutral-500">
                                          The ‘Cash on Delivery’ option enables
                                          you to pay in cash when our delivery
                                          courier arrives at your residence.
                                          Just make sure your address is correct
                                          so that your order will not be
                                          cancelled.
                                       </p>
                                    </div>
                                 )}
                              </div>
                           </div>
                        </div>
                     </form>
                  </article>
                  <aside className="bg-white rounded-lg p-6 pb-8 lg:w-[31.54%] h-fit">
                     <h2 className="text-h6">summary</h2>
                     <div className="flex flex-col space-y-6 my-8">
                        {productInCart &&
                           productInCart.map(
                              (prod: cartProduct, index: number) => {
                                 return (
                                    <ProductCartCard
                                       checkout
                                       key={index}
                                       id={prod.id}
                                    />
                                 );
                              }
                           )}
                     </div>
                     <div className="space-y-2 mb-8">
                        <div className="flex justify-between items-center">
                           <p className="uppercase text-black text-opacity-50">
                              total
                           </p>
                           <p className="text-lg font-bold">
                              {`$ ${new Intl.NumberFormat("en-US").format(
                                 total
                              )}`}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="uppercase text-black text-opacity-50">
                              shipping
                           </p>
                           <p className="text-lg font-bold">
                              {`$ ${new Intl.NumberFormat("en-US").format(
                                 shipping
                              )}`}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="uppercase text-black text-opacity-50">
                              vat (included)
                           </p>
                           <p className="text-lg font-bold">
                              {`$ ${new Intl.NumberFormat("en-US").format(
                                 vat
                              )}`}
                           </p>
                        </div>
                        <div className="flex justify-between items-center">
                           <p className="uppercase text-black text-opacity-50">
                              grand total
                           </p>
                           <p className="text-lg font-bold text-primary">
                              {`$ ${new Intl.NumberFormat("en-US").format(
                                 endPrice
                              )}`}
                           </p>
                        </div>
                     </div>
                     <Button
                        buttonStyle="cartBtn"
                        handleClick={handleConfirmation}
                        isDisabled={!checkFormValidity()}
                     >
                        continue & pay
                     </Button>
                  </aside>
               </section>
               {isConfirmed && <Confirmation />}
            </main>
         </Layout>
      </>
   );
}

export default Checkout;
