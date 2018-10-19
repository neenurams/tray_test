## Set Up
1. Install Node https://nodejs.org/en/download 
2. Clone the project tray_test
3. Install node_modules 
```js
npm install
```
## Test Execution 
```js
npm run chimp
```
## Reporting
### Console Output
<img src="https://user-images.githubusercontent.com/44295780/47228133-64028800-d3bc-11e8-9b7f-8deb25b9002a.png" width="600">

## Isolating Tests
Run a specified feature or a scenario by using a tag @watch. 
To run the specific tag, change the chimp script in package.json file
```
 "chimp": "chimp ./config/chimp-conf.js --tags @watch || exit 0"
 ```
