'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryRunner, Sequelize) {
    await queryRunner.createTable(
      'projects',
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
        client_id: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: true,
        },
        freelancer_id: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: true,
        },
        status: {
          type: Sequelize.DataTypes.ENUM('pending', 'in progress', 'completed'),
          allowNull: false,
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
    await queryRunner.dropTable('projects');
  }
};
