'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryRunner, Sequelize) {
    await queryRunner.createTable(
      'tasks',
      {
        id: {
          type: Sequelize.DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
        },
        status: {
          type: Sequelize.DataTypes.ENUM('to do', 'in progress', 'completed'),
          allowNull: false,
        },
        project_id: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: false
        },
        assigned_to_id: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: true
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
    await queryRunner.dropTable('tasks');
  }
};
