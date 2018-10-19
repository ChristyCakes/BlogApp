import { executeQuery } from './config/db';

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
}

export default StoredProcedure;