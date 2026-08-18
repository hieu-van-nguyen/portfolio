# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- Develop: `npm start`
- Build: `npm run build`
- Test: `npm test`
- Deploy: `npm run deploy`

## Architecture and Structure

This is a React application bootstrapped with Create React App.

### Project Structure
- `src/App.js`: Main application component that assembles the various sections of the portfolio.
- `src/components/`: Feature-based component organization. Each directory typically contains:
  - `[ComponentName].js`: The React component logic.
  - `[componentname].css`: Component-specific styling.
- `src/assets/`: Contains static resources including images, custom fonts, and the CV PDF.
- `public/`: Static assets available at the root of the site.

### Component Pattern
The project follows a modular component structure where each major section of the landing page (About, Experience, Portfolio, Services, Contact, etc.) is isolated in its own component folder within `src/components/`.
