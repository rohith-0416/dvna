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
            unique: true,
            validate: {
                is: /^[a-zA-Z0-9_-]+$/
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-zA-Z0-9_-]+$/
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is: /^[a-zA-Z0-9_-\s.,!?]+$/
            }
        },
        tags: {
            type: DataTypes.STRING,
            validate: {
                is: /^[a-zA-Z0-9_-]+$/
            }
        }
    });
    return Product;
};