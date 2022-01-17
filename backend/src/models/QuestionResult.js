const { getDB } = require("../setup/sequelize");
const sequelize = getDB();
const { Model, DataTypes } = require("sequelize");

class QuestionResult extends Model {}
QuestionResult.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    section_result_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    question_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status_correct: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1: correct, 0: false",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1: available, 0: deleted",
    },
  },
  {
    sequelize,
    modelName: "questionresult",
    tableName: "question_result",
  }
);

module.exports = QuestionResult;
