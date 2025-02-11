import { NavLink } from "react-router";

function Navbar({ setHover }) {
  return (
    <div>
      <nav className="flex justify-between border-b-1 py-8 items-center border-gray-300 w-full">
        <section className="flex gap-8 items-center">
          <NavLink to="/">
            <p className="text-3xl font-bold">Sneakers</p>
          </NavLink>
          <NavLink
            to="collections"
            className={({ isActive }) =>
              isActive
                ? "text-xl font-bold relative  transition-all duration-200  before:absolute before:content-[''] before:w-full before:h-1 before:bg-orange-600 before:-bottom-10"
                : "text-slate-400"
            }
          >
            <p className="text-slate-400">Collections</p>
          </NavLink>
          <NavLink
            to="men"
            className={({ isActive }) =>
              isActive
                ? "text-xl font-bold relative  transition-all duration-200  before:absolute before:content-[''] before:w-full before:h-1 before:bg-orange-600 before:-bottom-10"
                : "text-slate-400"
            }
          >
            <p className="text-slate-400">Men</p>
          </NavLink>
          <NavLink
            to="women"
            className={({ isActive }) =>
              isActive
                ? "text-xl font-bold relative  transition-all duration-200  before:absolute before:content-[''] before:w-full before:h-1 before:bg-orange-600 before:-bottom-10"
                : "text-slate-400"
            }
          >
            <p className="text-slate-400">Women</p>
          </NavLink>
        </section>
        <section className="flex gap-8 items-center">
          <NavLink
            to="cart"
            onMouseOver={() => setHover(true)}
            className="p-6 relative"
          >
            <img
              className="stroke-red-400"
              src="/ecommerce/images/icon-cart.svg"
              alt="cart"
            />
          </NavLink>
          <img
            src="/ecommerce/images/image-avatar.png"
            alt="avatar"
            width="45px"
          />
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
