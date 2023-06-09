import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";
import State from "./State.js";

class Region extends Model {}

Region.init(
    {
        region_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        region_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        state_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: State,
                key: "StateID",
            },
        },
    },
    {
        sequelize,
        modelName: "Region",
        tableName: "regions", // Set the table name explicitly
        timestamps: false,
    }
);

export default Region;
