import User from "./user.model.js";


const saveUser = async (user) => {
    return User.create(user);
};

const getUserById = async (id) =>{
    return User.findOne({user});
}

const getUserByEmail = async (email) =>{
    return User.findOne({email});
}

const getUserByUsername = async (username) =>{
    return User.findOne({username});
}

const deleteUserById = async (id) =>{
    return User.findByIdAndDelete({id});
}

const updateUserById = async (id, user) =>{
    return User.findByIdAndUpdate(id, {user});
}

export default {
    saveUser,
    updateUserById,
    deleteUserById,
    getUserByEmail,
    getUserById,
    getUserByUsername
};


