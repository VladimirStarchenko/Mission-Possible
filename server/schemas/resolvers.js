const { AuthenticationError } = require("apollo-server-express");
const { User, Charity } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find().select("-__v -password");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
    allCharities: async () => {
      const charities = await Charity.find({});

      return charities;
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    updateUser: async (parent, args, context) => {
      const user = await User.findById(context.user._id);

      if (args.username) user.username = args.username;
      if (args.email) user.email = args.email;
      if (args.password) user.password = args.password;

      // We want the new password to be hashed by our pre-save hook
      await user.save({ validateBeforeSave: false });

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    deleteUser: async (parent, args, context) => {
      const deletedUser = User.findByIdAndRemove(context.user._id);

      return deletedUser;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
