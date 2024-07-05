const express = require("express");
const axios = require("axios");
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

// Ping servers every 10 minutes
setInterval(pingServers, 10 * 60 * 1000);

app.get("/", (req, res) => {
  res.send("Keep-Alive Server is running");
});

app.listen(port, () => {
  console.log(`Keep-Alive Server running at port:${port}`);
});
