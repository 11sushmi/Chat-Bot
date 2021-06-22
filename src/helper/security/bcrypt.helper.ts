const bcrypt = require('bcrypt');

export class BcryptHelper {

    async createBcryptHash(value) {
        try {
            const hashPassword = await bcrypt.hash(value, 10);
            return hashPassword;
        }
        catch (error) {
            return error;
        }
    }
    

    async verifyBcryptHash(newValue, hashString): Promise<any> {
        try {
            if (await bcrypt.compare(newValue, hashString)) { /** Hashing algorithm to compare in bcryypt*/
                return true;
            }
            return false;
        }
        catch (error) {
            return false;
        }
    }


}




