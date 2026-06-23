# E-Commerce Capstone

A responsive e-commerce frontend application built with React, Redux, Vite, and Tailwind CSS.  
The project focuses on product listing, filtering, shopping cart logic, wishlist management, reusable components, and responsive UI development.

Live Demo: https://ecommerce-capstone-coral.vercel.app/

## Overview

This project was developed as a frontend-focused e-commerce application to practice building a modern shopping experience with React.

The application includes product listing pages, category-based browsing, cart management, wishlist functionality, quantity updates, and responsive layouts.  
The main focus was building a clean user interface, managing application state, structuring components, and improving the shopping flow.

## Tech Stack

- React
- Vite
- JavaScript
- Redux
- React Router
- Tailwind CSS
- CSS
- Component-based architecture
- State management
- Vercel deployment

## Features

- Responsive e-commerce user interface
- Home page layout
- Product listing structure
- Product filtering and category browsing
- Shopping cart page
- Add to cart functionality
- Quantity increase and decrease logic
- Wishlist page
- Add to wishlist functionality
- Reusable UI components
- Client-side routing
- Mobile-friendly layout
- Deployed live demo with Vercel

## Application Flow

```text
Home Page
↓
Product / Category Browsing
↓
Product Selection
↓
Cart or Wishlist Action
↓
Cart Management
↓
User Shopping Flow
```

## Main Pages

| Page | Description |
|---|---|
| Home Page | Main landing page and product/category showcase |
| Shop Page | Product listing and browsing area |
| Cart Page | Displays selected products and quantity controls |
| Wishlist Page | Displays saved favorite products |

## State Management

Redux is used to manage shared application state such as:

- Cart items
- Wishlist items
- Product-related UI state
- Quantity changes
- User shopping interactions

Using centralized state management helped keep cart and wishlist logic more consistent across different pages.

## What I Practiced

- Building a React e-commerce frontend
- Managing shared state with Redux
- Creating reusable component structures
- Implementing cart and wishlist logic
- Handling quantity update behavior
- Building responsive layouts
- Using React Router for page navigation
- Styling a modern UI with Tailwind CSS
- Deploying a frontend project with Vercel
- Improving user experience through cleaner shopping flows

## Project Structure

```text
src/
 ├── components/
 ├── pages/
 ├── store/
 ├── assets/
 ├── App.jsx
 └── main.jsx
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/emreyildirim-33/ecommerce-capstone.git
cd ecommerce-capstone
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will run locally at:

```text
http://localhost:5173
```

## Deployment

This project is deployed on Vercel.

Live Demo: https://ecommerce-capstone-coral.vercel.app/

## Notes

This project was built as a frontend e-commerce capstone project.  
The main focus was not building a full production marketplace, but practicing React, Redux, routing, responsive UI development, reusable components, cart management, wishlist functionality, and frontend state management.

## Repository

GitHub: https://github.com/emreyildirim-33/ecommerce-capstone
