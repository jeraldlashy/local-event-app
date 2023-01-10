import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteEvent) => {},
  removeFavorite: (eventId) => {},
  itemIsFavorite: (eventId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteEvent) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteEvent);
    });
  }

  function removeFavoriteHandler(eventId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(event => event.id !== eventId);
    });
  }

  function itemIsFavoriteHandler(eventId) {
    return userFavorites.some(event => event.id === eventId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
