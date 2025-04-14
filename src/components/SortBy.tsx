import React from "react";

function SortBy() {
  return (
    <ul className="space-y-2 mt-3 pr-2 text-sm">
      <li className="flex items-center justify-end gap-2">
        <label htmlFor="sort-date">تاريخ الانضمام</label>
        <input
          type="radio"
          id="sort-date"
          name="sort"
          className="accent-[#44BA37]"
        />
      </li>
      <li className="flex items-center justify-end gap-2">
        <label htmlFor="sort-rating">التقييم</label>
        <input
          type="radio"
          id="sort-rating"
          name="sort"
          className="accent-[#44BA37]"
        />
      </li>
      <li className="flex items-center justify-end gap-2">
        <label htmlFor="sort-jobs">الأعمال المكتملة</label>
        <input
          type="radio"
          id="sort-jobs"
          name="sort"
          className="accent-[#44BA37]"
        />
      </li>
    </ul>
  );
}

export default SortBy;
