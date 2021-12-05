import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';


AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
    rootTag: document.getElementById("root")
});


// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );