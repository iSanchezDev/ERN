
import express from 'express';
import CitiesRouter from './cities.routes';

/**
 * @description - This file gathers all routing modules
 * */
const Routing = express.Router();


/**
 * @description Custom routing under API Prefix
 * */
Routing.use('/cities', CitiesRouter);


export default Routing;
