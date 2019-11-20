-- -------------------------------------------------------------
-- TablePlus 2.11.2(278)
--
-- https://tableplus.com/
--
-- Database: tshirt
-- Generation Time: 2019-11-20 21:25:28.4750
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `andras` (
  `id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `namn` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `beskrivning` text COLLATE utf8mb4_general_ci,
  `imgSrc` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pris` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `andras` (`id`, `namn`, `beskrivning`, `imgSrc`, `pris`) VALUES ('annans-1', 'Orange', 'Orange grund färg med flicka i siluette', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CYwyalpSD_23fYnqMCyjA-Tr0VjSEKLDpnR7BQuJNtMA9p2HsQ', '199'),
('annans-2', 'Multi färgad', 'Fåglar och moln', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Ng5bDUzzvTTMqDp89HP4Pw91GDP0g_4FZpxbwIh7gA9siDftiQ', '199'),
('annans-3', 'Vit ko', 'Vit med två kor', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfBXAuHgVwgbxRpTE_mSrHw2HaBRGshb18eCp8sPliG4WaD1ySA', '199'),
('annans-4', 'Grå katt', 'Grå med katt', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGGHLhH_jI83oXb5V9uxH1g1vxBW99UdBiAuAEHHGPadJUV73vw', '199'),
('annans-5', 'Vit med rött', 'Vit med röd blomma och kollibri', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeVharsbENVj_LU0mcuKmG9HauWgrs-k3XzTtsdDtfeYouRNd', '199'),
('annans-6', 'Vit med kafe', 'Vit med kafe siluette', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX91g9aZRsvrAMoO-oDfBQmNRKbxjaCZcDF-QUaLMS5Sd6T5NehQ', '199');


/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;