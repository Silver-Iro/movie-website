import MovieCard from "../components/MovieCard";
import {useState} from "react"
import '../css/Home.css'

const Home = () =>{
    const [searchQuery, setSearchQuery] = useState("")

    const movies =[
        {id:1, title: "Terminator", releaseDate:"1999"},
        {id:2, title: "John wick", releaseDate:"2000"},
        {id:3, title: "movie3", releaseDate:"2005"},
    ];

    const handleSearchInput = (e) =>{
        setSearchQuery(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchQuery);
        setSearchQuery("");
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for Movies .." 
            className="search-input"
            value={searchQuery}
            onChange={handleSearchInput}
            />
            <button type="submit" className="search-button">Search&nbsp;⌕</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie)=>(
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
};

export default Home;