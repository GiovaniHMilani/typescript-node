import { Router } from "express";
import NewsController from "./controller/newsController";

const routes = Router();

routes.get("/", (req, res) => {
  res.send({ version: "0.0.1" });
});

routes.get("/api/news", NewsController.get);
routes.post("/api/news", NewsController.create);
routes.get("/api/news/:id", NewsController.getById);
routes.put("/api/news/:id", NewsController.update);
routes.delete("/api/news/:id", NewsController.delete);

export default routes;
