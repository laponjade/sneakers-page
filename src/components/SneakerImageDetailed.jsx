import SneakerImage1 from "./SneakerImage1";
import SneakerImage2 from "./SneakerImage2";
import SneakerImage3 from "./SneakerImage3";
import SneakerImage4 from "./SneakerImage4";

function SneakerImageDetailed() {
  return (
    <div className="w-1/2 grid grid-cols-3 grid-rows-4 gap-5 ">
      <SneakerImage1 />
      <SneakerImage2 />
      <SneakerImage3 />
      <SneakerImage4 />
    </div>
  );
}

export default SneakerImageDetailed;
