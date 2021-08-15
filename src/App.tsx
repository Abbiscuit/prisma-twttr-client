import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import TweetsPage from './pages/tweets-page';
import UsersPage from './pages/users-page';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/tweets">
          <TweetsPage />
        </Route>
        <Route exact path="/users">
          <UsersPage />
        </Route>
        <Route path="*">
          <Redirect to="/tweets" />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
