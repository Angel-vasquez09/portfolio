import { Box, Button, Typography } from '@mui/material';
import React, { FC } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { CardProyect } from 'components';
import { SeedProyects } from 'interfaces/proyects';
interface  Props {
    proyects: SeedProyects[]
}
export const Carousel: FC<Props> = ({ proyects }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Box sx={{ p: { xs: 0, md: 2 }, mt: 4 }}>
            <Slider {...settings}>
                {
                    proyects.map((proyect, index) => (
                        <CardProyect
                            key={index}
                            btnProyect={true}
                            proyect={proyect}
                        />
                    ))
                }
            </Slider>
        </Box>
    )
}
