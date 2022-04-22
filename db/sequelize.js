import { Sequelize } from "sequelize";
const { PGHOST, PGPORT, PGUSER, PGDATABASE, PGPASSWORD } = process.env;
const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres",
});
export const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export const syncDB = async () => {
  await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");
};
export default sequelize;
