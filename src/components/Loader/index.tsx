import { IonButton, IonLoading } from "@ionic/react";
import './index.css'

const Loader = (props: any) => {
    const { show = false } = props;
    return <>
        <IonLoading
            className="loading"
            isOpen={show}
            message={'Please wait...'}
            spinner="circles"
            duration={0}
        />
    </>
}


export default Loader;