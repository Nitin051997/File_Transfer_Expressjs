const express = require('express')
const cors = require('cors')
const appRoute = require('./routes/route.js')

const app = express();
const PORT = process.env.PORT || 5000;

//MiddleWare
app.use(express.json());


// Allow requests from http://localhost:4000
app.use(cors({
    origin: 'http://localhost:4000'
  }));

app.use('/api', appRoute);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

app.get("/download", (req, res) => {
  const filePath = "./filemanager/NITIN05_/API FronEnd List.docx";
  res.download(filePath, (err) => {
    if (err) {
      // Handle the error
      console.error("Error downloading file:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("File downloaded successfully");
    }
  });
});