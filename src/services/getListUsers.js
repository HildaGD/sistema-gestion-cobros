import axios from 'axios'

const getListUsers = (name, surname) => 
    axios.get(`http://127.0.0.1:80/proyecto/getUser.php`)
    .then(response => {
        //console.log(response)
        return Promise.resolve(response.data)
    }).catch(error => {
        console.log(error)
        return Promise.reject("Error", error)
    });

export default getListUsers