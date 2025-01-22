import express from "express";
import morgan  from "morgan";

const app = express();
const port = 3000;


//Middleware
app.use(morgan("combined"));


app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/register", (req, res)=>{
  res.send("Successful")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
