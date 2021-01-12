import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoutes from './protectedRoutes';
import { publicRoutes, protectedRoutes } from './routes';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
