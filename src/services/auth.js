import React from 'react'
import axios from 'axios'

function login(email, password){
    axios.get(`http://127.0.0.1:81/proyecto/auth.php`, {email, password})
    .then(response => {
        console.log(response)
        return Promise.resolve(response.data)
    }).catch(error => {
        console.log(error)
        return Promise.reject("Date must be between Jun 16, 1995 and Jun 25, 2020.", error)
    });
}

function logout(){
    localStorage.removeItem('user');
}

