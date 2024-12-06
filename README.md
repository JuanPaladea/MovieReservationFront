# MovieReservationFront

A front-end application for a movie reservation system, built using React, TypeScript, and Vite. This project is part of a learning exercise to practice modern front-end development principles and tools. Its connected to the backend i developed.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

---

## Features

- **Movie Listings**: Display available movies with key details like title, genre, and showtimes.
- **Reservations**: Book tickets for a selected movie and showtime.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Modern Development**: Utilizes the latest web development tools for speed and scalability.

---

## Technologies Used

- **React**: Component-based UI library for building dynamic interfaces.
- **TypeScript**: Type-safe programming to ensure code reliability.
- **Vite**: Lightning-fast development server and build tool.

---

## Usage

1. View the list of movies on the home page.
2. Select a movie to see details and available showtimes.
3. Book tickets for your preferred showtime by filling out the reservation form.
4. Review your reservation details before confirming.

---

## Folder Structure

```plaintext
MovieReservationFront/
├── public/             # Static assets like icons, images, etc.
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # User context for managing state
│   ├── pages/          # Page-specific components
│   ├── router/         # Application routing configuration
│   ├── types/          # TypeScript interfaces and types
│   ├── utils/          # Helper functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Application entry point
```

## Backend Integration

This front-end application communicates with a backend service developed to manage movie data and reservations. The backend repository can be found at [MovieReservationBack](https://github.com/JuanPaladea/MovieReservationBack).

### API Integration

The front end retrieves and manages data through API calls to the backend, including:

- **Fetching Movies**: Retrieves a list of available movies.
- **Fetching Showtimes**: Retrieves showtimes for selected movies.
- **Booking Reservations**: Sends reservation data to the backend for processing and storage.