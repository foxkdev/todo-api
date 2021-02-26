const env = process.env.NODE_ENV

const run = {
    sequelize: {
        uri: process.env.DB_URI
    }
}

const test = {

}
const config = {
    run,
    test
}
module.exports = config[env]