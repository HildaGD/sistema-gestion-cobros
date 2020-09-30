import axios from 'axios'

const conexion = (name, surname) => 
    axios.get(`http://127.0.0.1/proyecto/db.php`)
    .then(response => {
        console.log(response)
        return Promise.resolve(response.data)
    }).catch(error => {
        console.log(error)
        return Promise.reject("Date must be between Jun 16, 1995 and Jun 25, 2020.", error)
    });

export default conexion