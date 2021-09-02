import React, { useEffect } from "react";

import { useAppDispatch } from "./store/index";
import { fetchData } from "./store/actions/library.actions";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return <div className="App"></div>;
}

export default App;
