-- DropForeignKey
ALTER TABLE "RecentActivities" DROP CONSTRAINT "RecentActivities_userEmail_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_userEmail_fkey";

-- CreateTable
CREATE TABLE "healthPointGraph" (
    "id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "userEmail" TEXT,

    CONSTRAINT "healthPointGraph_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecentActivities" ADD CONSTRAINT "RecentActivities_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "healthPointGraph" ADD CONSTRAINT "healthPointGraph_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
