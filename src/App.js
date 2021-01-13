import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from "./store";
import ProtectedRoutes from "./protectedRoutes";
import { publicRoutes, protectedRoutes } from "./routes";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          {publicRoutes.map((route, index) => (
            <Route
              path={route.path}
              exact={route.exact}
              key={index}
              render={(props) => (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              )}
            />
          ))}
          {protectedRoutes.map((route, index) => (
            <ProtectedRoutes
              path={route.path}
              exact={route.exact}
              component={route.component}
              layout={route.layout}
            />
          ))}
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
