/**
 * Typed Config project
 */

type Config = {
  port: number;
  host: string;
  debug: boolean;
  database: {
    url: string;
    poolSize: number;
  };
};

const config: Config = {
  port: 3000,
  host: "localhost",
  debug: true,
  database: {
    url: "postgres://localhost/mydb",
    poolSize: 10,
  },
};

function getConfig(): Readonly<Config> {
  return config;
}

console.log(getConfig());
