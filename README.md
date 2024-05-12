Shortly is a simple URL shortener web application that allows users to shorten long URLs into more manageable and shareable links. It provides a user-friendly interface for both signing up and signing in, allowing users to securely manage their shortened URLs. The application utilizes Firebase for authentication and database management and integrates with the Short.cm API for URL shortening functionality.

**Features:**
1. **User Authentication:** Users can sign up and sign in securely using their email and password.
2. **URL Shortening:** Users can paste a long URL into the input field and shorten it with the click of a button.

**Setup Instructions:**
1. Clone the repository to your local machine.
2. Set up a Firebase project and configure the Firebase credentials in the `main.js` file.
3. Obtain API credentials from Short.io and replace placeholders in `main.js` accordingly.
4. Open `index.html` in a web browser to access the sign-in/sign-up page.

**Project Structure:**
- `index.html`: Entry point of the application containing the sign-in/sign-up form.
- `linker.html`: Page for shortening URLs and displaying the shortened links.
- `main.js`: JavaScript file containing Firebase authentication and URL shortening logic.
- `style.css`: CSS file for styling the application.

