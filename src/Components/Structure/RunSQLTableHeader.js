/* ================================================== Tables head part ==================================================
Imports module */
import React, { useEffect, useState } from 'react';

// Import CSS rouls
import '../Style/SQLTable.css';
import { SQLTableStyle, SQLDataSort } from '../Style/SQLTableStyle'

// Import inportant components for the specific page
import { TableColsHeadlineOutloged, TableColsHeadlineInloged } from '../Data/TableColsHeadline';
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
<<<<<<< HEAD:src/Components/Structure/TableHead.js
                {(correctRoutes() === routeName.mainPage && TableColsHeadlineOutloged || TableColsHeadlineInloged).map((item, index) => {
=======
               {
                    tableColsHeadlines.map((item, index) => {
>>>>>>> b87f68ab5510fa1be005a204842a139f105104cc:src/Components/Structure/RunSQLTableHeader.js
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