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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `exam_session` */

insert  into `exam_session`(`id`,`email`,`start_date`,`finish_date`,`duration`,`token`,`is_logged`,`status`,`createdAt`,`updatedAt`) values 
(1,'a@a.com','2022-01-17 15:00:00','2022-01-17 16:00:00',60,'abc',0,1,'2022-01-17 16:50:42','2022-01-17 16:50:42'),
(2,'update@ganti.com','2022-01-15 00:00:00','2022-01-16 00:00:00',60,'aaa',0,0,'2022-01-25 00:07:41','2022-01-24 17:19:13'),
(3,'coba@coba.com','2022-01-24 17:07:41','2022-01-24 17:07:41',60,'asbce',0,1,'2022-01-24 17:17:52','2022-01-24 17:17:52'),
(4,'coba@coba.com','2022-01-25 00:00:00','2022-01-25 00:00:00',60,'asbce',0,1,'2022-01-24 17:18:02','2022-01-24 17:18:02'),
(5,'coba@coba.com','2022-01-25 00:00:00','2022-01-25 00:00:00',60,'asbce',0,1,'2022-01-29 17:49:05','2022-01-29 17:49:05');

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
) ENGINE=InnoDB AUTO_INCREMENT=598 DEFAULT CHARSET=utf8mb4;

/*Data for the table `question` */

