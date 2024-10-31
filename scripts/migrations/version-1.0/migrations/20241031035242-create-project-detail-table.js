'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryRunner, Sequelize) {
    await queryRunner.createTable(
      'project_details',
      {
        id: {
          type: Sequelize.DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true,
        },
        project_id: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: false,
        },
        deadline: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        deliverable: {
          type: Sequelize.DataTypes.STRING,
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
    await queryRunner.dropTable('project_details');
  }
};
