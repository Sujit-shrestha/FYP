import { Link } from "react-router-dom";
import plus from "../../../../assets/plus.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
export const PlusButton = () => {
  return (
 
    <div className="w-10 h-10 relative flex justify-center items-center rounded-full overflow-hidden bg-slate-900 hover:bg-slate-600">
      <Avatar>
        <Link to="/needTodefine">
        <AvatarImage src={plus} />          
        <AvatarFallback>Plus</AvatarFallback>
        </Link>
      </Avatar>
    </div>
  );
};
