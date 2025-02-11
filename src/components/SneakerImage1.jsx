import { useSneaker } from "../Contexts/SneakersContext";

function SneakerImage1() {
  const { imageSelected } = useSneaker();
  return (
    <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden">
      <img src={imageSelected} alt="sneaker" />
    </div>
  );
}

export default SneakerImage1;
