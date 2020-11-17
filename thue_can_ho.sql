-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 17, 2020 lúc 04:52 PM
-- Phiên bản máy phục vụ: 10.4.13-MariaDB
-- Phiên bản PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `thue_can_ho`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binh_luan`
--

CREATE TABLE `binh_luan` (
  `ma_bl` int(12) NOT NULL COMMENT 'mã bình luận',
  `ma_can` int(12) NOT NULL COMMENT 'mã căn hộ',
  `ma_tk` int(12) NOT NULL COMMENT 'mã tài khoản',
  `noi_dung` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'nội dung',
  `ngay_bl` date DEFAULT NULL COMMENT 'ngày bình luận',
  `an_hien` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'ẩn hiện'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `can_ho`
--

CREATE TABLE `can_ho` (
  `ma_can` int(12) NOT NULL COMMENT 'mã căn hộ',
  `ma_quan` int(12) NOT NULL COMMENT 'mã quận',
  `ma_loai` int(12) NOT NULL COMMENT 'mã loại căn',
  `dia_chi` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Địa chỉ',
  `ten_can_ho` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'tên căn hộ',
  `nam_xd` year(4) DEFAULT NULL COMMENT 'năm xây dựng',
  `dien_tich` float DEFAULT NULL COMMENT 'diện tích ',
  `tang` int(11) DEFAULT NULL COMMENT 'Số tầng',
  `huong_nha` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'hướng nhà',
  `tien_ich` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Tiện ích',
  `chi_phi_khac` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'chi phí khác',
  `so_phong_ngu` int(11) DEFAULT NULL COMMENT 'Số phòng ngủ',
  `so_phong_vs` int(11) NOT NULL COMMENT 'Số phòng vệ sinh',
  `gia_thue` float NOT NULL COMMENT 'Giá thuê',
  `hinh` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hinha` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hinhb` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hinhc` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `an_hien` int(4) DEFAULT NULL COMMENT 'Ẩn hiện',
  `ghi_chu` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'ghi chú'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `can_ho`
--

