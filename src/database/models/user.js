import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
  userEmail: {
    type: String,
    require: true,
    validate: {
        validator: (value)=>{
          const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
          return pattern.test(value)
      }
    },
    unique: true
  },
  userPassword: {
    type: String,
    require: true
  },
  userRole: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 15
  },
});

const User = mongoose.model('user', userSchema)

export default User