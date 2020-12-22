const config = { 
    database: 'cap_db',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000,
    },
    privateKey: "###cap###",  
};

module.exports = config;
