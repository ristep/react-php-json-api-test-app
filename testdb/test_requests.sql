-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 27, 2021 at 08:41 PM
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
-- Table structure for table `test_requests`
--

CREATE TABLE `test_requests` (
  `id` bigint NOT NULL,
  `title` varchar(32) CHARACTER SET utf8mb4 NOT NULL,
  `comment` varchar(128) NOT NULL,
  `jsonRequest` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `test_requests`
--

INSERT INTO `test_requests` (`id`, `title`, `comment`, `jsonRequest`) VALUES
(1, 'getUserToken', 'Geting user token ', '{\"getToken\": {\"password\": \"mavro\", \"username\": \"mavro\"}}'),
(2, 'getUsers', 'Users all whith some atributes', '{\"Listing\": {\"type\": \"users\", \"attributes\": [\"name\", \"first_name\", \"second_name\", \"email\"]}}'),
(3, 'getUser', 'Get User by ID', '{\"Get\": {\"id\": 3, \"type\": \"users\", \"attributes\": [\"name\", \"first_name\", \"second_name\", \"email\", \"place\"]}}'),
(4, 'getUser5all', 'Get User by id all atributes', '{\"Get\": {\"id\": 5, \"type\": \"users\"}}'),
(5, 'getFoods', 'Get foods with some attributes', '{\"Listing\": {\"type\": \"foods\", \"attributes\": [\"id\", \"title\", \"description\"]}}'),
(6, 'getFoodAllAtr', 'Get food all attrib.', '{\"Get\": {\"id\": 3, \"type\": \"foods\"}}'),
(7, 'ListingFoodsAllAll', 'Get All foods All attributes', '{\"Listing\": {\"type\": \"foods\"}}'),
(8, 'ListingUsersPage', 'Get user page by page', '{\"Listing\": {\"page\": {\"limit\": \"2\", \"offset\": 2}, \"type\": \"users\", \"attributes\": [\"name\", \"first_name\", \"second_name\", \"email\", \"place\"]}}'),
(19, 'getUserByKey', 'Get user with keys array', '{\"get\": {\"key\": {\"name\": \"dibe\", \"email\": \"dibo@yahoo.com\"}, \"type\": \"users\"}}'),
(20, 'Listing whith Filter with prams', '', '{\"Listing\": {\"type\": \"users\", \"filter\": {\"params\": {\"broj\": 33, \"imeto\": \"markos\"}, \"template\": \"name <= :imeto and id >= :broj #\"}, \"attributes\": [\"id\", \"name\", \"role\"]}}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `test_requests`
--
ALTER TABLE `test_requests`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`title`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `test_requests`
--
ALTER TABLE `test_requests`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
