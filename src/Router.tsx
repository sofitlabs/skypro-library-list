import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";

export const MainRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
