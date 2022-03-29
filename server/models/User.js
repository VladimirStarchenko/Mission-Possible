const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  // set this to use virtual below
  {
    // When the data is outputted as JSON or as an object, we want our virtual properties to show
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// hash user password
// userSchema.pre("save", async function (next) {
//   if (this.isNew || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// Encrypt/hash password before user is created
userSchema.pre("save", async function (next) {
  // If the password has not been modified then exit this function and call the next middleware
  if (!this.isModified("password")) {
    next();
  }

  // Because this is async we need to await for it to be finished
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual("bookCount").get(function () {
  return this.savedBooks.length;
});

const User = model("User", userSchema);

module.exports = User;
