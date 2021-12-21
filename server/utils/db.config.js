module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: process.env.DATABASE_PASSWORD,
    DB: process.env.DATABASE_NAME,
    dialect: "mysql",
        pool: { 
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
    }
};