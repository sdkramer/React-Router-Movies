import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />

      <div>
        <Route path='/'>
          <MovieList />
        </Route>
        <Route path='/movies/:id' render={props => {const { id } = props.match.params}}>
          <Movie />
        </Route>
      </div>
    </div>
  );
};

export default App;
