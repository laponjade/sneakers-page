import { useSneaker } from "../Contexts/SneakersContext";

function SneakerImage2() {
  const { dispatch, imageSelected } = useSneaker();
  const theImage = imageSelected === "/ecommerce/images/image-product-2.jpg";
  function handleSelectImage() {
    dispatch({
      type: "SELECT_IMAGE",
      payload: "/ecommerce/images/image-product-2.jpg",
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
        src="/ecommerce/images/image-product-2-thumbnail.jpg"
        alt="Sneaker"
        onClick={handleSelectImage}
      />
    </div>
  );
}

export default SneakerImage2;
