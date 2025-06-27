import { createContext, useEffect, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const recipecontext = createContext(null)

const RecipeContext = (props) => {

    const [data, setdata] = useState([])

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipes")) || [])
  },[])

  return (
    <recipecontext.Provider value={{data, setdata}}>
        {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext


// {
//   "name": "Spaghetti Carbonara",
//   "id":1,
//   "image": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
//   "chef": "Chef Antonio Rossi",
//   "ingredients": "200g spaghetti, 2 large eggs, 100g pancetta, 50g grated Parmesan cheese, 2 cloves garlic, salt and black pepper to taste",
//   "description": "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's creamy, rich, and full of flavor — perfect for a quick and comforting meal.",
//   "category": "Dinner"
// }