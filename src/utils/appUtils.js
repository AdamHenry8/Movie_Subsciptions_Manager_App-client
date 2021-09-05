import axios from 'axios';

const  getSubs = () => 
{
    return axios.get("http://localhost:8000/api/subscriptions");   
}
const  getMembers = () => 
{
    return axios.get("http://localhost:8000/api/members");   
}
const getMovie = (id) =>
{
    return axios.get("http://localhost:8000/api/movies/"+id)
}
const getMovies = () =>
{
    return axios.get("http://localhost:8000/api/movies")
}
const addMovie = (newMovie) =>
{
    return axios.post("http://localhost:8000/api/movies/", newMovie)
}
const updateMovie = (id, movie) =>
{
    return axios.put("http://localhost:8000/api/movies/"+ id, movie)
}
const deleteMovie = (id) =>
{
    return axios.delete("http://localhost:8000/api/movies/"+ id);
}
const deleteSubsByMovieId = (movieId) =>
{
    return axios.delete("http://localhost:8000/api/subscriptions/movie/" + movieId)
}
const addMember = (newMember) =>
{
    return axios.post("http://localhost:8000/api/members/", newMember)
}
const getMember = (id) =>
{
    return axios.get("http://localhost:8000/api/members/"+ id); 
}
const updateMember = (id, member) =>
{
    return axios.put("http://localhost:8000/api/members/"+ id, member)
}
const deleteMember = (id) =>
{
    return axios.delete("http://localhost:8000/api/members/"+ id);
}
const deleteSubsByMemberId = (memberID) =>
{
    return axios.delete("http://localhost:8000/api/subscriptions/member/" + memberID)
}
const getWatched = (memberID) =>
{
    return axios.get("http://localhost:8000/api/subscriptions/member/" + memberID);
}
const postNewSub = (newSub) =>
{
    return axios.post("http://localhost:8000/api/subscriptions", newSub)
}

export default {getSubs, getMembers,getMovie,getMovies,addMovie,updateMovie,deleteMovie,deleteSubsByMovieId, 
    addMember, getMember,updateMember,deleteMember,deleteSubsByMemberId,getWatched, postNewSub};