This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# JWT Mastery

This project uses MongoDB as a database to store user accounts. Their accounts consist of a username, password, and id.When the user registers, they create an account that it stored in the database.

When the users sign in, the server creates a jwt that will serve as a session for the user. The JWT expires after 2 minutes of inactivity.

## Available Scripts

### `npm i`
When first opening the project, run this command in both the root folder and the server folder to install all dependencies.

### `npm run start`
Runs both the frontend and the backend command to get both servers running concurrently.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run start:frontend`
Runs the frontend section of the code to get the interface applied.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run start:backend`
Runs the server section of the project to get the backend database connected.
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

### `npm run dev`
Runs the app in the development mode.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`
It runs through the code to check for any potential bugs or errors.
