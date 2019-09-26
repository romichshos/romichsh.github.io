import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from 'components/app/app'
import Movies from 'components/movies/movies.js'
import Movie from 'components/movie/movie.js'


export  default (<Router history={browserHistory}>
                 <Route path="/" component={App}>
                 <IndexRoute component={Movies} />
                 <Route path="movies" component={Movies}>
                <Route path=":id" component={Movie} />
            </Route>
        </Route>
    </Router>)
