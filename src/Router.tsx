import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { LibraryPage } from "./pages/LibraryPage/LibraryPage";

export const MainRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/library/:order">
            <LibraryPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
