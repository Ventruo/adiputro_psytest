const { getDB } = require("../setup/sequelize");
const sequelize = getDB();
const { Model, DataTypes } = require("sequelize");

class SectionResult extends Model {}
SectionResult.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    section_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    exam_session: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: false,
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
    modelName: "sectionresult",
    tableName: "section_result",
  }
);

module.exports = SectionResult;