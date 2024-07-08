import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';
import QuoteSlider from '../../components/Slider/QuoteSlider';

const Tab1: React.FC = () => {

  
  return (
    <IonPage>
      <IonContent fullscreen>
        <QuoteSlider />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
