const { Router } = require("express");
const upload = require("./configs/multer"); 
const schemaValidator = require("./apps/middlewares/schemaValidator");

const AuthenticationMiddleware = require("./apps/middlewares/authentication");

const AuthenticationController = require("./apps/controllers/AuthenticationController");
const UserController = require("./apps/controllers/UsersControllers");

const userSchema = require("./schema/create.user.schema.json");
const authSchema = require("./schema/auth.schema.json");

const FileController = require("./apps/controllers/FileController");

const PostController = require("./apps/controllers/PostController");
const postSchema = require("./schema/post.schema.json");

const routes = new Router();

routes.post("/users", schemaValidator(userSchema), UserController.create);

routes.post(
  "/auth",
  schemaValidator(authSchema),
  AuthenticationController.authenticate
);

routes.get("/health", (req, res) => {
  return res.send({ message: "Connected with sucess" });
});

routes.use(AuthenticationMiddleware);

routes.put("/user", UserController.update);
routes.delete("/user", UserController.delete);
routes.get("/user-profile", UserController.userProfile);

routes.post("/upload", upload.single('image'), FileController.upload);
routes.post("/post", schemaValidator(postSchema), PostController.create);
routes.delete("/post/:id", PostController.delete);
routes.put("/post/:id", PostController.update);
routes.put("/add-like/:id", PostController.addLike);
routes.get("/list-my-posts", PostController.listMyPosts);

module.exports = routes;
