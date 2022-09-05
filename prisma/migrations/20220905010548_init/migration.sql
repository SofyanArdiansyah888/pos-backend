/*
  Warnings:

  - You are about to alter the column `totalPayment` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `price` on the `OrderProduct` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `capital` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `price` on the `Variant` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `capital` on the `Variant` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_orderProductId_fkey";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "totalPayment" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "OrderProduct" ALTER COLUMN "price" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "orderProductId" DROP NOT NULL,
ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "capital" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Variant" ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "capital" SET DATA TYPE INTEGER;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_orderProductId_fkey" FOREIGN KEY ("orderProductId") REFERENCES "OrderProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;
