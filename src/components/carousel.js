
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/carousel.css';
import 'swiper/css/effect-cube';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { EffectCube } from 'swiper/modules'
//import mui

import Grid from '@mui/material/Grid';

export default function App() {
    const arraySlides = [
        <SwiperSlide>
            <Grid container xs={11}>

                <Grid className="space_grid_item" item xs={12} md={6} lg={6} style={{ backgroundImage: `url("https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2017/05/29/corremaxana.jpg_1263951180.jpg")` }}>
                    item2
                </Grid>
                <Grid className="space_grid_item" item xs={12} md={6} lg={6} style={{ backgroundImage: `url("https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2017/05/29/corremaxana.jpg_1263951180.jpg")` }}>
                    item2
                </Grid>
                <Grid className="space_grid_item" item xs={12} md={6} lg={6} style={{ backgroundImage: `url("https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2017/05/29/corremaxana.jpg_1263951180.jpg")` }}>
                    item2
                </Grid>
                <Grid className="space_grid_item" item xs={12} md={6} lg={6} style={{ backgroundImage: `url("https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2017/05/29/corremaxana.jpg_1263951180.jpg")` }}>
                    item2
                </Grid>
            </Grid>
        </SwiperSlide>,
        <SwiperSlide>
            <Grid container xs={11}>

                <Grid className="space_grid_item" item xs={6} style={{ backgroundImage: `url("https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2017/05/29/corremaxana.jpg_1263951180.jpg")` }}>
                    item2
                </Grid>
                <Grid className="space_grid_item" item xs={6} style={{ backgroundImage: `url("https://www.tec.ac.cr/hoyeneltec/sites/default/files/styles/colorbox/public/media/img/main/mujer_corriendo.jpg")` }}>
                    item3
                </Grid>
                <Grid className="space_grid_item" item xs={6}>
                    item4
                </Grid>
                <Grid className="space_grid_item" item xs={6}>
                    item4
                </Grid>
            </Grid>
        </SwiperSlide>
    ];
    return (

        <Swiper
            effect={'cube'}
            pagination={{
                type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation, EffectCube]}
            className="mySwiper"
        >

            {arraySlides.map(slide => slide)
            
            
            }
        </Swiper>

    );
}
