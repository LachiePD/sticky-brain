import dotenv from "dotenv";
dotenv.config({ debug: true, override: true });
import DatabaseConnection from "./infrastructure/DatabaseConnection.js";
import repositoryFactory from "./factories/repository.factory.js";
import serviceFactory from "./factories/service.factory.js";
import routerFactory from "./factories/router.factory.js";
import Server from "./Server.js";


    const databaseConnection = new DatabaseConnection(); ///process env injected here
    const repositories = repositoryFactory({ databaseConnection });
    const services = serviceFactory({ repositories });
    const routers = routerFactory({ services });

   const server = new Server({ routers });
    server.start();

const shutdown = async () => {
    console.log("\n👋 Shutting down gracefully...");
    try {
        // We call .pool.end() because your class wraps the pg pool
        await databaseConnection.pool.end(); 
        console.log("🗄️ Database pool closed.");
    } catch (err) {
        console.error("Error during shutdown:", err);
    }
    process.exit(0);
};
// Add this for Nodemon!
process.on('SIGUSR2', async () => {
    await shutdown();
    process.kill(process.pid, 'SIGUSR2');
});
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
