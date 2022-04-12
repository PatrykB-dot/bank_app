const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Get users
//@route GET /api/users
const getUsers = asyncHandler( async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
}); 

//@desc Post users
//@route POST /api/users
const setUsers = asyncHandler ( async (req, res) => {
    if (!req.body) {
        res.status(400);
        throw new Error("Please add a text field");
    }
    let newUser = new User();
    newUser.name = req.body.name;
    newUser.password = req.body.password;
    newUser.setPassword(req.body.password);
    newUser.save((err, User) => { 
        if (err) { 
            return res.status(400).send({ 
                message : "Failed to add user."
            }); 
        } 
        else { 
            return res.status(201).send({ 
                message : "User added successfully."
            }); 
        } 
    });
});

//@desc Update users
//@route PUT /api/users
const updateUsers = asyncHandler( async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400)
        throw new Error("User not found")
    }
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updateUser)
});

//@desc Delete users
//@route DELETE /api/users
const deleteUsers = asyncHandler( async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400)
        throw new Error("User not found")
    }
    const deleteUser = await User.remove()
    res.status(200).json({ id: req.params.id})
});

module.exports = {
    getUsers, 
    setUsers, 
    updateUsers,
    deleteUsers,
}