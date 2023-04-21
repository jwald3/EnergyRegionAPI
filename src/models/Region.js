import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";

class Region extends Model {}

Region.init(
    {
        RegionID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        RegionName: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        StateTerritory: {
            type: DataTypes.CHAR(2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Region",
        tableName: "Regions", // Set the table name explicitly
        timestamps: false,
    }
);

export default Region;
