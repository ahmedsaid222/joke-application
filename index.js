import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: true }));

const API_URL = "https://v2.jokeapi.dev/joke/Programming"

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    res.render("index.ejs", {
      joke: response.data.setup,     // only send question
      answer: response.data.punchline
    });
  } catch (error) {
    res.render("index.ejs", {
      joke: "Error fetching joke",
      answer: ""
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
