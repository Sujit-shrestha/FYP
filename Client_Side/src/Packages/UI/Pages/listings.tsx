import { AddListingCard } from "../Components/addListingCard";
import { ProductCard } from "../Components/productCard";


export const Listings = () => {
  return (
    <>
      <div className="grid p-3 gap-2 grid-cols-3">
        <div className="col-span-1">
          <AddListingCard />
         
        </div>
      
          <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
       
      </div>
    </>
  );
};
