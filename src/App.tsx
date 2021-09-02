import React, { useEffect } from "react";

import { useAppDispatch } from "./store/index";
import { fetchData } from "./store/actions/library.actions";
import { MainRouter } from "./Router";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return <MainRouter />;
}

export default App;
