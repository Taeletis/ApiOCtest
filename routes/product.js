
const express = require('express');

const router = express.Router();
const stuffCtrl = require('../controllers/product');

router.get('/', stuffCtrl.getAllProduct);
router.post('/', stuffCtrl.createProduct);
router.get('/:id', stuffCtrl.getOneProduct);
router.put('/:id', stuffCtrl.modifyProduct);
router.delete('/:id', stuffCtrl.deleteProduct);

module.exports = router;
