import React, { useEffect, useState } from "react";
import UsersTable from '../components/UsersTable'
import Navbar from '../components/Navbar'

import './style.css'

function ListUsers() {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <h4 className="font-weight-bold py-3 mb-4">Empleados</h4>
                <UsersTable/>
            </div> 
        </div>
        

    );
}

export default ListUsers