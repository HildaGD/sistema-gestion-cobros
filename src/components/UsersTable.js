import React, { useEffect, useState } from "react";

import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import getListUsers from '../services/getListUsers'

const UsersTable = () => {
    const { SearchBar } = Search
    const [userList, setUserList] = useState([]);
    handleGetListUsers()
    const columns = [
        {
            dataField: 'id_user',
            text: '',
        },
        {
            dataField: 'email',
            text: 'Correo Electrónico',
        },
        {
            dataField: 'password',
            text: 'Contraseña',
        }
    ];

    const defaultSorted = [{
        dataField: 'email',
        order: 'asc'
    }]

    function customMatchFunc({
        searchText,
        value
    }) {
        if (typeof value !== "undefined") {
            return value.startsWith(searchText)
        }
        return false;
    }

    async function handleGetListUsers(){
        const dataUsers = await getListUsers()
        setUserList(dataUsers)
       // console.log('DATOS DE USUARIOS', dataUsers.data)
    } 
    
    return (
        <div className='container mt-4'>
            <ToolkitProvider
                keyField='index'
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
                                    paginationProps,
                                    paginationTableProps
                                }) => (
                                        <div>


                                            <BootstrapTable
                                                keyField="id"
                                                data={userList}
                                                columns={columns}
                                                {...paginationTableProps}
                                                defaultSorted={defaultSorted}
                                            />
                                            <PaginationListStandalone
                                                {...paginationProps}
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