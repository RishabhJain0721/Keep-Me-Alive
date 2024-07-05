const express = require("express");
const axios = require("axios");
const cron = require("node-cron");
const app = express();
const port = 3003 || process.env.PORT;

const servers = [
  "https://opinod.onrender.com/api/news/",
  //   "http://your-server-2-url.com",
  // Add more server URLs as needed
];

const pingServers = async () => {
  for (const server of servers) {
    try {
      const res = await axios.get(server);
      console.log(`Successfully pinged: ${server}`);
    } catch (error) {
      console.error(`Error pinging ${server}: ${error.message}`);
    }
  }
};

cron.schedule("*/10 * * * *", () => {
  pingServers();
});

app.get("/", (req, res) => {
  res.send("Keep-Alive Server is running");
});

app.listen(port, () => {
  console.log(`Keep-Alive Server running at port:${port}`);
});
