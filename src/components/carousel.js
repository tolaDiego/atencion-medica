
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
import { EffectFlip } from 'swiper/modules'
//import mui

import Grid from '@mui/material/Grid';

export default function App() {
    const arraySlides = [
        <SwiperSlide>
            <Grid container height={"100%"} >

                <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://medicoplus.com/_next/image?url=https%3A%2F%2Fplustatic.com%2F6103%2Fconversions%2Ftipos-pediatras-large.jpg&w=1024&q=75")` }}>
                   <p className="title_space_item"> Pediatría</p> 

                </Grid>
                <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://www.psicoactiva.com/wp-content/uploads/2018/10/neurologo-psiquiatra.jpg")` }}>
                   <p className="title_space_item">Neurología</p>
                </Grid>
                <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://cdn.euroinnova.edu.es/img/subidasEditor/cardiologo02-1649434248.webp")` }}>
                <p className="title_space_item">Cardiología</p>
                </Grid>
                <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://www.psicoactiva.com/wp-content/uploads/2021/04/toxicologia.jpg")` }}>
                <p className="title_space_item">Infectología</p>
                </Grid>
            </Grid>,
            
        </SwiperSlide>,
               <SwiperSlide>
               <Grid container height={"100%"} >
   
                   <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://medicoplus.com/_next/image?url=https%3A%2F%2Fplustatic.com%2F6103%2Fconversions%2Ftipos-pediatras-large.jpg&w=1024&q=75")` }}>
                      <p className="title_space_item"> Pediatría</p> 
   
                   </Grid>
                   <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://www.psicoactiva.com/wp-content/uploads/2018/10/neurologo-psiquiatra.jpg")` }}>
                      <p className="title_space_item">Neurología</p>
                   </Grid>
                   <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://cdn.euroinnova.edu.es/img/subidasEditor/cardiologo02-1649434248.webp")` }}>
                   <p className="title_space_item">Cardiología</p>
                   </Grid>
                   <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://www.psicoactiva.com/wp-content/uploads/2021/04/toxicologia.jpg")` }}>
                   <p className="title_space_item">Infectología</p>
                   </Grid>
               </Grid>,
               
           </SwiperSlide>,
                  <SwiperSlide>
                  <Grid container height={"100%"} >
      
                      <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://medicoplus.com/_next/image?url=https%3A%2F%2Fplustatic.com%2F6103%2Fconversions%2Ftipos-pediatras-large.jpg&w=1024&q=75")` }}>
                         <p className="title_space_item"> Pediatría</p> 
      
                      </Grid>
                      <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://www.psicoactiva.com/wp-content/uploads/2018/10/neurologo-psiquiatra.jpg")` }}>
                         <p className="title_space_item">Neurología</p>
                      </Grid>
                      <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://cdn.euroinnova.edu.es/img/subidasEditor/cardiologo02-1649434248.webp")` }}>
                      <p className="title_space_item">Cardiología</p>
                      </Grid>
                      <Grid className="space_grid_item" item xs={12} md={6} lg={3} style={{ backgroundImage: `url("https://www.psicoactiva.com/wp-content/uploads/2021/04/toxicologia.jpg")` }}>
                      <p className="title_space_item">Infectología</p>
                      </Grid>
                  </Grid>,
                  
              </SwiperSlide>
    ];
    return (

        <Swiper
            effect={'flip'}
            pagination={{
                type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation, EffectFlip]}
            className="mySwiper"
        >

            {arraySlides.map(slide => slide)
            
            
            }
        </Swiper>

    );
}
