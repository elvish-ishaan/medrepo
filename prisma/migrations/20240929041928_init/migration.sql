/*
  Warnings:

  - You are about to drop the column `month` on the `healthPointGraph` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `healthPointGraph` table. All the data in the column will be lost.
  - Added the required column `monthValue` to the `healthPointGraph` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearValue` to the `healthPointGraph` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "healthPointGraph" DROP COLUMN "month",
DROP COLUMN "year",
ADD COLUMN     "monthValue" INTEGER NOT NULL,
ADD COLUMN     "yearValue" INTEGER NOT NULL;
