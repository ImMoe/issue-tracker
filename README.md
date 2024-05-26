# Issue Tracker

Issue Tracker is a web application designed to help teams manage and track issues or tasks efficiently. Built with the latest technologies, this project leverages the power of Next.js 13, Prisma, Typescript and Tailwind CSS to deliver a robust, scalable, and aesthetically pleasing user experience.

## Features

- Real-time Issue Tracking: Easily create, update, and track issues in real-time.
- User Management: Assign issues to different team members.
- Sort and Filter: Quickly find issues using sorting and filtering options.
- Responsive Design: Optimized for both desktop and mobile devices with Tailwind CSS and Radix UI.
- Database Integration: Seamless data handling with Prisma and support for multiple database systems.

## Tech Stack

**Next.js 13**:
Utilizes the latest features of Next.js for server-side rendering and static site generation.

**Prisma**: A next-generation ORM for database interaction, ensuring type-safe database access.

**Tailwind CSS**:
A utility-first CSS framework for rapidly building custom user interfaces.

**Typescript** Type safety for robust and maintainable code.

## Installation

Install my-project with npm

```bash
  git clone https://github.com/your-username/issue-tracker.git
```

```bash
  cd issue-tracker
```

```bash
  npm install
```

Rename .env-example to .env and update the variables

```bash
  DATABASE_URL=""
  NEXTAUTH_URL="http://localhost:3000"
  NEXTAUTH_SECRET=""
  GOOGLE_CLIENT_ID=""
  GOOGLE_CLIENT_SECRET=""
```

Run database migrations

```bash
  npx prisma migrate dev
```

Finally, start the development server:

```bash
  npm run dev
```

## Screenshots

![App Screenshot](https://snipboard.io/6mVhXt.jpg)

![App Screenshot](https://snipboard.io/lasmbW.jpg)

![App Screenshot](https://snipboard.io/pPMOTI.jpg)
