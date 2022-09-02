/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Discount` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `Discount` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to drop the column `deletedAt` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `OrderProduct` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Tax` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `UOM` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Variant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Discount" DROP COLUMN "deletedAt",
ALTER COLUMN "amount" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "OrderProduct" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Tax" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "UOM" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "deletedAt";

-- AlterTable
ALTER TABLE "Variant" DROP COLUMN "deletedAt";
