import * as api from '../../Service/api-service'

export const listTopFour = ()=> {
    return api.getListFourMovieHot().then((res)=>{
        const { data } = res
    });
}