import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { listCircleOutline, settingsOutline, homeOutline } from 'ionicons/icons';
import Quote from './pages/quote';
import Categories from './pages/categories';
import Setting from './pages/setting';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchQuotesThunk } from './store/middlewares';
import Loader from './components/Loader';
import { useNotifications } from './hooks/pushNotifications';

setupIonicReact();

const App: React.FC = () => {
  const dispatch = useDispatch<any>();
  const quotes = useSelector((state: any) => state?.quote);
  const isLoading = quotes?.status !== "success";

  useNotifications({});

  useEffect(() => {
    dispatch(fetchQuotesThunk())
  }, [])

  const renderRouter = () => {
    return (
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/quote">
              <Quote />
            </Route>
            <Route exact path="/category">
              <Categories />
            </Route>
            {/* <Route path="/setting">
              <Setting />
            </Route> */}
            <Route exact path="/">
              <Redirect to="/quote" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" style={{ padding: '15px 0px' }} >
            <IonTabButton tab="quote" href="/quote">
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Quote</IonLabel>
            </IonTabButton>
            <IonTabButton tab="category" href="/category">
              <IonIcon aria-hidden="true" icon={listCircleOutline} />
              <IonLabel>Categories</IonLabel>
            </IonTabButton>
            {/* <IonTabButton tab="setting" href="/setting">
              <IonIcon aria-hidden="true" icon={settingsOutline} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton> */}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    );
  }

  return (
    <IonApp>
      <Loader show={isLoading} />
      {renderRouter()}
    </IonApp>
  )
};

export default App;
