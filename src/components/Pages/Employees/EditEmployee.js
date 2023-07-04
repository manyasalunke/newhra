import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../../../services/EmployeeDataService';

const EditEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const updateEmployee = (e) => {
    e.preventDefault();

    const employee = {
      firstName,
      lastName,
      emailId,
      phoneNumber,
      address,
      dob,
      imageUrl,
    };

    EmployeeService.updateEmployee(id, employee)
      .then((response) => {
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmailId(response.data.emailId);
        setPhoneNumber(response.data.phoneNumber);
        setAddress(response.data.address);
        setDob(response.data.dob);
        setImageUrl(response.data.imageUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <br />
      <br />
      <div className="container" style={{ marginTop: '70px' }}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Update Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2 row">
                  <label className="col-sm-3 col-form-label">First Name:</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      placeholder="Enter first name"
                      name="firstName"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mb-2 row">
                  <label className="col-sm-3 col-form-label">Last Name:</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      placeholder="Enter last name"
                      name="lastName"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group mb-2 row">
                  <label className="col-sm-3 col-form-label">Email Id:</label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      placeholder="Enter email Id"
                      name="emailId"
                      className="form-control"
                      value={emailId}
                      onChange={(e) => setEmailId(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group mb-2 row">
                  <label className="col-sm-3 col-form-label">Phone No:</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      name="phoneNumber"
                      className="form-control"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group mb-2 row">
                  <label className="col-sm-3 col-form-label">Address:</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      placeholder="Enter address"
                      name="address"
                      className="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group mb-2 row">
                  <label className="col-sm-3 col-form-label">Date of Birth:</label>
                  <div className="col-sm-9">
                    <input
                      type="date"
                      name="dob"
                      className="form-control"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group mb-2 row">
                  <label className="col-sm-3 col-form-label">Image URL:</label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      placeholder="Enter image URL"
                      name="imageUrl"
                      className="form-control"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group mb-2 row">
                  <div className="col-sm-9 offset-sm-3">
                    <button className="btn btn-secondary me-2" onClick={updateEmployee}>
                      Update
                    </button>
                    <Link to="/dashboard" className="btn btn-secondary" style={{ marginLeft: '10px' }}>
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
