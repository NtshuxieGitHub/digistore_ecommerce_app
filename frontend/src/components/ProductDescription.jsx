import Description from "./productDescription/Description";
import CareGuide from "./productDescription/CareGuide";
import SizeGuide from "./productDescription/SizeGuide";
import { useState } from "react";

const ProductDescription = () => {
  const [activeButton, setActiveButton] = useState("Description");

  const renderButton = () => {
    switch (activeButton) {
      case "Description":
        return <Description />;
      case "Care Guide":
        return <CareGuide />;
      case "Size Guide":
        return <SizeGuide />;
    }
  };

  return (
    <div className="ring-1 ring-slate-900/10 rounded-lg">
      <div className="flex gap-3">
        <button
          onClick={() => setActiveButton("Description")}
          className={`"medium-14 p-3 w-32"  ${
            activeButton === "Description" ? "border-b-2 border-secondary" : ""
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveButton("Care Guide")}
          className={`"medium-14 p-3 w-32"  ${
            activeButton === "Care Guide" ? "border-b-2 border-secondary" : ""
          }`}
        >
          Care Guide
        </button>
        <button
          onClick={() => setActiveButton("Size Guide")}
          className={`"medium-14 p-3 w-32"  ${
            activeButton === "Size Guide" ? "border-b-2 border-secondary" : ""
          }`}
        >
          size Guide
        </button>
      </div>
      <hr className="h-[1px] w-full" />

      {/* Render cative button component */}
      <div>{renderButton()}</div>
    </div>
  );
};

export default ProductDescription;
