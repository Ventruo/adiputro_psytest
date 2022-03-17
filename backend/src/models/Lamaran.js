const { getDB } = require("../setup/sequelize");
const sequelize = getDB();
const { Model, DataTypes } = require("sequelize");

class Lamaran extends Model {}
Lamaran.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tempat_lahir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    jenis_kelamin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat_domisili: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status_perkawinan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nomor_hp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pendidikan_terakhir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama_sekolah: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jurusan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    posisi_dilamar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lampiran_drive_id: {
      type: DataTypes.STRING,
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
    modelName: "lamaran",
    tableName: "lamaran",
  }
);

module.exports = Lamaran;
