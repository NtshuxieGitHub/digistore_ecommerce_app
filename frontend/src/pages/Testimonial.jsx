import { FaCheck, FaStar, FaStarHalf } from "react-icons/fa6";
import Title from "../components/Title";
import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import product1 from "../assets/products/product_1.png";
import product2 from "../assets/products/product_2_1.png";
import product3 from "../assets/products/product_3.png";
import product4 from "../assets/products/product_6.png";
import Footer from "../components/Footer";

const Testimonial = () => {
  return (
    <div>
      <div className="bg-primary mb-16">
        <div className="max-padd-container py-10">
          {/* COntainer */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-20 mb-16 rounded-2xl">
            {/* Left Side */}
            <div className="flex items-start justify-between flex-col">
              <Title
                title1={"What People"}
                title2={"Say"}
                title1Styles={"pb-10"}
                paraStyles={"!block"}
              />
              <div className="flex flex-col gap-1 bg-white p-2 rounded">
                <div className="flex text-secondary gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="medium-14">
                  More than <b className="">21,000+ reviews</b>
                </div>
              </div>
            </div>

            {/* Right Side: Reviews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {/* Review Card */}
              <div className="flex flex-col gap-1 rounded-lg p-4 bg-white">
                <div className="flexBetween">
                  <div className="flexCenter gap-x-2">
                    <img
                      src={user1}
                      alt="user-image"
                      height={44}
                      width={44}
                      className="rounded-full"
                    />
                    <h5 className="bold-14">David Small</h5>
                  </div>

                  <div className="bg-secondary text-white rounded-full flexCenter gap-x-2 p-1 px-2 text-xs font-semibold">
                    <FaCheck />
                    Verified
                  </div>
                </div>

                <hr className="h-[1px] w-full my-2" />
                <div className="flex gap-x-1 text-secondary mt-5 mb-1 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <h4 className="h4">High Quality</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus similique dolorum recusandae error. Explicabo
                  commodi ducimus perferendis est, corrupti mollitia sint labore
                  minus, quae eum earum quibusdam vero ullam placeat!
                </p>

                <div className="flex gap-x-1 mt-5">
                  <img
                    src={product1}
                    alt="product-image"
                    height={44}
                    width={44}
                    className="rounded aspect-square object-cover"
                  />
                  <img
                    src={product2}
                    alt="product-image"
                    height={44}
                    width={44}
                    className="rounded aspect-square object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 rounded-lg p-4 bg-white">
                <div className="flexBetween">
                  <div className="flexCenter gap-x-2">
                    <img
                      src={user2}
                      alt="user-image"
                      height={44}
                      width={44}
                      className="rounded-full"
                    />
                    <h5 className="bold-14">Leah Thomas</h5>
                  </div>

                  <div className="bg-secondary text-white rounded-full flexCenter gap-x-2 p-1 px-2 text-xs font-semibold">
                    <FaCheck />
                    Verified
                  </div>
                </div>

                <hr className="h-[1px] w-full my-2" />
                <div className="flex gap-x-1 text-secondary mt-5 mb-1 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </div>

                <h4 className="h4">Great Fit</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus similique dolorum recusandae error. Explicabo
                  commodi ducimus perferendis est, corrupti mollitia sint labore
                  minus, quae eum earum quibusdam vero ullam placeat!
                </p>

                <div className="flex gap-x-1 mt-5">
                  <img
                    src={product3}
                    alt="product-image"
                    height={44}
                    width={44}
                    className="rounded aspect-square object-cover"
                  />
                  <img
                    src={product4}
                    alt="product-image"
                    height={44}
                    width={44}
                    className="rounded aspect-square object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testimonial;
