import express from 'express';

import {  
    createStartup,
} from '../controllers/startup/create';

import { 
    getStartups, 
    getStartup, 
    getStartupByCategory,
    getStartupBySearch
} from '../controllers/startup/read';

import { 
    updateStartup,
} from '../controllers/startup/update';

import { 
    deleteStartup
} from '../controllers/startup/delete';

import { createStartupValidator } from '../validators/createStartupValidator';

const router = express.Router();

/*CREATE*/
router.post('/create', createStartupValidator, createStartup);

/*READ*/
router.get('/byid', getStartup);
router.get('/category', getStartupByCategory);
router.get('/search', getStartupBySearch);
router.get('/', getStartups);

/*UPDATE*/
router.patch('/:id', updateStartup);

/*DELETE*/
router.delete('/:id', deleteStartup);

export { router as startupRouter };