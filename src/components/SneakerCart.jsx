import { useSneaker } from "../Contexts/SneakersContext";

function SneakerCart() {
  const { dispatch, quantity, imageSelected } = useSneaker();
  function handleAddQuantity() {
    dispatch({ type: "INCREMENT" });
  }
  function handleSubtractQuantity() {
    dispatch({ type: "DECREMENT" });
    if (quantity === 0) {
      return;
    }
  }
  function addToCart() {
    dispatch({ type: "ADD_TO_CART", payload: { quantity, imageSelected } });
  }

  return (
    <div className="flex gap-8">
      <section>
        <div className="flex items-center">
          <button
            onClick={handleSubtractQuantity}
            className="w-10 h-10 flex items-center justify-center bg-slate-200 cursor-pointer rounded-l-lg"
            disabled={!quantity}
          >
            <img src="/ecommerce/images/icon-minus.svg" alt="minus" />
          </button>
          <div className="w-12  bg-slate-200 h-10 flex items-center justify-center">
            <span>{quantity}</span>
          </div>

          <button
            onClick={handleAddQuantity}
            className="w-10 h-10 flex items-center justify-center bg-slate-200 rounded-r-lg cursor-pointer"
          >
            <img src="/ecommerce/images/icon-plus.svg" alt="plus" />
          </button>
        </div>
      </section>
      <section className="w-full">
        <button
          className="bg-orange-500 w-full h-10 rounded-lg"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </section>
    </div>
  );
}

export default SneakerCart;
