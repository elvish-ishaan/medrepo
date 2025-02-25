<h1 style="font-size: 40px;">CMS - 100xDevs</h1>

Open source repo for medrepo.com

## Running Locally

1. Clone the repository:

```bash
git clone https://github.com/elvish-ishaan/medrepo.git
```

2. Navigate to the project directory:

```bash
cd medrepo
```

3. (Optional) Start a PostgreSQL database using Docker:

```bash
docker run -d \

--name cms-db \

-e POSTGRES_USER=myuser  \

-e POSTGRES_PASSWORD=mypassword \

-e  POSTGRES_DB=mydatabase  \

-p 5432:5432 \

postgres
```

The connection URL for this setup will be:

```
DATABASE_URL=postgresql://myuser:mypassword@localhost:5432/mydatabase?schema=public
```

4. Create a .env file:

   - Copy `.env.example` and rename it to `.env`.

   - Configure the `DATABASE_URL` with your PostgreSQL connection string.

5. Install dependencies:

```bash
npm install
```

6. Run database migrations:

```bash
npx prisma migrate
```

7. Seed the database:

```bash
npm run seed
```

8. Start the development server:

```bash
npm run dev
```

## Usage

1. Access the application in your browser:

```bash
http://localhost:3000
```

2. Login using any of the following provided user credentials:

- Email: `testuser@example.com`, Password: `123456`

- Email: `testuser2@example.com`, Password: `123456`

## Contributing

We welcome contributions from the community! There are many ways to contribute to the CMS. Code is just one possible means of contribution.

### To contribute follow these steps:

1. [Fork the repository](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo).

2. Clone the fork to your local machine:

```bash
git clone https://github.com/<your username>/medrepo.git
cd medrepo
```

3. Create a new branch

```bash
git checkout -b feature/navBar
```

4. Make your changes and commit them

```bash
git commit -am 'Add some navBar'
```

5. Push to the branch

```bash
git push origin feature/fooBar
```

6. Go to [the repository](https://github.com/elvish-ishaan/medrepo/pulls) and [make a Pull Request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

> For major changes, please open an issue first to discuss what you would like to change.

Read our [contribution guidelines](./CONTRIBUTING.md) for more details.
