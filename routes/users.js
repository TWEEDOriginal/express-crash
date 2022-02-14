import express from "express";
import user_controllers from "../controllers/users.js";
const router = express.Router();

/* GET users listing. */
router
  .route("/")
  .get(
    user_controllers.first_get_callback,
    user_controllers.second_get_callback
  )
  .post(user_controllers.create_user);

router
  .route("/:userId")
  .get(user_controllers.get_user)
  .delete(user_controllers.delete_user)
  .patch(user_controllers.update_user);


router.param("userId", user_controllers.get_user_callback);

export default router;
