# Roshan Paudel - Portfolio Website (React + Vite)

This repository contains the code for my personal portfolio website, developed using **React.js** and **Vite**, styled with **Bootstrap**. It showcases my skills, projects, and professional profile as a Full Stack Developer.

## Overview

This React-based site uses Vite for blazing-fast builds and development, and Bootstrap for responsive, mobile-first styling. It includes dynamic components, routing, dark mode, and a polished UI.

## Features

- **Modern React Architecture:** Modular, component-based structure.
- **Responsive Design with Bootstrap:** Fully optimized for various screen sizes.
- **Dark Mode Toggle:** Users can switch between light and dark themes.
- **React Router:** Smooth navigation between sections.
- **Hero Section:** Personal intro with CV download button.
- **Skills Section:** Skills displayed using icons and tooltips.
- **Projects Section:** Clickable cards with images, tech stacks, and links.
- **About Me Section:** Personal background and interests.
- **Contact Section:** Includes contact links and a working email form.
- **Sticky Footer & "Go Up" Button**
- **Mobile Navigation:** Hamburger menu collapses on small screens.

## Technologies Used

- **React.js** – JavaScript library for building user interfaces
- **Vite** – Fast and optimized build tool
- **Bootstrap 5** – CSS framework for responsive design
- **React Router DOM** – Routing and page transitions
- **Font Awesome** – Icons
- **Google Fonts** – Custom typography
- **EmailJS** (optional) – Email handling via contact form

## Getting Started

# Running the Project Locally

Follow these steps to set up and run the project on your local machine:

## 1. Clone the Repository

```bash
git clone https://github.com/roshanpaudel/react-portfolio.git
```

## 2. Navigate to the Project Directory

```bash
cd react-portfolio
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the Development Server

```bash
npm run dev
```

## 5. Open Your Browser

Visit: [http://localhost:5173](http://localhost:5173)

---

# File Structure

```
react-portfolio/
├── public/
│   └── assets/
│       ├── GlideShift.JPG
│       ├── HikeCo.JPG
│       └── Roshan.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│       └── custom.css
├── index.html
├── package.json
└── vite.config.js
```

---

# Customization

- **Text & Personal Info:** Update component files in `src/components/`.
- **Styling:** Modify or override Bootstrap classes in `custom.css`.
- **Assets:** Replace images in `public/assets/`.
- **Projects:** Add project cards in `Projects.jsx` or pull from dynamic data.
- **Theme:** Customize Bootstrap variables or CSS to change theme colors.

---

# Future Improvements

- Backend integration for the contact form
- Project filtering by tech stack or tags
- Animated transitions using libraries like Framer Motion
- Add a blog or articles section
- Enhance SEO and accessibility

---

# Author

**Roshan Paudel**

---

# License

This project is open-source. Fonts, icons, and other assets used belong to their respective creators.
