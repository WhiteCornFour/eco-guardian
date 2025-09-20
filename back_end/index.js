const express = require("express");
const app = express();
const PORT = 3000;

// Middleware để parse JSON
app.use(express.json());

// Route mặc định
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
