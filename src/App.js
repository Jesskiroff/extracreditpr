import {useEffect} from 'react';
import './App.css';
const API_URL = 'http://omdbapi.com?apikey=96f5282c'
const App = () =>{

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);


    return (
        <div className='app'>
            <h1>Movieland</h1>
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value='Superman'
                    onChange={()=>{}}/>

        
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>{}}
                />
                 
            </div>
        </div>
    );
}

export default App;