'use strict';

import { Router } from 'express';
import bodyParser from 'body-parser';

import basicAuth from '../lib/basic-auth-middleware';
import Section from '../model/section';

const authRouter = module.exports = new Router();

authRouter.post('/api/signup', jsonParse, (req, res, next) => {
    console.log('Landed on the api/signup page');

    Section.create(req.body)
    .then(token => res.send(token))
    .catch(next)
});

authRouter.get('api/login', basicAuth, (req, res, next) => {
    console.log('Landed on the api/login page');

    req.user.tokenCreate()
    .then(token => res.send(token))
    .catch(next);
})