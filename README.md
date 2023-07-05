# React Formulario Application

This is a simple React application that demonstrates the usage of components, form submission, and communication between components.

## Description

The React Formulario application consists of the following components:

- `App`: The main component that renders other components and manages the state of the application.
- `Head`: Displays the email of the user registered through the form.
- `Formulario`: A form component that allows users to enter their information, including name, email, URL for a photo, and age.
- `Card`: Displays the user's data, including name, email, photo (if provided), and age.

The communication between components is achieved using props and state management in React.

## Functionality

- Users can enter their information in the form fields (name, email, photo URL, and age).
- Upon form submission, the data is passed from the `Formulario` component to the `App` component, which updates the state.
- The `Head` component reads the email from the context provided by the `App` component.
- The `Card` component receives the user data from the `App` component and displays it, including the user's name, email, and age. If a photo URL is provided, it also displays the image.

## Styling

The application's styling is implemented using CSS and flexbox layout. The main container has a background image.

## FeedBack

If you guys have any feedbacks or suggestion to improve the weather app feel free to open an issue or use a Pull Request feature in github to reach out to me.

Thank you for your time!!!!!!!!!
