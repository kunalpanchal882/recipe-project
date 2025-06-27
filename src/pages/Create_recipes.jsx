import { useContext } from "react"
import { useForm } from "react-hook-form"
import {recipecontext} from "../context/RecipeContext"
import { nanoid } from "nanoid"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Create_recipes = () => {

    const navigate = useNavigate()
    const {data,setdata} =  useContext(recipecontext)

    const {reset,handleSubmit,register} = useForm()

    const submitRecipies = (recipe) => {
        recipe.id = nanoid()
        const copydata = [...data]
        copydata.push(recipe)
       setdata(copydata);
       localStorage.setItem("recipes",JSON.stringify(copydata))
       toast.success("Recipes Creted")
       navigate("/Recipes")
        reset()
    }
    console.log(data);
    

  return (
    <div className="min-h-screen w-full flex items-start  justify-center pt-3 bg-red-50 px-4">
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
            {...register(" Ingredients ")}
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
            <button className="w-[10rem] justify-center bg-red-200 item-center rounded-lg p-2 hover:scale-104">Create Recipies</button>
        </form>
    </div>
  )
}

export default Create_recipes