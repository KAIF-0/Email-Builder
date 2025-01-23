/*
  Warnings:

  - The primary key for the `Template` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Template` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserTemplate" DROP CONSTRAINT "UserTemplate_templateId_fkey";

-- AlterTable
ALTER TABLE "Template" DROP CONSTRAINT "Template_pkey",
DROP COLUMN "id",
ADD COLUMN     "templateId" SERIAL NOT NULL,
ADD CONSTRAINT "Template_pkey" PRIMARY KEY ("templateId");

-- AddForeignKey
ALTER TABLE "UserTemplate" ADD CONSTRAINT "UserTemplate_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("templateId") ON DELETE RESTRICT ON UPDATE CASCADE;
