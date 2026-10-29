# KPI Monitor

A personal web application designed to help teams track key performance indicators, compare results with targets and monitor progress.

**Work in progress:** the current focus is the Angular interface. A local Spring Boot backend and MySQL database have been set up, with REST API integration planned.

## Technologies

- **Frontend:** Angular 20, TypeScript, HTML, SCSS
- **Backend:** Java, Spring Boot
- **Database:** MySQL
- **UI design:** Figma

## Current Progress

- KPI management interface with a table and pagination layout.
- Search field and action buttons for adding KPIs and exporting data.
- Separate Angular components for the header, toolbar, table and pagination.
- Initial backend setup and local database connection.

The interface is currently a UI prototype. Functional search, pagination, KPI management, CSV export and backend integration are planned.

## Run the Frontend

From the project root:

```bash
cd kpi-monitor-frontend
npm install
npx ng serve
```

Open http://localhost:4200 in your browser.

The backend requires a local MySQL configuration. Database credentials are excluded from this repository.
