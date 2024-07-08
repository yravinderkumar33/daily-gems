import { IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonToolbar } from '@ionic/react';
import './index.css';
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../store/reducers/category';
import { useHistory } from 'react-router-dom'
const Tab2: React.FC = () => {

  const dispatch = useDispatch();

  const quotes = useSelector((state: any) => state?.quote);
  const history = useHistory();
  const data = quotes?.data || [];

  const selectCategory = (payload: Record<string, any>) => {
    dispatch(setCategory(payload.category));
    history.push('/quote');
  }

  const renderCategory = (payload: Record<string, any>, index: number) => {
    return <IonCol size="12" sizeXs='6' sizeLg='4' key={index} >
      <div className="card-background" style={{ backgroundImage: `url(${payload?.categoryImage})` }} onClick={() => selectCategory(payload)}>
        <div className="card-content">
          <IonText>
            <h3 style={{ fontWeight: '800', borderBottom: '1px solid rgba(255, 255, 255, 0.5)' }}>{_.capitalize(payload.category)}</h3>
          </IonText>
        </div>
      </div>
    </IonCol>
  }

  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {data.map(renderCategory)}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
