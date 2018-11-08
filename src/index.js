import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import * as serviceWorker from './serviceWorker';
import './index.css';
import reducer from './actions/reducer';
import App from './App';
import Search from "./components/Search/Search";
import Exception404 from "./components/Exception404/Exception404";

const store = createStore(reducer);

ReactDOM.render((
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path='/' exact={true} component={Search} props={store}/>
					<Route path='*' component={Exception404}/>
				</Switch>
			</App>
		</Router>
	</Provider>
), document.getElementById('root'));


serviceWorker.unregister();
