import { Typography, Box, Grid, CardMedia, Button } from '@mui/material'
import React, { FC } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import { SeedProyects } from 'interfaces/proyects';

interface Props {
    btnProyect?: boolean; // true: Muestra el boton de  redireccion a todos mis proyectos, false: No muestra el boton de *
    style?     : React.CSSProperties;
    proyect    : SeedProyects
}

export const CardProyect: FC<Props> = ({ btnProyect = false, style, proyect }) => {

    const matches = useMediaQuery('(max-width:900px)');

    return (
        <>
            <Box style={style} sx={{ height: '300px', border: '2px solid white', borderRadius: '20px'}}>
                <Grid  container sx={{height: '100%'}}>
                    <Grid item xs={12} md={6} sx={{ p: 1, height: '100%'}} display="flex" flexDirection={'column'}  justifyContent="center">
                        <CardMedia
                            sx={{borderRadius: '20px', position: 'relative', opacity: {xs: 0.4, md: 0.9}}}
                            component="img"
                            width="100"
                            height="100%"
                            image={proyect.imgs[0]}
                            alt="proyecto1"
                        />
                        {
                            matches && (
                                <DetailProyect proyect={proyect} btnProyect={btnProyect} />
                            )
                        }
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ display: {xs: 'none', md:'flex'},p: 1, height: '100%'}} display="flex" justifyContent={'center'} alignItems="center">
                        <DetailProyect proyect={proyect} btnProyect={btnProyect} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}


const DetailProyect: FC<Props> = ({ btnProyect = false, proyect }) => {
    const { asPath, push } = useRouter();
    const validPath = asPath.includes('/proyects');
    return (
        <Box sx={{pl: 3, position: {xs: 'absolute', md: 'relative'}, width: { xs: 'min-content', md: validPath ? 'auto' : 'min-content'}}}>
            <Typography variant="h5" sx={{ fontSize: { xs: '20px', sm: '20px'}}}>{ proyect.name }</Typography>
            <Typography variant="body2" paragraph>
                { proyect.description }
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: {xs: 'column', sm: 'row'}, mt: 1}}>
                {
                    btnProyect && (
                        <Button sx={{mr: {xs: 0, sm: 2},mb: {xs: 2, sm: 0}, fontSize: {xs: 12, sm: 16}}} className="btn btn-1">Mira todos mis proyectos</Button>
                    )
                }
                <Button
                    onClick={ () => push('/proyects/food-delivery')}
                    className="btn">Detalle de proyecto</Button>
            </Box>
        </Box>
    )
}
