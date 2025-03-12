import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
class User extends Model {
}
User.init({
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    subscription: {
        type: DataTypes.BOOLEAN,
    },
    sshPublicKey: { // Add this field
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
});
export default User;