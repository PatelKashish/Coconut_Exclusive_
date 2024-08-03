const router = require('express').Router();
const productModel = require('../models/productsmodel');

router.get('/display', (req,res) => {
	
	try{
		productModel.find().then(foundproducts=>res.json(foundproducts));
	
	}
	catch(error){
	console.log(error);
	}
})
router.get('/display/:id',async(req,res) =>{
	let products;
	const id=req.params.id;
	try{
		productModel.findById(id).then(foundproduct=>res.json(foundproduct));
	
	}
	catch(error){
	console.log(error);
	}
})
router.get('/searchgender/:gender',async(req,res) =>{
	let products;
	const findgender=req.params.gender;
	
	try{
		productModel.find({gender:findgender},{'productname':1,'brand':1,'productimg':1}).then(foundproducts=>res.json(foundproducts));
		
 	}catch(error){
		console.log(error)
	};
	

})
router.get('/searchname/:name',async(req,res) =>{
	let products;
	const findname=req.params.name;
	
	try{
		productModel.find({productname: findname},{'productname':1,'brand':1,'productimg':1}).then(foundproducts=>res.json(foundproducts));
		//productModel.find({gender:findgender},{'productname':1,'brand':1,'productimg':1}).then(foundproducts=>res.json(foundproducts));
		
 	}catch(error){
		console.log(error)
	};
	
})

router.get('/display/:id', async (req, res) => {
    try {
        const productId = req.params.productId;
        console.log(productId);
        const product = await productsModel.findOne({ productId: productId });
        console.log(product);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;

