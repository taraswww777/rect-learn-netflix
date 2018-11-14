import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import * as serviceWorker from './serviceWorker';
import './index.css';
import Reducers from './reducers/index';
import App from './components/App/App';
import Search from "./components/Search/Search";
import Exception404 from "./components/Exception404/Exception404";
import FilmDetail from "./components/FilmDetail/FilmDetail";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(Reducers,
	composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render((
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path='/' exact={true} component={Search}/>
					<Route path='/film/:id' component={FilmDetail}/>
					<Route path='*' component={Exception404}/>
				</Switch>
			</App>
		</Router>
	</Provider>
), document.getElementById('root'));


serviceWorker.unregister();
