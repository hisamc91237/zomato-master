import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import brcypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: [{ details: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, "ZomatoAPP");
};

UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
  // check whether email , phonenumber exists or not
  const checkUserByEmail = await UserModel.findOne({ email });
  const checkUserByPhone = await UserModel.findOne({ phoneNumber });

  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User already exists");
  }
  return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  // check whether email exist or not
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error("User doest not exist!!!");

  //cpompare password
  const doesPasswordMatch = await brcypt.compare(password, user.password);

  if (!doesPasswordMatch) throw new Error("invalid password!!!");

  return user;
};

UserSchema.pre("save", function (next) {
  const user = this;

  // password is modififed
  if (!user.isModified("password")) return next();

  //generate salt
  brcypt.genSalt(5, (error, salt) => {
    if (error) return next(error);

    //hash the  password
    brcypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      //assign hash password
      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("Users", UserSchema);
