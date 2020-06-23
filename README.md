# Contacts
A React Redux application with Express backend using create-react-app

## Setting up the development environment

Install Node.js from https://nodejs.org <br>
Download 32-bit or 64-bit binary depending upon the architecture of the system.

Install Create React App using which we will start building the Contacts application.
```sh
npm install –g create-react-app
```

Generate the basic code template which we will modify to add the features required for the Contacts application.
```sh
create-react-app contacts
```

Install the modules for redux integration.
```sh
npm install –S redux
npm install –S redux-thunk
npm install –S react-redux
```

Install the HTTP client module, axios to get data from server and also the modules, toastr and jquery to display status on the browser when performing UI actions.
```sh
npm install –S axios
npm install –S toastr
npm install –S jquery
```

Install Express and body-parser module to serve the persistent data required for the Contacts application.
```sh
npm install –S express
npm install –S body-parser
```

To proxy API requests during development and avoid CORS issues, update package.json present in contacts folder with the proxy setting (assuming that the Express server runs at port 4000).
```js
"proxy": "http://localhost:4000"
```

## Running the application
Go to Node.js command prompt. Change directory to contacts.

Start the Server.
```sh
start node server.js
```

Start the React application Contacts.
```sh
npm start
```
This will start the application and display the Contacts information. We can now add and delete contacts.
# contacts
