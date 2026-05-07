"use strict";

module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tags: {
            type: DataTypes.STRING,
            validate: {
                is: /^[a-zA-Z0-9\s,]+$/ // allow only alphanumeric characters, spaces, and commas
            }
        }
    });
    return Product;
};