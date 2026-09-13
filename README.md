# Art Gallery — View Transitions Demo

A modern **Next.js Art Gallery demo** showcasing smooth page and image transitions using the **View Transitions API**.

## Features

* Art gallery listing
* Artwork detail pages
* Photographer filtering
* Search across artwork metadata
* Sorting by:

  * Title
  * Year
  * Photographer
* URL-based search, filter, and sort state
* Dynamic artwork detail routes
* Responsive images using `next/image`
* View Transitions for smoother navigation
* Reusable React components
* Static gallery data
* Responsive UI
* System-based light/dark theme

## Tech Stack

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* Next/Image
* View Transitions API
* Next.js App Router

## Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── gallery/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   └── ...
│
├── components/
│   ├── PhotoPlaceholder/
│   ├── SortOptions/
│   ├── ...
│
├── data/
│   └── galleryData.ts
│
├── utils/
│   ├── getInitials.ts
│   ├── formatSearchQuery.ts
│   └── ...
│
└── ...
```

## View Transitions

The primary purpose of this project is to demonstrate the **View Transitions API** with Next.js.

View Transitions allow the browser to animate changes between different UI states instead of immediately replacing the old view.

### Without View Transitions

```text
Gallery
   │
   │ Click artwork
   ▼
Old page disappears
   │
   ▼
New page appears
```

### With View Transitions

```text
Gallery
   │
   │ Click artwork
   ▼
Smooth visual transition
   │
   ▼
Artwork Details
```

This creates a more continuous navigation experience, particularly when moving from an artwork thumbnail to its detail page.

## Shared Element Transitions

The gallery is designed to demonstrate shared element transitions between the gallery card and the artwork detail page.

```text
Gallery Card

┌─────────────────┐
│                 │
│      IMAGE      │
│                 │
└─────────────────┘
         │
         │ View Transition
         ▼
┌──────────────────────┐
│                      │
│        IMAGE         │
│                      │
│   Artwork Details    │
│                      │
└──────────────────────┘
```

The corresponding elements can be given matching view-transition names so the browser can animate between their positions and sizes.

## Search

The gallery supports searching across multiple artwork fields:

* Title
* Long description
* Place
* Short description
* Photographer

Example:

```text
/gallery?search=nature
```

Search state is stored in the URL, making the current gallery state:

* Shareable
* Bookmarkable
* Refreshable
* Compatible with browser Back/Forward navigation

## Photographer Filter

Users can filter artworks by photographer.

Example:

```text
/gallery?photographer=Alex%20Green
```

The photographer value is normalized before comparison to provide consistent filtering.

## Sorting

The gallery supports sorting by:

```text
Title
Year
Photographer
```

Example:

```text
/gallery?sort=Year
```

Search, filtering, and sorting can be combined:

```text
/gallery?search=nature&photographer=Alex%20Green&sort=Year
```

### Data Flow

```text
Gallery Data
     │
     ▼
Photographer Filter
     │
     ▼
Search Filter
     │
     ▼
Sorting
     │
     ▼
Rendered Results
```

## URL State

The URL acts as the source of truth for gallery search, filtering, and sorting.

For example:

```text
/gallery?search=mountain&sort=Title
```

This allows users to:

* Refresh the page without losing the current state
* Copy and share the current URL
* Bookmark a filtered gallery
* Navigate using browser Back/Forward

## Navigation

The project uses Next.js App Router navigation.

The browser history allows users to move between the gallery and artwork details:

```text
Gallery
   │
   ▼
Artwork Details
   │
   ▼
Back
   │
   ▼
Gallery
```

Query parameters are preserved
