import pic from "./../../../assets/demopics/pic3.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowButton } from "./Buttons/arrowButton";
import { ProductcardButton } from "./Buttons/productcardButton";

export const ProductCard = (name: string) => {
  name = "Ram lal shresthafdsfds";
  const truncatedName = name.length > 15 ? `${name.substring(0, 15)}...` : name;

  return (
    <div
      className="w-80  rounded overflow-hidden shadow-lg border-black text-white select-none"
      style={{ border: " 2px solid blue", backgroundColor: "#1A2233" }}
    >
      <div id="topproductCard" className="flex justify-space-between  p-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex overflow-hidden flex-initial items-center w-48 px-5 whitespace-normal truncate font-bold ">
          {truncatedName}
        </div>
        <ArrowButton />
      </div>

      <div
        id="midproductCard"
        className="flex p-2 justify-between text-wrap overflow-hidden"
      >
        <div
          id="text-midproductCard"
          className="flex flex-col  w-1/2 whitespace-normal " // Width set to 50%
        >
          <span className="font-extrabold ">CRF 250</span>
          <span>Model:</span>
          <span>Kilometers:</span>
          <span>Color:</span>
          <span>No. of Bids:</span>
        </div>
        <div
          id="image-div"
          className="w-1/2 flex justify-center rounded-lg overflow-hidden cursor-pointer"
        >
          <img className="max-w-full object-cover" src={pic} alt="Card image" />
        </div>
      </div>

      <div id="bottomproductCard" className="grid grid-cols-2 gap-1 my-5 p-3" >
        <ProductcardButton  variant="secondary" amount={50000} text = "Rs. "  />
        <ProductcardButton amount={50000} color="-orange" text = "Rs. " />
        <ProductcardButton  color="-green" text = "Update Bid"/>
        <ProductcardButton variant="link" amount={50000} color="white" ></ProductcardButton>
      </div>
    </div>
  );
};
