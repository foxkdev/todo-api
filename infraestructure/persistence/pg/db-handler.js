const {pg: { uri: pgURI}} = require('../../config')
const { Sequelize } = require('sequelize');
class DbHandler {
    constructor() {
        console.log('db handler init')
    }
    async _connect() {
        try{
            this.client = await new Sequelize(pgURI)
            await this.client.authenticate();
            console.log('Connection has been established successfully.');
            return this.client
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
        if(this.client) {
            this.client.close()
        }
        this.intance = null
        this.client = null
    }
}

module.exports = DbHandler