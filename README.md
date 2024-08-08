# ReachInbox Web App

A functional web app for managing large-scale cold email marketing campaigns using ReachInbox's AI-driven platform.

## Features

- **Login Page**: User authentication using Google and Microsoft.
- **Onebox Screen**: Displays user threads with data fetched from API.
- **Keyboard Shortcuts**: "D" to delete, "R" to reply.
- **Custom Text Editor**: Includes "SAVE" and "Variables" buttons.
- **Reply Functionality**: Send replies through the API.
- **Light/Dark Mode**: Toggle between themes.

## Technologies Used

- React
- React Router
- Axios
- FontAwesome
- CSS for styling

## Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/reachinbox-web-app.git
   cd reachinbox-web-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the App**
   ```bash
   npm start
   ```

4. **Environment Variables**
   Create a `.env` file in the root directory and add your API endpoints:
   ```
   REACT_APP_API_LOGIN=YOUR_API_ENDPOINT_FOR_LOGIN
   ```

## Usage

- **Login**: Use your Google or Microsoft account to log in.
- **Navigate**: After logging in, you'll be taken to the Onebox screen.
- **Keyboard Shortcuts**: Use "D" to delete threads and "R" to open the reply box.
- **Reply**: Type your message and click "Send" to reply.
- **Theme Toggle**: Use the theme switcher to switch between light and dark modes.

## Project Structure

```
/src
  /components
  /pages
  /styles
  App.js
  index.js
  index.css
  ThemeSwitcher.js
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please open an issue or reach out to the project maintainer at your-email@example.com.