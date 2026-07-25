import axios from 'axios';
import { Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

// Use For POST
const generateId = () => {
  return uuidv4();
};

// GET
export default async () => {
    try {
        const response = await fetch('http://localhost:3000/api/users');
        // const users = await response.json();
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log('API Error:', error);
        throw error;
    }
};  

// POST
export const addUser = async(formData:any) => {
    const data = {
    "id": generateId,
    "name": formData.name,
    "username": formData.username,
    "email": formData.email,
    "phone": formData.phone,
    "gender": formData.gender,
    "followers": formData.followers,
    "following": formData.following,
    "profilePhoto": formData.profilePhoto,
    "createdAt": new Date().toISOString(),
    };
    const req = await axios.post('http://localhost:3000/api/users/',data);
    console.log(req);
    console.log(formData);
}

// PUT
export const editUser = async (id: any, formData: any) => {
    const data = {
        name: formData.name,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        gender: formData.gender,
        followers: formData.followers,
        following: formData.following,
        profilePhoto: formData.profilePhoto,
    };

    await axios.put(`http://localhost:3000/api/users/${id}`, data);
};

// DELETE
export const deleteUser = async(id: any) =>{ 
    await axios.delete(`http://localhost:3000/api/users/${id}`);
};
