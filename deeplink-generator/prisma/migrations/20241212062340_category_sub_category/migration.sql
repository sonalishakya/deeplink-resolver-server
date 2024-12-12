/*
  Warnings:

  - Added the required column `category` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subCategory` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UsecaseCategory" AS ENUM ('RETAIL', 'LOGISTICS', 'MOBILITY', 'SERVICES');

-- CreateEnum
CREATE TYPE "UsecaseSubcategory" AS ENUM ('SEARCH_CATELOG', 'SEARCH_BY_CITY', 'SEARCH_BY_ITEM', 'SEARCH_BY_CATEGORY', 'OFFERS');

-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "category" "UsecaseCategory" NOT NULL,
ADD COLUMN     "subCategory" "UsecaseSubcategory" NOT NULL;
