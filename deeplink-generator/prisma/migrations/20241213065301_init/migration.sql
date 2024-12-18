-- CreateEnum
CREATE TYPE "TemplateStage" AS ENUM ('DRAFT', 'REVIEW', 'SUBMITTED', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "UsecaseStage" AS ENUM ('DRAFT', 'REVIEW', 'SUBMITTED', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "UsecaseCategory" AS ENUM ('RETAIL', 'LOGISTICS', 'MOBILITY', 'SERVICES');

-- CreateEnum
CREATE TYPE "UsecaseSubcategory" AS ENUM ('SEARCH_CATELOG', 'SEARCH_BY_CITY', 'SEARCH_BY_ITEM', 'SEARCH_BY_CATEGORY', 'OFFERS');

-- CreateTable
CREATE TABLE "Template" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "value" JSONB NOT NULL,
    "category" "UsecaseCategory",
    "subCategory" "UsecaseSubcategory",
    "templateStage" "TemplateStage" NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usecase" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "value" JSONB NOT NULL,
    "templateId" TEXT NOT NULL,
    "name" TEXT,
    "usecaseStage" "UsecaseStage" NOT NULL,

    CONSTRAINT "Usecase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Usecase" ADD CONSTRAINT "Usecase_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
