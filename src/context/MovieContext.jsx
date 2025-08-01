import { createContext, useContext, useState, useEffect, useRef } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({children}) => {

    const getInitialFavourites = () => {
        try{
            const stored = localStorage.getItem("favorites");
            return stored? JSON.parse(stored):[];
        } catch (error) {
            console.error("Failed to load favorites from localstorage",error)
        }
    }

    const [favorites, setFavorites] = useState(getInitialFavourites);
    
    useEffect(()=> {
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) {
            try {
                const parsed = JSON.parse(storedFavs);
                console.log("PARSED FAVS:", parsed);
                setFavorites(parsed);
            } catch (err) {
                console.error("Failed to parse favorites:", err);
            }
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites))
    },[favorites]);

    const addToFavorites = (movie) =>{
        setFavorites((prev=> [...prev, movie]));
    };

    const removeFromFavorites = (movieId) =>{
        setFavorites((prev)=> prev.filter(selected=> selected.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some(checked => checked.id === movieId);
    }

    const providerValue ={
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    }

    return <MovieContext.Provider value={providerValue}>
        {children}
    </MovieContext.Provider>
}