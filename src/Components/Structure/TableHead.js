import React, { useState, useEffect } from 'react';
import '../Style/SQLTable.css';
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