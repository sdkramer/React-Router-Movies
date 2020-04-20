import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

import SavedList from "./Movies/SavedList";

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
        <Route path='/movies/:id'>
          <Movie />
        </Route>
      </div>
    </div>
  );
};

export default App;
