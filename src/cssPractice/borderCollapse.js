import React from "react";

const BorderCollapse = ()=>{

 // The border-collapse property selects a table's border model. The value
 // separate selects the separated border model. The value collapse selects the collapsing border model.
// Separated border model :In this model, each table cell has an individual border.
// Collapsing border model :In the collapsing borders model, adjacent table cells share borders.

    return(
        <div>
            <table style={{border:"1px solid black",borderCollapse:"collapse" }}>
                <tr style={{border:"1px solid black",}}>
                    <th style={{border:"1px solid black"}}>Name</th>
                    <th style={{border:"1px solid black"}}>City</th>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>John</td>
                    <td style={{border:"1px solid black"}}>Chennai</td>
                </tr>
                <tr>
                    <td style={{border:"1px solid black"}}>Doe</td>
                    <td style={{border:"1px solid black"}}>Bangalore</td>
                </tr>
            </table>
        </div>
    )
}

export default BorderCollapse;