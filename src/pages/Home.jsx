import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import RecipeCard from "../component/RecipeCard"

const Home = () => {

  const {data} = useContext(recipecontext)

    const renderdata = data.map((recipes) => ( 
      <RecipeCard key={recipes.id} recipes={recipes}/>
      
    ))

    const renderImages = data.map((recipe) => (
    <img
      key={recipe.id}
      src={recipe.image}
      alt={recipe.name}
      className="w-60 h-60 object-cover inline-block m-4 rounded-[50%] shadow-lg mb-[2rem]"
    />
  ))

  const rendername = data.map((recipe) => (
    <h1>{recipe.name}</h1>
  ))

  console.log(rendername);

  return (
    <div>
      <div className="img relative">
        <img className="overflow-hidden object-cover w-screen h-[30rem] abosolute" src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?_gl=1*y3vpdv*_ga*MTc2MzgyOTgyMi4xNzQzNzEyOTI1*_ga_8JE65Q40S6*czE3NDk5OTgxMzIkbzE1JGcxJHQxNzQ5OTk4MTU0JGozOCRsMCRoMA.." alt="" />
      </div>
      <div className="recipe">
        <h1 className="p-[2rem] mx-[2rem] text-5xl font-medium">Recipe</h1>
        <div className="flex gap-5  no-scrollbar scroll-smooth overflow-x-scroll whitespace-nowrap p-4">
          {renderImages}
        </div>
        <div className="recipes rounded flex flex-wrap">
          {data.length>0 ? renderdata : "No recipe found"}
        </div>
      </div>
    </div>
  )
}

export default Home