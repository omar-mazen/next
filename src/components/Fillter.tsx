import React from "react";

const Fillter: React.FC = () => {
  return (
    <div className="mt-3 pr-2 text-sm space-y-4">
      <div>
        <p className="font-bold mb-1">سنوات الانضمام</p>
        <ul className="space-y-1">
          {["+1", "+2", "+3", "+4", "+5"].map((year, idx) => (
            <li key={year} className="flex items-center justify-end gap-2">
              <label htmlFor={`year-${idx}`}>{`${year} سنوات وأكثر`}</label>
              <input
                type="radio"
                id={`year-${idx}`}
                name="years"
                className="accent-[#44BA37]"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-600 pt-4 border-b pb-5">
        <p className="font-bold mb-1">تقييم الحرفي</p>
        <ul className="space-y-1">
          {[5, 4, 3, 2, 1].map((rating, i) => (
            <li key={rating} className="flex items-center justify-end gap-2">
              <label
                htmlFor={`rating-${i}`}
                className="cursor-pointer flex gap-1 flex-row-reverse"
              >
                {Array.from({ length: 5 }, (_, index) =>
                  index < rating ? (
                    <span key={index} className="text-yellow-400">
                      ★
                    </span>
                  ) : (
                    <span key={index} className="text-gray-400">
                      ☆
                    </span>
                  )
                )}
                <span>{rating === 5 ? "فقط" : "وأكثر"}</span>
              </label>
              <input
                type="radio"
                id={`rating-${i}`}
                name="rating"
                className="accent-[#44BA37]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Fillter;
