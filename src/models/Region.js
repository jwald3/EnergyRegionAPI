import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Region = sequelize.define(
    "Region",
    {
        RegionID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, // Make sure autoIncrement is enabled
        },
        RegionName: {
            type: DataTypes.STRING,
        },
        StateTerritory: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
        tableName: "Regions",
    }
);

export default Region;
