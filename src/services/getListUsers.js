import axios from 'axios'

const getListUsers = (name, surname) => 
    axios.get(`http://127.0.0.1:81/proyecto/getUser.php`)
    .then(response => {
        console.log(response)
        return Promise.resolve(response.data)
    }).catch(error => {
        console.log(error)
        return Promise.reject("Date must be between Jun 16, 1995 and Jun 25, 2020.", error)
    });

export default getListUsers