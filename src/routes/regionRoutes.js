import { Router } from "express";
import {
    getAllRegions,
    getRegionById,
    createRegion,
    updateRegion,
    deleteRegion,
} from "../controllers/regionController.js";

const router = Router();

router.get("/", getAllRegions);
router.get("/:region_id", getRegionById);
router.post("/", createRegion);
router.put("/:region_id", updateRegion);
router.delete("/:region_id", deleteRegion);

export default router;
