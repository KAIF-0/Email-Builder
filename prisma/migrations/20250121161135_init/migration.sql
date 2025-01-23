-- CreateEnum
CREATE TYPE "Alignment" AS ENUM ('left', 'center', 'right');

-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "alignment" "Alignment" NOT NULL DEFAULT 'center',
ADD COLUMN     "footerSize" TEXT NOT NULL DEFAULT '2rem',
ADD COLUMN     "titleSize" TEXT NOT NULL DEFAULT '2rem';

-- AlterTable
ALTER TABLE "UserTemplate" ADD COLUMN     "alignment" "Alignment" NOT NULL DEFAULT 'center',
ADD COLUMN     "footerSize" TEXT NOT NULL DEFAULT '2rem',
ADD COLUMN     "titleSize" TEXT NOT NULL DEFAULT '2rem';
