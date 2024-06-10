# NewsMonkey

A React.js application that delivers the latest headlines from India, US, UK, and Japan across various categories, with a user-selectable view mode (pages or continuous scroll) and a fully responsive design.

## Features:

- **Dynamic News Feed**: Get up-to-date headlines from leading news sources in India, US, UK, and Japan.
- **Categorized Content**: Explore news in specific categories like General, Entertainment, Sports, Business, Health, Science, and Technology.
- **View Mode Selection**: Choose between displaying news articles in paginated sections or a continuous scrolling feed.
- **Responsive Design**: Enjoy a seamless user experience across desktops, tablets, and mobile devices.

## Technologies Used:

- **React.js**: The core JavaScript library for building user interfaces.
- **React Router DOM**: Enables navigation and routing between different sections of the application.
- **React Top Loading Bar**: Provides visual feedback while news is being fetched.
- **React Infinite Scroll**: Optimizes loading for a seamless continuous scrolling experience.

## Skills Learned:

- **Component Lifecycle Methods**: Understanding and utilizing lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- **State Management**: Using the `setState` method to manage and update the state of class-based components dynamically.
- **Conditional Rendering**: Using conditional logic to render components based on the current state or props.
- **API Integration**: Fetching and handling data from external APIs within class-based components.
- **Third-Party Libraries**: Integrating libraries such as React Top Loading Bar and React Infinite Scroll to enhance functionality.

## Getting Started

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Shivamrut/NewsMonkey.git
    ```
2. **Install Dependencies**:
    ```bash
    cd NewsMonkey
    npm install
    ```
3. **Obtain a NewsApi Key**:

   * Create a free account on https://newsapi.org/.
   * Generate an API key from your account dashboard.
4. **Configure NewsApi Key**:

    Locate the fetch call in your codebase where you make API requests to NewsApi (Present in News.js component).

5. **Run the Development Server**:
    ```bash
    npm start
    ```
    This will start the development server, typically accessible at [http://localhost:3000/](http://localhost:3000/) in your web browser.

## Usage:

- **News Feed**: Browse the main page to view headlines across all categories.
- **Categories**: Select a specific category from the navigation bar to filter the news feed.
- **View Mode**: Use the toggle button (or a similar option) to switch between paginated and continuous scrolling modes.
