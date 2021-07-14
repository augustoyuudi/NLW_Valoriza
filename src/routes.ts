import { Router } from "express";
import { CreateUserController } from "@controllers/Users/CreateUserController";
import { CreateTagController } from "@controllers/Tags/CreateTagController";
import { AuthenticateUserController } from "@controllers/Users/AuthenticateUserController";
import { CreateComplimentController } from "@controllers/Compliments/CreateComplimentController";
import { ListReceiverComplimentsController } from "@controllers/Compliments/ListReceiverComplimentsController";
import { ListSenderComplimentsController } from "@controllers/Compliments/ListSenderComplimentsController";
import { ensureAdmin } from "@middlewares/ensureAdmin";
import { ensureAuthenticated } from "@middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listReceiverComplimentsController = new ListReceiverComplimentsController();
const listSendercomplimentsController = new ListSenderComplimentsController();

router.post("/users", createUserController.handle);

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.post("/sessions", authenticateUserController.handle);

router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get("/compliments/sended", ensureAuthenticated, listSendercomplimentsController.handle);
router.get("/compliments/received", ensureAuthenticated, listReceiverComplimentsController.handle);

export { router }