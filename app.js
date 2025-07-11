const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from the 'netflix clone' folder
app.use(express.static(path.join(__dirname, "netflix clone")));

// Serve index.html for root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "netflix clone", "html_code.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
