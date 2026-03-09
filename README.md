# Frontend Developer Task - DigiSpace Dashboard

A modern, interactive dashboard built with React, TypeScript, and Tailwind CSS, featuring real-time data visualization for energy consumption, carbon intensity, footfall, and environmental controls.

## 🚀 Live Demo

[Add your hosted link here]

## 📸 Screenshots

![Design Reference](./public/frontend-task-by-avm-solutions.vercel.app_.png)

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Apache ECharts
- React Router
- Font Awesome

---

## Features

- Pixel-accurate dashboard UI based on provided design
- Modular card-based architecture
- Interactive circular temperature control
- Data visualization using Apache ECharts
- Custom charts (bar, line, donut)
- Reusable layout components (Navbar, Sidebar)

---

## Project Structure

src/
├── app/
│ └── App.tsx
├── assets/ # Images, icons, and static files
├── components/
│ ├── general/ # Shared UI components
│ │ ├── Navbar.tsx
│ │ └── Sidebar.tsx
│ ├── Home/ # Dashboard card components
│ │ ├── LightsCard.tsx
│ │ ├── WaterConsumptionCard.tsx
│ │ ├── CarbonIntensityCard.tsx
│ │ ├── EnergyConsumptionCard.tsx
│ │ └── FootfallCard.tsx
│ └── Ui/ # Utility UI components
│ └── FallbackLoader.tsx
├── constants/ # Static data used by charts
│ ├── CarbonIntensityData.ts
│ ├── energyData.ts
│ └── FootfallData.ts
├── layouts/
│ └── Mainlayout.tsx
├── pages/
│ ├── Homepage.tsx
│ └── Notfound.tsx
├── styles/
│ └── index.css
├── types/
│ └── Homepage.ts
├── utils/
├── main.tsx

---

## Design Implementation

Resolution used for development:

**1920 × 1080**

Key focus areas:

- Accurate spacing and alignment
- Correct font weights and typography
- Matching gradients and colors
- Component-based layout

Where exact visual parity could not be achieved, approximations were made based on the provided image reference.

---

## Installation

Clone the repository:

git clone https://github.com/superio007/Frontend-Task-By-AVM--Solutions.git

Install dependencies:

npm install

Run development server:

npm run dev

Build for production:

npm run build

---

## Links

GitHub Repository  
https://github.com/superio007/Frontend-Task-By-AVM--Solutions

LinkedIn  
https://www.linkedin.com/in/kiran-dhoke

Live Demo  
https://frontend-task-by-avm-solutions.vercel.app/

---

## Notes

The UI was implemented with a component-driven architecture where each dashboard card is an independent component.  
Charts were implemented using Apache ECharts to match the visual style of the design.
