import { UserModel } from '../models/User.model.js';

export class UserDAO {
    async createUser(data) {
        return await UserModel.create(data);
    }

    async findByEmail(email) {
        return await UserModel.findOne({ email });
    }

    async findById(id) {
        return await UserModel.findById(id);
    }
}