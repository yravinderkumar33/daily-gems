
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y'
import './index.css'
import 'swiper/css/effect-fade';
import { IonText, IonIcon, IonButton, useIonViewWillLeave } from '@ionic/react';
import { shareSocialOutline } from "ionicons/icons";
import { shareQuote } from '../../services/quote';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { generate } from '../../services/pushNotification';


const FullPageSlider: React.FC = () => {

    const reduxState = useSelector((state: any) => state);
    const categoryMetadata = _.get(reduxState, 'category');
    const chosenCategory = _.get(categoryMetadata, 'category') || "Hapiness";
    const defaultImages = _.get(categoryMetadata, 'defaultImages')
    const quotes = _.get(reduxState, 'quote.data', []);
    const chosenCategoryMetadata = _.find(quotes, ['category', chosenCategory]);
    const chosenCategoryQuotes = _.shuffle(_.get(chosenCategoryMetadata, 'quotes') || []);
    const backgroundImages = _.get(chosenCategoryMetadata, 'images') || defaultImages;
    const [index, setIndex] = useState(0);
    const size = _.size(chosenCategoryQuotes);

    const generateNotification = () => {
        if (size) {
            const randomIndex = _.random(0, _.size(quotes));
            generate(_.get(chosenCategoryQuotes, [randomIndex]))
        }
    }

    const share = async (payload: Record<string, any>) => {
        try {
            await shareQuote(payload)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        generateNotification();
    }, [size])

    useIonViewWillLeave(() => {
        setIndex(0)
    })

    const renderQuote = (payload: Record<string, any>) => {
        const image = _.get(_.shuffle(backgroundImages), '[0]')
        return (
            <SwiperSlide key={index}>
                <div className="slider-background" style={{ backgroundImage: `url(${image})`, backgroundColor: 'black' }}>
                    <div className="slider-content">
                        <div className='slider-container'>
                            <IonText color="white">
                                <h2>{payload?.text || payload?.quote}</h2>
                            </IonText>
                            <IonText color="white">
                                <h3>- {payload?.author || 'Unknown'}</h3>
                            </IonText>
                        </div>
                    </div>
                    <div className="bottom-actions">
                        <IonIcon icon={shareSocialOutline} size='large' onClick={() => share(payload)} />
                    </div>
                </div>
            </SwiperSlide>
        )
    }

    return (
        <Swiper
            initialSlide={index}
            loop={true}
            modules={[Navigation, Pagination, A11y, EffectFade]}
            onSlideChange={() => { }}
            onSwiper={() => { }}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{ enabled: true }}
            pagination={{ enabled: false }}
            scrollbar={{ draggable: false, enabled: false }}
            style={{ height: '100%', overflow: 'hidden' }}
            effect='fade'
        >
            {chosenCategoryQuotes.map(renderQuote)}
        </Swiper>
    );
};

export default FullPageSlider;