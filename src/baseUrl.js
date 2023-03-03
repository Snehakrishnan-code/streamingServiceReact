import axios from "axios";

//instance creation

//create() from axios
const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance // now where this base url is required.. there you can call this instance