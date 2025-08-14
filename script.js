const mongoose = require("mongoose");
const User = require("./User");

require("dotenv").config();
mongoose.connect(`${process.env.MONGODB_URI}`);

const run = async () => {
  //   const user = new User({
  //     name: "Shafayat",
  //     age: 24,
  //   });
  //await user.save();

//   const user = await User.create({
//     //if i use create then new will not be required
//     //does the same thing that does user.save()
//     name: "Avijit",
//     age: 23,
//   });

//   console.log(user);
};
run();
