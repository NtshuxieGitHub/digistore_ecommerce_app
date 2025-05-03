const Description = () => {
  return (
    <div className="flex flex-col gap-3 p-3">
      <div>
        <h5 className="h5">Product Detail</h5>
        <p className="text-sm">
          Designed with attention to detail and crafted for everyday wear, this
          piece brings together quality, comfort, and effortless style. Whether
          you&apos;re dressing up or keeping it casual, it&apos;s made to move
          with you — durable, versatile, and ready for anything.
        </p>

        <p className="text-sm">
          Experience the perfect blend of style and function. Thoughtfully made
          to deliver comfort, durability, and timeless appeal with every wear.
        </p>
      </div>

      <div>
        <h5 className="h5">Benefit</h5>
        <ul className="list-disc pl-5 text-sm text-gray-30 flex flex-col gap-1">
          <li>
            High-quality materials ensure long-lasting durability and comfort
          </li>
          <li>Designed to meet the needs of modern, active lifestyles.</li>
          <li>Available in a wide range of sizes and trendy colors</li>
        </ul>
      </div>
    </div>
  );
};

export default Description;
