/* ================================================== Tables head part ==================================================
Imports module */
import React from 'react';

// Import CSS rouls
import '../Style/SQLTable.css';
import { SQLTableStyle, SQLDataSort } from '../Style/SQLTableStyle'

// Import inportant components for the specific page
import { TableColsHeadline } from '../Data/TableColsHeadline';
import { correctRoutes } from '../Data/runAppUrls';
import { routeName } from '../Data/RouteNames';

export let TableHead = () => {
    return(
        <thead>
            <tr>
                {
                    TableColsHeadline.map((item, index) => {
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