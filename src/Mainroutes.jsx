import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import About from "./pages/About"
import { Routes,Route } from "react-router-dom"
import Create_recipes from "./pages/Create_recipes"
import SingleResipes from "./pages/SingleResipes"
import PageNoteFouned from "./pages/PageNoteFouned"
import Fav from "./pages/fav"


const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/recipes/detail/:id" element={<SingleResipes/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/create_recipes" element={<Create_recipes/>}/>
            <Route path="/fav" element={<Fav/>}/>
            <Route path="*" element={<PageNoteFouned/>}/>
        </Routes>
    </div>
  )
}

export default Mainroutes