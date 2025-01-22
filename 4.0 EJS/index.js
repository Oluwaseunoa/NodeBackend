import express from "express";

const app = express();
const port = 3000;
let type = "weekday"
let adv = "It's time to work!"



app.get("/", (req, res) => {
    const today = new Date();
    const dayNumber = today.getDay();

    if(dayNumber === 0 || dayNumber === 6){
        type = "Weekend";
        adv = "It's time to catch some fun!"
    }
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    })
})


app.listen(port, () =>{
    console.log(`Server starts on port ${port}`)

})

