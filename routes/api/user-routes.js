const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  createFriend,
  updateUser,
  deleteUser,
  removeFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


//Set up post and delete at /api/users/:id/friends/:friendId
router
  .route('/:id/friends/:friendId')
  .post(createFriend)
  .delete(removeFriend);
module.exports = router;
