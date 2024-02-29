import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GLobalContext } from "../../contexts";
const Details = () => {
  const { id } = useParams();
  const { recipeDetailsData, setRecipesDetailData, handleAddToFavorites, favorites } =
    useContext(GLobalContext);
  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        console.log(data);
        if (data?.data) {
          setRecipesDetailData(data?.data);
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }
    getRecipeDetails();
  }, [id]);

  return (
    <>
      <div className="container mx-auto py-10 grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:rwo-start-auto">
          <div className="h-96 overflow-hidden rounded-xl group">
            <img
              src={recipeDetailsData?.recipe?.image_url}
              alt=""
              className="w-full h-full object-cover
             block group-hover:scale-105 
             duration-300
             "
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-cyan-700 font-medium text-sm ">
            {recipeDetailsData?.recipe?.publisher}
          </span>

          <h3 className="font-bold truncate text-2xl text-black">
            {recipeDetailsData?.recipe?.title}
          </h3>
          <div>
            <button
              onClick={() => handleAddToFavorites(recipeDetailsData?.recipe)}
              className="px-8 p-3 rounded-lg text-sm font-medium 
            tracking-wider bg-black text-white uppercase"
            >
             {
             favorites && favorites.length > 0 &&  favorites.findIndex((item=> item.id ===recipeDetailsData?.recipe?.id ))
               !== -1 ? 'Remove from favorites'
               : 'Add favorites'
             }
            </button>
          </div>
          <div className="text-2xl font-semibold text-black">
            <span>ingredients:</span>

            <ul className="flex flex-col gap-3">
              {recipeDetailsData?.recipe?.ingredients.map((ingredients) => (
                <li>
                  <span className="text-2xl font-semibold text-black">
                    {ingredients.quantity}
                    {ingredients.unit}
                  </span>
                  <span className="text-2xl font-semibold text-black">
                    {ingredients.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
