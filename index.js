const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const team = require("./routes/teamRoutes");
// const { getClubs } = require("./controllers/clubs");
const clubs = require("./routes/club");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
connectDB();

const port = process.env.PORT;

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use("/api/v1/team", team);
app.use("/clubs", clubs);

const server = app.listen(port, () =>
  console.log(
    `app is running in ${process.env.NODE_ENV} mode Listening at ${port}`
  )
);

// Handle unhandled promises rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // stop server
  server.close(() => process.exit(1));
});
