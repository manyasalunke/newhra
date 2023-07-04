import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/';

class EmployeeService {
  login(username, password) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL + 'auth/login', { username, password });
  }

  getAllEmployees() {
    console.log("in method");
    const token = localStorage.getItem('response.data'); // Retrieve the token from local storage
    console.log("my token: " + token);
    
    return axios.get(EMPLOYEE_BASE_REST_API_URL + 'employees/', {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the request headers
        'Content-Type': 'application/json' // Corrected the casing of "Content-Type"
      }
    });
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_REST_API_URL + 'employees/', employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_BASE_REST_API_URL + 'employees/' + employeeId);
  }

  updateEmployee(employeeId, employee) {
    return axios.put(EMPLOYEE_BASE_REST_API_URL + 'employees/' + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_BASE_REST_API_URL + 'employees/' + employeeId);
  }
}

export default new EmployeeService();
