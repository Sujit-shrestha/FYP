import pic from "./../../../assets/demopics/pic3.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowButton } from "./Buttons/arrowButton";

export const ProductCard = () => {
  return (
    <div 
      className="w-72 rounded overflow-hidden shadow-lg border-black"
      style={{ border: " 2px solid blue" }}
    >
      <div id="topproductCard" className="flex justify-evenly">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="overflow-hidden">Name to render</div>
        <ArrowButton />
      </div>


      <div id="midproductCard" className="flex">
        data image
        <div className="font-bold text-xl mb-2">Card Title</div>
        <img className="w-full" src={pic} alt="Card image" />
      </div>


      <div id="bottomproductCard" className="flex ">4 buttons</div>
    </div>
  );
};
