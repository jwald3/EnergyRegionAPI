import Region from "../models/Region.js";

export const getAllRegions = async (req, res) => {
    try {
        const { state_id } = req.query;

        const regions = await getBaseQuery(state_id);

        res.json(regions);
    } catch (error) {
        console.error("Error details:", error); // Log the error details
        res.status(500).json({ message: "Error retrieving regions" });
    }
};

export const getRegionById = async (req, res) => {
    try {
        console.log("RegionID:", req.params.RegionID); // Add this line to log the RegionID
        const region = await Region.findByPk(req.params.RegionID);
        if (!region)
            return res.status(404).json({ message: "Region not found." });
        res.json(region);
    } catch (error) {
        console.error("Error details:", error); // Log the error details
        res.status(500).json({ message: "Error retrieving region." });
    }
};

export const createRegion = async (req, res) => {
    try {
        const region = await Region.create(req.body);
        res.status(201).json(region);
    } catch (error) {
        console.error("Error details:", error); // Log the error details
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
        console.error("Error details:", error); // Log the error details
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
        console.error("Error details:", error); // Log the error details
        res.status(500).json({ message: "Error deleting region." });
    }
};

const getBaseQuery = async (state_id = null) => {
    const whereClause = constructWhereClause(state_id);

    return await Region.findAll({ where: whereClause });
}

const constructWhereClause = (state_id) => {
    let whereClause = {};

    if (state_id) {
        whereClause.state_id = state_id
    }

    return whereClause;
}
