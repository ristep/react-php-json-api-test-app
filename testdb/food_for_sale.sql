-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 27, 2021 at 08:46 PM
-- Server version: 8.0.25
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `food_for_sale`
--

CREATE TABLE `food_for_sale` (
  `id` int NOT NULL,
  `title` varchar(128) NOT NULL,
  `description` text CHARACTER SET utf8mb4,
  `size` varchar(32) CHARACTER SET utf8mb4 DEFAULT NULL,
  `price` decimal(10,0) DEFAULT '0',
  `imgFileName` varchar(512) CHARACTER SET utf8mb4 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `food_for_sale`
--

INSERT INTO `food_for_sale` (`id`, `title`, `description`, `size`, `price`, `imgFileName`) VALUES
(1, 'Spinac Burek', 'Burek whit spinach', '1/4', '50', 'spinac-burek.png'),
(2, 'Capri', 'Pizza Capri', 'Small', '250', 'capri.png'),
(3, 'Cream Cake', 'Creamsta gurabia', 'standard', '120', 'cream-cake.png'),
(4, 'Cabbage', 'Зелка обична', 'Serving', '120', 'cabbage.png'),
(5, 'Freddo Vegan Cappuccino', 'Веганско капучина за шмизли', 'cup', '120', 'freddo_vegan_cappuccino.png'),
(6, 'Fried Cheez', 'Macedonian Fried Chees', 'Small', '170', 'fried-cheez.png'),
(7, 'Hamburger', 'Big Macedonian Hamburger', 'Small', '270', 'hamburger.png'),
(8, 'Fegan Pizza Italiana', 'Gola voda pica', 'Small', '220', 'posna.png'),
(9, 'Pizza French Vegetariana', 'Веганска Пица од Франциа', 'Small', '170', 'vegetariana.png'),
(11, 'Greek Zimoto', 'Grcka glupost', 'Small', '70', 'zimoto_greek.png'),
(13, 'Burek whith urda', 'Macedonian burek', 'Small', '170', 'urda-burek.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `food_for_sale`
--
ALTER TABLE `food_for_sale`
  ADD PRIMARY KEY (`id`),
  ADD KEY `title` (`title`),
  ADD KEY `imgFileName` (`imgFileName`);
ALTER TABLE `food_for_sale` ADD FULLTEXT KEY `description` (`description`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `food_for_sale`
--
ALTER TABLE `food_for_sale`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
