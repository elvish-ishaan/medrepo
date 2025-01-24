import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create initial Users
  const user1 = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'Doe',
      phone: '123-456-7890',
      age: 28,
      password: 'password123',
      records: {
        create: [
          {
            mType: 'Report',
            date: '2023-09-01',
            imageUrl: 'https://example.com/report1.jpg',
            insights: 'Everything looks fine in the test results.',
          },
          {
            mType: 'Diagnosis',
            date: '2023-09-15',
            imageUrl: 'https://example.com/report2.jpg',
            insights: 'Some signs of high blood pressure.',
          },
        ],
      },
      recents: {
        create: [
          {
            date: '2023-09-20',
            uploadType: 'Report',
          },
        ],
      },
      healthPoints: {
        create: [
          {
            healthMonth: 9,
            healthDay: 25,
            yearValue: 2023,
            points: 75,
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      firstName: 'Bob',
      lastName: 'Smith',
      phone: '987-654-3210',
      age: 34,
      password: 'password123',
      records: {
        create: [
          {
            mType: 'Medicine',
            date: '2023-09-05',
            imageUrl: 'https://example.com/medicine1.jpg',
            insights: 'Prescription for blood pressure medication.',
          },
        ],
      },
      recents: {
        create: [
          {
            date: '2023-09-22',
            uploadType: 'Medicine',
          },
        ],
      },
      healthPoints: {
        create: [
          {
            healthMonth: 9,
            healthDay: 25,
            yearValue: 2023,
            points: 82,
          },
        ],
      },
    },
  });

  // Create DailyMetrics
  await prisma.dailymatrics.create({
    data: {
      bp: 120,
      sugar: 90,
      heartRate: 72,
    },
  });

  await prisma.dailymatrics.create({
    data: {
      bp: 135,
      sugar: 85,
      heartRate: 80,
    },
  });

  // Create RecentActivities
  await prisma.recentActivities.create({
    data: {
      date: '2023-09-15',
      uploadType: 'Diagnosis',
      userEmail: user1.email,
    },
  });

  await prisma.recentActivities.create({
    data: {
      date: '2023-09-18',
      uploadType: 'Report',
      userEmail: user2.email,
    },
  });

  console.log('Database has been seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
