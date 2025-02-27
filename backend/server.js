const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const dietPlanRoutes = require("./routes/dietPlanRoutes");
const workoutPlanRoutes = require("./routes/workoutPlanRoutes");
const expertAdviceRoutes = require("./routes/expertAdviceRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use('/api/products', productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/diet", dietPlanRoutes);
app.use("/api/workoutPlans", workoutPlanRoutes);
app.use("/api/expert-advice", expertAdviceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
