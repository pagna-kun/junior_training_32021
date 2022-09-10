const users = require("../model/user")

const login = async (email, passwd) => {
    const user = await users.findOne({email: email})
    if(!user){
        return "invalid user account"
    }
    return user
}

const register = async (name, email, passwd) => {
    try{
        const user = await users.create({name: name, email:email, password: passwd})
        if(!await users.findOne({email: email})){
            return "create fail"
        }
        return user
    }catch(e){
        console.log(e.message);
    }
}

const createUser = async (name, email, passwd) => {
    try{
        const user = await users.create({name: name, email:email, password: passwd})
        if(!await users.findOne({email: email})){
            return "create fail"
        }
        return user
    }catch(e){
        console.log(e.message);
    }
}

const getUserAll = async () => {
    try{
        const _users = await users.find()
        return _users
    }catch(e){
        console.log(e.message);
    }
}

const getUserById = async (id) => {
    try{
        const _users = await users.findById(id)
        return _users
    }catch(e){
        console.log(e.message);
    }
}

const updateUser = async (id, name, email, password) => {
    try{
        var _user = await users.findById(id)
        if(!_user){
            return "user not found"
        }
        _user.name = name
        _user.email = email
        _user.password = password 
        await users.findByIdAndUpdate(id, _user)
        return _user
    }catch(e){
        console.log(e.message);
    }
}

module.exports = {
    login,
    register,
    createUser,
    getUserAll,
    getUserById,
    updateUser
}