-- DropForeignKey
ALTER TABLE "UserTemplate" DROP CONSTRAINT "UserTemplate_templateId_fkey";

-- DropIndex
DROP INDEX "UserTemplate_userId_templateId_key";
