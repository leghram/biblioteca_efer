import { NavLink } from "react-router-dom";
import { NAVBAR_ITEMS } from "../../contants";

function Navbar() {
  return (
    <div className="flex justify-center bg-[rgb(25,52,101)] ">
      <div className="h-16 w-[80%] text-[1.5rem] text-white flex justify-around py-2">
        {NAVBAR_ITEMS.map((item) => (
          <NavLink
            key={item.id}
            to={item.route}
            className={({ isActive }) =>
              isActive ? "border-b-4 border-b-white" : ""
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
