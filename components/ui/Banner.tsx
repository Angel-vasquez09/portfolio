import React, { FC } from 'react'
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
interface Props {
    title   : string;
    subtitle: string;
    img     : string;
}
export const Banner: FC<Props> = ({ title, subtitle, img }) => {
    return (
        <Card sx={{ height: {xs: 'auto', md: '400px'}, mt: 2, p: {xs: 2, sm: 1} }}>
            <Grid container sx={{ width: '100%', height: '100%'}}>
                <Grid item xs={ 12 } sm={ 6 } sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box>
                        <Typography sx={{ textAlign: 'center'}} variant="h4">
                            { title }
                        </Typography>
                        <Typography sx={{ textAlign: 'center'}} variant="h5">
                            { subtitle }
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 } sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <CardMedia
                        component="img"
                        sx={{width: {xs: '200px', sm: '400px'}, height: {xs: '200px', sm: '400px'}, opacity: 0.7}}
                        image={ img }
                        alt="Banner"
                    />
                </Grid>
            </Grid>
        </Card>
    )
}
