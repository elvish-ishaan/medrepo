/*
  Warnings:

  - You are about to drop the column `monthValue` on the `healthPointGraph` table. All the data in the column will be lost.
  - Added the required column `healthMonth` to the `healthPointGraph` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "healthPointGraph" DROP COLUMN "monthValue",
ADD COLUMN     "healthMonth" INTEGER NOT NULL;
