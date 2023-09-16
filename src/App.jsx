import {Switch, Route, HashRouter} from 'react-router-dom'
import './App.scss';
import {Desktop} from "./pages/Desktop/Desktop";
import {Mobile} from "./pages/Mobile/Mobile";
import {MobileStart} from "./pages/MobileStart/MobileStart";
import {Demo} from "./pages/Demo/Demo";
import {useMediaQuery} from 'react-responsive'

function App() {
    const isBigScreen = useMediaQuery({query: '(min-width: 1150px)'})
  console.log(isBigScreen)
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Demo/>
        </Route>

        <Route path="/game">
          {isBigScreen ? <Desktop/> : <Mobile/>}
        </Route>

        <Route path="/mobile-start">
          <MobileStart/>
        </Route>

      </Switch>
    </HashRouter>
  );
}

export default App;
