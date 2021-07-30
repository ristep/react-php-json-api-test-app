-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 27, 2021 at 08:44 PM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(32) NOT NULL,
  `role` varchar(32) NOT NULL DEFAULT 'user',
  `first_name` varchar(32) DEFAULT NULL,
  `second_name` varchar(32) DEFAULT NULL,
  `email` varchar(128) NOT NULL,
  `address` varchar(128) DEFAULT NULL,
  `place` varchar(32) DEFAULT NULL,
  `state` varchar(32) DEFAULT NULL,
  `zipcode` varchar(12) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `created_TS` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_TS` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `menu` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `role`, `first_name`, `second_name`, `email`, `address`, `place`, `state`, `zipcode`, `password`, `remember_token`, `created_TS`, `updated_TS`, `menu`) VALUES
(1, 'perkovir', 'supak', 'Peko', '', 'ristepane@gmail23.com', 'Siska 50', 's', 'Tikves', NULL, 'peko', '50d79292-cca3-11e7-a3b8-f46d0451f6e5', '2017-11-18 20:59:06', '2021-07-22 14:23:53', 'null'),
(2, 'markos', 'user', 'Marko', 'Kosovac', 'asd@rr.cc', 'Мизерана Теретаna', 'Жмицевo', 'Шкендиа?', NULL, 'markomarko', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '2017-11-18 20:59:47', '2021-07-20 20:53:04', 'null'),
(3, 'admin', 'admin', 'Rootalko', 'Spletkoz', 'rdfofdokito@gmail.com', 'Shupakova 34', 'Кавадарци', 'Македонија', NULL, 'admin', '82149dd4-cca3-11e7-a3b8-f46d0451f6e5', '2017-11-18 21:00:29', '2021-07-17 19:22:20', 'null'),
(5, 'mavro', 'user', 'Mavricieus', 'Mavrovskic', 'ristepan123@gmail.com', 'Siska 50', 'Kavadarci', 'Tikves', NULL, 'mavro', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '2017-11-18 20:59:47', '2021-07-17 18:22:10', '{\"lista\": {\"to\": \"/home\", \"title\": \"Home\"}, \"vertical\": false}'),
(32, 'zek', 'user', '', 'ssd', 'ristepang@mail.com', 'Siska 50s', 'Мутинско негде :)xxx', 'ass', NULL, 'zekzek', NULL, '2019-05-04 16:14:22', '2021-07-19 17:45:50', NULL),
(33, 'anonymous', 'anonymous', 'Pepi', 'Donov', 'sss@gupto.vom', 'anonimo', 'Nope', NULL, NULL, 'anonymous', NULL, '2020-06-02 20:58:10', '2021-07-22 09:38:50', NULL),
(34, 'dibe', 'user', 'Diboas', 'Diboantich', 'dibo@yahoo.com', 'Dibolska 76/34 ', 'Шилимбегово', 'Шкендиа', NULL, 'diboa12', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', '2017-11-18 20:59:47', '2020-09-05 18:14:32', '{\"lista\": {\"to\": \"/home\", \"title\": \"Home\"}, \"vertical\": false}'),
(47, 'mutalsko22', 'user', 'Roostalko2', 'Spletsko2', 'ristepan@gmail.comx', 'sssssss', 'cxcxx', 'bbbbb', NULL, NULL, NULL, '2020-08-25 16:02:38', '2021-07-17 19:49:19', NULL),
(48, 'mutals2ko22', 'user', 'Roostalko2', 'Spletsko2', 'ristepan@gmail.com', 'Siska 50', 'Niva n dedo marko', 'Tikves', NULL, NULL, NULL, '2020-08-25 16:06:00', '2021-07-19 19:33:52', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
