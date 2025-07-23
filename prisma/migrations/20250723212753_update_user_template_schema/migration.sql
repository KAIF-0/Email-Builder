/*
  Warnings:

  - The primary key for the `Template` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `templateId` on the `Template` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Template" DROP CONSTRAINT "Template_pkey",
DROP COLUMN "templateId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Template_pkey" PRIMARY KEY ("id");
