import { Link } from "react-router-dom"

const RecipeCard = (props) => {
    const {id,name,image,chef,description ,ingredients,category} = props.recipes

  return (
    <Link key={id} to={`/recipes/detail/${id}`} className="object-cover transform-50 hover:scale-102 rounded-[2rem] mx-[1rem] mr-1 mb-1 p-[2rem] w-[23vw] block overflow-hidden rounded">
        <img className="w-full rounded-[2vw] h-[10rem] object-cover mb-[0.7em]" src={image} />
        <h1 className="px-[1rem] font-bold text-2xl mb-[1vw]">{name}</h1>
        <h2 className="px-[1rem]  font-medium mb-[0.5vw] text-1xl">{chef}</h2>
        <h3 className=" px-[1rem] font-normal mb-[0.6vw]">
            {/* /* {ingredients?.split(',').map((item, index) => (
            <div key={index}>{item.trim()}</div> */ }
            {ingredients}
        </h3> 
        <p className="px-[1rem] opacity-76">{description?.slice(0,100)}...{""}
            <small className="text-blue-700">more</small>
        </p>
        <p className="px-[1rem]  font-semibold text-xl">{category}</p>
    </Link>
  )
}

export default RecipeCard