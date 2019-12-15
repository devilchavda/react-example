import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id"
          //  children={<Child />} 
           >
          <Child />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  // the dynamic pieces of the URL.
  console.log(JSON.stringify(useParams()));
   // we want to get this type of value :{"id":"netflix"} then we can use useParams() fun.
   let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
