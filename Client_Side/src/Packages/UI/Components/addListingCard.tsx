import { PlusButton } from "./Buttons/plusButton";

export const AddListingCard = ()=>{




  return (
   <div
   className="w-80  h-80 rounded overflow-hidden  shadow-lg shadow-blue-500/50 border-black text-white select-none"
   style={{ backgroundColor: "#1A2233" }}>
    <div id="centerMainaddListingcard" className="flex  justify-center items-center h-full flex-col">
          <PlusButton />
      <span> Add More Listings</span>
    </div>
    
   </div>
  );
}