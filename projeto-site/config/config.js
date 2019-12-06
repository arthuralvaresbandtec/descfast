module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: 'userblindmarket',
    password: '#Gfgrupo9',
    database: 'bdblindmarket',
    host: 'srvblindmarket.database.windows.net',
    dialect: 'mssql'
  }
};
 
