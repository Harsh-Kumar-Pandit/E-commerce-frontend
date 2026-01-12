import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import { useSearchParams } from "react-router-dom";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const [showFilter, setShowFilter] = useState(true);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sort, setSort] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleCategory = (value) => {
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (value) => {
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory) {
      setCategory([urlCategory]);
      setShowFilter(true);
    }
  }, [searchParams]);

  useEffect(() => {
    let temp = [...products];

    if (showSearch && search) {
      temp = temp.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length)
      temp = temp.filter((p) => category.includes(p.category));

    if (subCategory.length)
      temp = temp.filter((p) => subCategory.includes(p.subCategory));

    if (sort === "low-high") temp.sort((a, b) => a.price - b.price);
    if (sort === "high-low") temp.sort((a, b) => b.price - a.price);

    setFilteredProducts(temp);
  }, [category, search, showSearch, subCategory, sort, products]);

  return (
    <div className="flex flex-col lg:flex-row gap-10 pt-10 px-4 sm:px-8 border-t">
      {/* FILTER SIDEBAR */}
      <aside className="lg:w-64">
        <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] sticky">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="w-full flex justify-between items-center text-base font-medium text-gray-900"
          >
            Refine Selection
            <span className="text-lg text-gray-400">
              {showFilter ? "−" : "+"}
            </span>
          </button>

          {showFilter && (
            <div className="mt-8 space-y-10">
              {/* CATEGORY */}
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-widest text-gray-500">
                  Shop For
                </p>

                <div className="space-y-3 text-sm text-gray-700">
                  {["Men", "Women", "Kids"].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 cursor-pointer hover:text-black transition"
                    >
                      <input
                        type="checkbox"
                        checked={category.includes(item)}
                        onChange={() => toggleCategory(item)}
                        className="accent-black scale-105"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-100" />
              <div>
                <p className="mb-4 text-[11px] uppercase tracking-widest text-gray-500">
                  Product Type
                </p>

                <div className="space-y-3 text-sm text-gray-700">
                  {["Topwear", "Bottomwear", "Winterwear"].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 cursor-pointer hover:text-black transition"
                    >
                      <input
                        type="checkbox"
                        onChange={() => toggleSubCategory(item)}
                        className="accent-black scale-105"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>

      <section className="flex-1">
        <div className="z-20 bg-white pt-6 pb-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 px-1">
            <div className="max-w-xl">
              <Title text1="ALL" text2="COLLECTION" />
              <div className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold text-black">
                  {products?.length || 0}
                </span>{" "}
                products
              </div>
            </div>

            <div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border rounded-md px-4 py-2 text-sm bg-white shadow-sm hover:border-black transition"
              >
                <option value="default">Sort by</option>
                <option value="low-high">Price: Low → High</option>
                <option value="high-low">Price: High → Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              image={item.images}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-400 mt-20">
            No products match your filters.
          </p>
        )}
      </section>
    </div>
  );
};

export default Collection;
