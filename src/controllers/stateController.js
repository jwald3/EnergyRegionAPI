import State from "../models/State.js";

export const getAllStates = async (req, res) => {
    try {
        const states = await State.findAll();
        res.json(states);
    } catch (error) {
        console.error("Error details:", error); // Log the error details
        res.status(500).json({ message: "Error retrieving states" });
    }
};

export const getStateById = async (req, res) => {
    try {
        const state = await State.findByPk(req.params.StateID);
        if (!state)
            return res.status(404).json({ message: "State not found." });
        res.json(state);
    } catch (error) {
        console.error("Error details:", error); // Log the error details
        res.status(500).json({ message: "Error retrieving state." });
    }
};

export const createState = async (req, res) => {
    try {
        const state = await State.create(req.body);
        res.status(201).json(state);
    } catch (error) {
        console.error("Error details:", error); // Log the error details
        res.status(500).json({ message: "Error creating state." });
    }
};

export const updateState = async (req, res) => {
    try {
        const [updatedRows] = await State.update(req.body, {
            where: { StateID: req.params.StateID },
        });

        if (!updatedRows)
            return res.status(404).json({ message: "State not found." });
        res.json({ message: "State updated." });
    } catch (error) {
        console.error("Error details:", error); // Log the error details
        res.status(500).json({ message: "Error updating state." });
    }
};

export const deleteState = async (req, res) => {
    try {
        const deletedRows = await State.destroy({
            where: { StateID: req.params.StateID },
        });

        if (!deletedRows)
            return res.status(404).json({ message: "State not found." });
        res.json({ message: "State deleted." });
    } catch (error) {
        console.error("Error details:", error); // Log the error details
        res.status(500).json({ message: "Error deleting state." });
    }
};
