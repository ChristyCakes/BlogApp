import { executeQuery, generatePlaceholders } from './config/db';;

class StoredProcedure {
    constructor(spName) {
        if (!spName) {
            throw new TypeError('You must provide the stored procedure name')
        }
        this.StoredProcedure = spName;
    }

    // add placeholder string?
    call(param) {
        let sql = `CALL ${this.StoredProcedure}(${param})`;
        let results = executeQuery(sql, [param]);
        return results;
    }

    async call2(author, id) {
        // let placeholderStringAuthor = generatePlaceholders(author);
        // let placeholderStringId = generatePlaceholders(id);
        let sql =  `CALL ${this.StoredProcedure}(?, ?)`;
        let results = await executeQuery(sql, [author, id]);
        return results;
    }
}

export default StoredProcedure;