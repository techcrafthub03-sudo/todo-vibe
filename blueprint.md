# Project Blueprint

## Overview

This project is a To-do application that allows users to create, track, and manage their tasks. The application is built using Next.js and Firebase, featuring a clean and modern design with a responsive layout.

## Features

*   **Firebase Authentication:** Users can sign in with their Google accounts to securely access their to-do lists.
*   **User-Specific To-dos:** Each user has their own to-do list, ensuring that tasks are private and only accessible to the authenticated user.
*   **Create New Tasks:** Users can add new tasks to their to-do list.
*   **Prevent Duplicate Tasks:** The application prevents users from adding duplicate to-dos with the same title.
*   **View All Tasks:** All tasks are displayed in a list, with the newest tasks appearing first.
*   **Mark as Complete:** Users can toggle the completion status of a task using a checkbox.
*   **Delete Tasks:** Users can remove tasks from the list using a trash icon.
*   **Loading States:** The application provides visual feedback during asynchronous operations, such as adding a task and fetching the to-do list.

## Server Actions

*   `getTodos(userId)`: Fetches all to-do items for a specific user from the Firestore database.
*   `addTodo(userId, formData)`: Adds a new to-do item to the Firestore database for a specific user, with a timestamp and a check to prevent duplicates.
*   `toggleTodo(userId, id, completed)`: Toggles the completion status of a to-do item in Firestore for a specific user.
*   `deleteTodo(userId, id)`: Deletes a to-do item from the Firestore database for a specific user.

## Firebase Integration

1.  **Login to Firebase:** Authenticated the user's Firebase account.
2.  **Set Active Project:** Set the active Firebase project to `todo-vibe-7a533`.
3.  **Fetch SDK Configuration:** Retrieved the Firebase SDK configuration for the web platform.
4.  **Create Configuration File:** Created `src/lib/firebase.ts` to initialize Firebase and export the Firestore database and Firebase app instances.
5.  **Install Dependencies:** Installed the `firebase` npm package.
6.  **Firebase Authentication:** Implemented Google Sign-In to allow users to authenticate with their Google accounts. The application is protected, and only authenticated users can access the main page.

## Authentication

*   **`AuthContext`:** A React context is used to manage the user's authentication state throughout the application.
*   **`useAuth` Hook:** A custom hook that provides access to the authenticated user's information.
*   **`Login` Component:** A dedicated login page that prompts users to sign in with their Google account.
*   **`ProtectedRoute`:** A higher-order component that protects the main page from unauthenticated access.

## Design

*   **"Serene Focus" Aesthetic:** A clean, minimalist, and professional design that is both visually appealing and easy to use.
*   **Responsive Layout:** The layout is responsive and works well on both desktop and mobile devices.
*   **Color Scheme:** A calm and professional color palette with a white background and blue accents.
*   **Typography:** Clear and legible typography that enhances the user experience.
*   **Iconography:** The application uses a `ClipboardCheck` icon in the header and a `Plus` icon for adding tasks, improving the user experience.
*   **User Feedback:** The UI provides clear loading and disabled states for interactive elements.

## Components

*   **`Header`:** Displays the application title with a `ClipboardCheck` icon.
*   **`AddTask`:** A form for adding new tasks, with a loading state on the submit button and a `Plus` icon.
*   **`TodoList`:** Displays the list of to-do items, sorted by creation date. A loading spinner is shown while the tasks are being fetched.
*   **`TodoItem`:** Represents a single to-do item in the list, with a checkbox for toggling completion and a delete button with a trash icon.
*   **`loading.tsx`**: A loading component that displays a message while server-side data is being fetched.
*   **`Login`**: A login component that allows users to sign in with their Google account.
*   **`ProtectedRoute`**: A component that protects routes from unauthenticated users.
