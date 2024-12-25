import axios from 'axios';

// Base URL of your server API
const API_URL ='http://localhost:3003';


// Create - Add a new student
export const addStudent = (student) => {
    return axios.post(`${API_URL}/students`, student);
};

// Read - Get all students
export const getStudents = () => {
    return axios.get(`${API_URL}/students`);
};

// Read - Get a single student by registration_number
export const getStudentById = (id) => {
    return axios.get(`${API_URL}/students/${id}`);
};

// Update - Update a student's details
export const updateStudent = (registration_number, student) => {
    return axios.put(`${API_URL}/students`, {registration_number, ...student});
};

// Delete - Remove a student by registration_number
export const deleteStudent = (registration_number) => {
    return axios.delete(`${API_URL}/students/`,{data:{registration_number}});
};
