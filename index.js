const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
   res.send({
        status:200,
        code: 200,
        message: "Success!!!!!, Service is Live!",
      });
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
