/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION'),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | MySQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for MySQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i mysql
    |
    */
    mysql: {
      client: 'mysql',
      seeders: {
        paths: ['./database/seeders/MainSeeder']
      },
      connection: {
        host: Env.get('MYSQL_HOST'),
        port: Env.get('MYSQL_PORT'),
        user: Env.get('MYSQL_USER'),
        password: Env.get('MYSQL_PASSWORD', ''),
        database: Env.get('MYSQL_DB_NAME'),
      },
      migrations: {
        naturalSort: true,
        disableTransactions: false,
        paths: ['./database/migrations'],
        tableName: 'adonis_schema',
        disableRollbacksInProduction: true,
      },
      healthCheck: false,
      debug: false,
    },

  }
}

export default databaseConfig



// The package has been configured successfully. The database configuration stored inside config/database.ts file relies on the following environment variables and hence we recommend validating them.

// Open the env.ts file and paste the following code inside the Env.rules object.

//     DB_CONNECTION: Env.schema.string(),

// ## Variables for the MYSQL driver

//     MYSQL_HOST: Env.schema.string({ format: 'host' }),
//     MYSQL_PORT: Env.schema.number(),
//     MYSQL_USER: Env.schema.string(),
//     MYSQL_PASSWORD: Env.schema.string.optional(),
//     MYSQL_DB_NAME: Env.schema.string(),

//     * The MYSQL_HOST should always be present and formatted as a valid host.
//     * The MYSQL_PORT should always be present and a valid number.
//     * The MYSQL_USER and MYSQL_PASSWORD are required to authenticate with the database server. The password is marked as optional since many local database servers are configured to work without passwords.
//     * The MYSQL_DB_NAME is the database name you want to connect with.

// ## Variables for the PostgreSQL driver

//     PG_HOST: Env.schema.string({ format: 'host' }),
//     PG_PORT: Env.schema.number(),
//     PG_USER: Env.schema.string(),
//     PG_PASSWORD: Env.schema.string.optional(),
//     PG_DB_NAME: Env.schema.string(),

// ## Variables for the MSSQL driver

//     MSSQL_SERVER: Env.schema.string({ format: 'host' }),
//     MSSQL_PORT: Env.schema.number(),
//     MSSQL_USER: Env.schema.string(),
//     MSSQL_PASSWORD: Env.schema.string.optional(),
//     MSSQL_DB_NAME: Env.schema.string(),

// ## Variables for the OracleDB driver

//     ORACLE_HOST: Env.schema.string({ format: 'host' }),
//     ORACLE_PORT: Env.schema.number(),
//     ORACLE_USER: Env.schema.string(),
//     ORACLE_PASSWORD: Env.schema.string.optional(),
//     ORACLE_DB_NAME: Env.schema.string(),
// CREATE: ace-manifest.json file
