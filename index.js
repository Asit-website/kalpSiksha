const express = require("express");
const cors = require('cors');
const app = express();
const fileUpload = require("express-fileupload");


const PORT =  4000;

// middleware
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(cors({
  origin:"*",
  credentials:true
}));
app.use(express.json());

app.use(
  fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp"
  })
)

const user = require("./routes/User");
app.use("/api/v1/", user);



app.listen(PORT, () => {
  console.log("app start at port 4000");
});

app.get("/", (req, res) => {
  res.send("this is an get app");
});



// done till 51 minutes of 4th video 