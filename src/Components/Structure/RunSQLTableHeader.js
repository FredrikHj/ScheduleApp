/* ================================================== Tables head part ==================================================
Imports module */
import React, { useEffect, useState } from 'react';

// Import CSS rouls
import '../Style/SQLTable.css';
import { SQLTableStyle, SQLDataSort } from '../Style/SQLTableStyle'

// Import inportant components for the specific page
import { TableColsHeadline } from '../Data/TableColsHeadline';
import { correctRoutes } from '../Data/runAppUrls';
import { routeName } from '../Data/RouteNames';

//console.log("TableHead -> TableColsHeadline()", TableColsHeadline())
export let RunSQLTableHeader = () => {
    let [ tableColsHeadlines, setTableColsHeadlines ] = useState([]); 

    useEffect(() =>{
        if(tableColsHeadlines.length === 0) setTableColsHeadlines(TableColsHeadline());
        console.log("TableHead -> tableColsHeadlines", tableColsHeadlines)
    },[tableColsHeadlines])

    return(
        <thead>
            <tr>
               {
                    tableColsHeadlines.map((item, index) => {
                        return(
                            <th key={ index }>
                                <>
                                    <SQLTableStyle.tableHeadline>{ item }</SQLTableStyle.tableHeadline>
                                    <SQLDataSort.sortUpDnContainer>
                                        <SQLDataSort.arrows onClick={ '' }>
                                            <span class="material-icons"> arrow_drop_up </span>
                                        </SQLDataSort.arrows>
                                        <SQLDataSort.arrows onClick={ '' }>
                                            <span class="material-icons"> arrow_drop_down </span>
                                        </SQLDataSort.arrows>
                                    </SQLDataSort.sortUpDnContainer>
                                </>
                            </th> 
                        );
                    })
                }
            </tr>
        </thead>
    );
}