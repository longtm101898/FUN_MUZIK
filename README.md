# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

---

# Project Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- components        # shared components used across the entire application
|
+-- features          # feature based on modules
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- types             # base types used across the application (if)
|
+-- utils             # shared utility functions
```

And, feature have the following structure:

```sh
src/features/...
|
+-- components        # components scoped to a specific feature
|
+-- routes            # route components for a specific feature pages
|
+-- types             # typescript types for TS specific feature domain
```
