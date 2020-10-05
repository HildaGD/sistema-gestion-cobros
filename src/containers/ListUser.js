import React, { useEffect, useState } from "react";
import UsersTable from '../components/UsersTable'
import './style.css'

function ListUsers() {
    return (

        <div className="container">
                <h4 className="font-weight-bold py-3 mb-4">Empleados</h4>
               <UsersTable/>
            
        </div>

    );
}

export default ListUsers