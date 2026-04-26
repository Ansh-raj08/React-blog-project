# React Blog

A category-based React blog app built with Vite and React Router.

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
- Bollywood page connected to data filtering by category

### In Progress

- Home page content (currently placeholder)
- Hollywood page content (currently placeholder)
- Food page content (currently placeholder)
- Fitness page content (currently placeholder)
- Technology page content (currently placeholder)
- Consistent card layout/UI for all category pages
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
- Category pages are expected to render posts by filtering on the `category` field.
- Right now, this filtering is implemented on the Bollywood page.

## Next Milestones

- Build reusable post card component
- Connect all category pages to filtered data
- Add layout sections on Home (top stories, latest, popular)
- Add post detail route and page
- Improve accessibility and loading performance
