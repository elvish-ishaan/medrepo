-- CreateTable
CREATE TABLE "RecentActivities" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "uploadType" "docType" NOT NULL,
    "userEmail" TEXT,

    CONSTRAINT "RecentActivities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RecentActivities" ADD CONSTRAINT "RecentActivities_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
