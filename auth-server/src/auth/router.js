'use strict';

import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import Pet from '../models/pets.js';
import auth from './middleware.js';

// Generally, these will send a Token Cookie and do a redirect.
// For now, just spew out the token to prove we're ok.

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then(user => res.send(user.generateToken()))
    .catch(next);
});

authRouter.get('/signin', auth, (req, res, next) => {
  res.cookie('Token', req.token);
  res.send(req.token);
});

authRouter.post('/pets', auth, (req, res, next) => {
  let pet = new Pet(req.body);
  pet.save()
    .then(data => sendJSON(res, data))
    .catch(next);
});

authRouter.get('/pets', auth, (req, res, next) => {
  console.log(req.user);
  res.send(req.user.pets);
  // .catch(next);

});

authRouter.delete('/pets/:id', auth, (req, res, next) => {
  Pet.find({ id:`${req.params.id}` }).remove().exec();
});

authRouter.get('/giveMeTheMoney', auth, (req, res, next) => {
  res.send('Here is all the ca$h');
});

let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

export default authRouter;