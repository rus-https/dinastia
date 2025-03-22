SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- Создаем базу данных, если она не существует
CREATE DATABASE IF NOT EXISTS `messenger` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- Используем базу данных
USE `messenger`;

CREATE TABLE `chat` (
  `tag` varchar(255) NOT NULL,       -- тег запроса
  `name` varchar(255) NOT NULL,      -- Имя пользователя
  `message` MEDIUMTEXT NOT NULL       -- сообщение пользователя
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `news` (
  `id` varchar(255) NOT NULL, -- айди новости
  `Titel` varchar (255) NOT NULL, -- титул страницы
  `comment` varchar (255) NOT NULL, -- Основной текст
  `photo` varchar (255) NOT NULL -- Ссылка наизображение
)