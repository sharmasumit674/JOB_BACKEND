import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { getAdminsJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(getAllJobs);
router.route("/getAdminjobs").get(isAuthenticated, getAdminsJobs);
router.route("/get/:id").get(getJobById);


export default router;