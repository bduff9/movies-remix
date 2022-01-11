-- CreateTable
CREATE TABLE `movies` (
    `MOVIEID` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `ITEMID` INTEGER UNSIGNED NULL,
    `MOVIETITLE` VARCHAR(99) NULL,
    `MOVIEURL` VARCHAR(99) NULL,

    INDEX `idx_ITEMID`(`ITEMID`),
    INDEX `idx_MOVIETITLE`(`MOVIETITLE`),
    INDEX `idx_MOVIEURL`(`MOVIEURL`),
    PRIMARY KEY (`MOVIEID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movitems` (
    `ITEMID` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `ORDERED` INTEGER NULL,
    `ITEMNAME` VARCHAR(99) NOT NULL,
    `ITEMCASE` ENUM('Plain', 'Box', 'Slipcover', 'Digibook', 'Steelbook') NOT NULL,
    `ITEMDIGITL` ENUM('None', 'DC', 'UV', 'DC+UV') NOT NULL DEFAULT 'None',
    `ITEM3D` ENUM('Y', 'N') NOT NULL DEFAULT 'N',
    `ITEMWATCH` ENUM('Y', 'N') NOT NULL DEFAULT 'N',
    `ITEMFORMAT` ENUM('Blu-ray', 'DVD', 'Ultra HD', 'UV', 'Digital') NOT NULL,
    `ITEMSTATUS` ENUM('Owned', 'Wanted', 'Selling', 'Waiting') NOT NULL,
    `ITEMAVAIL` DATE NULL,
    `ITEMURL` VARCHAR(99) NOT NULL,
    `ITEMNOTES` TEXT NULL,

    UNIQUE INDEX `idx_ORDERED`(`ORDERED`),
    INDEX `idx_ITEM3D`(`ITEM3D`),
    INDEX `idx_ITEMAVAIL`(`ITEMAVAIL`),
    INDEX `idx_ITEMCASE`(`ITEMCASE`),
    INDEX `idx_ITEMDIGITL`(`ITEMDIGITL`),
    INDEX `idx_ITEMFORMAT`(`ITEMFORMAT`),
    INDEX `idx_ITEMNAME`(`ITEMNAME`),
    INDEX `idx_ITEMSTATUS`(`ITEMSTATUS`),
    INDEX `idx_ITEMURL`(`ITEMURL`),
    INDEX `idx_ITEMWATCH`(`ITEMWATCH`),
    PRIMARY KEY (`ITEMID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` VARCHAR(191) NULL,
    `access_token` VARCHAR(191) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` VARCHAR(191) NULL,
    `session_state` VARCHAR(191) NULL,
    `oauth_token_secret` VARCHAR(191) NULL,
    `oauth_token` VARCHAR(191) NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
