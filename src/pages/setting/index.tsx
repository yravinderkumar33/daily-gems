import { IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import './index.css';
import _ from 'lodash';

const Settings: React.FC = () => {

  const renderQuotesSchedule = () => {

    const schedules = [
      {
        label: "Every Hour",
        value: "1h"
      },
      {
        label: "Every 4 Hours",
        value: "4h"
      },
      {
        label: "Every 12 Hours",
        value: "12h"
      },
      {
        label: "Every Day",
        value: "1d"
      }
    ]

    return (
      <IonSelect label="Schedule" placeholder="Schedule">
        {_.map(schedules, schedule => <IonSelectOption value={schedule.value}>{schedule.label}</IonSelectOption>)}
      </IonSelect>
    );
  }

  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonListHeader>
            <IonLabel>Notifications</IonLabel>
          </IonListHeader>
          <IonItem>
            {renderQuotesSchedule()}
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
