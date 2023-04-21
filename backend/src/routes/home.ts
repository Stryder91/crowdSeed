import express from 'express';


import { 
    getHomes, 
    getHome, 
    getHomeBySearch
} from '../controllers/home/read';

import { 
    updateHome,
} from '../controllers/home/update';

import { 
    deleteHome
} from'../controllers/home/delete';

import { createValidator } from '../validators/createValidator';
import { createHome } from '../controllers/home/create';

const router = express.Router();

/*CREATE*/
router.post('/', createValidator, createHome);

/*READ*/
router.get('/:id', getHome);
// router.get('/category', getHomeByCategory);
router.get('/search', getHomeBySearch);
router.get('/', getHomes);

/*UPDATE*/
router.patch('/:id', updateHome);

/*DELETE*/
router.delete('/:id', deleteHome);

export { router as homeRouter };