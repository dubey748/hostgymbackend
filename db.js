const mongoose = require("mongoose");
const db =
  "mongodb+srv://addddubey:gym@cluster0.oxvskse.mongodb.net/gym?retryWrites=true&w=majority";
  const connectToMongoDB = async () => {
    try {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = connectToMongoDB;