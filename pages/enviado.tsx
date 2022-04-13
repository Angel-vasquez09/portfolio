import { Box, Button, CardMedia, Grid, Typography } from '@mui/material'
import { PortFolioLayout } from 'components'
import React from 'react'

const Enviado = () => {
    return (
        <PortFolioLayout
            title={'Correo enviado'}
            description={'Correo enviado con exito'}>

                <Grid container>
                    <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
                        <Box>
                            <Typography variant="subtitle2">¡MUCHAS GRACIAS!</Typography>
                            <Typography variant="h3"><strong>El correo se ha enviado con éxito</strong></Typography>
                            <Typography variant="subtitle1">En un momento me pondré en contacto contigo para darle seguimiento a tu mensaje, muchas gracias</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
                        <CardMedia
                            component="img"
                            sx={{width: '400px', height: '400px', opacity: 0.7}}
                            image={'/images/enviado.png'}
                        />
                    </Grid>
                </Grid>

        </PortFolioLayout>
    )
}

export default Enviado