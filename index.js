var express = require("express"); 

const path = require("path");
const PORT = 3000; 

app = express();
app.use(express.static(path.join(__dirname, "public")));
// Beispiel für eine eigene Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`)
});