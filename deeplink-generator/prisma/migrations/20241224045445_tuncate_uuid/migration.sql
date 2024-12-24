-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_usecaseCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_usecaseSubcategoryId_fkey";

-- AlterTable
ALTER TABLE "Template" ALTER COLUMN "id" SET DEFAULT substr(gen_random_uuid()::text, 1, 16),
ALTER COLUMN "usecaseCategoryId" DROP NOT NULL,
ALTER COLUMN "usecaseSubcategoryId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Usecase" ALTER COLUMN "id" SET DEFAULT substr(gen_random_uuid()::text, 1, 16);

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_usecaseCategoryId_fkey" FOREIGN KEY ("usecaseCategoryId") REFERENCES "UsecaseCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_usecaseSubcategoryId_fkey" FOREIGN KEY ("usecaseSubcategoryId") REFERENCES "UsecaseSubcategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
