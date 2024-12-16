/*
  Warnings:

  - You are about to drop the column `category` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `subCategory` on the `Template` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[usecaseCategoryId,usecaseSubcategoryId]` on the table `Template` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usecaseCategoryId` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usecaseSubcategoryId` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Template" DROP COLUMN "category",
DROP COLUMN "subCategory",
ADD COLUMN     "usecaseCategoryId" TEXT NOT NULL,
ADD COLUMN     "usecaseSubcategoryId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "UsecaseCategory";

-- DropEnum
DROP TYPE "UsecaseSubcategory";

-- CreateTable
CREATE TABLE "UsecaseCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UsecaseCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsecaseSubcategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UsecaseSubcategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Template_usecaseCategoryId_usecaseSubcategoryId_idx" ON "Template"("usecaseCategoryId", "usecaseSubcategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Template_usecaseCategoryId_usecaseSubcategoryId_key" ON "Template"("usecaseCategoryId", "usecaseSubcategoryId");

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_usecaseCategoryId_fkey" FOREIGN KEY ("usecaseCategoryId") REFERENCES "UsecaseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_usecaseSubcategoryId_fkey" FOREIGN KEY ("usecaseSubcategoryId") REFERENCES "UsecaseSubcategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
