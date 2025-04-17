import { useState } from "react";
import ArrowDropUpIcon from "../assets/icons/arrow-drop-up.svg";
import SearchIcon from "../assets/icons/search.svg";
import useClickOutside from "@/hooks/components/useClickOutside";

interface SelectOptionProps {
  label: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  options?: string[];
  disable?: boolean;
  full?: boolean;
  search?: boolean;
}

export default function SelectOption({
  label,
  selectedValue,
  setSelectedValue,
  options = [],
  disable = false,
  full = false,
  search = true,
}: SelectOptionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState("");
  const ref = useClickOutside("click", () =>
    setIsOpen(false)
  ) as React.RefObject<HTMLDivElement>;

  return (
    <div
      ref={ref}
      className={`${disable ? "opacity-50" : ""} relative h-[4rem] ${
        full ? "w-full" : "w-60 sm:w-72"
      } select-none space-y-3 text-small`}
    >
      <div
        onClick={() => {
          if (!disable) setIsOpen((prev) => !prev);
        }}
        className={`${
          disable ? "cursor-not-allowed" : "cursor-pointer"
        } flex h-full items-center justify-between bg-secondary-background px-6 py-3 ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
      >
        <span
          className={`overflow-hidden overflow-ellipsis text-nowrap ${
            selectedValue
              ? "font-medium capitalize opacity-100"
              : "text-small opacity-75"
          }`}
        >
          {selectedValue || label}
        </span>
        <span className={`${isOpen ? "" : "rotate-180"} opacity-75`}>
          <ArrowDropUpIcon className="w-6 h-6 text-text-color" />
        </span>
      </div>

      {isOpen && (
        <ul className="absolute left-0 z-10 max-h-60 w-full overflow-y-auto rounded-b-lg bg-secondary-background">
          {search && (
            <div className="relative">
              <input
                type="text"
                className="w-full border-b border-text-color/20 bg-secondary-background py-2 pl-11 pr-2 outline-none focus:ring-[1px] focus:ring-primary-color"
                placeholder={`إبحث عن ${label}`}
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
              />
              <span className="absolute left-8 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <SearchIcon className="w-4 h-4 text-text-color" />
              </span>
            </div>
          )}
          {options
            .filter((option) =>
              option.toLowerCase().includes(searchString.toLowerCase())
            )
            .map((option, i) => (
              <li
                key={i}
                className="cursor-pointer border-b border-text-color/20 px-6 py-2 transition-all duration-100 ease-in-out last:border-b-0 hover:bg-primary-color"
                onClick={() => {
                  setSelectedValue(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
