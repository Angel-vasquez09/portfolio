import { Card, CardMedia } from '@mui/material'
import React, { FC } from 'react'

interface Props {
    img: string;
    width?: string;
    height?: string;
}

export const TecnoHerr: FC<Props> = ({ img, width = '100px', height = '100px' }) => {
    return (
        <Card sx={{
            width,
            height,
            borderRadius: '50%',
            p: 2,
            mr: 2,
            mb: 2,
        }}>
            <CardMedia
                component="img"
                image={ img }
                alt="TecnoHerr"
            />
        </Card>
    )
}
