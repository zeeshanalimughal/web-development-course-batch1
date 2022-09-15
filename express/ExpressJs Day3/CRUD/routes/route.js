const router = require('express').Router();
const { getUser, addUser, updateUser, deleteUser } = require('../controllers')

// router.get('/',getUser)
// router.post('/', addUser)
// router.put('/', updateUser)
// router.delete('/',deleteUser)


router.get('/', getUser)
    .post('/', addUser)
    .put('/:userId', updateUser)
    .delete('/:userId', deleteUser)

    

module.exports = router