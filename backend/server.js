// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// const userRoutes = require("./routes/userRoutes");
// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const dietPlanRoutes = require("./routes/dietPlanRoutes");
// const workoutPlanRoutes = require("./routes/workoutPlanRoutes");
// const expertAdviceRoutes = require("./routes/expertAdviceRoutes");

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB connection error:", err));

// app.use(cors());
// app.use(bodyParser.json());

// app.use("/api/users", userRoutes);
// app.use('/api/products', productRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/diet", dietPlanRoutes);
// app.use("/api/workoutPlans", workoutPlanRoutes);
// app.use("/api/expert-advice", expertAdviceRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });




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
const yogaMeditationRoutes = require('./routes/yogaMeditationRoutes');
const chatbotRoute = require('./routes/chatbot');
const supportRoutes = require('./routes/supportRoutes');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

  // app.use(cors({
  //   origin: 'http://localhost:3000', // Frontend port
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  //   allowedHeaders: ['Content-Type', 'Authorization']
  // }));
  app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use('/api/products', productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/diet", dietPlanRoutes);
app.use("/api/workoutPlans", workoutPlanRoutes);
app.use("/api/expert-advice", expertAdviceRoutes);
app.use('/api/yogaMeditation', yogaMeditationRoutes);
// app.use('/api', chatbotRoute);
app.use('/api/support', supportRoutes);
app.post('/api/support', (req, res) => {
  console.log("Support request: ", req.body); //log the received request body.
  res.status(200).send({ message: 'Support request received successfully!' }); //send a success message
});
app.post('/api/chatbot-data', (req, res) => {
  const question = req.body.message.toLowerCase();

  let reply = "Sorry, I didn't get that. Try asking about yoga, diet, or workouts.";

  if (question.includes("yoga")) {
    reply = "🧘 Yoga improves flexibility, breathing, and reduces stress. Start with beginner poses like Cobra, Child's Pose, and Tree Pose.";
  } else if (question.includes("diet")) {
    reply = "🥗 A balanced diet includes proteins, complex carbs, healthy fats, and plenty of water. Avoid sugar and processed foods.";
  } else if (question.includes("workout") || question.includes("fitness")) {
    reply = "💪 Start with a warmup, then do strength training and cardio. 3–5 days/week is ideal for most people.";
  } else if (question.includes("hydration")) {
    reply = "🚰 Drink at least 2–3 liters of water daily. It helps with metabolism and energy levels!";
  }

  res.json({ reply });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




