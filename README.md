# React Blog

A category-based React blog app built with Vite and React Router.

## Progress Tracker

Overall project progress: **70%**

### Component Status

| Component | Data Connected | Current State |
| --- | --- | --- |
| Home | Yes | Renders all posts |
| Bollywood | Yes | Filters `Bollywood` posts |
| Hollywood | Yes | Filters `Hollywood` posts |
| Food | Yes | Filters `Food` posts |
| Fitness | Yes | Filters `Fitness` posts |
| Technology | Yes | Filters `Technology` posts |

### Milestone Checklist

- [x] Vite + React project setup
- [x] React Router routes setup
- [x] Navbar with active route state
- [x] Shared data source in `src/Data.js`
- [x] Connect all route components to data
- [ ] Build reusable post card/list components
- [ ] Add richer Home page sections
- [ ] Add post detail route and page
- [ ] Add search/filter interactions

## Current Progress

### Completed

- Project setup with Vite + React
- Routing setup with `react-router-dom`
- Shared navigation bar with active route highlighting
- Responsive navbar styling (desktop + horizontal scroll on small screens)
- Centralized data source in `src/Data.js`
- Category routes created:
	- `/`
	- `/bollywood`
	- `/hollywood`
	- `/food`
	- `/fitness`
	- `/technology`
- Home page connected to all posts from `src/Data.js`
- Bollywood page connected to data filtering by category
- Hollywood page connected to data filtering by category
- Food page connected to data filtering by category
- Fitness page connected to data filtering by category
- Technology page connected to data filtering by category

### In Progress

- Consistent card layout/UI for all category pages
- Reusable list/card components to reduce duplication
- Detail views, search/filter UX, and richer interactions

## Tech Stack

- React 19
- React DOM 19
- React Router DOM 7
- Vite 8
- ESLint 9

## Project Structure

```
react-blog/
	src/
		components/
			Navbar.jsx
			Home.jsx
			Bollywood.jsx
			Hollywood.jsx
			Food.jsx
			Fitness.jsx
			Technology.jsx
		Data.js
		App.jsx
		App.css
		index.css
```

## How to Run

1. Install dependencies:

	 ```bash
	 npm install
	 ```

2. Start development server:

	 ```bash
	 npm run dev
	 ```

3. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Data Notes

- Blog entries are currently stored in `src/Data.js`.
- Category pages render posts by filtering on the `category` field.
- Home currently renders all posts.

## Next Milestones

- Build reusable post card component
- Add layout sections on Home (top stories, latest, popular)
- Add post detail route and page
- Improve accessibility and loading performance
