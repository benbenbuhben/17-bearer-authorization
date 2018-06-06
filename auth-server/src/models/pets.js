'use strict';

const mongoose = require('mongoose');
import Users from '../auth/model.js';

const petSchema = mongoose.Schema({
  name: {type:String, required:true},
  species: {type:String, required:true},
  owner: {type:mongoose.Schema.Types.ObjectId, ref:'users'},
});

petSchema.pre('findOne', function(next) {
  this.populate('owner');
  next();
});

petSchema.pre('save', function(next) {

  let petId = this._id;
  let userId = this.owner;
  console.log(userId);

  // Is the team that we try to add the player to, valid?
  Users.findById(userId)
    .then(user => {
      if( !user ) {
        return Promise.reject('Invalid User Specified');
      }
      else {
        Users.findOneAndUpdate(
          {_id:userId},
          { $addToSet: {pets:petId} }
        )
          .then( Promise.resolve() )
          .catch(err => Promise.reject(err) );
      }
    })
    .then(next())
    .catch(next);
  // If so, add this pet to the pets array in that team.



});

export default mongoose.model('pets', petSchema);