INSERT INTO `can_ho` (`ma_can`, `ma_quan`, `ma_loai`, `dia_chi`, `ten_can_ho`, `nam_xd`, `dien_tich`, `tang`, `huong_nha`, `tien_ich`, `chi_phi_khac`, `so_phong_ngu`, `so_phong_vs`, `gia_thue`, `hinh`, `hinha`, `hinhb`, `hinhc`, `an_hien`, `ghi_chu`) VALUES
(4, 17, 1, '89 Quang Trung, phường 10, Quận Gò Vấp', 'Cho thuê căn hộ dịch vụ - CityLand Park Hill -  Quận Gò Vấp', 2020, 150, 2, 'Đông Nam', '<p>-&nbsp;<strong>Vị tr&iacute; đẹp, thuận lợi giao th&ocirc;ng</strong>.&nbsp;Khu d&acirc;n cư văn minh, cao cấp, an ninh 24/7.</p>\r\n\r\n<p>-&nbsp;Gần c&aacute;c đường di chuyển sang&nbsp;trung t&acirc;m, 10 ph&uacute;t di chuyển đến s&acirc;n bay TSN</p>\r\n\r\n<p>- Khu d&acirc;n cư v&agrave; xung quanh', 'Xe: 100k/1 tháng.\r\nĐiện nước: Theo giá của nhà nước.', 3, 1, 5000000, 'b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg', 0, 'Đả thuê'),
(5, 17, 1, '89 Quang Trung, phường 10, Quận Gò Vấp', 'Cho thuê căn hộ dịch vụ - CityLand Park Hill -  Quận Gò Vấp', 2018, 15, 5, 'Đông Nam', '<p>-&nbsp;<strong>Vị tr&iacute; đẹp, thuận lợi giao th&ocirc;ng</strong>.&nbsp;Khu d&acirc;n cư văn minh, cao cấp, an ninh 24/7.</p>\r\n\r\n<p>-&nbsp;Gần c&aacute;c đường di chuyển sang&nbsp;trung t&acirc;m, 10 ph&uacute;t di chuyển đến s&acirc;n bay TSN</p>\r\n\r\n<p>- Khu d&acirc;n cư v&agrave; xung quanh', 'Xe: 100/1tháng\r\nĐiện nước: Theo giá nhà nước', 4, 1, 6000000, 'anh.jpg', 'a1.jpg', '31191_753762.jpg', '3d.jpg', 1, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dat_lich`
--

CREATE TABLE `dat_lich` (
  `ma_dat` int(12) NOT NULL COMMENT 'mã đặt lịch xem',
  `ma_can` int(12) NOT NULL COMMENT 'mã căn hộ',
  `ma_tk` int(12) DEFAULT NULL COMMENT 'mã tài khoản',
  `ngay_xem` date DEFAULT NULL COMMENT 'ngày xem',
  `ngay_dat` date DEFAULT NULL COMMENT 'ngày đặt',
  `sdt` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ho_ten` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `dat_lich`
--

INSERT INTO `dat_lich` (`ma_dat`, `ma_can`, `ma_tk`, `ngay_xem`, `ngay_dat`, `sdt`, `ho_ten`, `email`) VALUES
(1, 4, NULL, '0000-00-00', NULL, '', '', ''),
(2, 4, NULL, '2020-11-19', NULL, 'conrongkute@gma', 'Tuấn Đạt', '0337157356'),
(3, 4, NULL, '2020-11-19', NULL, 'conrongkute@gma', 'Tuấn Đạt', '0337157356');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khach_hang`
--

CREATE TABLE `khach_hang` (
  `ma_tk` int(12) NOT NULL COMMENT 'mã tài khoản',
  `ho_ten` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'họ tên khách hàng',
  `hinh` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ten_tk` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'tên tài khoản',
  `mat_khau` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'mật khẩu',
  `sdt` int(10) DEFAULT NULL COMMENT 'số điện thoại',
  `kich_hoat` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'kích hoạt',
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'email',
  `vai_tro` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'vai trò',
  `random_key` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'dãy số ngẫu nhiên'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `khach_hang`
--

INSERT INTO `khach_hang` (`ma_tk`, `ho_ten`, `hinh`, `ten_tk`, `mat_khau`, `sdt`, `kich_hoat`, `email`, `vai_tro`, `random_key`) VALUES
(1, 'anh quoc ', 'image_2.jpg', 'anhquoc', '12345', 868970582, 1, 'ngoanhquoc5@gmail.com', 1, '123456'),
(2, 'ngoanhquoc', 'anh.jpg', 'anhquoc123', '123456', 987147942, 1, 'ngoanhquoc11@gmail.com', 1, 'fff46f4128a55e1f7bb1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loai_can`
--

CREATE TABLE `loai_can` (
  `ma_loai` int(12) NOT NULL COMMENT 'mã căn hộ',
  `ten_can` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Tên căn hộ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `loai_can`
--

INSERT INTO `loai_can` (`ma_loai`, `ten_can`) VALUES
(1, 'Căn hộ chung cư'),
(2, 'Nhà riêng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quan`
--

CREATE TABLE `quan` (
  `ma_quan` int(12) NOT NULL COMMENT 'mã quận',
  `ten_quan` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Tên quận'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `quan`
--

INSERT INTO `quan` (`ma_quan`, `ten_quan`) VALUES
(1, 'Quận 1'),
(2, 'Quận 2'),
(3, 'Quận 3'),
(4, 'Quận 4'),
(5, 'Quận 5'),
(6, 'Quận 6'),
(7, 'Quận 7'),
(8, 'Quận 8'),
(9, 'Quận 9'),
(10, 'Quận 10'),
(11, 'Quận 11'),
(12, 'Quận 12'),
(13, 'Quận Bình Thạnh'),
(14, 'Quận Tân Bình'),
(15, 'Quận Bình Tân'),
(16, 'Quận Tân Phú'),
(17, 'Quận Gò Vấp'),
(18, 'Quận Phú Nhuận'),
(19, 'Huyện Hóc Môn'),
(20, 'Huyện Nhà Bè');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `binh_luan`
--
ALTER TABLE `binh_luan`
  ADD PRIMARY KEY (`ma_bl`),
  ADD KEY `Fk_binhluan_Kh` (`ma_tk`),
  ADD KEY `Fk_binhluan_canho` (`ma_can`);

--
-- Chỉ mục cho bảng `can_ho`
--
ALTER TABLE `can_ho`
  ADD PRIMARY KEY (`ma_can`),
  ADD KEY `FK_canho_loai` (`ma_loai`),
  ADD KEY `FK_canho_quan` (`ma_quan`);

--
-- Chỉ mục cho bảng `dat_lich`
--
ALTER TABLE `dat_lich`
  ADD PRIMARY KEY (`ma_dat`),
  ADD KEY `Fk_datlich_tk` (`ma_tk`),
  ADD KEY `Fk_datlich_canho` (`ma_can`);

--
-- Chỉ mục cho bảng `khach_hang`
--
ALTER TABLE `khach_hang`
  ADD PRIMARY KEY (`ma_tk`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `loai_can`
--
ALTER TABLE `loai_can`
  ADD PRIMARY KEY (`ma_loai`);

--
-- Chỉ mục cho bảng `quan`
--
ALTER TABLE `quan`
  ADD PRIMARY KEY (`ma_quan`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `binh_luan`
--
ALTER TABLE `binh_luan`
  MODIFY `ma_bl` int(12) NOT NULL AUTO_INCREMENT COMMENT 'mã bình luận';

--
-- AUTO_INCREMENT cho bảng `can_ho`
--
ALTER TABLE `can_ho`
  MODIFY `ma_can` int(12) NOT NULL AUTO_INCREMENT COMMENT 'mã căn hộ', AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `dat_lich`
--
ALTER TABLE `dat_lich`
  MODIFY `ma_dat` int(12) NOT NULL AUTO_INCREMENT COMMENT 'mã đặt lịch xem', AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `khach_hang`
--
ALTER TABLE `khach_hang`
  MODIFY `ma_tk` int(12) NOT NULL AUTO_INCREMENT COMMENT 'mã tài khoản', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `loai_can`
--
ALTER TABLE `loai_can`
  MODIFY `ma_loai` int(12) NOT NULL AUTO_INCREMENT COMMENT 'mã căn hộ', AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `quan`
--
ALTER TABLE `quan`
  MODIFY `ma_quan` int(12) NOT NULL AUTO_INCREMENT COMMENT 'mã quận', AUTO_INCREMENT=22;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `binh_luan`
--
ALTER TABLE `binh_luan`
  ADD CONSTRAINT `Fk_binhluan_Kh` FOREIGN KEY (`ma_tk`) REFERENCES `khach_hang` (`ma_tk`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_binhluan_canho` FOREIGN KEY (`ma_can`) REFERENCES `can_ho` (`ma_can`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `can_ho`
--
ALTER TABLE `can_ho`
  ADD CONSTRAINT `FK_canho_loai` FOREIGN KEY (`ma_loai`) REFERENCES `loai_can` (`ma_loai`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_canho_quan` FOREIGN KEY (`ma_quan`) REFERENCES `quan` (`ma_quan`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `dat_lich`
--
ALTER TABLE `dat_lich`
  ADD CONSTRAINT `Fk_datlich_canho` FOREIGN KEY (`ma_can`) REFERENCES `can_ho` (`ma_can`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_datlich_tk` FOREIGN KEY (`ma_tk`) REFERENCES `khach_hang` (`ma_tk`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
