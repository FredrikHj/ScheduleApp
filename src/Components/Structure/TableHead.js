import React, { useState, useEffect } from 'react';
import '../Style/SQLTable.css';
export let TableHead = () => {
    return(
        <thead>
            <tr>
                <th>Datum</th>
                <th className="tableCol4">Akitvitet</th>
                <th>Status</th>
                <th>Berörda</th>
                <th>Typ</th>
                <th>Plats</th>
                <th className="tableCol9">Innehåll</th>
            </tr>
        </thead>
    );
}