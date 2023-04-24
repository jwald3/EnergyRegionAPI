import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.js";

class State extends Model {}

State.init(
    {
        state_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        state_territory: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        state_code: {
            type: DataTypes.CHAR(2),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "State",
        tableName: "states",
        timestamps: false,
    }
);

export default State;
