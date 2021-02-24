const env = process.env.NODE_ENV

let pgURI = process.env.PG_URI
if(!pgURI) {
    pgURI = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_URL}/${process.env.PG_DATABASE}`
}


const run = {
    pg: {
        uri: pgURI
    }
}
const test = {

}

const config = {
    run,
    test
}

module.exports = config[env]