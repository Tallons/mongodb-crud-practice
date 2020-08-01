const Post = require("../../models/Post")

module.exports = {

   createPost: async (req, res) => {
      const { title, description } = req.body,
                  post = new Post({
                     title,
                     description
                  });

      // post.save()
      // .then( createdPost => {
      //    res.status(200).send(createdPost);
      // }) .catch (err => res.status(500).send(err));

      try {
         const createdPost = await post.save();
         res.status(201).send(createdPost);
      } catch (err) {
         res.status(500).send(err);
      }
   },
   
   getPosts: async (req, res) => {
      try {
         const posts = await Post.find();
         res.status(302).send(posts);
      } catch (err) {
         res.status(500).send(err);
      }
   },

   getPost: async (req, res) => {
      const {postId} = req.params;
      try {
         const post = await Post.findById(postId);
         res.status(302).send(post);
      } catch (err) {
         res.status(500).send(err);
      }
   },

   deletePost: async (req, res) => {
      const {postId} = req.params;
      try {
         const removedPost = await Post.remove({_id: postId});
         res.status(200).send(removedPost);
      } catch (err) {
         res.status(500).send(err);
      }
   },

   editPost: async (req, res) => {
      const {postId} = req.params,
                {title, description} = req.body;
      try {
         const editedPost = await Post.updateOne( { _id: postId }, 
            { $set: {title, description} } 
            );
         res.status(200).send(editedPost);
      } catch (err) {
         res.status(500).send(err);
      }
   },
}