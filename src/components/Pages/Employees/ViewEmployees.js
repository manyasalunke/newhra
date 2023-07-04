import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, CardLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EmployeeService from '../../../services/EmployeeDataService';

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAllEmployeesData();
  }, []);

  const getAllEmployeesData = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then((response) => {
        getAllEmployeesData();
        setIsModalOpen(false); // Close the modal after successful deletion
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const filteredEmployees = employees.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <header style={{ position: 'fixed', top: '0', width: '100%', zIndex: '999' }}>
        {/* Header content */}
      </header>
      <div className="container" style={{ marginTop: '70px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Employees</h2>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Search employee..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <Link to="/add-employee" className="btn btn-primary mb-2">
          Add Employee
        </Link>
        <div className="d-flex flex-wrap">
          {/* Content section */}
          {filteredEmployees.map((employee) => (
            <Card key={employee.id} className="border shadow" style={{ width: '12rem', margin: '9px' }}>
              <img alt="Card" src="https://picsum.photos/300/200" />
              <CardBody>
                <CardTitle tag="h5">{`${employee.firstName} ${employee.lastName}`}</CardTitle>
                <CardText>{employee.emailId}</CardText>
              </CardBody>
              <CardBody>
                <CardLink onClick={() => handleViewDetails(employee)}>View Details</CardLink>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <footer style={{ position: 'fixed', bottom: '0', width: '100%', zIndex: '999' }}>
        {/* Footer content */}
      </footer>

      {/* Modal for displaying full employee details */}
      <Modal isOpen={isModalOpen} toggle={toggleModal} className="inner shadow">
        <ModalHeader>Employee Details</ModalHeader>
        <ModalBody>
          {selectedEmployee && (
            <div>
              <p>{`Name: ${selectedEmployee.firstName} ${selectedEmployee.lastName}`}</p>
              <p>{`Email: ${selectedEmployee.emailId}`}</p>
              <p>{`Phone: ${selectedEmployee.phoneNumber}`}</p>
              <p>{`Address: ${selectedEmployee.address}`}</p>
              <p>{`Date of Birth: ${selectedEmployee.dateOfBirth}`}</p>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <CardLink href={`/edit-employee/${selectedEmployee?.id}`}>Update</CardLink>
          <CardLink onClick={() => deleteEmployee(selectedEmployee?.id)}>Delete</CardLink>
          <CardLink onClick={toggleModal}>Close</CardLink>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ViewEmployees;
