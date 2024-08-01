# Food Recipe App

## Overview

The Food Recipe App is a ReactJS-based application that dynamically fetches and displays recipes from the [Spoonacular API](https://spoonacular.com/food-api). It features detailed recipe information, including images, and provides a user-friendly interface for exploring various recipes.

## Features

- **Dynamic Recipe Fetching**: Fetches recipes from the Spoonacular API.
- **Detailed Recipe Information**: Displays preparation time, servings, cost per serving, and ingredient lists.
- **Recipe Images**: Shows high-quality images for each recipe.
- **Intuitive User Interface**: Provides a seamless and easy-to-navigate user experience.

## Technologies

- **ReactJS**: Frontend framework for building the user interface.
- **Spoonacular API**: Provides recipe data.
- **CSS/Styled Components**: For styling and layout.

## Installation Steps

1. **Clone the Repository**

   Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/yourusername/food-recipe-app.git
   ```

2. **Navigate to the Project Directory**

   Change into the project directory:

   ```bash
   cd food-recipe-app
   ```

3. **Install Dependencies**

   Install the necessary dependencies using npm:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**

   - Create a `.env` file in the root of the project directory.
   - Sign up for an API key from [Spoonacular](https://spoonacular.com/food-api). You will need to create an account and obtain your personal API key from your profile.
   - Add the following line to your `.env` file, replacing `your_api_key_here` with your actual Spoonacular API key:

     ```plaintext
     API_KEY="your_api_key_here"
     ```

   - **Important**: Make sure to include the API key in `foodDetails.jsx` and `search.jsx`, as these files make API requests to Spoonacular.

5. **Start the Development Server**

   Depending on how the `scripts` are configured in your `package.json`, you can start the development server using one of the following commands:

   - If your `package.json` includes a `dev` script:

     ```bash
     npm run dev
     ```

   - If your `package.json` uses `start` for development:

     ```bash
     npm start
     ```

   Open your browser and navigate to `http://localhost:3000` to view the application.

6. **Build for Production** (optional)

   To create a production build of the application:

   ```bash
   npm run build
   ```

   This will generate static files for deployment.

7. **Deploy the Application** (optional)

   Deploy the built application to platforms such as Vercel, Netlify, or GitHub Pages.

8. **Troubleshooting**

   - Ensure your API key is correctly set up in the `.env` file and is kept private.
   - Verify that you have updated `foodDetails.jsx` and `search.jsx` with the correct API key.
   - Check the browser's console and network tabs for errors if the application is not working as expected.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. For significant changes, please open an issue to discuss the modifications before proceeding.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or further information, please contact [harshalpawar242424@gmail.com]
