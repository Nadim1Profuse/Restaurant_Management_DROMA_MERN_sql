import React from 'react';

const TableHeadAccessionOrDeduction = () => {
    const h4Style={fontWeight:"bold",color:"#495057"}
    return (
        <><tr>
            <th colSpan={3}><h4 style={h4Style}>Employee Details</h4></th>
            <th colSpan={4}><h4 style={h4Style}>Accession</h4></th>
            <th colSpan={4}><h4 style={h4Style}>Deduction</h4></th>
        </tr><tr>
                <th>Employee Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Over Time</th>
                <th>Bonus</th>
                <th>Special Awards</th>
                <th>Day Wise</th>
                <th>Salary Advance</th>
                <th>Penalties</th>
                <th>Loan</th>
                <th>Day Wise</th>
            </tr></>
    );
};

export default TableHeadAccessionOrDeduction;