import { TbArrowBackUp } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";

const ProductFeatures = () => {
  return (
    <section className="bg-primary rounded-xl mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl">
        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div className="text-3xl">
            <TbArrowBackUp className="mb-3 text-yellow-500" />
          </div>

          <div>
            <h4 className="h4 capitalize">Easy Return</h4>
            <p>
              Changed your mind? We’ve got you covered. Enjoy hassle-free
              returns with a simple process, so you can shop with complete peace
              of mind. Your satisfaction is our priority.
            </p>
          </div>
        </div>

        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div className="text-3xl">
            <TbTruckDelivery className="mb-3 text-red-500" />
          </div>

          <div>
            <h4 className="h4 capitalize">Fast Delivery</h4>
            <p>
              Get your order in no time! With our fast and reliable delivery
              service, you can count on your products arriving quickly and in
              perfect condition.
            </p>
          </div>
        </div>

        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div className="text-3xl">
            <RiSecurePaymentLine className="mb-3 text-secondary" />
          </div>

          <div>
            <h4 className="h4 capitalize">Secure Payment</h4>
            <p>
              Shop with complete confidence. Our secure payment system ensures
              your personal information is always protected, allowing you to
              make purchases with peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
