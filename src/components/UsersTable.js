import React, { useEffect, useState } from "react";

import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, {  Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory, {
    PaginationProvider,
} from 'react-bootstrap-table2-paginator';
import { Button } from 'react-bootstrap'
import getListUsers from '../services/getListUsers'
import { useHistory } from 'react-router-dom'

function UsersTable() {
    const history = useHistory();
    const { SearchBar } = Search
    const [userList, setUserList] = useState([])
    
    const columns = [
        {
            dataField: 'id_user',
            text: 'id',
            sort: false
        },
        {
            dataField: 'email',
            text: 'Correo Electrónico',
            
            sort: false
        },
        {
            dataField: 'password',
            text: 'Contraseña',
            sort: false
        },
        {
            dataField: '',
            text: '',
            formatter: (rowContent, row, rowIndex) => {
                return (
                    <div>
                        <Button variant="danger" onClick={()=> history.push('/EditUser',row)}>  Editar</Button>
                        <Button onClick={()=> history.push('/ViewUser',row)}> Mostrar</Button>
                    </div>
                )
            }
        }
    ];

    const defaultSorted = [{
        dataField: 'id_user',
        order: 'asc'
    }]

    useEffect(() => {
        handleGetListUsers()
    });

    function customMatchFunc({
        searchText,
        value
    }) {
        if (typeof value !== "undefined") {
            return value.startsWith(searchText)
        }
        return false;
    }

    async function handleGetListUsers() {
        let dataUsers = await getListUsers()
        setUserList(dataUsers)

    }

 

    return (
        <div className='container mt-4'>
            <ToolkitProvider
                keyField='id_user'
                data={userList}
                columns={columns}
                search={{ customMatchFunc }}
           
            >

                {props => (
                    <div>
                        <SearchBar
                            {...props.searchProps}
                            placeholder="Buscar en registros"
                        />
                        {/* <BootstrapTable
                            bootstrap4
                            {...props.baseProps}
                            classes="table table-striped table-hover react-bs-table-tool-bar"
                            keyField="index"
                            data={users}
                            columns={columns}
                            pagination={ ...paginationTableProps }
                            defaultSorted={defaultSorted}
                        /> */}

                        <PaginationProvider
                            pagination={paginationFactory()}
                        >
                            {
                                ({
                                    
                                    paginationTableProps
                                }) => (
                                        <div>
                                            <BootstrapTable
                                                bootstrap4
                                                classes="table table-striped table-hover react-bs-table-tool-bar"
                                                keyField="id"
                                                data={userList}
                                                columns={columns}
                                                {...paginationTableProps}
                                                defaultSorted={defaultSorted}
                                                {...props.baseProps}
                                            />
                                        </div>
                                    )
                            }
                        </PaginationProvider>
                    </div>
                )}

            </ToolkitProvider>
        </div>
    )

}

export default UsersTable