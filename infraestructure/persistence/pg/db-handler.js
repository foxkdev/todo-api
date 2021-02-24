const {pg: { uri: pgURI}} = require('../../config')
const { Sequelize } = require('sequelize');
class DbHandler {
    constructor() {
    }
    async _connect() {
        try{
            this.client = new Sequelize(pgURI)
        } catch(err) {
            const error = err.message ? err.message : err
            console.error(`Error in database connection: ${error}`)
            throw new Error(`Error in database connection: ${error}`)
        }

    }
    async _createInstance() {
        return await this._connect()
    }

    async getInstance() {
        if(!this.instance) {
            this.intance = await this._createInstance()
        }
        return this.intance
    }
    disconnect() {
        this.intance = null
    }
}

module.exports = DbHandler