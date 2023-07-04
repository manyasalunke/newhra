import React from 'react';
import ViewEmployees from './Employees/ViewEmployees';

const DashboardPage = () => {
    return (
        <div className="container"style={{ marginTop: '70px', marginBottom: '70px' }}>
           <ViewEmployees />
        </div>
    );
};


export default DashboardPage;
