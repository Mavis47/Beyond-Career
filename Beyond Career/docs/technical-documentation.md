🛠️ Tech Stack
HTML5: Used for the basic structure of the web pages following semantic HTML practices for better accessibility and SEO.

React.js: Used as the core JavaScript library for building the component-based UI. React's declarative and unidirectional data flow approach helped manage complex interactions and animations.

CSS3: Styled components using modular CSS and media queries for responsiveness. Leveraged Flexbox and Grid layout systems for consistent structure across devices.

Framer Motion: Integrated for declarative and performant animations across the UI—used for animating component entrances, hover effects, and scroll-based transitions.

react-parallax-tilt: Incorporated to add immersive parallax and 3D tilt effects on interactive cards and UI elements. Improved user engagement and interactivity.

⚙️ Key Features & Implementation
🎨 Layout & Responsiveness
Flex & Grid Layouts: Structured major sections using CSS Grid for layouts and Flexbox for item alignment.

Media Queries: Implemented @media queries at key breakpoints (e.g., 768px, 1024px) to ensure adaptive design for tablets and mobile devices.

Responsive Units: Used relative units like rem, vw, vh for consistent scaling.

🧭 Z-Index & Positioning Issues
Faced stacking context conflicts while layering animated and fixed-position elements (e.g., navigation bar over hero sections).

Resolved using:

Explicit z-index values on isolated stacking contexts.

Created position: relative on parent containers to scope the z-index.

Verified with browser dev tools to debug stacking behavior.

Image Optimization
Compressed images using online tools (e.g., TinyPNG or Squoosh) before importing into the project.

Used WebP format where supported for smaller file sizes without losing quality.

Set width and height attributes or used object-fit to avoid layout shifts.

🧪 Testing & Debugging
Manually tested across:

Desktop Browsers (Chrome, Firefox, Edge)

Mobile Viewports (Chrome DevTools responsive mode)

Fixed overlapping elements, scrollbar issues, and layout breaks using developer tools and live CSS tweaks.

🧩 External Libraries
react-parallax-tilt: Enabled interactive 3D tilt effects with custom glare and gyroscope support.

Configuration:

<Tilt>
  <div className="card">Interactive Card</div>
</Tilt>

🔧 Deployment Process (Vercel)
Steps followed to deploy Beyond Career on Vercel:

Pushed the complete React project to a public GitHub repository:
🔗 https://github.com/Mavis47/Beyond-Career

Logged into Vercel using GitHub authentication.

Imported the GitHub repository by clicking “Add New Project” → Selected the Beyond Career repo.

Vercel automatically detected the React framework and applied default build settings:

Framework: React
Build Command: npm run build

Clicked “Deploy” – the site was automatically built and hosted.

Final Live URL:
🌐 https://beyond-career-flame.vercel.app

For future changes, commits to the master branch automatically trigger redeployment.

