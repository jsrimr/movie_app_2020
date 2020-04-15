import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    }
    getMovies = async () => {
        const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        return movies
    }
    componentDidMount(){
        const movies = this.getMovies()
        console.log(movies)
    }

    render() {
        console.log("I'm rendering");
        const {isLoading} = this.state;
        return (
            <div>
            {isLoading ? "Loading.." : "we are ready"}
            </div>
        )
    }
}

export default App;
