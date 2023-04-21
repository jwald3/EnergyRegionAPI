import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
    process.env.DATABASE_URL ||
        "postgres://postgres:Tonka34*@localhost:5432/energyusage",
    {
        dialect: "postgres",
        logging: false,
    }
);

export default sequelize;
