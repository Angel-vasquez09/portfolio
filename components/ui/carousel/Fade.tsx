import React, { FC } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, CardMedia } from '@mui/material';

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

interface Props {
    imgs: string[]
}

export const Fade: FC<Props> = ({ imgs }) => {
    return (
        <Box sx={{ p: { xs: 0, sm: 2}}}>
            <Slider {...settings}>
                {
                    imgs.map((img, i) => (
                        <Box key={i}>
                            <CardMedia
                                component="img"
                                image={ img }
                            />
                        </Box>
                    ))
                }
            </Slider>
        </Box>
    )
}
