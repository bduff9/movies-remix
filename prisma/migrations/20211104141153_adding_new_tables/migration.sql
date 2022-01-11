-- CreateTable
CREATE TABLE `Movies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `movieItemId` INTEGER NOT NULL,
    `title` VARCHAR(99) NULL,
    `image` VARCHAR(99) NULL,
    `approved` BOOLEAN NOT NULL DEFAULT false,
    `added` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `addedBy` VARCHAR(191) NOT NULL,
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedBy` VARCHAR(191) NOT NULL,
    `deleted` DATETIME(3) NULL,
    `deletedBy` VARCHAR(191) NULL,

    INDEX `idx_movieItemId`(`movieItemId`),
    INDEX `idx_title`(`title`),
    INDEX `idx_image`(`image`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(99) NOT NULL,
    `releaseDate` DATE NULL,
    `image` VARCHAR(99) NOT NULL,
    `approved` BOOLEAN NOT NULL DEFAULT false,
    `added` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `addedBy` VARCHAR(191) NOT NULL,
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedBy` VARCHAR(191) NOT NULL,
    `deleted` DATETIME(3) NULL,
    `deletedBy` VARCHAR(191) NULL,

    INDEX `idx_releaseDate`(`releaseDate`),
    INDEX `idx_name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MyMovieItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `movieItemId` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `ordered` INTEGER NULL,
    `caseType` ENUM('Box', 'Digibook', 'None', 'Plain', 'Slipcover', 'Steelbook') NOT NULL DEFAULT 'Plain',
    `digitalType` ENUM('None', 'DC', 'DC+UV', 'UV', 'Vudu', 'MoviesAnywhere') NOT NULL DEFAULT 'None',
    `has3D` ENUM('Y', 'N') NOT NULL DEFAULT 'N',
    `wasWatched` ENUM('Y', 'N') NOT NULL DEFAULT 'N',
    `formatType` ENUM('Blu-ray', 'DVD', 'Ultra HD', 'UV', 'Digital') NOT NULL,
    `status` ENUM('Owned', 'Wanted', 'Selling', 'Waiting') NOT NULL,
    `notes` TEXT NULL,
    `added` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `addedBy` VARCHAR(191) NOT NULL,
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedBy` VARCHAR(191) NOT NULL,
    `deleted` DATETIME(3) NULL,
    `deletedBy` VARCHAR(191) NULL,

    UNIQUE INDEX `MyMovieItems_movieItemId_key`(`movieItemId`),
    UNIQUE INDEX `uk_ordered`(`ordered`),
    INDEX `idx_has3D`(`has3D`),
    INDEX `idx_caseType`(`caseType`),
    INDEX `idx_digitalType`(`digitalType`),
    INDEX `idx_formatType`(`formatType`),
    INDEX `idx_status`(`status`),
    INDEX `idx_wasWatched`(`wasWatched`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accounts` (
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

    UNIQUE INDEX `Accounts_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sessions` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Sessions_sessionToken_key`(`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `added` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `addedBy` VARCHAR(191) NOT NULL,
    `updated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedBy` VARCHAR(191) NOT NULL,
    `deleted` DATETIME(3) NULL,
    `deletedBy` VARCHAR(191) NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationTokens` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationTokens_token_key`(`token`),
    UNIQUE INDEX `VerificationTokens_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
