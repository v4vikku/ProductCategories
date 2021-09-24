import Axios from "axios";


const apiConfig  =  Axios.create({
    baseURL :   "https://aveosoft-react-assignment.herokuapp.com" ,
})

export  { apiConfig }