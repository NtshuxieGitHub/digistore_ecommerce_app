/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import Item from "./Item";
import { useContext, useEffect, useState } from "react";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let filtered = products.slice();

      filtered = filtered.filter((item) => category === item.category);
      filtered = filtered.filter((item) => subCategory === item.subCategory);

      setRelated(filtered.slice(0, 5));
    }
  }, [products]);

  return (
    <section className="py-16">
      <Title title1={"Related"} title2={"Products"} titleStyles={"pb-4"} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {related.map((product) => (
          <Item key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
