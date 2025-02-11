import { createContext, useContext, useReducer } from "react";

const sneakerContext = createContext();
const initialState = {
  quantity: 0,
  imageSelected: "/ecommerce/images/image-product-1.jpg",
  cart: [],
  image: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, quantity: state.quantity + 1 };
    }
    case "DECREMENT": {
      return { ...state, quantity: state.quantity - 1 };
    }
    case "SELECT_IMAGE": {
      return { ...state, imageSelected: action.payload };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [
          {
            quantity: action.payload.quantity,
            image: action.payload.imageSelected,
          },
        ],
      };
    }
    default:
      throw new Error("Invalid action type");
  }
}

function SneakerProvider({ children }) {
  const [{ quantity, imageSelected, cart }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div>
      <sneakerContext.Provider
        value={{ quantity, imageSelected, cart, dispatch }}
      >
        {children}
      </sneakerContext.Provider>
    </div>
  );
}

function useSneaker() {
  const context = useContext(sneakerContext);
  if (context === undefined) {
    throw new Error("useSneaker must be used inside a SneakerProvider");
  }
  return context;
}

export { SneakerProvider, useSneaker };
