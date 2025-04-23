# Drizzle-Crud-Node

`user-crud-api` is a basic CRUD (Create, Read, Update, Delete) application built with [**Drizzle ORM**](https://github.com/drizzle-team/drizzle-orm) and [**Express.js**](https://expressjs.com/). This application allows users to manage user information efficiently, including details like user ID, name, and email. It serves as a foundational tool for user management systems or any application where basic user information needs to be stored, retrieved, and modified.

## Features

- **Create**: Add new users with specific details like name and email.
- **Read**: View a list of all users or individual user details by ID.
- **Update**: Modify existing user information.
- **Delete**: Remove users from the database.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Npm](https://www.npmjs.com/) (Node Package Manager)
- A [SQL Database](https://www.mysql.com/) (e.g., MySQL) and Drizzle ORM configured for the database
- [XAMPP](https://www.apachefriends.org/index.html) (for managing MySQL)
- [Drizzle ORM](https://drizzle.team/)

## Setting Up XAMPP

1. **Download and Install XAMPP:**

   - Go to the [XAMPP website](https://www.apachefriends.org/index.html).
   - Download the XAMPP installer for your operating system.
   - Run the installer and follow the instructions to install XAMPP.

2. **Start XAMPP:**

   - Open the XAMPP Control Panel.
   - Start the **Apache** and **MySQL** services.

3. **Create a Database:**

   - Open phpMyAdmin by navigating to `http://localhost/phpmyadmin` in your web browser.
   - Click on the "Databases" tab.
   - Create a new database for your project (e.g., `Drizzle-crud-node`).

4. **Configure Database Connection:**

   - In your project, create a `.env` file in the root directory.
   - Add the following environment variables to connect to your XAMPP MySQL database:

     ```env
     DATABASE_URL=mysql://root:<your-password>@localhost:3306/user_crud_db
     PORT=<port-number>
     ```

     Replace `<your-password>` with the MySQL root password (or leave it empty if you haven't set one), and `<port-number>` with the port number you want your application to use (e.g., `5000`).

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rohitcoding1991/drizzle-crud-node
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory of the project and add the following environment variables:

   ```env
   DATABASE_URL=<your-database-url>
   PORT=<port-number>
   ```

4. **Start the application:**

   ```bash
   npm start
   ```

## API Documentation

This project includes a `swagger.yaml` file that defines the API endpoints, request parameters, and responses in a standardized OpenAPI format. You can use this file to test and document the API.

### Using the `swagger.yaml` File

1. **Use an Online Swagger Editor:**

   - Visit the [Swagger Editor](https://editor.swagger.io/).
   - Copy the contents of the `swagger.yaml` file from your project.
   - Paste the contents into the editor.
   - The Swagger Editor will display the API documentation, allowing you to interact with and test the API endpoints directly from the browser.

## Postman Collection for API Testing

To make API testing easier, a Postman collection is provided for this project. This collection includes all the necessary endpoints and can be used to quickly test the API without manually configuring each request.

### Importing the Postman Collection

1. **Download the Postman Collection:**

   - The Postman collection file (`drizzle-crud.postman_collection.json`) is included in the repository.

2. **Import the Collection into Postman:**

   - Open Postman.
   - Click on the "Import" button in the top left corner.
   - Select the `drizzle-crud.postman_collection.json` file from your local machine.
   - Click "Open" to import the collection.

3. **Start Testing:**

   - Once the collection is imported, you can start making requests to the API endpoints defined in the collection. Each request includes predefined settings for method, URL, headers, and body, making it easier to test the API.
