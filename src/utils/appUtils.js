import axios from 'axios';

const url = "https://mern-final-movie-sub-app.herokuapp.com/api/";

const  getSubs = () => 
{
    return axios.get(url + "subscriptions");   
}
const  getMembers = () => 
{
    return axios.get(url + "members");   
}
const getMovie = (id) =>
{
    return axios.get(url + "movies/" +id);
}
const getMovies = () =>
{
    return axios.get(url + "movies");
}
const addMovie = (newMovie) =>
{
    return axios.post(url + "movies/", newMovie)
}
const updateMovie = (id, movie) =>
{
    return axios.put(url + "movies/"+ id, movie)
}
const deleteMovie = (id) =>
{
    return axios.delete(url + "movies/"+ id);
}
const deleteSubsByMovieId = (movieId) =>
{
    return axios.delete(url + "movie/" + movieId)
}
const addMember = (newMember) =>
{
    return axios.post(url + "members/", newMember)
}
const getMember = (id) =>
{
    return axios.get(url + "members/"+ id); 
}
const updateMember = (id, member) =>
{
    return axios.put(url + "members/"+ id, member)
}
const deleteMember = (id) =>
{
    return axios.delete(url + "members/"+ id);
}
const deleteSubsByMemberId = (memberID) =>
{
    return axios.delete(url + "member/" + memberID)
}
const getWatched = (memberID) =>
{
    return axios.get(url + "member/" + memberID);
}
const postNewSub = (newSub) =>
{
    return axios.post(url + "subscriptions", newSub)
}
const exportedFunctionsObj = {
    getSubs,
    getMembers,
    getMovie,getMovies,addMovie,updateMovie,deleteMovie,
    deleteSubsByMovieId, 
    addMember, getMember,updateMember,deleteMember,deleteSubsByMemberId,getWatched, postNewSub
}
export default exportedFunctionsObj;