import { Router } from "express";
import {
    getAllStates,
    getStateById,
    createState,
    updateState,
    deleteState,
} from "../controllers/stateController.js";

const router = Router();

router.get("/", getAllStates);
router.get("/:StateID", getStateById);
router.post("/", createState);
router.put("/:StateID", updateState);
router.delete("/:StateID", deleteState);

export default router;
