/*
  Warnings:

  - Added the required column `thumbnailUrl` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailUrl` to the `UserTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "thumbnailUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserTemplate" ADD COLUMN     "thumbnailUrl" TEXT NOT NULL;
