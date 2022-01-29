/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 10.6.5-MariaDB-1:10.6.5+maria~focal : Database - adiputro_psytest
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`adiputro_psytest` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `adiputro_psytest`;

/*Table structure for table `exam_session` */

DROP TABLE IF EXISTS `exam_session`;

CREATE TABLE `exam_session` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `start_date` datetime NOT NULL,
  `finish_date` datetime NOT NULL,
  `duration` int(10) NOT NULL COMMENT 'in minutes',
  `token` varchar(255) NOT NULL,
  `is_logged` int(10) NOT NULL DEFAULT 0 COMMENT '1: logged in, 0: logged out',
  `status` int(10) NOT NULL DEFAULT 1 COMMENT '1: available, 0: deleted',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `exam_session` */

insert  into `exam_session`(`id`,`email`,`start_date`,`finish_date`,`duration`,`token`,`is_logged`,`status`,`createdAt`,`updatedAt`) values 
(1,'a@a.com','2022-01-17 15:00:00','2022-01-17 16:00:00',60,'abc',0,1,'2022-01-17 16:50:42','2022-01-17 16:50:42'),
(2,'update@ganti.com','2022-01-15 00:00:00','2022-01-16 00:00:00',60,'aaa',0,0,'2022-01-25 00:07:41','2022-01-24 17:19:13'),
(3,'coba@coba.com','2022-01-24 17:07:41','2022-01-24 17:07:41',60,'asbce',0,1,'2022-01-24 17:17:52','2022-01-24 17:17:52'),
(4,'coba@coba.com','2022-01-25 00:00:00','2022-01-25 00:00:00',60,'asbce',0,1,'2022-01-24 17:18:02','2022-01-24 17:18:02');

/*Table structure for table `question` */

DROP TABLE IF EXISTS `question`;

CREATE TABLE `question` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `section_id` bigint(20) NOT NULL,
  `option_a` varchar(255) DEFAULT NULL,
  `option_b` varchar(255) DEFAULT NULL,
  `option_c` varchar(255) DEFAULT NULL,
  `option_d` varchar(255) DEFAULT NULL,
  `option_e` varchar(255) DEFAULT NULL,
  `answer` varchar(10) NOT NULL,
  `option_type` int(10) NOT NULL DEFAULT 1 COMMENT '1: text,  2: image',
  `question_type` int(10) NOT NULL DEFAULT 1 COMMENT '1: text,  2: image',
  `status` int(10) NOT NULL DEFAULT 1 COMMENT '1: available, 0: deleted',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `question` */

insert  into `question`(`id`,`question`,`section_id`,`option_a`,`option_b`,`option_c`,`option_d`,`option_e`,`answer`,`option_type`,`question_type`,`status`,`createdAt`,`updatedAt`) values 
(1,'3 + 3 =',1,'1','2','3','4','5','d',1,1,1,'2022-01-23 23:21:32','2022-01-23 23:21:32'),
(2,'aku ingin begini',2,'aaa','bbb','ccc','ddd','eee','a',1,1,1,'2022-01-23 23:21:32','2022-01-23 17:17:30'),
(3,'who is your mom?',2,'obama','bin laden','sapnu puas','nibba','okoye','c',1,1,1,'2022-01-23 23:21:32','2022-01-23 23:21:32'),
(4,'greatest country',3,'your mom','your mom','your mom','your mom','your mom','a',1,1,1,'2022-01-23 23:21:32','2022-01-23 23:21:32'),
(5,'aku ingin begini',2,'aaa','bbb','ccc','ddd','eee','a',1,1,1,'2022-01-23 17:16:37','2022-01-23 17:16:37');

/*Table structure for table `question_result` */

DROP TABLE IF EXISTS `question_result`;

CREATE TABLE `question_result` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `section_result_id` bigint(20) NOT NULL,
  `question_id` bigint(20) NOT NULL,
  `answer` varchar(10) NOT NULL,
  `status_correct` int(10) NOT NULL DEFAULT 0 COMMENT '1: correct, 0: false',
  `status` int(10) NOT NULL DEFAULT 1 COMMENT '1: available, 0: deleted',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

/*Data for the table `question_result` */

