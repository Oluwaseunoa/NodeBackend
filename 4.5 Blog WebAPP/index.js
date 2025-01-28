import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

let blogs = [
"The digital coin called TRUMP appeared on his social media accounts ahead of his inauguration on Monday and quickly became one of the most valuable crypto coins. The value of a single coin shot up to $75 within a day, but since has fallen to $39. But the launch of the so-called meme-coin - a cryptocurrency with no utility other than for fun or speculation - has been widely criticised by industry insiders. Meme-coins are often used by speculators to make money or to allow fans to show support to a celebrity or moment in internet culture. It is not the first time Trump has sold crypto products. He made millions from launching a series of NFTs of him in various superhero poses in 2022. Some industry analysts say the president having his own meme coin is a sign that others should follow.",
"Some species of caterpillar come armed with powerful venoms. Harnessing them could help us design new drugs. When you think of venomous animals, caterpillars probably aren't the first thing that comes to mind. Snakes, of course. Scorpions and spiders, too. But caterpillars? Yes, indeed. The world turns out to be home to hundreds – perhaps thousands – of species of venomous caterpillars, and at least a few of them pack a punch toxic enough to kill or permanently injure a person. That alone is reason for scientists to study them. But caterpillars also contain a potential windfall of medically useful compounds within their toxic secretions.",
"President Donald Trump said he would ask Saudi Arabia and other Opec nations to bring down the cost of oil and doubled-down on his threat to use tariffs.In a speech to executives at the World Economic Forum in Davos on Thursday, the US president said he was 'surprised' that Opec hadn't brought down the price of oil before the elections. Right now the price is high enough that that war will continue, he said, referring to the Russia-Ukraine war and suggesting that the higher oil price was helping to sustain funding for the conflict in Moscow. You gotta bring down the oil price, that will end that war. You could end that war",
"The digital coin called TRUMP appeared on his social media accounts ahead of his inauguration on Monday and quickly became one of the most valuable crypto coins. The value of a single coin shot up to $75 within a day, but since has fallen to $39. But the launch of the so-called meme-coin - a cryptocurrency with no utility other than for fun or speculation - has been widely criticised by industry insiders. Meme-coins are often used by speculators to make money or to allow fans to show support to a celebrity or moment in internet culture. It is not the first time Trump has sold crypto products. He made millions from launching a series of NFTs of him in various superhero poses in 2022. Some industry analysts say the president having his own meme coin is a sign that others should follow.",
"Some species of caterpillar come armed with powerful venoms. Harnessing them could help us design new drugs. When you think of venomous animals, caterpillars probably aren't the first thing that comes to mind. Snakes, of course. Scorpions and spiders, too. But caterpillars? Yes, indeed. The world turns out to be home to hundreds – perhaps thousands – of species of venomous caterpillars, and at least a few of them pack a punch toxic enough to kill or permanently injure a person. That alone is reason for scientists to study them. But caterpillars also contain a potential windfall of medically useful compounds within their toxic secretions.",
"President Donald Trump said he would ask Saudi Arabia and other Opec nations to bring down the cost of oil and doubled-down on his threat to use tariffs.In a speech to executives at the World Economic Forum in Davos on Thursday, the US president said he was 'surprised' that Opec hadn't brought down the price of oil before the elections. Right now the price is high enough that that war will continue, he said, referring to the Russia-Ukraine war and suggesting that the higher oil price was helping to sustain funding for the conflict in Moscow. You gotta bring down the oil price, that will end that war. You could end that war",
"The digital coin called TRUMP appeared on his social media accounts ahead of his inauguration on Monday and quickly became one of the most valuable crypto coins. The value of a single coin shot up to $75 within a day, but since has fallen to $39. But the launch of the so-called meme-coin - a cryptocurrency with no utility other than for fun or speculation - has been widely criticised by industry insiders. Meme-coins are often used by speculators to make money or to allow fans to show support to a celebrity or moment in internet culture. It is not the first time Trump has sold crypto products. He made millions from launching a series of NFTs of him in various superhero poses in 2022. Some industry analysts say the president having his own meme coin is a sign that others should follow.",
"Some species of caterpillar come armed with powerful venoms. Harnessing them could help us design new drugs. When you think of venomous animals, caterpillars probably aren't the first thing that comes to mind. Snakes, of course. Scorpions and spiders, too. But caterpillars? Yes, indeed. The world turns out to be home to hundreds – perhaps thousands – of species of venomous caterpillars, and at least a few of them pack a punch toxic enough to kill or permanently injure a person. That alone is reason for scientists to study them. But caterpillars also contain a potential windfall of medically useful compounds within their toxic secretions.",
"President Donald Trump said he would ask Saudi Arabia and other Opec nations to bring down the cost of oil and doubled-down on his threat to use tariffs.In a speech to executives at the World Economic Forum in Davos on Thursday, the US president said he was 'surprised' that Opec hadn't brought down the price of oil before the elections. Right now the price is high enough that that war will continue, he said, referring to the Russia-Ukraine war and suggesting that the higher oil price was helping to sustain funding for the conflict in Moscow. You gotta bring down the oil price, that will end that war. You could end that war",
"The digital coin called TRUMP appeared on his social media accounts ahead of his inauguration on Monday and quickly became one of the most valuable crypto coins. The value of a single coin shot up to $75 within a day, but since has fallen to $39. But the launch of the so-called meme-coin - a cryptocurrency with no utility other than for fun or speculation - has been widely criticised by industry insiders. Meme-coins are often used by speculators to make money or to allow fans to show support to a celebrity or moment in internet culture. It is not the first time Trump has sold crypto products. He made millions from launching a series of NFTs of him in various superhero poses in 2022. Some industry analysts say the president having his own meme coin is a sign that others should follow.",
"Some species of caterpillar come armed with powerful venoms. Harnessing them could help us design new drugs. When you think of venomous animals, caterpillars probably aren't the first thing that comes to mind. Snakes, of course. Scorpions and spiders, too. But caterpillars? Yes, indeed. The world turns out to be home to hundreds – perhaps thousands – of species of venomous caterpillars, and at least a few of them pack a punch toxic enough to kill or permanently injure a person. That alone is reason for scientists to study them. But caterpillars also contain a potential windfall of medically useful compounds within their toxic secretions.",
"President Donald Trump said he would ask Saudi Arabia and other Opec nations to bring down the cost of oil and doubled-down on his threat to use tariffs.In a speech to executives at the World Economic Forum in Davos on Thursday, the US president said he was 'surprised' that Opec hadn't brought down the price of oil before the elections. Right now the price is high enough that that war will continue, he said, referring to the Russia-Ukraine war and suggesting that the higher oil price was helping to sustain funding for the conflict in Moscow. You gotta bring down the oil price, that will end that war. You could end that war",
"President Donald Trump said he would ask Saudi Arabia and other Opec nations to bring down the cost of oil and doubled-down on his threat to use tariffs.In a speech to executives at the World Economic Forum in Davos on Thursday, the US president said he was 'surprised' that Opec hadn't brought down the price of oil before the elections. Right now the price is high enough that that war will continue, he said, referring to the Russia-Ukraine war and suggesting that the higher oil price was helping to sustain funding for the conflict in Moscow. You gotta bring down the oil price, that will end that war. You could end that war",
"President Donald Trump said he would ask Saudi Arabia and other Opec nations to bring down the cost of oil and doubled-down on his threat to use tariffs.In a speech to executives at the World Economic Forum in Davos on Thursday, the US president said he was 'surprised' that Opec hadn't brought down the price of oil before the elections. Right now the price is high enough that that war will continue, he said, referring to the Russia-Ukraine war and suggesting that the higher oil price was helping to sustain funding for the conflict in Moscow. You gotta bring down the oil price, that will end that war. You could end that war",
    
] //array to store blog posts




app.get("/", (req, res) => {
    res.render("index.ejs", { blogs })
})


app.post("/add-blog", (req, res) =>{
    const blog = req.body["blogContent"]
    if(blog.trim() !== ''){
        blogs.push(blog);
        res.redirect("/")
    } else{
        res.redirect("/")
    }

app.post("/delete-blog", (req, res) =>{
    const blogIndex = req.body["blogIndex"]
    blogs.splice(blogIndex, 1)
   res.redirect("/")
})
    



}) 




app.listen(port, () =>{
    console.log(`Server listens on port ${port}`)
})