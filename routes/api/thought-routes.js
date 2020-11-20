const router = require('express').Router();
const { addThought, removeThought,addReaction,removeReaction,getAllThoughts,getThoughtById,updateThought } = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
   .get(getAllThoughts)

router.route('/:id')
   .get(getThoughtById)   
   .put(updateThought)
// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId')
.delete(removeThought);

router.route('/:userId/:thoughtId/reactions').post(addReaction);
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;