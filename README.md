# Results App

This is a React Native application that displays a list of results fetched from an API (e.g., Yelp). The app showcases a reusable component to present detailed information about each result, including images, names, ratings, and review counts.

This project marks the beginning of my journey in learning React Native. Here, you can find what I have worked on so far. I might return later to add more features as I learn new concepts and skills.

## Features

- Display a list of results fetched from the API.
- Navigate to a detailed view of each result.
- Responsive design with smooth scrolling and navigation.
- Reusable components for displaying results.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/results-app.git
   cd results-app
   ```

2. **Install dependencies:**
   Make sure you have Node.js and npm installed. Then, run:
   ```bash
   npm install
   ```

3. **Run the application:**
   For iOS:
   ```bash
   npm run ios
   ```

   For Android:
   ```bash
   npm run android
   ```

## Code Structure

- `ResultsList.js`: A component displaying a horizontal results list.
- `ResultsDetail.js`: A reusable component to show detailed information about a single result.
- `ResultsShowScreen.js`: Screen component to display more detailed information and images of a selected result.
- `yelp.js`: A file that handles API requests to fetch results.

## Usage

- The main screen displays a list of results. Tapping on a result navigates to a detailed view, showing additional information and images.
- The application fetches data asynchronously from the API, ensuring a smooth user experience.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have suggestions or improvements.


## Acknowledgments

- [React Native](https://reactnative.dev/) for building mobile apps using JavaScript.
- [Yelp API](https://www.yelp.com/developers/documentation/v3/getting_started) for providing business data.
