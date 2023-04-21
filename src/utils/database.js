import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Database connection has been established successfully.");
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });

export default sequelize;