insert  into `question`(`id`,`question`,`section_id`,`option_a`,`option_b`,`option_c`,`option_d`,`option_e`,`answer`,`option_type`,`question_type`,`status`,`createdAt`,`updatedAt`) values 
(308,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','B',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(309,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','B',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(310,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(311,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','B',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(312,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','B',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(313,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(314,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(315,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','A',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(316,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','B',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(317,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','A',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(318,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','D',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(319,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(320,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','D',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(321,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(322,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(323,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','B',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(324,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','D',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(325,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','A',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(326,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','B',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(327,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(328,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','D',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(329,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','D',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(330,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(331,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','A',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(332,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(333,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','A',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(334,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','B',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(335,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','B',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(336,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(337,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','D',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(338,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','A',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(339,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','D',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(340,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','D',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(341,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','A',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(342,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','A',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(343,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(344,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','B',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(345,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','C',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(346,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','A',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(347,'Safir adalah …',2,'Pengembara','Gurun','Ahli filsafat','Batu-batuan','-','A',1,1,1,'2022-02-01 10:38:45','2022-02-01 10:38:45'),
(348,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','B',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(349,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(350,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(351,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','D',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(352,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','D',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(353,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','B',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(354,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','D',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(355,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','A',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(356,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','B',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(357,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','D',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(358,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(359,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','D',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(360,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(361,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','A',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(362,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','B',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(363,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','B',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(364,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','B',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(365,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','A',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(366,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','D',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(367,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','A',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(368,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(369,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(370,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','B',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(371,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(372,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(373,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','D',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(374,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','A',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(375,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(376,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','D',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(377,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','B',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(378,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','B',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(379,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','B',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(380,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(381,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(382,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','A',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(383,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','D',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(384,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','C',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(385,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','D',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(386,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','B',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(387,'nuri : burung = sepat : ?',3,'mangkuk','ikan','aquarium','merah','-','D',1,1,1,'2022-02-01 10:39:07','2022-02-01 10:39:07'),
(388,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','A',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(389,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','A',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(390,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','A',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(391,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','C',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(392,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','B',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(393,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','B',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(394,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','C',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(395,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','C',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(396,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','C',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(397,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','A',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(398,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','B',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(399,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','B',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(400,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','B',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(401,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','A',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(402,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','B',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(403,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','C',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(404,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','C',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(405,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','A',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(406,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','A',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(407,'Burung-burung bernyanyi pada musim semi untuk:',4,'Memberi tahu bahwa musim semi telah tiba','Menarik perhatian pasangannya','Melatih suaranya','-','-','A',1,1,1,'2022-02-01 10:39:18','2022-02-01 10:39:18'),
(408,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','4',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(409,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','56',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(410,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','13',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(411,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','13.5',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(412,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','80',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(413,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','64',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(414,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','12',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(415,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','185',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(416,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','5',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(417,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','175',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(418,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','30',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(419,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','3.3',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(420,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','56',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(421,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','5',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(422,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','12',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(423,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','0.6',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(424,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','4.5',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(425,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','17',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(426,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','144',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(427,'berpakah jumlah 50 dan 5 orang?',5,'-','-','-','-','-','1500',1,1,1,'2022-02-01 10:39:36','2022-02-01 10:39:36'),
(428,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','28&32',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(429,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','47&52',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(430,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','64&128',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(431,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','9&7',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(432,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','3&1',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(433,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','1&1',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(434,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','1/4&1/8',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(435,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','243&729',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(436,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','23&16',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(437,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','13&15',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(438,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','26&33',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(439,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','8&11',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(440,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','10&3',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(441,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','22&21',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(442,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','5&7',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(443,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','66&72',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(444,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','16&12',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(445,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','53&106',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(446,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','6&2',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(447,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','8&14',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(448,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','18&36',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(449,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','5&7',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(450,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','5040&40320',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(451,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','4&6',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(452,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','7&14',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(453,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','1&24',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(454,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','3&-1',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(455,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','1.5&56',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(456,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','-9&-72',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(457,' 2  4  6  8  10  12 14  ?   ? ',6,'-','-','-','-','-','6&48/9',1,1,1,'2022-02-01 10:39:53','2022-02-01 10:39:53'),
(458,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','C',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(459,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','D',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(460,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','C',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(461,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','E',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(462,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','E',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(463,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','D',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(464,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','D',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(465,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','E',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(466,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','D',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(467,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','B',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(468,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','B',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(469,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','B',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(470,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','C',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(471,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','C',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(472,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','A',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(473,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','B/E',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(474,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','D',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(475,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','D',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(476,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','E',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(477,'kota ….. menghailkan semen',7,'Jakarta','Bogor','Padang','Medado','Medan','B',1,1,1,'2022-02-01 10:40:02','2022-02-01 10:40:02'),
(478,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','C',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(479,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','B',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(480,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','B',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(481,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','D',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(482,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','C',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(483,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','D',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(484,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','B',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(485,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','D',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(486,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','A',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(487,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','E',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(488,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','C',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(489,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','C',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(490,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','B',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(491,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','D',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(492,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','E',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(493,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','B',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(494,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','C',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(495,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','C',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(496,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','D',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(497,'Pilihlah 1 kata yang artinya paling berbeda (ini soalnya)',8,'Jurusan','Timur','Perjalanan','Arah','Selatan','B',1,2,1,'2022-02-01 10:40:10','2022-02-01 10:40:10'),
(498,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','C',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(499,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','B',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(500,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','E',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(501,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','A',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(502,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','D',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(503,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','D',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(504,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','B',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(505,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','A',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(506,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','C',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(507,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','E',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(508,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','A',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(509,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','C',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(510,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','C',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(511,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','A',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(512,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','E',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(513,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','A',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(514,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','D',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(515,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','C',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(516,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','D',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(517,'link gambar',9,'link jawaban a','link jawaban b','link jawaban c','link jawaban d','link jawaban e','D',2,2,1,'2022-02-01 10:40:29','2022-02-01 10:40:29'),
(518,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(519,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(520,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(521,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(522,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(523,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(524,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(525,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(526,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(527,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(528,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(529,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(530,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(531,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(532,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(533,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(534,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(535,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(536,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(537,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(538,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(539,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(540,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(541,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(542,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(543,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(544,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(545,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(546,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(547,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(548,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(549,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(550,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(551,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(552,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(553,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(554,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(555,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(556,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(557,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(558,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(559,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(560,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(561,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(562,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(563,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(564,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(565,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(566,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(567,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(568,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(569,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(570,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(571,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(572,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(573,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(574,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(575,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(576,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(577,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(578,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(579,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(580,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(581,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(582,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(583,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(584,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(585,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(586,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(587,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(588,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(589,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(590,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(591,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(592,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(593,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(594,'link gambar',10,'x','o','-','-','-','x',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(595,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(596,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43'),
(597,'link gambar',10,'x','o','-','-','-','o',1,2,1,'2022-02-01 10:40:43','2022-02-01 10:40:43');

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `question_result` */

insert  into `question_result`(`id`,`section_result_id`,`question_id`,`answer`,`status_correct`,`status`,`createdAt`,`updatedAt`) values 
(1,1,1,'a',0,1,'2022-01-17 16:51:30','2022-01-17 16:51:30'),
(2,2,1,'b',1,1,'2022-01-25 12:48:42','2022-01-25 12:48:42'),
(3,1,2,'a',1,1,'2022-01-17 16:51:30','2022-01-30 13:12:08'),
(4,1,4,'a',0,1,'2022-01-17 16:51:30','2022-01-17 16:51:30'),
(5,1,2,'2022-01-25',0,1,'2022-01-28 16:28:54','2022-01-28 16:28:54'),
(6,1,2,'c',0,1,'2022-01-28 16:29:18','2022-01-28 16:29:18'),
(7,1,2,'a',1,1,'2022-01-28 16:29:21','2022-01-30 13:14:22'),
(8,1,2,'a',1,1,'2022-01-30 13:11:15','2022-01-30 13:11:15');

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
('c@c.com','{\"nama_lengkap\":\"Nurhadi Alim\",\"nama_panggilan\":\"Lawrence\",\"alamat_ktp\":\"Jalan Jalan II\",\"alamat_skg\":\"Jalan Jalan III\",\"no_hp\":\"0812345678\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"kewarganegaraan\":\"WNI\",\"suku\":\"tionghoa\",\"agama\":\"kristen\",\"usia\":\"20\",\"tinggi_badan\":\"164\",\"berat_badan\":\"50.2\",\"no_identitas\":\"981231515214561\",\"golongan_darah\":\"O\",\"no_npwp\":\"123456789\",\"email\":\"abc@def.com\",\"kesehatan\":{\"keadaan\":\"baik/kurang sesuai\",\"cacat\":\"ya/tidak\",\"sakit_keras\":\"ya/tidak\",\"kapan\":\"-/januari 2022\"},\"status_nikah\":{\"menikah\":\"ya/tidak\",\"nama_suami_istri\":\"perempuan laki\",\"nama_anak\":\"anak saya\"},\"pendidikan\":[{\"tingkat\":\"SMP\",\"jurusan\":\"IPA\",\"nama_sekolah\":\"SMP MASA BODO\",\"kota\":\"Surabaya\",\"tahun_lulus\":\"2021\"},{\"tingkat\":\"SMA\",\"jurusan\":\"IPA\",\"nama_sekolah\":\"SMA MASA SIH\",\"kota\":\"Surabaya\",\"tahun_lulus\":\"2022\"}],\"alasan_bekerja\":\"ini deskripsi bla bla bla bla bla\",\"keluarga\":{\"orang_tua\":[{\"nama\":\"Orang Tua 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 1\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Ibu Rumah Tangga\"},{\"nama\":\"Orang Tua 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 2\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Arsitek\"}],\"istri_suami\":[{\"nama\":\"Suami 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 3\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Chef\"},{\"nama\":\"Istri 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 4\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Dokter\"}],\"anak_kandung\":[{\"nama\":\"Anak 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 4\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Chef\"},{\"nama\":\"Anak 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 5\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Dosen\"}],\"saudara_kandung\":[{\"nama\":\"Saudara 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 6\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Guru\"},{\"nama\":\"Saudara 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 7\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Penjual Jamu\"}]},\"riwayat_pekerjaan\":{\"riwayat\":[{\"dari\":\"01 Januari 1970\",\"sampai\":\"02 Januari 1970\",\"nama_perusahaan\":\"PT ABADI ABADI\",\"kota\":\"Pasuruan\",\"bidang_usaha\":\"Pertanian\",\"jabatan\":\"Manager Agrikultur\"},{\"dari\":\"01 Januari 1970\",\"sampai\":\"02 Januari 1970\",\"nama_perusahaan\":\"PT MAKMUR MAKMUR\",\"kota\":\"Bojonegoro\",\"bidang_usaha\":\"Perikanan\",\"jabatan\":\"Manager Lele\"}],\"gaji_diperoleh\":\"saya di perusahaan a dibayar sebanyak 7jt tapi di perusahaan b saya ga digaji\",\"alasan_berhenti\":\"di perusahaan a saya ketauan mencuri 10 gagang sapu tapi di perusahaan b saya ga sengaja bakar ruangan bos saya\"},\"training_kursus\":[{\"materi\":\"Materi 1\",\"penyelenggara\":\"UD SEJAHTERA ABADI\",\"tahun\":\"2022\",\"tempat\":\"Alamat 1\"},{\"materi\":\"Materi 2\",\"penyelenggara\":\"UD SEJAHTERA ABADI\",\"tahun\":\"2023\",\"tempat\":\"Alamat 2\"}],\"organisasi\":[{\"nama\":\"Organisasai 1\",\"tempat\":\"ISTTS\",\"masa\":\"2002-2010\",\"jabatan\":\"Ketua Provinsional\"},{\"nama\":\"Organisasai 2\",\"tempat\":\"ITS\",\"masa\":\"1970-2022\",\"jabatan\":\"Jabatan Menjamin Kesejahteraan\"}],\"bahasa_dikuasai\":[{\"bahasa\":\"Indonesia\",\"berbicara\":\"kurang/cukup/baik\",\"menulis\":\"kurang/cukup/baik\",\"mendengar\":\"kurang/cukup/baik\"}],\"keterangan_kerja\":{\"lama_berhenti_kerja\":\"kira-kira 10 tahun sebelum\",\"bisa_mulai_bekerja\":\"sekarang bole\",\"kenalan_perusahaan\":\"ya/tidak\",\"kenalan\":{\"nama\":\"Orang 1\",\"alamat\":\"Alamat 1\",\"jabatan\":\"Pegawai Marketing\"}},\"pelatihan_kerja\":\"ya/tidak\",\"tujuan_kerja\":\"saya ingin kerja karena ini\",\"kendaraan\":{\"keterangan\":\"Mobil L 1234 AB\",\"kepemilikan\":\"pribadi/ortu/saudara/dll\"},\"hobi\":\"hobi sayaaaaa\",\"harapan_gaji\":\"ah saya mau gaji 10jt per hari\",\"masalah_hukum\":\"pernah masalah hukum ga yaa hmmm\",\"kelebihan\":\"kelebihan saya pertama adalah\",\"kekurangan\":\"kekurangan saya pertama adalah\",\"kepuasan_keadaan_diri\":\"saya sangat puas\",\"prestasi\":[{\"jenis\":\"binaraga\",\"bidang\":\"olahraga\",\"tahun\":\"2022\"},{\"jenis\":\"aktor terbaik\",\"bidang\":\"film\",\"tahun\":\"2019\"}],\"seni_dikuasai\":{\"jenis\":[\"musik\",\"suara\",\"lukisan\"]},\"orang_terdekat\":[{\"nama\":\"Orang 1\",\"alamat\":\"Alamat 1\",\"telepon\":\"0812345678\"},{\"nama\":\"Orang 2\",\"alamat\":\"Alamat 2\",\"telepon\":\"0812345678\"}],\"tanggal_biodata\":\"Malang, 20 Januari 2022\"}',1,'2022-01-29 16:25:20','2022-01-29 16:27:05'),
('d@d.com','{\"nama_lengkap\":\"Lawrence Patrick Sianto\",\"nama_panggilan\":\"Lawrence\",\"alamat_ktp\":\"Jalan Jalan II\",\"alamat_skg\":\"Jalan Jalan III\",\"no_hp\":\"0812345678\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"kewarganegaraan\":\"WNI\",\"suku\":\"tionghoa\",\"agama\":\"kristen\",\"usia\":\"20\",\"tinggi_badan\":\"164\",\"berat_badan\":\"50.2\",\"no_identitas\":\"981231515214561\",\"golongan_darah\":\"O\",\"no_npwp\":\"123456789\",\"email\":\"abc@def.com\",\"kesehatan\":{\"keadaan\":\"baik/kurang sesuai\",\"cacat\":\"ya/tidak\",\"sakit_keras\":\"ya/tidak\",\"kapan\":\"-/januari 2022\"},\"status_nikah\":{\"menikah\":\"ya/tidak\",\"nama_suami_istri\":\"perempuan laki\",\"nama_anak\":\"anak saya\"},\"pendidikan\":[{\"tingkat\":\"SMP\",\"jurusan\":\"IPA\",\"nama_sekolah\":\"SMP MASA BODO\",\"kota\":\"Surabaya\",\"tahun_lulus\":\"2021\"},{\"tingkat\":\"SMA\",\"jurusan\":\"IPA\",\"nama_sekolah\":\"SMA MASA SIH\",\"kota\":\"Surabaya\",\"tahun_lulus\":\"2022\"}],\"alasan_bekerja\":\"ini deskripsi bla bla bla bla bla\",\"keluarga\":{\"orang_tua\":[{\"nama\":\"Orang Tua 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 1\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Ibu Rumah Tangga\"},{\"nama\":\"Orang Tua 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 2\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Arsitek\"}],\"istri_suami\":[{\"nama\":\"Suami 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 3\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Chef\"},{\"nama\":\"Istri 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 4\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Dokter\"}],\"anak_kandung\":[{\"nama\":\"Anak 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 4\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Chef\"},{\"nama\":\"Anak 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 5\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Dosen\"}],\"saudara_kandung\":[{\"nama\":\"Saudara 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 6\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Guru\"},{\"nama\":\"Saudara 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 7\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Penjual Jamu\"}]},\"riwayat_pekerjaan\":{\"riwayat\":[{\"dari\":\"01 Januari 1970\",\"sampai\":\"02 Januari 1970\",\"nama_perusahaan\":\"PT ABADI ABADI\",\"kota\":\"Pasuruan\",\"bidang_usaha\":\"Pertanian\",\"jabatan\":\"Manager Agrikultur\"},{\"dari\":\"01 Januari 1970\",\"sampai\":\"02 Januari 1970\",\"nama_perusahaan\":\"PT MAKMUR MAKMUR\",\"kota\":\"Bojonegoro\",\"bidang_usaha\":\"Perikanan\",\"jabatan\":\"Manager Lele\"}],\"gaji_diperoleh\":\"saya di perusahaan a dibayar sebanyak 7jt tapi di perusahaan b saya ga digaji\",\"alasan_berhenti\":\"di perusahaan a saya ketauan mencuri 10 gagang sapu tapi di perusahaan b saya ga sengaja bakar ruangan bos saya\"},\"training_kursus\":[{\"materi\":\"Materi 1\",\"penyelenggara\":\"UD SEJAHTERA ABADI\",\"tahun\":\"2022\",\"tempat\":\"Alamat 1\"},{\"materi\":\"Materi 2\",\"penyelenggara\":\"UD SEJAHTERA ABADI\",\"tahun\":\"2023\",\"tempat\":\"Alamat 2\"}],\"organisasi\":[{\"nama\":\"Organisasai 1\",\"tempat\":\"ISTTS\",\"masa\":\"2002-2010\",\"jabatan\":\"Ketua Provinsional\"},{\"nama\":\"Organisasai 2\",\"tempat\":\"ITS\",\"masa\":\"1970-2022\",\"jabatan\":\"Jabatan Menjamin Kesejahteraan\"}],\"bahasa_dikuasai\":[{\"bahasa\":\"Indonesia\",\"berbicara\":\"kurang/cukup/baik\",\"menulis\":\"kurang/cukup/baik\",\"mendengar\":\"kurang/cukup/baik\"}],\"keterangan_kerja\":{\"lama_berhenti_kerja\":\"kira-kira 10 tahun sebelum\",\"bisa_mulai_bekerja\":\"sekarang bole\",\"kenalan_perusahaan\":\"ya/tidak\",\"kenalan\":{\"nama\":\"Orang 1\",\"alamat\":\"Alamat 1\",\"jabatan\":\"Pegawai Marketing\"}},\"pelatihan_kerja\":\"ya/tidak\",\"tujuan_kerja\":\"saya ingin kerja karena ini\",\"kendaraan\":{\"keterangan\":\"Mobil L 1234 AB\",\"kepemilikan\":\"pribadi/ortu/saudara/dll\"},\"hobi\":\"hobi sayaaaaa\",\"harapan_gaji\":\"ah saya mau gaji 10jt per hari\",\"masalah_hukum\":\"pernah masalah hukum ga yaa hmmm\",\"kelebihan\":\"kelebihan saya pertama adalah\",\"kekurangan\":\"kekurangan saya pertama adalah\",\"kepuasan_keadaan_diri\":\"saya sangat puas\",\"prestasi\":[{\"jenis\":\"binaraga\",\"bidang\":\"olahraga\",\"tahun\":\"2022\"},{\"jenis\":\"aktor terbaik\",\"bidang\":\"film\",\"tahun\":\"2019\"}],\"seni_dikuasai\":{\"jenis\":[\"musik\",\"suara\",\"lukisan\"]},\"orang_terdekat\":[{\"nama\":\"Orang 1\",\"alamat\":\"Alamat 1\",\"telepon\":\"0812345678\"},{\"nama\":\"Orang 2\",\"alamat\":\"Alamat 2\",\"telepon\":\"0812345678\"}],\"tanggal_biodata\":\"Malang, 20 Januari 2022\"}',1,'2022-01-30 09:44:09','2022-01-30 09:44:09'),
('e@e.com','{\"nama_lengkap\":\"Lawrence Patrick Sianto\",\"nama_panggilan\":\"Lawrence\",\"alamat_ktp\":\"Jalan Jalan II\",\"alamat_skg\":\"Jalan Jalan III\",\"no_hp\":\"0812345678\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"kewarganegaraan\":\"WNI\",\"suku\":\"tionghoa\",\"agama\":\"kristen\",\"usia\":\"20\",\"tinggi_badan\":\"164\",\"berat_badan\":\"50.2\",\"no_identitas\":\"981231515214561\",\"golongan_darah\":\"O\",\"no_npwp\":\"123456789\",\"email\":\"abc@def.com\",\"kesehatan\":{\"keadaan\":\"baik/kurang sesuai\",\"cacat\":\"ya/tidak\",\"sakit_keras\":\"ya/tidak\",\"kapan\":\"-/januari 2022\"},\"status_nikah\":{\"menikah\":\"ya/tidak\",\"nama_suami_istri\":\"perempuan laki\",\"nama_anak\":\"anak saya\"},\"pendidikan\":[{\"tingkat\":\"SMP\",\"jurusan\":\"IPA\",\"nama_sekolah\":\"SMP MASA BODO\",\"kota\":\"Surabaya\",\"tahun_lulus\":\"2021\"},{\"tingkat\":\"SMA\",\"jurusan\":\"IPA\",\"nama_sekolah\":\"SMA MASA SIH\",\"kota\":\"Surabaya\",\"tahun_lulus\":\"2022\"}],\"alasan_bekerja\":\"ini deskripsi bla bla bla bla bla\",\"keluarga\":{\"orang_tua\":[{\"nama\":\"Orang Tua 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 1\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Ibu Rumah Tangga\"},{\"nama\":\"Orang Tua 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 2\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Arsitek\"}],\"istri_suami\":[{\"nama\":\"Suami 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 3\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Chef\"},{\"nama\":\"Istri 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 4\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Dokter\"}],\"anak_kandung\":[{\"nama\":\"Anak 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 4\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Chef\"},{\"nama\":\"Anak 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 5\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Dosen\"}],\"saudara_kandung\":[{\"nama\":\"Saudara 1\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 6\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Guru\"},{\"nama\":\"Saudara 2\",\"ttl\":\"Surabaya, 01 Januari 1970\",\"alamat\":\"Jalan Alamat 7\",\"pendidikan\":\"SMA\",\"pekerjaan\":\"Penjual Jamu\"}]},\"riwayat_pekerjaan\":{\"riwayat\":[{\"dari\":\"01 Januari 1970\",\"sampai\":\"02 Januari 1970\",\"nama_perusahaan\":\"PT ABADI ABADI\",\"kota\":\"Pasuruan\",\"bidang_usaha\":\"Pertanian\",\"jabatan\":\"Manager Agrikultur\"},{\"dari\":\"01 Januari 1970\",\"sampai\":\"02 Januari 1970\",\"nama_perusahaan\":\"PT MAKMUR MAKMUR\",\"kota\":\"Bojonegoro\",\"bidang_usaha\":\"Perikanan\",\"jabatan\":\"Manager Lele\"}],\"gaji_diperoleh\":\"saya di perusahaan a dibayar sebanyak 7jt tapi di perusahaan b saya ga digaji\",\"alasan_berhenti\":\"di perusahaan a saya ketauan mencuri 10 gagang sapu tapi di perusahaan b saya ga sengaja bakar ruangan bos saya\"},\"training_kursus\":[{\"materi\":\"Materi 1\",\"penyelenggara\":\"UD SEJAHTERA ABADI\",\"tahun\":\"2022\",\"tempat\":\"Alamat 1\"},{\"materi\":\"Materi 2\",\"penyelenggara\":\"UD SEJAHTERA ABADI\",\"tahun\":\"2023\",\"tempat\":\"Alamat 2\"}],\"organisasi\":[{\"nama\":\"Organisasai 1\",\"tempat\":\"ISTTS\",\"masa\":\"2002-2010\",\"jabatan\":\"Ketua Provinsional\"},{\"nama\":\"Organisasai 2\",\"tempat\":\"ITS\",\"masa\":\"1970-2022\",\"jabatan\":\"Jabatan Menjamin Kesejahteraan\"}],\"bahasa_dikuasai\":[{\"bahasa\":\"Indonesia\",\"berbicara\":\"kurang/cukup/baik\",\"menulis\":\"kurang/cukup/baik\",\"mendengar\":\"kurang/cukup/baik\"}],\"keterangan_kerja\":{\"lama_berhenti_kerja\":\"kira-kira 10 tahun sebelum\",\"bisa_mulai_bekerja\":\"sekarang bole\",\"kenalan_perusahaan\":\"ya/tidak\",\"kenalan\":{\"nama\":\"Orang 1\",\"alamat\":\"Alamat 1\",\"jabatan\":\"Pegawai Marketing\"}},\"pelatihan_kerja\":\"ya/tidak\",\"tujuan_kerja\":\"saya ingin kerja karena ini\",\"kendaraan\":{\"keterangan\":\"Mobil L 1234 AB\",\"kepemilikan\":\"pribadi/ortu/saudara/dll\"},\"hobi\":\"hobi sayaaaaa\",\"harapan_gaji\":\"ah saya mau gaji 10jt per hari\",\"masalah_hukum\":\"pernah masalah hukum ga yaa hmmm\",\"kelebihan\":\"kelebihan saya pertama adalah\",\"kekurangan\":\"kekurangan saya pertama adalah\",\"kepuasan_keadaan_diri\":\"saya sangat puas\",\"prestasi\":[{\"jenis\":\"binaraga\",\"bidang\":\"olahraga\",\"tahun\":\"2022\"},{\"jenis\":\"aktor terbaik\",\"bidang\":\"film\",\"tahun\":\"2019\"}],\"seni_dikuasai\":{\"jenis\":[\"musik\",\"suara\",\"lukisan\"]},\"orang_terdekat\":[{\"nama\":\"Orang 1\",\"alamat\":\"Alamat 1\",\"telepon\":\"0812345678\"},{\"nama\":\"Orang 2\",\"alamat\":\"Alamat 2\",\"telepon\":\"0812345678\"}],\"tanggal_biodata\":\"Malang, 20 Januari 2022\"}',1,'2022-01-30 10:01:19','2022-01-30 10:01:19');

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

/*Data for the table `section_result` */

insert  into `section_result`(`id`,`section_id`,`exam_session`,`start_date`,`finish_date`,`status`,`createdAt`,`updatedAt`) values 
(1,3,1,'2022-01-28 08:00:00','2022-01-28 11:00:00',1,'2022-01-30 19:23:37','2022-01-30 12:28:14'),
(2,1,2,'2022-01-23 19:23:29','2022-01-30 19:23:32',1,'2022-01-30 19:23:37','2022-01-30 19:23:37'),
(3,2,3,'2022-01-23 19:23:29','2022-01-30 19:23:32',1,'2022-01-30 19:23:37','2022-01-30 19:23:37'),
(4,2,1,'2022-01-23 19:23:29','2022-01-30 19:23:32',1,'2022-01-30 19:23:37','2022-01-30 19:23:37'),
(5,3,1,'2022-01-28 08:00:00','2022-01-28 11:00:00',1,'2022-01-30 12:27:40','2022-01-30 12:27:40');

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
