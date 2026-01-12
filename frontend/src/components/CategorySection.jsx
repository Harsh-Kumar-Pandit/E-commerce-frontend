import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Category from "./Category";

const CategorySection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">

      <div className="mb-8 text-center">

        <div className="flex items-center justify-center gap-4">
          <span className="hidden sm:block h-[2px] w-12 bg-gray-300 dark:bg-white/20"></span>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-3xl font-bold tracking-wide sm:cursor-default"
          >
            CATEGORY
            <ChevronDown
              className={`sm:hidden transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          <span className="hidden sm:block h-[2px] w-12 bg-gray-300 dark:bg-white/20"></span>
        </div>

        <p className="mt-3 mx-auto max-w-xl text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
          Shop thoughtfully designed collections for the whole family.
          Quality, comfort, and style—made to last.
        </p>
      </div>

      <div
        className={`
          flex flex-wrap justify-center gap-10
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
          sm:max-h-none sm:opacity-100
        `}
      >
        <Category categoryKey="women" />
        <Category categoryKey="men" />
        <Category categoryKey="kids" />
      </div>
    </section>
  );
};

export default CategorySection;
