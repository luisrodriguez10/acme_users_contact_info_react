import axios from "axios";

const fetchUsers = async () =>{
    const users = (await axios.get('/api/users')).data;
    return users;
}

const createUser = async (user) =>{
    const response = await axios.post('/api/users', {
        name: user.name,
        phone: user.phone,
        email: user.email,
        adj: user.adj,
        vehicle: user.vehicle,
        bio: user.bio
    })

    return response.data
}

const deleteUser = async(user) =>{
    await axios.delete(`/api/users/${user.id}`)
}

export {
    fetchUsers,
    createUser,
    deleteUser
}