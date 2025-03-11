<<<<<<< HEAD
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
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
});
=======
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
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
});
>>>>>>> refs/remotes/origin/Andrew
export default User;