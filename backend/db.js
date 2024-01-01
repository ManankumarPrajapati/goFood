const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://mananprajapati2649:manan7383@cluster0.cbtjzzw.mongodb.net/gofood?retryWrites=true&w=majority";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const dataPromise = mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();

    const catDataPromise = mongoose.connection.db
      .collection("food_categories")
      .find({})
      .toArray();

    const [data, catData] = await Promise.all([dataPromise, catDataPromise]);

    global.food_items = data;
    global.food_categories = catData;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectToMongoDB;
