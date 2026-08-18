# Personal Portfolio Website

A professional and responsive personal portfolio website built with React.

## 🚀 Features

- **About Section**: A brief introduction and personal background.
- **Experience**: A detailed timeline of professional experience.
- **Portfolio**: A showcase of projects with images and descriptions.
- **Services**: A list of professional services offered.
- **Contact Form**: An integrated contact form powered by EmailJS for direct communication.
- **Testimonials**: A section to showcase client or peer feedback.
- **Fully Responsive**: Optimized for various screen sizes from desktop to mobile.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: CSS / Sass
- **Animations & UI**: Swiper.js (for sliders/carousels)
- **Icons**: React Icons
- **Email Handling**: EmailJS
- **Deployment**: GitHub Pages

## 🏁 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hieu-van-nguyen/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the app in development mode:
```bash
npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

## 📦 Deployment

### Build for Production

To create an optimized production build:
```bash
npm run build
```

### Deploy to GitHub Pages

The project is configured for easy deployment using the `gh-pages` package:
```bash
npm run deploy
```

## 📂 Project Structure

```text
src/
├── assets/          # Images, PDFs, and fonts
├── components/      # Modular UI components (About, Portfolio, etc.)
│   ├── about/
│   ├── contact/
│   ├── experience/
│   ├── portfolio/
│   ├── services/
│   └── ...
├── App.js           # Root component assembling all sections
└── index.js         # Application entry point
```
