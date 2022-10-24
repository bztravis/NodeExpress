const express = require('express')
const router = express.Router()
let { people } = require('../data')

const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson
} = require('../controllers/people')

router.get('/', getPeople)

router.post('/', createPerson)

// put method is for update data
// route param is the target to update, req body has content
router.put('/:id', updatePerson)

// same as put but not expecting content in body
router.delete('/:id', deletePerson)

// alt way
// router.route('/').get(getPeople).post(createPerson)
// router.route('/postman').post(createPersonPostman)
// router.route('/: id' ).put(updatePerson).delete(deletePerson)


module.exports = router
