import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GLobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipesDetailData] = useState(null);
  const [favorites, setFavoritesList] = useState([]);

  const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        console.log(loading, recipeList);
        navigate('/')
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorites(getCurrentItem){
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favorites]
    const index = cpyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)
    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem)
    }else{
      cpyFavoritesList.splice(index)
    }
    setFavoritesList(cpyFavoritesList)
  }
  console.log(favorites,  recipeList);

  return (
    <GLobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipesDetailData,
        handleAddToFavorites,
        favorites
        
      }}
    >
      {children}
    </GLobalContext.Provider>
  );
}
