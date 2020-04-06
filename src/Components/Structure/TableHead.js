import React, { useState, useEffect } from 'react';
import '../Style/SQLTable.css';
import { tableHeadline } from '../Data/TableHeadline';
export let TableHead = () => {
    return(
        <thead>
            <tr>
                {
                    tableHeadline.map((item, index) => {
                        return(
                            <th key={ index }>{ item } </th> 
                        );
                    })
                }
            </tr>
        </thead>
    );
}