import '../css/Favorites.css'
import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard'

const Favorites = () => {
    const {favorites} = useMovieContext()
    
    if (favorites?.length >0) {
        return <div className="favorites">
            <h2>Your favorite movies:</h2>
            <div className="movies-grid">
                {favorites.map((movie)=>(
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    } else {
        return <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>start adding movies to display here</p>
        </div>
    }
     
};

export default Favorites