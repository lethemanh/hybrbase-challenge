import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import path from "path";

export default {
  port: parseInt(process.env.PORT, 10) || 3001,
  database: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'password',
    database: process.env.POSTGRES_DB || 'hybrbase',
    entities: [__dirname + "**/*.entity.{js,ts}"],
    migrations: [__dirname + 'scripts/migrations/version-1.0/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'scripts/migrations/version-1.0/migrations'
    },
  } as TypeOrmModuleOptions
};
