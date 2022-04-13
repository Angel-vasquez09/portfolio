import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

export const SobreMi = () => {
    return (
        <>
            <Grid container sx={{ mt: 3 }}>
                <Grid item xs={12} sm={5} display="flex" justifyContent="center" alignItems={'center'}>
                    <Box sx={{ width: '300px', height: '300px' }}>
                        <CardMedia
                            component="img"
                            width="100%"
                            height="100%"
                            image={'/images/user.png'}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={7} display="flex" flexDirection={'column'} justifyContent="center" alignItems={'center'}>
                    <Typography variant="h4" sx={{ mt: { xs: 4, sm: 0 } }}> Un poco sobre mi</Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Mi nombre es <strong >Luis Angel</strong>  y soy <strong>Diseñador web junior</strong>.
                        Mi misión es ayudar a <strong >EMPRENDEDORES AUTÓNOMOS</strong> y <strong>PEQUEÑAS EMPRESAS</strong> a tener una web moderna, fresca y que siga los estandares internacionales para mejorar su imagen y sus ventas.
                        ¡Entonces, qué!… ¿hablamos?
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}
