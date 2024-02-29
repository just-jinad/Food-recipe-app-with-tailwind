import React, { useContext } from 'react'
import { GLobalContext } from '../../contexts';
import RecipeItem from '../../components/recipeItem/Index';

const Favorites = () => {
  const { favorites } = useContext(GLobalContext);
  return (
    <>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {   favorites &&    favorites.length > 0 ? (
             favorites.map((item) => <RecipeItem item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
              Nothing has been added to favorites...
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Favorites