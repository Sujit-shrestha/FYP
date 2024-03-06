import { AddListingCard } from "../addListingCard";
import { ProductCard } from "../productCard";

export const YourListings = () => {
  return (
    <>
      <div className="grid p-3 gap-2 grid-cols-3">
        <div className="col-span-1">
          <AddListingCard />
        </div>
        <div className="col-span-1">
          <ProductCard />
        </div>
      </div>
    </>
  );
};
