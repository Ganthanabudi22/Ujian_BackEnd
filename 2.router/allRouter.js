const router = require('express').Router()
const {getAllMovie,addMovies,updateMovies,deleteMovies,getAllCategories,addCategories,updateCategories,deleteCategories,getAllMovcat,addMovcat,deleteMovcat} =require('./../3.controller/allController')

router.get('/getAllMovie', getAllMovie)
router.post('/addMovies', addMovies)
router.put('/updateMovie/:id', updateMovies)
router.delete('/deleteMovie/:id', deleteMovies)

//======================= categories ==================
router.get('/getAllcategories', getAllCategories)
router.post('/addcategories', addCategories)
router.put('/updatecategories/:id', updateCategories)
router.delete('/deletecategories/:id', deleteCategories)

//======================= Movcat ========================
router.get('/getAllMovcat', getAllMovcat)
router.post('/addMovcat', addMovcat)
router.delete('/deleteMovcat/:id', deleteMovcat)










module.exports = router