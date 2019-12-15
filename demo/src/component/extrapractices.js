import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Redirect
} from "react-router-dom";


function usePageViews(props) {
    let location = props.useLocation();
    React.useEffect(() => {Redirect.send(["pageview", location.pathname]);
    }, [location]);
  }
  
 export default function ExtraPractices() {
    usePageViews();
    return <Switch>...</Switch>;
  }