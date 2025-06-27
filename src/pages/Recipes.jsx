import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import RecipeCard from "../component/RecipeCard"

const Recipes = () => {
  const {data} = useContext(recipecontext)

  const renderdata = data.map( (recipes) => (
      <RecipeCard key={recipes.id} recipes={recipes}/>    
  ))

  return (
    <div className="flex flex-wrap">
      {data.length>0 ? renderdata : "No recipe found"}
    </div>
  )
}

export default Recipes