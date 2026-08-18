# LifeOS

### Personal Productivity & Goal Management System

LifeOS is a modern web-based productivity application designed to help users
create, organize, and track personal goals in one focused environment.

It provides a clean dashboard for monitoring goal progress, managing deadlines,
tracking tasks, and viewing important productivity information.

---

## Preview

### Home

![LifeOS Home](./public/screenshots/home.png)

### Dashboard

![LifeOS Dashboard](./public/screenshots/dashboard.png)

### Goals

![LifeOS Goals](./public/screenshots/goals.png)

### About

![LifeOS About](./public/screenshots/about.png)

---

## About The Project

LifeOS was developed as a practical personal productivity application using
modern frontend technologies.

The main purpose of the project is to provide users with a simple and organized
system for managing their goals and monitoring progress over time.

Instead of keeping goals in separate notes or documents, LifeOS brings important
goal information into a centralized interface.

Users can create goals, assign categories and priorities, set deadlines,
update progress, and monitor their current status from the application.

---

## Key Features

### Goal Management

Users can create and manage personal goals with information such as:

- Goal title
- Description
- Category
- Priority
- Deadline
- Progress
- Status

Goals can also be edited or permanently deleted.

---

### Progress Tracking

Each goal includes a progress value from `0%` to `100%`.

The goal status automatically changes according to progress:

| Progress | Status |
|----------|--------|
| 0% | Not started |
| 1–99% | In progress |
| 100% | Completed |

Progress can be updated directly from the goal interface.

---

### Goal Categories

Goals can be organized into different areas:

- Learning
- Career
- Health
- Finance
- Personal
- Other

This makes it easier to separate different types of objectives.

---

### Priority Management

Every goal can have a priority level:

- Low
- Medium
- High

Different visual styles are used to make priorities easy to identify.

---

### Dashboard

The dashboard provides an overview of the user's current productivity data.

It includes:

- Total goals
- Active goals
- Not-started goals
- Completed goals
- Overall progress
- Active goal progress
- Today's tasks
- Upcoming deadlines

---

### Local Data Persistence

LifeOS currently uses the browser's `localStorage` API to store user and goal
information.

This means data can remain available after refreshing the page or reopening the
application in the same browser.

The project does not currently require an external database.

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Next.js | Application framework and routing |
| React.js | User interface and component architecture |
| JavaScript | Application logic and interactions |
| Tailwind CSS | Styling and responsive layouts |
| React Hooks | Component state and lifecycle management |
| localStorage | Client-side data persistence |
| Lucide React | Interface icons |

---

## Application Architecture

LifeOS follows a component-based React architecture.

The interface is divided into reusable components instead of placing all
functionality inside a single page.

A simplified structure looks like this:

```text
LifeOS
│
├── app/
│   ├── page.jsx
│   ├── dashboard/
│   ├── goals/
│   └── about/
│
├── components/
│   ├── dashboard/
│   │   ├── CreateUser.jsx
│   │   ├── DashboardHeader.jsx
│   │   ├── StatCard.jsx
│   │   ├── TodayTasks.jsx
│   │   └── UpcomingDeadlines.jsx
│   │
│   └── goals/
│       └── GoalForm.jsx
│
├── lib/
│   └── storage.js
│
├── public/
│   └── screenshots/
│
├── package.json
└── next.config.js
