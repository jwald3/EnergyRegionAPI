import Region from "../models/Region.js";

export const getAllRegions = async (req, res) => {
    try {
        const regions = await Region.findAll();
        res.json(regions);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving regions" });
    }
};

export const getRegionById = async (req, res) => {
    try {
        const region = await Region.findByPk(req.params.RegionID);
        if (!region)
            return res.status(404).json({ message: "Region not found." });
        res.json(region);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving region." });
    }
};

export const createRegion = async (req, res) => {
    try {
        const region = await Region.create(req.body);
        res.status(201).json(region);
    } catch (error) {
        res.status(500).json({ message: "Error creating region." });
    }
};

export const updateRegion = async (req, res) => {
    try {
        const [updatedRows] = await Region.update(req.body, {
            where: { RegionID: req.params.RegionID },
        });

        if (!updatedRows)
            return res.status(404).json({ message: "Region not found." });
        res.json({ message: "Region updated." });
    } catch (error) {
        res.status(500).json({ message: "Error updating region." });
    }
};

export const deleteRegion = async (req, res) => {
    try {
        const deletedRows = await Region.destroy({
            where: { RegionID: req.params.RegionID },
        });

        if (!deletedRows)
            return res.status(404).json({ message: "Region not found." });
        res.json({ message: "Region deleted." });
    } catch (error) {
        res.status(500).json({ message: "Error deleting region." });
    }
};
