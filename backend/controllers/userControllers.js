const asyncHandler = require("express-async-handler");

//@desc Get users
//@route GET /api/users
const getUsers = asyncHandler( async (req, res) => {
    res.status(200).json({ user: "Test 123 user"})
}); 

//@desc Post users
//@route POST /api/users
const setUsers = asyncHandler ( async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field");
    }
    console.log(req.body);
    res.status(200).json({ user: "Set 123 user"})
});

//@desc Delete users
//@route DELETE /api/users
const updateUsers = asyncHandler( async (req, res) => {
    res.status(200).json({ user: `Update user ${req.params.id}`})
});

//@desc Update users
//@route PUT /api/users
const deleteUsers = asyncHandler( async (req, res) => {
    res.status(200).json({ user: `Delete user ${req.params.id}`})
});

module.exports = {
    getUsers, 
    setUsers, 
    updateUsers,
    deleteUsers,
}