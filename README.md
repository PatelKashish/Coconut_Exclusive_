# Coconut_Exclusive_
An E-commerce website project leveraging Vite-React, Tailwind CSS, and MongoDB, containerized with Docker, featuring a modular architecture with four backend services and one frontend service, designed for scalability and ease of deployment.

Frontend: Vite-React and Tailwind CSS
Vite-React: Utilizes Vite, a build tool that significantly improves the development experience by offering fast hot-module replacement (HMR). This choice ensures rapid iteration and development efficiency.

Tailwind CSS: Provides utility-first CSS for styling the UI components. Tailwind's low-level utility classes enable developers to construct custom designs without leaving their HTML, promoting productivity and design consistency.

Backend: MongoDB (MongoDB Campus)
MongoDB: Serves as the primary database for storing product information, user profiles, order history, and transaction records. MongoDB's flexible schema allows for easy adjustments as the business requirements evolve.
Containerization: Docker
Docker: Containersize the entire application stack, including the frontend, backend services, and the database. This approach simplifies deployment, scaling, and management by encapsulating the application and its dependencies into containers.

Technologies Stack
Frontend: Vite-React, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Containerization: Docker

How to run:
1. Install all the dependencies
2. open terminal in main directory: Run this command - docker compose up
3. you will get 2 links:
   a. Local:   http://localhost:5173/
   b. Network: http://172.18.0.7:5173/
