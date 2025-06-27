import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="flex justify-center gap-10 p-[1.2rem]">
        <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to="/">Home</NavLink>
        {/* <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to="/about">About</NavLink> */}
        <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to="/recipes">Recipes</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to="/create_recipes">CreateRecipes</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to="/fav">Favorite</NavLink>

    </div>
  )
}

export default Navbar