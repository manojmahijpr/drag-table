# DRAG-DROP TABLE

This UI Project contains a Drag-n-Drop option to create tables.
Project is using 'React.JS' for the frontend-ui and 'express.js' fro the backend

## Getting Started

Please follow the instruction to setup the project on your own local system. The express.js server contains REST-END point to get list of all books. and the front-end application contains ui to load the books data in a table which is being generated after a drag drop option.

### Prerequisites

```
npm >= 6.14.4 or yarn >= 1.22.4
node >= v12.16.2
create-react-app >= 3.4.1
```

Following ports must be free on your local system
```
5000, 3000
```

### Installing

Execute the following scripts/commands to setup the application.

To install UI
```
$ npm run ui-install
```

To run the application in dev environment
```
$ npm run dev
```

Example

```

$ npm run dev
> drag-table@1.0.0 dev /Users/aps/codebase/Javascript/drag-table
> concurrently "npm run server" "npm run ui"

[0] 
[0] > drag-table@1.0.0 server /Users/aps/codebase/Javascript/drag-table
[0] > nodemon server.js
[0] 
[1] 
[1] > drag-table@1.0.0 ui /Users/aps/codebase/Javascript/drag-table
[1] > npm start --prefix ui
[1] 
[0] [nodemon] 2.0.4
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node server.js`
[1] 
[1] > ui@0.1.0 start /Users/aps/codebase/Javascript/drag-table/ui
[1] > react-scripts start
[1] 
[0] Server Started at Port: 5000
[1] ℹ ｢wds｣: Project is running at http://192.168.43.194/
[1] ℹ ｢wds｣: webpack output is served from 
[1] ℹ ｢wds｣: Content not from webpack is served from /Users/aps/codebase/Javascript/drag-table/ui/public
[1] ℹ ｢wds｣: 404s will fallback to /
[1] Starting the development server...
[1] 
[1] Compiled successfully!
[1] 
[1] You can now view ui in the browser.
[1] 
[1]   Local:            http://localhost:3000
[1]   On Your Network:  http://192.168.43.194:3000
[1] 
[1] Note that the development build is not optimized.
[1] To create a production build, use yarn build.
[1] 
```

## Version
```
V1.0.0
```
## Author

* **Manoj Sharma**
