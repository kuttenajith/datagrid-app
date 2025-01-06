This document provides step-by-step instructions on how to set up and run the Datagrid application locally on your system.

Prerequisites

Ensure the following tools are installed on your system before proceeding:

Node.js (version 14.x or later)

Download Node.js

npm (comes with Node.js) or yarn (if you prefer using Yarn package manager)

Verify installation:

node -v
npm -v

Git (to clone the repository)

Download Git

Steps to Run the App Locally

1. Clone the Repository

Clone the repository to your local machine using Git:

git clone <repository-url>

Replace <repository-url> with the URL of your Git repository.

2. Navigate to the Project Directory

Change to the directory where the project files are located:

cd <project-folder-name>

Replace <project-folder-name> with the name of the cloned repository folder.

3. Install Dependencies

Install the required Node.js packages using npm or yarn:

npm install

Or, if you're using Yarn:

yarn install

4. Run the Application

Start the development server to run the application locally:

npm start

Or, if you're using Yarn:

yarn start

This will start the application and open it in your default web browser. By default, the app will be available at:

http://localhost:3000

5. View and Interact with the Application

You should now see the Datagrid application running in your browser. You can interact with the application by selecting rows, using the "Download Selected" feature, and toggling the "Select All" checkbox.


[Deployed URL](https://datagrid-app-five.vercel.app/)
