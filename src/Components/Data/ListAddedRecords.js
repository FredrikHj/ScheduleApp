import React, { useState, useEffect } from 'react';

export let ListAddedRecords = (props) => {
    const { addedRecords } = props;
    return(
        <>
            {
                addedRecords.map((item, index) => {
                    console.log("AddForm -> item", item)
                
                    return(
                        <tr key={ index }>
                            {
                                item.map((item, index) => {
                                console.log("AddForm -> item", item)
                                    //addCellData(item);

                                    return(
                                        <td key={ index }>{ item }</td>
                                    );
                                })
                            }
                        </tr>
                    );
                })
            }
        </>          
    );
}