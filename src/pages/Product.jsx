import SneakerImageDetailed from "../components/SneakerImageDetailed";
import SneakerInfo from "../components/SneakerInfo";

function Product() {
  return (
    <div className="py-25 px-12 flex gap-30">
      <SneakerImageDetailed />
      <SneakerInfo />
    </div>
  );
}

export default Product;
