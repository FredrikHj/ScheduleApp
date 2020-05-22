/* ================================================== Tables head part ==================================================
Imports module */
import React from 'react';

// Import CSS rouls
import '../Style/SQLTable.css';

// Import inportant components for the specific page
import { TableColsHeadline } from '../Data/TableColsHeadline';

export let TableHead = () => {
    return(
        <thead>
            <tr>
                {
                    TableColsHeadline.map((item, index) => {
                        return(
                            <th key={ index }>{ item } </th> 
                        );
                    })
                }
            </tr>
        </thead>
    );
}