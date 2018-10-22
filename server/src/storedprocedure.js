import { executeQuery, generatePlaceholders } from './config/db';;

class StoredProcedure {
    constructor(spName) {
        if (!spName) {
            throw new TypeError('You must provide the stored procedure name')
        }
        this.StoredProcedure = spName;
    }

    call(param) {
        let sql = `CALL ${this.StoredProcedure}(${param})`;
        let results = executeQuery(sql, [param]);
        return results;
    }

    async call2(author) {
        let placeholderString = generatePlaceholders(author);
        let sql =  `CALL ${this.StoredProcedure}(${placeholderString}, last_insert_id())`;
        let results = await executeQuery(sql, [author]);
        return results;
    }
}

export default StoredProcedure;