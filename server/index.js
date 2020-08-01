require("dotenv").config({ path: __dirname + "/../.env" })
const express = require("express"),
          mongoose = require("mongoose"),
          { SERVER_PORT,CONNECTION_STRING }  = process.env,
          postCtrl = require("./controllers/PostController");

          app = express();
          app.use(express.json());

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("DB connected"));
app.listen(SERVER_PORT, () => console.log("Server running on port: " + SERVER_PORT));

// Endpoints
app.get("/api/posts", postCtrl.getPosts);
app.get("/api/post/:postId", postCtrl.getPosts);
app.post("/api/posts", postCtrl.createPost);
app.delete("/api/post/:postId", postCtrl.deletePost);
app.put("/api/post/:postId", postCtrl.editPost);


