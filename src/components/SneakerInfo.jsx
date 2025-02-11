import SneakerCart from "./SneakerCart";
import SneakerPrice from "./SneakerPrice";
import SneakerTitle from "./SneakerTitle";

function SneakerInfo() {
  return (
    <div className="w-1/2 flex flex-col gap-10 justify-center">
      <SneakerTitle />
      <SneakerPrice />
      <SneakerCart />
    </div>
  );
}

export default SneakerInfo;
