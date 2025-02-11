import { useSneaker } from "../Contexts/SneakersContext";

function SneakerImage3() {
  const { dispatch, imageSelected } = useSneaker();
  const theImage = imageSelected === "/ecommerce/images/image-product-3.jpg";
  function handleSelectImage() {
    dispatch({
      type: "SELECT_IMAGE",
      payload: "/ecommerce/images/image-product-3.jpg",
    });
  }
  return (
    <div
      className={
        theImage
          ? " ring-3 ring-orange-400 rounded-2xl overflow-hidden cursor-pointer "
          : " rounded-2xl overflow-hidden cursor-pointer"
      }
    >
      <img
        className={theImage ? " opacity-50 " : ""}
        src="/ecommerce/images/image-product-3-thumbnail.jpg"
        alt="Sneaker3"
        onClick={handleSelectImage}
      />
    </div>
  );
}

export default SneakerImage3;
