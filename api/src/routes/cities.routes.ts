import express from 'express';
import { getCities } from '../controllers/csv/cities.controller';


const router = express.Router();


router.get('/', getCities);


export default router;
