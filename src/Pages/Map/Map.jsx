import { Helmet } from 'react-helmet-async';
import Leaflet from '../Leaflet/Leaflet';

const Map = () => {
    return (
        <div className='w-full my-28 lg:my-0 '>
            <Helmet>
                <title>Taqwa Terraces | Location</title>
            </Helmet>
            <Leaflet></Leaflet>
        </div>
    );
};

export default Map;