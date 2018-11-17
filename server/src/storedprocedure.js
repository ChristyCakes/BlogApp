import { executeQuery, generatePlaceholders } from './config/db';;

class StoredProcedure {
    constructor(spName) {
        if (!spName) {
            throw new TypeError('You must provide the stored procedure name')
        }
        this.StoredProcedure = spName;
    }

    async call(param) {
        let placeholderString = generatePlaceholders(param);
        let sql =  `CALL ${this.StoredProcedure}(${placeholderString})`;
        let results = await executeQuery(sql, param)
        return results;
    }

}

export default StoredProcedure;