import React from "react";
import { ProductContext } from "../contexts/ProductContext";
import Filter from "../contexts/Filter";
import Product from "../components/Product";



function FilterdProducts() {

  const {filter , setFilter} = React.useContext(Filter)
  const { products } = React.useContext(ProductContext);
  const updatedProducts = products.filter(item => item.category == filter);

  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] bg-[url('https://img.freepik.com/free-photo/beautiful-dusk-light-colorful-beauty_1203-5706.jpg')] bg-cover bg-fixed">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2 pt-2">
            <div className="flex-1 overflow-auto py-2 pt-14">
              <nav className="grid items-start px-4 text-sm font-medium">
                <h3 className="font-semibold text-lg">Filter By: {filter}</h3>
                <div className="grid gap-2">
                  <label
                    className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:R9ddqfnnja:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  >
                    <span style={{ pointerEvents: "none" }}>All</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
                <div className="grid gap-2">
                  <label
                    className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                    htmlFor="price"
                  >
                    Price Range
                  </label>
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:R9tdqfnnja:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  >
                    <span style={{ pointerEvents: "none" }}>All</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
                <div className="grid gap-2">
                  <label
                    className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                    htmlFor="sort"
                  >
                    Sort By
                  </label>
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:Raddqfnnja:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  >
                    <span style={{ pointerEvents: "none" }}>Featured</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-10">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {updatedProducts.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
              
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default FilterdProducts;
