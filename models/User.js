const { Schema, model } = require('mongoose');
const UserSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
        }
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
    ]
   },
   {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
   }
  );
  
  UserSchema.virtual('friendsCount').get(function() {
    return this.friends.length;
  });
  
  // create the Pizza model using the PizzaSchema
  const User = model('User', UserSchema);
  
  // export the Pizza model
  module.exports = User;
  