insert  into `question_result`(`id`,`section_result_id`,`question_id`,`answer`,`status_correct`,`status`,`createdAt`,`updatedAt`) values 
(1,1,1,'a',0,1,'2022-01-17 16:51:30','2022-01-17 16:51:30'),
(2,2,1,'b',1,1,'2022-01-25 12:48:42','2022-01-25 12:48:42'),
(3,1,2,'a',1,1,'2022-01-17 16:51:30','2022-01-28 16:30:39'),
(4,1,4,'a',0,1,'2022-01-17 16:51:30','2022-01-17 16:51:30'),
(5,1,2,'2022-01-25',0,1,'2022-01-28 16:28:54','2022-01-28 16:28:54'),
(6,1,2,'c',0,1,'2022-01-28 16:29:18','2022-01-28 16:29:18'),
(7,1,2,'a',1,1,'2022-01-28 16:29:21','2022-01-28 16:29:21');

/*Table structure for table `registrant` */

DROP TABLE IF EXISTS `registrant`;

CREATE TABLE `registrant` (
  `email` varchar(255) NOT NULL,
  `biodata` longtext NOT NULL,
  `status` int(10) NOT NULL DEFAULT 1 COMMENT '1: available, 0: deleted',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `registrant` */

insert  into `registrant`(`email`,`biodata`,`status`,`createdAt`,`updatedAt`) values 
('a@a.com','{\r\n  \"nama_lengkap\": \"Lawrence Patrick Sianto\",\r\n  \"nama_panggilan\": \"Lawrence\",\r\n  \"alamat_ktp\": \"Jalan Jalan II\",\r\n  \"alamat_skg\": \"Jalan Jalan III\",\r\n  \"no_hp\": \"0812345678\",\r\n  \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n  \"kewarganegaraan\": \"WNI\",\r\n  \"suku\": \"tionghoa\",\r\n  \"agama\": \"kristen\",\r\n  \"usia\": \"20\",\r\n  \"tinggi_badan\": \"164\",\r\n  \"berat_badan\": \"50.2\",\r\n  \"no_identitas\": \"981231515214561\",\r\n  \"golongan_darah\": \"O\",\r\n  \"no_npwp\": \"123456789\",\r\n  \"email\": \"abc@def.com\",\r\n  \"kesehatan\": {\r\n    \"keadaan\": \"baik/kurang sesuai\",\r\n    \"cacat\": \"ya/tidak\",\r\n    \"sakit_keras\": \"ya/tidak\",\r\n    \"kapan\": \"-/januari 2022\"\r\n  },\r\n  \"status_nikah\": {\r\n    \"menikah\": \"ya/tidak\",\r\n    \"nama_suami_istri\": \"perempuan laki\",\r\n    \"nama_anak\": \"anak saya\"\r\n  },\r\n  \"pendidikan\": [\r\n    {\r\n      \"tingkat\": \"SMP\",\r\n      \"jurusan\": \"IPA\",\r\n      \"nama_sekolah\": \"SMP MASA BODO\",\r\n      \"kota\": \"Surabaya\",\r\n      \"tahun_lulus\": \"2021\"\r\n    },\r\n    {\r\n      \"tingkat\": \"SMA\",\r\n      \"jurusan\": \"IPA\",\r\n      \"nama_sekolah\": \"SMA MASA SIH\",\r\n      \"kota\": \"Surabaya\",\r\n      \"tahun_lulus\": \"2022\"\r\n    }\r\n  ],\r\n  \"alasan_bekerja\": \"ini deskripsi bla bla bla bla bla\",\r\n  \"keluarga\": {\r\n    \"orang_tua\": [\r\n      {\r\n        \"nama\": \"Orang Tua 1\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 1\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Ibu Rumah Tangga\"\r\n      },\r\n      {\r\n        \"nama\": \"Orang Tua 2\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 2\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Arsitek\"\r\n      }\r\n    ],\r\n    \"istri_suami\": [\r\n      {\r\n        \"nama\": \"Suami 1\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 3\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Chef\"\r\n      },\r\n      {\r\n        \"nama\": \"Istri 1\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 4\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Dokter\"\r\n      }\r\n    ],\r\n    \"anak_kandung\": [\r\n      {\r\n        \"nama\": \"Anak 1\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 4\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Chef\"\r\n      },\r\n      {\r\n        \"nama\": \"Anak 2\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 5\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Dosen\"\r\n      }\r\n    ],\r\n    \"saudara_kandung\": [\r\n      {\r\n        \"nama\": \"Saudara 1\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 6\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Guru\"\r\n      },\r\n      {\r\n        \"nama\": \"Saudara 2\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 7\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Penjual Jamu\"\r\n      }\r\n    ]\r\n  },\r\n  \"riwayat_pekerjaan\": {\r\n    \"riwayat\": [\r\n      {\r\n        \"dari\": \"01 Januari 1970\",\r\n        \"sampai\": \"02 Januari 1970\",\r\n        \"nama_perusahaan\": \"PT ABADI ABADI\",\r\n        \"kota\": \"Pasuruan\",\r\n        \"bidang_usaha\": \"Pertanian\",\r\n        \"jabatan\": \"Manager Agrikultur\"\r\n      },\r\n      {\r\n        \"dari\": \"01 Januari 1970\",\r\n        \"sampai\": \"02 Januari 1970\",\r\n        \"nama_perusahaan\": \"PT MAKMUR MAKMUR\",\r\n        \"kota\": \"Bojonegoro\",\r\n        \"bidang_usaha\": \"Perikanan\",\r\n        \"jabatan\": \"Manager Lele\"\r\n      }\r\n    ],\r\n    \"gaji_diperoleh\": \"saya di perusahaan a dibayar sebanyak 7jt tapi di perusahaan b saya ga digaji\",\r\n    \"alasan_berhenti\": \"di perusahaan a saya ketauan mencuri 10 gagang sapu tapi di perusahaan b saya ga sengaja bakar ruangan bos saya\"\r\n  },\r\n  \"training_kursus\": [\r\n    {\r\n      \"materi\": \"Materi 1\",\r\n      \"penyelenggara\": \"UD SEJAHTERA ABADI\",\r\n      \"tahun\": \"2022\",\r\n      \"tempat\": \"Alamat 1\"\r\n    },\r\n    {\r\n      \"materi\": \"Materi 2\",\r\n      \"penyelenggara\": \"UD SEJAHTERA ABADI\",\r\n      \"tahun\": \"2023\",\r\n      \"tempat\": \"Alamat 2\"\r\n    }\r\n  ],\r\n  \"organisasi\": [\r\n    {\r\n      \"nama\": \"Organisasai 1\",\r\n      \"tempat\": \"ISTTS\",\r\n      \"masa\": \"2002-2010\",\r\n      \"jabatan\": \"Ketua Provinsional\"\r\n    },\r\n    {\r\n      \"nama\": \"Organisasai 2\",\r\n      \"tempat\": \"ITS\",\r\n      \"masa\": \"1970-2022\",\r\n      \"jabatan\": \"Jabatan Menjamin Kesejahteraan\"\r\n    }\r\n  ],\r\n  \"bahasa_dikuasai\": [\r\n    {\r\n      \"bahasa\": \"Indonesia\",\r\n      \"berbicara\": \"kurang/cukup/baik\",\r\n      \"menulis\": \"kurang/cukup/baik\",\r\n      \"mendengar\": \"kurang/cukup/baik\"\r\n    }\r\n  ],\r\n  \"keterangan_kerja\": {\r\n    \"lama_berhenti_kerja\": \"kira-kira 10 tahun sebelum\",\r\n    \"bisa_mulai_bekerja\": \"sekarang bole\",\r\n    \"kenalan_perusahaan\": \"ya/tidak\",\r\n    \"kenalan\": {\r\n      \"nama\": \"Orang 1\",\r\n      \"alamat\": \"Alamat 1\",\r\n      \"jabatan\": \"Pegawai Marketing\"\r\n    }\r\n  },\r\n  \"pelatihan_kerja\": \"ya/tidak\",\r\n  \"tujuan_kerja\": \"saya ingin kerja karena ini\",\r\n  \"kendaraan\": {\r\n    \"keterangan\": \"Mobil L 1234 AB\",\r\n    \"kepemilikan\": \"pribadi/ortu/saudara/dll\"\r\n  },\r\n  \"hobi\": \"hobi sayaaaaa\",\r\n  \"harapan_gaji\": \"ah saya mau gaji 10jt per hari\",\r\n  \"masalah_hukum\": \"pernah masalah hukum ga yaa hmmm\",\r\n  \"kelebihan\": \"kelebihan saya pertama adalah\",\r\n  \"kekurangan\": \"kekurangan saya pertama adalah\",\r\n  \"kepuasan_keadaan_diri\": \"saya sangat puas\",\r\n  \"prestasi\": [\r\n    {\r\n      \"jenis\": \"binaraga\",\r\n      \"bidang\": \"olahraga\",\r\n      \"tahun\": \"2022\"\r\n    },\r\n    {\r\n      \"jenis\": \"aktor terbaik\",\r\n      \"bidang\": \"film\",\r\n      \"tahun\": \"2019\"\r\n    }\r\n  ],\r\n  \"seni_dikuasai\": {\r\n    \"jenis\": [\"musik\", \"suara\", \"lukisan\"]\r\n  },\r\n  \"orang_terdekat\": [\r\n    {\r\n      \"nama\": \"Orang 1\",\r\n      \"alamat\": \"Alamat 1\",\r\n      \"telepon\": \"0812345678\"\r\n    },\r\n    {\r\n      \"nama\": \"Orang 2\",\r\n      \"alamat\": \"Alamat 2\",\r\n      \"telepon\": \"0812345678\"\r\n    }\r\n  ],\r\n  \"tanggal_biodata\": \"Malang, 20 Januari 2022\"\r\n}\r\n',1,'2022-01-17 16:51:30','2022-01-17 16:51:30'),
('b@b.com','{\r\n  \"nama_lengkap\": \"Lawrence Patrick Sianto\",\r\n  \"nama_panggilan\": \"Lawrence\",\r\n  \"alamat_ktp\": \"Jalan Jalan II\",\r\n  \"alamat_skg\": \"Jalan Jalan III\",\r\n  \"no_hp\": \"0812345678\",\r\n  \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n  \"kewarganegaraan\": \"WNI\",\r\n  \"suku\": \"tionghoa\",\r\n  \"agama\": \"kristen\",\r\n  \"usia\": \"20\",\r\n  \"tinggi_badan\": \"164\",\r\n  \"berat_badan\": \"50.2\",\r\n  \"no_identitas\": \"981231515214561\",\r\n  \"golongan_darah\": \"O\",\r\n  \"no_npwp\": \"123456789\",\r\n  \"email\": \"abc@def.com\",\r\n  \"kesehatan\": {\r\n    \"keadaan\": \"baik/kurang sesuai\",\r\n    \"cacat\": \"ya/tidak\",\r\n    \"sakit_keras\": \"ya/tidak\",\r\n    \"kapan\": \"-/januari 2022\"\r\n  },\r\n  \"status_nikah\": {\r\n    \"menikah\": \"ya/tidak\",\r\n    \"nama_suami_istri\": \"perempuan laki\",\r\n    \"nama_anak\": \"anak saya\"\r\n  },\r\n  \"pendidikan\": [\r\n    {\r\n      \"tingkat\": \"SMP\",\r\n      \"jurusan\": \"IPA\",\r\n      \"nama_sekolah\": \"SMP MASA BODO\",\r\n      \"kota\": \"Surabaya\",\r\n      \"tahun_lulus\": \"2021\"\r\n    },\r\n    {\r\n      \"tingkat\": \"SMA\",\r\n      \"jurusan\": \"IPA\",\r\n      \"nama_sekolah\": \"SMA MASA SIH\",\r\n      \"kota\": \"Surabaya\",\r\n      \"tahun_lulus\": \"2022\"\r\n    }\r\n  ],\r\n  \"alasan_bekerja\": \"ini deskripsi bla bla bla bla bla\",\r\n  \"keluarga\": {\r\n    \"orang_tua\": [\r\n      {\r\n        \"nama\": \"Orang Tua 1\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 1\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Ibu Rumah Tangga\"\r\n      },\r\n      {\r\n        \"nama\": \"Orang Tua 2\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 2\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Arsitek\"\r\n      }\r\n    ],\r\n    \"istri_suami\": [\r\n      {\r\n        \"nama\": \"Suami 1\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 3\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Chef\"\r\n      },\r\n      {\r\n        \"nama\": \"Istri 1\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 4\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Dokter\"\r\n      }\r\n    ],\r\n    \"anak_kandung\": [\r\n      {\r\n        \"nama\": \"Anak 1\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 4\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Chef\"\r\n      },\r\n      {\r\n        \"nama\": \"Anak 2\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 5\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Dosen\"\r\n      }\r\n    ],\r\n    \"saudara_kandung\": [\r\n      {\r\n        \"nama\": \"Saudara 1\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 6\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Guru\"\r\n      },\r\n      {\r\n        \"nama\": \"Saudara 2\",\r\n        \"ttl\": \"Surabaya, 01 Januari 1970\",\r\n        \"alamat\": \"Jalan Alamat 7\",\r\n        \"pendidikan\": \"SMA\",\r\n        \"pekerjaan\": \"Penjual Jamu\"\r\n      }\r\n    ]\r\n  },\r\n  \"riwayat_pekerjaan\": {\r\n    \"riwayat\": [\r\n      {\r\n        \"dari\": \"01 Januari 1970\",\r\n        \"sampai\": \"02 Januari 1970\",\r\n        \"nama_perusahaan\": \"PT ABADI ABADI\",\r\n        \"kota\": \"Pasuruan\",\r\n        \"bidang_usaha\": \"Pertanian\",\r\n        \"jabatan\": \"Manager Agrikultur\"\r\n      },\r\n      {\r\n        \"dari\": \"01 Januari 1970\",\r\n        \"sampai\": \"02 Januari 1970\",\r\n        \"nama_perusahaan\": \"PT MAKMUR MAKMUR\",\r\n        \"kota\": \"Bojonegoro\",\r\n        \"bidang_usaha\": \"Perikanan\",\r\n        \"jabatan\": \"Manager Lele\"\r\n      }\r\n    ],\r\n    \"gaji_diperoleh\": \"saya di perusahaan a dibayar sebanyak 7jt tapi di perusahaan b saya ga digaji\",\r\n    \"alasan_berhenti\": \"di perusahaan a saya ketauan mencuri 10 gagang sapu tapi di perusahaan b saya ga sengaja bakar ruangan bos saya\"\r\n  },\r\n  \"training_kursus\": [\r\n    {\r\n      \"materi\": \"Materi 1\",\r\n      \"penyelenggara\": \"UD SEJAHTERA ABADI\",\r\n      \"tahun\": \"2022\",\r\n      \"tempat\": \"Alamat 1\"\r\n    },\r\n    {\r\n      \"materi\": \"Materi 2\",\r\n      \"penyelenggara\": \"UD SEJAHTERA ABADI\",\r\n      \"tahun\": \"2023\",\r\n      \"tempat\": \"Alamat 2\"\r\n    }\r\n  ],\r\n  \"organisasi\": [\r\n    {\r\n      \"nama\": \"Organisasai 1\",\r\n      \"tempat\": \"ISTTS\",\r\n      \"masa\": \"2002-2010\",\r\n      \"jabatan\": \"Ketua Provinsional\"\r\n    },\r\n    {\r\n      \"nama\": \"Organisasai 2\",\r\n      \"tempat\": \"ITS\",\r\n      \"masa\": \"1970-2022\",\r\n      \"jabatan\": \"Jabatan Menjamin Kesejahteraan\"\r\n    }\r\n  ],\r\n  \"bahasa_dikuasai\": [\r\n    {\r\n      \"bahasa\": \"Indonesia\",\r\n      \"berbicara\": \"kurang/cukup/baik\",\r\n      \"menulis\": \"kurang/cukup/baik\",\r\n      \"mendengar\": \"kurang/cukup/baik\"\r\n    }\r\n  ],\r\n  \"keterangan_kerja\": {\r\n    \"lama_berhenti_kerja\": \"kira-kira 10 tahun sebelum\",\r\n    \"bisa_mulai_bekerja\": \"sekarang bole\",\r\n    \"kenalan_perusahaan\": \"ya/tidak\",\r\n    \"kenalan\": {\r\n      \"nama\": \"Orang 1\",\r\n      \"alamat\": \"Alamat 1\",\r\n      \"jabatan\": \"Pegawai Marketing\"\r\n    }\r\n  },\r\n  \"pelatihan_kerja\": \"ya/tidak\",\r\n  \"tujuan_kerja\": \"saya ingin kerja karena ini\",\r\n  \"kendaraan\": {\r\n    \"keterangan\": \"Mobil L 1234 AB\",\r\n    \"kepemilikan\": \"pribadi/ortu/saudara/dll\"\r\n  },\r\n  \"hobi\": \"hobi sayaaaaa\",\r\n  \"harapan_gaji\": \"ah saya mau gaji 10jt per hari\",\r\n  \"masalah_hukum\": \"pernah masalah hukum ga yaa hmmm\",\r\n  \"kelebihan\": \"kelebihan saya pertama adalah\",\r\n  \"kekurangan\": \"kekurangan saya pertama adalah\",\r\n  \"kepuasan_keadaan_diri\": \"saya sangat puas\",\r\n  \"prestasi\": [\r\n    {\r\n      \"jenis\": \"binaraga\",\r\n      \"bidang\": \"olahraga\",\r\n      \"tahun\": \"2022\"\r\n    },\r\n    {\r\n      \"jenis\": \"aktor terbaik\",\r\n      \"bidang\": \"film\",\r\n      \"tahun\": \"2019\"\r\n    }\r\n  ],\r\n  \"seni_dikuasai\": {\r\n    \"jenis\": [\"musik\", \"suara\", \"lukisan\"]\r\n  },\r\n  \"orang_terdekat\": [\r\n    {\r\n      \"nama\": \"Orang 1\",\r\n      \"alamat\": \"Alamat 1\",\r\n      \"telepon\": \"0812345678\"\r\n    },\r\n    {\r\n      \"nama\": \"Orang 2\",\r\n      \"alamat\": \"Alamat 2\",\r\n      \"telepon\": \"0812345678\"\r\n    }\r\n  ],\r\n  \"tanggal_biodata\": \"Malang, 20 Januari 2022\"\r\n}\r\n',1,'2022-01-17 16:51:30','2022-01-17 16:51:30'),
('c@c.com','{\"nama_lengkap\":\"Nurhadi Alim\",\"nama_panggilan\":\"Lawrence\",\"alamat_ktp\":\"Jalan Jalan II\",\"alamat_skg\":\"Jalan Jalan III\",\"no_hp\":\"0812345678\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"kewarganegaraan\":\"WNI\",\"suku\":\"tionghoa\",\"agama\":\"kristen\",\"usia\":\"20\",\"tinggi_badan\":\"164\",\"berat_badan\":\"50.2\",\"no_identitas\":\"981231515214561\",\"golongan_darah\":\"O\",\"no_npwp\":\"123456789\",\"email\":\"abc@def.com\",\"kesehatan\":{\"keadaan\":\"baik/kurang sesuai\",\"cacat\":\"ya/tidak\",\"sakit_keras\":\"ya/tidak\",\"kapan\":\"-/januari 2022\"},\"status_nikah\":{\"menikah\":\"ya/tidak\",\"nama_suami_istri\":\"perempuan laki\",\"nama_anak\":\"anak saya\"},\"pendidikan\":[{\"tingkat\":\"SMP\",\"jurusan\":\"IPA\",\"nama_sekolah\":\"SMP MASA BODO\",\"kota\":\"Surabaya\",\"tahun_lulus\":\"2021\"},{\"tingkat\":\"SMA\",\"jurusan\":\"IPA\",\"nama_sekolah\":\"SMA MASA SIH\",\"kota\":\"Surabaya\",\"tahun_lulus\":\"2022\"}],\"alasan_bekerja\":\"ini deskripsi bla bla bla bla bla\",\"keluarga\":{\"orang_tua\":[{\"nama\":\"Orang Tua 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 1\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Ibu Rumah Tangga\"},{\"nama\":\"Orang Tua 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 2\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Arsitek\"}],\"istri_suami\":[{\"nama\":\"Suami 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 3\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Chef\"},{\"nama\":\"Istri 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 4\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Dokter\"}],\"anak_kandung\":[{\"nama\":\"Anak 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 4\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Chef\"},{\"nama\":\"Anak 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 5\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Dosen\"}],\"saudara_kandung\":[{\"nama\":\"Saudara 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 6\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Guru\"},{\"nama\":\"Saudara 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 7\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Penjual Jamu\"}]},\"riwayat_pekerjaan\":{\"riwayat\":[{\"dari\":\"01 Januari 1970\",\"sampai\":\"02 Januari 1970\",\"nama_perusahaan\":\"PT ABADI ABADI\",\"kota\":\"Pasuruan\",\"bidang_usaha\":\"Pertanian\",\"jabatan\":\"Manager Agrikultur\"},{\"dari\":\"01 Januari 1970\",\"sampai\":\"02 Januari 1970\",\"nama_perusahaan\":\"PT MAKMUR MAKMUR\",\"kota\":\"Bojonegoro\",\"bidang_usaha\":\"Perikanan\",\"jabatan\":\"Manager Lele\"}],\"gaji_diperoleh\":\"saya di perusahaan a dibayar sebanyak 7jt tapi di perusahaan b saya ga digaji\",\"alasan_berhenti\":\"di perusahaan a saya ketauan mencuri 10 gagang sapu tapi di perusahaan b saya ga sengaja bakar ruangan bos saya\"},\"training_kursus\":[{\"materi\":\"Materi 1\",\"penyelenggara\":\"UD SEJAHTERA ABADI\",\"tahun\":\"2022\",\"tempat\":\"Alamat 1\"},{\"materi\":\"Materi 2\",\"penyelenggara\":\"UD SEJAHTERA ABADI\",\"tahun\":\"2023\",\"tempat\":\"Alamat 2\"}],\"organisasi\":[{\"nama\":\"Organisasai 1\",\"tempat\":\"ISTTS\",\"masa\":\"2002-2010\",\"jabatan\":\"Ketua Provinsional\"},{\"nama\":\"Organisasai 2\",\"tempat\":\"ITS\",\"masa\":\"1970-2022\",\"jabatan\":\"Jabatan Menjamin Kesejahteraan\"}],\"bahasa_dikuasai\":[{\"bahasa\":\"Indonesia\",\"berbicara\":\"kurang/cukup/baik\",\"menulis\":\"kurang/cukup/baik\",\"mendengar\":\"kurang/cukup/baik\"}],\"keterangan_kerja\":{\"lama_berhenti_kerja\":\"kira-kira 10 tahun sebelum\",\"bisa_mulai_bekerja\":\"sekarang bole\",\"kenalan_perusahaan\":\"ya/tidak\",\"kenalan\":{\"nama\":\"Orang 1\",\"alamat\":\"Alamat 1\",\"jabatan\":\"Pegawai Marketing\"}},\"pelatihan_kerja\":\"ya/tidak\",\"tujuan_kerja\":\"saya ingin kerja karena ini\",\"kendaraan\":{\"keterangan\":\"Mobil L 1234 AB\",\"kepemilikan\":\"pribadi/ortu/saudara/dll\"},\"hobi\":\"hobi sayaaaaa\",\"harapan_gaji\":\"ah saya mau gaji 10jt per hari\",\"masalah_hukum\":\"pernah masalah hukum ga yaa hmmm\",\"kelebihan\":\"kelebihan saya pertama adalah\",\"kekurangan\":\"kekurangan saya pertama adalah\",\"kepuasan_keadaan_diri\":\"saya sangat puas\",\"prestasi\":[{\"jenis\":\"binaraga\",\"bidang\":\"olahraga\",\"tahun\":\"2022\"},{\"jenis\":\"aktor terbaik\",\"bidang\":\"film\",\"tahun\":\"2019\"}],\"seni_dikuasai\":{\"jenis\":[\"musik\",\"suara\",\"lukisan\"]},\"orang_terdekat\":[{\"nama\":\"Orang 1\",\"alamat\":\"Alamat 1\",\"telepon\":\"0812345678\"},{\"nama\":\"Orang 2\",\"alamat\":\"Alamat 2\",\"telepon\":\"0812345678\"}],\"tanggal_biodata\":\"Malang, 20 Januari 2022\"}',1,'2022-01-29 16:25:20','2022-01-29 16:27:05');

/*Table structure for table `section` */

DROP TABLE IF EXISTS `section`;

CREATE TABLE `section` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `test_id` bigint(20) NOT NULL,
  `instruction` varchar(255) NOT NULL,
  `duration` int(10) NOT NULL COMMENT 'in minutes',
  `type` varchar(255) NOT NULL COMMENT '1: essay, 2 : multiple choice',
  `option_num` int(10) NOT NULL,
  `status` int(10) NOT NULL DEFAULT 1 COMMENT '1: available, 0: deleted',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `section` */

insert  into `section`(`id`,`test_id`,`instruction`,`duration`,`type`,`option_num`,`status`,`createdAt`,`updatedAt`) values 
(1,1,'do this test bro',7,'1',5,1,'2022-01-17 16:51:30','2022-01-17 16:51:30'),
(2,2,'ngupdate ya',1,'2',1,1,'2022-01-23 14:06:16','2022-01-23 16:06:32'),
(3,2,'aaaa',7,'1',5,1,'2022-01-17 16:51:30','2022-01-17 16:51:30'),
(4,2,'dites ya',3,'1',5,1,'2022-01-23 07:32:48','2022-01-23 07:32:48'),
(5,2,'dites ya',3,'1',5,1,'2022-01-23 07:33:13','2022-01-23 07:33:13'),
(6,1,'dites ya',3,'1',5,1,'2022-01-23 07:36:53','2022-01-23 07:36:53'),
(7,1,'dites ya',3,'1',5,1,'2022-01-23 14:40:14','2022-01-23 14:40:14'),
(8,1,'dites ya',3,'1',5,1,'2022-01-23 14:40:22','2022-01-23 14:40:22');

/*Table structure for table `section_result` */

DROP TABLE IF EXISTS `section_result`;

CREATE TABLE `section_result` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `section_id` bigint(20) NOT NULL,
  `exam_session` bigint(20) NOT NULL,
  `start_date` datetime NOT NULL,
  `finish_date` datetime NOT NULL,
  `status` int(20) NOT NULL DEFAULT 1 COMMENT '1: available, 0: deleted',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `section_result` */

/*Table structure for table `test` */

DROP TABLE IF EXISTS `test`;

CREATE TABLE `test` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL COMMENT '1: in sequence, 2 : not in sequence',
  `status` int(10) NOT NULL DEFAULT 1 COMMENT '1: available, 0: deleted',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `test` */

insert  into `test`(`id`,`name`,`type`,`status`,`createdAt`,`updatedAt`) values 
(1,'Updated Test','2',1,'2022-01-22 22:40:20','2022-01-23 06:49:35'),
(2,'Updated Test 2','2',1,'2022-01-16 12:47:17','2022-01-23 16:08:51'),
(3,'test','1',1,'2022-01-23 05:56:37','2022-01-23 05:56:37'),
(4,'Test Data','1',1,'2022-01-23 06:47:14','2022-01-23 06:47:14'),
(5,'Test Data','1',1,'2022-01-23 07:22:19','2022-01-23 07:22:19'),
(6,'Test Data','1',1,'2022-01-23 11:32:20','2022-01-23 11:32:20'),
(7,'Test Data','1',1,'2022-01-23 14:32:39','2022-01-23 14:32:39'),
(8,'Test Data','1',1,'2022-01-23 16:08:39','2022-01-23 16:08:39');

/*Table structure for table `test_result` */

DROP TABLE IF EXISTS `test_result`;

CREATE TABLE `test_result` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `test_id` bigint(20) NOT NULL,
  `exam_session` bigint(20) NOT NULL,
  `start_date` datetime NOT NULL,
  `finish_date` datetime NOT NULL,
  `status` int(10) NOT NULL DEFAULT 1 COMMENT '1: available, 0: deleted',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `test_result` */

insert  into `test_result`(`id`,`test_id`,`exam_session`,`start_date`,`finish_date`,`status`,`createdAt`,`updatedAt`) values 
(1,1,1,'2022-01-15 23:50:21','2022-01-22 23:50:32',1,'2022-01-22 23:55:40','2022-01-22 23:55:40'),
(2,3,2,'2022-01-15 23:50:21','2022-01-22 23:50:32',1,'2022-01-22 23:55:40','2022-01-22 23:55:40'),
(3,2,3,'2022-01-28 08:00:00','2022-01-28 11:00:00',1,'2022-01-22 23:55:40','2022-01-28 17:17:36'),
(4,1,3,'2022-01-15 23:50:21','2022-01-22 23:50:32',1,'2022-01-22 23:55:40','2022-01-22 23:55:40'),
(5,3,1,'2022-01-28 08:00:00','2022-01-28 11:00:00',1,'2022-01-28 17:16:38','2022-01-28 17:16:38');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
