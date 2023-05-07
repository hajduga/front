-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: pracainzynierska
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `enabled` bit(1) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,_binary '',NULL,NULL,'{bcrypt}$2a$10$s4559s0uAG8s92YNRwz9t.xP6s4Mk9IzEMlSKspu8y8ovS4TY4.AK','ROLE_ADMIN','admin@admin.pl'),(7,_binary '','Karolina','Figura','{bcrypt}$2a$10$t4/moHyUeCQ6aQ60IUHjJunbO.MoFp2yp2cPv8a6j63bxXAa28xia','ROLE_SPECIALIST_REQUEST','karolina.figura@gmail.com'),(8,_binary '','Hanna','Witkowska','{bcrypt}$2a$10$GlIzNWjH6/MbodwiJhhYheJNdjPoPt7g2kj2CUNGUOfjR.udRSZdS','ROLE_SPECIALIST','hania.witkowska@gmail.com'),(9,_binary '','Jakub','Biernat','{bcrypt}$2a$10$xf/vT5/DhI/KKMtYV9cDp.AO3UNYiFt9RozskhbJkOgVQhVN.ohv.','ROLE_SPECIALIST','jakub.biernat@gmail.com'),(10,_binary '','Konrad','Tytoń','{bcrypt}$2a$10$Bfg/J7qEpSJGVIuxVHSZteI.unuEvUZVi3ahKuDoQea8VZoX/oti2','ROLE_SPECIALIST','konrad.tyton@gmail.com'),(11,_binary '','Łukasz','Gejewski','{bcrypt}$2a$10$ZBawqop4uuNvpd3zMMIlCOXzChtW/v2WC8XQGnXJOEHyhiRJHg3Zm','ROLE_SPECIALIST','lukasz.gejewski@gmail.com'),(12,_binary '','Roksana','Mlyn','{bcrypt}$2a$10$wrDJvsbBg2y1.1kDfotSNOozKBA31VHVKRGG465HHdlvraT4haqJm','ROLE_SPECIALIST','roksana.mlyn@gmail.com'),(13,_binary '','Dawid','Malina','{bcrypt}$2a$10$UF9FEbPb.1u58MQ7HFtTmOwzYAF0LOMXeaIbi8jyNx3bFCpShwh6u','ROLE_SPECIALIST','dawid.malina@gmai.com'),(14,_binary '','Henryk','Nida','{bcrypt}$2a$10$47u0E3Nsl2mBbwsKIVh3v.9A25Xbw0Rwkyg.Iq7dhR0F8h8GOkjG6','ROLE_SPECIALIST','henryk.nida@gmail.com'),(15,_binary '','Agnieszka','Małek','{bcrypt}$2a$10$cgx858ktgwihUTFQDpXgDOZYtdhl0q1RxPWtkp7nHbqz7pj9SKr9.','ROLE_SPECIALIST','agnieszka.malek@gmail.com'),(16,_binary '','Sara','Widok','{bcrypt}$2a$10$3ZZROqmLiEtRlMelT8DxW.HlXqqWAQcEoxJ6z/9EwH77U69yeui3G','ROLE_SPECIALIST','sara.widok@gmail.com'),(17,_binary '','Lucyna','Kubek','{bcrypt}$2a$10$I.MtvbTgR/7AGex7FV805eobSuCkqwJPM41qcE5aPP/g3CrWAnCSq','ROLE_SPECIALIST','lucyna.kubek@gmail.com'),(18,_binary '','Grażyna','Zielony','{bcrypt}$2a$10$ZIA1yNOLVK7IWtymnEi2LehJ9fjmOC2YqEU/UPRpojc/o/btPf8mS','ROLE_SPECIALIST','grazyna.zielony@gmail.com'),(19,_binary '','Ola','Biała','{bcrypt}$2a$10$JpNIsgQEFeBSpb96stQN/eKXiIrpeahLjOMIOwRBFQkagrnFzdQsa','ROLE_USER','ola.biala@gmail.com'),(20,_binary '','Maciej','Kita','{bcrypt}$2a$10$fA9yTfOHx3eA7ZzWkwAuL.1d.J9AOJqXaM33XjjR/zCRZ9Ogs2Q.S','ROLE_SPECIALIST_REQUEST','maciej.kita@gmail.com'),(21,_binary '','Wiktoria','Lizak','{bcrypt}$2a$10$QEEyU3JLdWkT8A/WlPnfFOD7LcbPThH5cZHNorsA6VGgO70Ids2B6','ROLE_SPECIALIST_REQUEST','wiktoria.lizak@gmail.com'),(22,_binary '','Mariusz','Kwiat','{bcrypt}$2a$10$NdBTYbul2AHmJLjR9vLxCukaN7LTN/.pn9DtIAdZYj8f09gUWVmAW','ROLE_SPECIALIST_REQUEST','mariusz.kwiat@gmail.com'),(23,_binary '','Tomasz','Lis','{bcrypt}$2a$10$yLAlAn.zPPyOXcwaGZKhTONEDqX9zGdYjqrGHg25rHST1WKD.uRGC','ROLE_SPECIALIST_REQUEST','tomasz.lis@gmail.com'),(24,_binary '','Arkadiusz','Bujok','{bcrypt}$2a$10$6IoywhGC8YwJElIK5bVw7.Qpg98ZHVV24t8BkVHuHNySO2ijfMmSu','ROLE_SPECIALIST','arek.bujok@gmail.com'),(25,_binary '','Radosław','Węgiel','{bcrypt}$2a$10$kcYcNCGQDIbQau8Dxx93Pe3DC7GpJ/7BkxiApgIb0BZx5Vucl/Tg6','ROLE_SPECIALIST_REQUEST','radek.wegiel@gmail.com'),(26,_binary '','Paulina','Jaka','{bcrypt}$2a$10$FmhF.zXbTIpcv9udRQA81un1VTd2jfRDWvlu85XLSDR.pM8HxLzce','ROLE_SPECIALIST_REQUEST','paulina.jaka@gmail.com'),(27,_binary '','Dominika','Tran','{bcrypt}$2a$10$EZpFk/YiJVlgcODdQnTl6urXCTZSqqGSM8t0fC6z8C1rKrm7xVUKm','ROLE_SPECIALIST_REQUEST','dominika.tran@gmail.com'),(28,_binary '','Franek','Mazak','{bcrypt}$2a$10$FGBSvHX1x9.v9JUwG3xn0OORd75I.Ajj.8wARSFabLT4bLYcjsYIG','ROLE_SPECIALIST_REQUEST','franek.mazak@gmail.com'),(29,_binary '','Ela','Kula','{bcrypt}$2a$10$Y5po2kheczSrIseiwvWSPOLZ2i5EDWdf5mKJYWioPhDV2c1qSmcli','ROLE_SPECIALIST_REQUEST','ela.kula@gmail.com'),(30,_binary '','Sebastian','Kowalski','{bcrypt}$2a$10$R3LqfuonhUOsTieJADyAgOxPnzp/9ux8vRyqLY/kpXbbkJ8tpt/Hu','ROLE_USER','seba.kowalski@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-31 18:15:52
