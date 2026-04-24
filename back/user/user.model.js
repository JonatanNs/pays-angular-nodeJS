import mongoose from "mongoose";

const User = mongoose.model("User", {
    username : String,
    email: String,
    password: String
});

export default User;

