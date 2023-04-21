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
router.get("/:RegionID", getRegionById);
router.post("/", createRegion);
router.put("/:RegionID", updateRegion);
router.delete("/:RegionID", deleteRegion);

export default router;
