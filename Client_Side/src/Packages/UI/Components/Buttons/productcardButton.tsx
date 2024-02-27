import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface i {
  amount?: number | null | undefined;
  text?: string | null | undefined;
  color?: string | null | undefined;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  textColor?: "red" | "green" | "black";
  font?: "thin" | "bold" | string;
}

export const ProductcardButton = ({
  amount,
  color,
  text = "",
  variant = "secondary",
  textColor = "black",
  font = "bold",
}: i) => {
  return (
    <div id="productcardButton">
      <Button
        variant={variant}
        className={`text-${textColor} font-${font} rounded-3xl bg${color}-500 text-lg w-50 `}
      >
        <Link to="/login">
         
          {text} {amount}
        </Link>
      </Button>
    </div>
  );
};
