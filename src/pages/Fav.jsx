
import RecipeCard from "../component/RecipeCard"
const Fav = () => {
  const favroite = JSON.parse(localStorage.getItem("fav"))

  const renderdata = favroite.map( (recipes) => (
      <RecipeCard key={recipes.id} recipes={recipes}/>
  ))

  return (
    <div className="flex flex-wrap">
      {favroite.length>0 ? renderdata : "No recipe found"}
    </div>
  )
}

export default Fav