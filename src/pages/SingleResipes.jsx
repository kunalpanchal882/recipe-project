import { useParams } from "react-router-dom"
import { recipecontext } from "../context/RecipeContext"
import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const SingleResipes = () => {

  const {data,setdata} =  useContext(recipecontext)
  // const {data} = useContext(recipecontext)
  const params = useParams()
  const recipe = data.find((recipe) => params.id == recipe.id)
  const navigate = useNavigate()
  const {reset,handleSubmit,register} = useForm({defaultValues: {
    name:recipe?.name,
    image:recipe?.image,
    chef:recipe?.chef,
    description:recipe?.description,
    ingredients:recipe?.ingredients,
    category:recipe?.category
  }})

  const submitRecipies = (recipe) => {
      const index = data.findIndex((recipe => params.id == recipe.id))
      const copydata = [...data];
      copydata[index] = {...copydata[index],...recipe}
      setdata(copydata);
      localStorage.setItem("recipes",JSON.stringify(copydata))
      toast.success("Recipe Created")
      // setdata(copydata)
      reset()
  }


  const deleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata)
    localStorage.setItem("recipes",JSON.stringify(filterdata))
    toast.success("Recipe Deleted")
    navigate("./Recipes.jsx")
  }
 
  const [favroite, setfavrite] = useState(JSON.parse(localStorage.getItem("fav")) || [])

  const FavHandler = () => {
    let copyfav = [...favroite]
    copyfav.push(recipe)
    setfavrite(copyfav)
    localStorage.setItem("fav",JSON.stringify(copyfav))
  }

//   const FavHandler = () => {
//   let copyfav = [...favroite];
//   if (!copyfav.find(r => r.id === recipe.id)) {
//     copyfav.push(recipe);
//     setfavrite(copyfav); // ✅ Update state
//     localStorage.setItem("fav", JSON.stringify(copyfav));
//   }
// }

  const UnFavHandler = () => {
    const filterfav = favroite.filter((f) => f.id != recipe.id)
    setfavrite(filterfav)
    localStorage.setItem("fav",JSON.stringify(filterfav))
  }

  
useEffect(() => {
  const favFromStorage = JSON.parse(localStorage.getItem("fav")) || [];
  setfavrite(favFromStorage);
  
}, []);
  

  return recipe ? 
  <div className="flex w-full">
    <div className="left relative w-1/2">
    {favroite.find(f => f.id == recipe.id) ? 
    <i onClick={UnFavHandler} className="absolute right-[10%] text-3xl text-red-500 ri-heart-fill"></i>:
    <i onClick={FavHandler} className="absolute right-[10%] text-3xl text-red-400 ri-heart-line"></i>
      }
      
      <img className="w-1/2 mx-[25%] rounded-[2vw] h-[30rem] object-cover mb-[0.7em]" src={recipe.image}/>
        <h1 className="px-[1rem] font-bold text-2xl mb-[0.5vw]">{recipe.name}</h1>
        <h2 className="px-[1rem]  font-medium mb-[0.5vw] text-1xl">{recipe.chef}</h2>
        <h3 className=" px-[1rem] font-normal mb-[0.6vw]">
            {recipe.ingredients?.split(',').map((item, index) => (
            <div key={index}>{item.trim()}</div>
        ))}</h3> 
        <p className="px-[1rem] opacity-76">{recipe.description?.slice(0,100)}...{""}
            <small className="text-blue-700">more</small>
        </p>
        <p className="px-[1rem]  font-semibold text-xl">{recipe.category}</p>
    </div>
    <div className="right w-1/2">
        <form className="flex flex-col max-h-[90vh] rounded-lg px-8 max-w-xl w-full bg-white pt-5 pb-10" onSubmit={handleSubmit(submitRecipies)}>
            <label>Recipes Name</label>
            <input
            className="mb-4 p-2 border-b"
            {...register("name")}
            type="name" placeholder="Name of recipes" />
            
            <label>Recipes Image</label>
            <input
            className="mb-4 p-2 border-b"
            {...register("image")}
            type="url" placeholder="Past URL of the Recipies" />

            <label>Chef Name</label>
            <input
            className="mb-4 p-2 border-b"
            {...register("chef")}
            type="text" placeholder="Chef Name" />
            
            <label>Description</label>
            <textarea 
            className="mb-4 p-2 border-b"
            {...register("description")}
            placeholder="Enter recipes Description"
            >
            </textarea>

            <label>Ingredients:</label>
            <textarea 
            className="mb-4 p-2 border-b"
            {...register("ingredients")}
            placeholder="Enter recipes  Ingredients "
            >
            </textarea>

            <label>Category:</label>
            <select 
                className="mb-4 p-2 border-b"
                {...register("category")}
                name="category">
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
                <option>Dessert</option>
            </select>
            <div className="btn flex gap-[2rem]">
              <button className="w-[10rem] justify-center bg-red-200 item-center rounded-lg p-2 hover:scale-104">Update Recipies</button>
              <button onClick={deleteHandler} className="w-[10rem] justify-center bg-red-200 item-center rounded-lg p-2 hover:scale-104">Delete Recipies</button>
            </div>
        </form>
    </div>
  </div>
   : "Loading...";
  
}

export default SingleResipes