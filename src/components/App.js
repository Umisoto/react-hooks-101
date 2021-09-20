import React, { useReducer } from "react";
import reducer from "../reducers";
import EventForm from "./EventForm";
import Events from "./Events";
import AppContext from "../contexts/AppContext";

import "bootstrap/dist/css/bootstrap.min.css";
import operationLogs from "../reducers/operationLogs";

const App = () => {
  const initialState={
    events:[],
    operationLogs:[]
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    {/* 既存のDOMをproviderでラップしてあげる */}
      <AppContext.Provider value={{state, dispatch}}>   
        <div className="container-fluid">
          <EventForm />
          <Events />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
