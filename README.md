 # 🏠 HUJURAT HOMES - Luxury Real Estate Web Application
This project is a high-fidelity, fully responsive front-end template for a luxury real estate brokerage, Hujurat Homes. It features a modern, clean design with a focus on an intuitive property search experience, using a dark aesthetic combined with clean white and professional green accents.

 # 🚀 Key Features
Responsive Navigation (Navbar): A sticky header with desktop and mobile menu support. The actual Hujurat Homes logo is integrated.

Hero Section: A luxurious, full-screen viewport with a background image overlay and a prominent headline.

Floating Search Bar (SearchBar): A central component allowing users to filter properties by Location, Type, and Price Range. The search bar is visually decoupled from the hero banner to draw attention.

Featured Listings: A placeholder section demonstrating how property cards will be displayed in a responsive grid layout.

Modern Styling: Utilizes Tailwind CSS for fast, utility-first styling and Inter/Playfair Display fonts for a professional and luxurious feel.

 # 🛠️ Tech Stack & Dependencies
This project is built using modern web development tools:

Framework: React (functional components and hooks)

Bundler: Vite

Styling: Tailwind CSS (loaded via CDN for simplicity, but easily integrated into a full build process)

Icons: lucide-react

Required Local Dependencies
To run this project locally, you must have the following package installed in your project root (HUJURAT-HOMES/):

# Install the necessary icon library
npm install lucide-react
# OR
# yarn add lucide-react

💻 Local Development Setup
Follow these steps to get the project up and running on your local machine.

1. Prerequisite Checks
Ensure you have Node.js and npm (or yarn/pnpm) installed.

2. File Placement
The application logic is contained across two main files:

File

Location

Purpose

App.jsx

src/App.jsx

Contains all React components and application logic.

index.html

Project Root

Loads React, Tailwind CSS, and the required Google Fonts.

Ensure the contents of the Canvas documents were correctly copied into these files in your HUJURAT-HOMES directory.

3. Install Dependencies
If you haven't already, install the required lucide-react package:

cd HUJURAT-HOMES
npm install
npm install lucide-react

4. Start the Development Server
Start the application using the Vite development script:

npm run dev
# OR
# yarn dev

The application will typically be available at http://localhost:5173.

🖼️ Logo Implementation Note
The Logo component in src/App.jsx currently uses a placeholder URL:

<img 
  src="[https://placehold.co/150x40/000000/FACC15?text=HUJURAT+HOMES+LOGO](https://placehold.co/150x40/000000/FACC15?text=HUJURAT+HOMES+LOGO)" 
  alt="Hujurat Homes LTD Logo" 
  className="h-8 md:h-10 object-contain"
/>

ACTION REQUIRED: For deployment, replace the src attribute with the actual hosted URL of the Hujurat Homes logo image.