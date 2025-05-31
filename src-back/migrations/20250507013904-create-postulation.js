'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('postulations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      academicProgram: {
        type: Sequelize.JSONB,
        allowNull: false
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'students', // Relación con la tabla students
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      offerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'offers', // Relación con la tabla offers
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('postulations');
  }
};