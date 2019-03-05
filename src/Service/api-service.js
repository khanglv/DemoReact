import axios from 'axios';
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b2d687610125a0a8771748c88621525c";

const callApi = (url, options)=> {

    let API = axios({
        method: options.method,
        url: url,
        data: {

        }
    }).then((res)=> console.log(res))
    .catch( (er)=> console.log(er));
}

export const getListFourMovieHot = ()=>{
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`
    const options = {
        method: 'GET',
        header: {'Content-Type': 'application/json'}
    }
    return callApi(url, options)
}