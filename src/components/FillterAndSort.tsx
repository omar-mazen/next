import React from "react";

import SortBy from "./SortBy";
import Fillter from "./Fillter";
import SortIcon from "./../assets/icons-jsx/SortIcon";
import FilterShapeIcon from "./../assets/icons-jsx/FilterShapeIcon";

function FillterAndSort() {
  return (
    <aside
      className="bg-[#1F1F28] text-white space-y-6 text-right rounded-lg shadow-lg h-fit
            w-full max-w-[400px] mx-auto lg:mx-0 lg:w-full"
    >
      {/* ترتيب حسب */}
      <div>
        <h3 className="bg-[#EE3550] text-white px-3 py-2 rounded-[2px] flex items-center gap-2 flex-row-reverse  p-2">
          <SortIcon />
          <span>ترتيب حسب</span>
        </h3>
        <SortBy />
      </div>

      {/* تصنيف */}
      <div>
        <h3 className="bg-[#EE3550] text-white px-3 py-2 rounded-[2px] flex items-center gap-2 flex-row-reverse  p-2">
          <FilterShapeIcon />
          <span>تصنيف</span>
        </h3>
        <Fillter />
      </div>
    </aside>
  );
}

export default FillterAndSort;
