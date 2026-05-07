"use strict";

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    // Hashing passwords upon creation and update
    User.beforeCreate((user, options) => {
        const crypto = require('crypto');
        user.password = crypto.createHash('sha256').update(user.password).digest('hex');
    });
    User.beforeUpdate((user, options) => {
        const crypto = require('crypto');
        if (user.changed('password')) {
            user.password = crypto.createHash('sha256').update(user.password).digest('hex');
        }
    });
    return User;
};