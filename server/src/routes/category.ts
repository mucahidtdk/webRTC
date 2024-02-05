import express,{ Router } from 'express';
import { createCategory, getCategorys } from '../controller/category';


const router: Router = express.Router();

router.get('/category', getCategorys);
router.post('/category', createCategory);
router.post('/category/:id', getCategorys);



export default router