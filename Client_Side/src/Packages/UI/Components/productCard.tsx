import pic from "./../../../assets/demopics/pic3.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowButton } from "./Buttons/arrowButton";
import { ProductcardButton } from "./Buttons/productcardButton";

interface i {
  name?: string;
}

export const ProductCard = ({ name }: i) => {
  name = "Ram lal shresthafdsfds";
  const truncatedName = name.length > 15 ? `${name.substring(0, 15)}...` : name;

  //for body data
  const Kilometers = 10000;
  const Color = "Red";
  const Model = "2019";
  const bidsCount = 20;

  return (
    <div
      className="w-80  rounded overflow-hidden  shadow-lg shadow-blue-500/50 border-black text-white select-none"
      style={{ backgroundColor: "#1A2233" }}
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
          <span className="font-bold text-xl ">CRF 250</span>
          <span className="text-sm">Kilometers: {Kilometers}</span>
          <span className="text-sm">Color: {Color}</span>
          <span className="text-sm">Model: {Model}</span>
          <span className="text-sm">No. of Bids: {bidsCount}</span>
        </div>
        <div
          id="image-div"
          className="w-1/2 flex justify-center rounded-lg overflow-hidden cursor-pointer"
        >
          <img className="max-w-full object-cover" src={pic} alt="Card image" />
        </div>
      </div>

      <div
        id="bottomproductCard"
        className="grid grid-cols-2 gap-1 gap-y-3 my-5 p-3"
      >
        <ProductcardButton variant="secondary" amount={50000} text="Rs. " />
        <ProductcardButton amount={50000} color="-orange" text="Rs. " />
        <ProductcardButton color="-green" text="Update Bid" />
        <ProductcardButton
          variant="link"
          text="Bid "
          amount={5000}
          color="white"
          textColor="red"
          font="thin"
        ></ProductcardButton>
      </div>
    </div>
  );
};
