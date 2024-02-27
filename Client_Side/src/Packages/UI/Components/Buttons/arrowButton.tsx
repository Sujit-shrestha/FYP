import { Link } from "react-router-dom";
import arrow from "../../../../assets/arrow_forward.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
export const ArrowButton = () => {
  return (
 

    <div className="w-10 h-10 relative flex justify-center items-center rounded-full overflow-hidden bg-slate-900 hover:bg-slate-600">
      <Avatar>
        <Link to="/needTodefine">
        <AvatarImage src={arrow} />          
        <AvatarFallback>Arrow</AvatarFallback>
        </Link>
      </Avatar>
    </div>
  );
};
