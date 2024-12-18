/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `UsecaseCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `UsecaseSubcategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UsecaseCategory_name_key" ON "UsecaseCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UsecaseSubcategory_name_key" ON "UsecaseSubcategory"("name");
