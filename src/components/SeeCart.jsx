import { useSneaker } from "../Contexts/SneakersContext";

function SeeCart({ hover, setHover }) {
  const { cart } = useSneaker();

  return (
    <div
      className={hover && cart.length ? "block" : "hidden"}
      onMouseLeave={() => setHover(false)}
    >
      <div className="shadow-xl p-10 rounded-2xl grid-cols-3 grid grid-rows-3 w-96 h-64 gap-4 absolute top-25 right-15 ">
        {cart.length > 0 && (
          <>
            <img src={cart[0].image} alt="cart" className="rounded-xl" />
            <div className="col-start-2 col-end-4 row-span-2">
              <span>Fall Limited Edition Sneakers </span> <br />
              <br />
              <span>
                $125 * {cart[0].quantity} <strong>$250</strong>
              </span>
            </div>
            <button className="row-start-3 col-span-4 rounded-xl bg-orange-500">
              Check out
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default SeeCart;
