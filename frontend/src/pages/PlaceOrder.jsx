import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const {
    navigate,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_charges,
    products,
  } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");

  return (
    <div className="">
      <div className="bg-primary mb-16">
        {/* Container */}
        <form className="max-padd-container py-10">
          <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
            {/* Left Side */}
            <div className="flex flex-1 flex-col gap-3 text-[95%]">
              <Title title1={"Delivery"} title2={"information"} />
              <div className="flex gap-3">
                {/* First Name */}
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />

                {/* Last Name */}
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>

              {/* Email Address */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-full"
              />

              {/* Phone number */}
              <input
                type="text"
                name="phone"
                placeholder="Cellphone Number"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-full"
              />

              <div className="flex gap-3">
                {/* Complex name */}
                <input
                  type="text"
                  name="complexName"
                  placeholder="Complex Name"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />

                {/* Apartment or house number */}
                <input
                  type="text"
                  name="apartmentNumber"
                  placeholder="Apartment/House Number"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>

              <div className="flex gap-3">
                {/* Street address */}
                <input
                  type="text"
                  name="street"
                  placeholder="Street Address"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />

                {/* Surburb */}
                <input
                  type="text"
                  name="surburb"
                  placeholder="Surburb"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>

              <div className="flex gap-3">
                {/* City */}
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />

                {/* Province */}
                <input
                  type="text"
                  name="province"
                  placeholder="Province"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>

              <div className="flex gap-3">
                {/* Code */}
                <input
                  type="text"
                  name="code"
                  placeholder="Postal Code"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />

                {/* Country */}
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-1 flex-col">
              <CartTotal />
              {/* Payment Method */}
              <div className="my-6">
                <h3 className="bold-20 mb-5">
                  Payment <span className="text-secondary">Method</span>
                </h3>
                <div className="flex gap-3">
                  <div
                    onClick={() => setMethod("stripe")}
                    className={`${
                      method === "stripe" ? "btn-dark" : "btn-white"
                    } !py-1 text-xs cursor-pointer`}
                  >
                    Stripe
                  </div>
                  <div
                    onClick={() => setMethod("cod")}
                    className={`${
                      method === "cod" ? "btn-dark" : "btn-white"
                    } !py-1 text-xs cursor-pointer`}
                  >
                    Cast on Delivery
                  </div>
                </div>
              </div>

              <div className="">
                <button type="submit" className="btn-secondary">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default PlaceOrder;
