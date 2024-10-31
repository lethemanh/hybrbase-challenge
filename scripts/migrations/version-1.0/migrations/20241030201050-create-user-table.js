'use strict'

module.exports = {
  async up (queryRunner, Sequelize) {
    await queryRunner.createTable(
      'users',
      {
        id: {
          type: Sequelize.DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          isUnique: true,
        },
        password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        role: {
          type: Sequelize.DataTypes.ENUM('client', 'freelancer'),
          allowNull: false,
        },
        skills: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
          isArray: true,
        },
        services: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
          isArray: true,
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true,
        },
      },
    );
  },

  async down (queryRunner) {
    await queryRunner.dropTable('users');
  }
};
