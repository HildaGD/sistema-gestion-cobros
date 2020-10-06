import React from "react";

import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory, {
    PaginationProvider,
} from 'react-bootstrap-table2-paginator';
import getListUsers from '../services/getListUsers'

const UsersTable = () => {
    const { SearchBar } = Search
    const userList =  []//handleGetListUsers()
   
    const columns = [
        {
            dataField: 'id_user',
            text: 'id',
        },
        {
            dataField: 'email',
            text: 'Correo Electrónico',
        },
        {
            dataField: 'password',
            text: 'Contraseña',
        },
        {
            dataField: '',
            text: '',
        }
    ];

    const defaultSorted = [{
        dataField: 'id_user',
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

    // async function handleGetListUsers(){
    //     let dataUsers =[];
    //      dataUsers = await getListUsers()
    //     return dataUsers
       
    // } 
    
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