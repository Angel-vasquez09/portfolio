import { Box, Typography } from '@mui/material'
import { Contacto, PortFolioLayout } from 'components'
import React from 'react'

const Contactame = () => {
    return (
        <PortFolioLayout
            title={'Contactame | Angel'}
            description={'Espero tu email'}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:' center'}}>
                    <Typography variant="h5" sx={{ my: 5, textAlign: 'center'}}>¿Con quién nos estamos contactando? </Typography>
                    <Contacto />
                </Box>
        </PortFolioLayout>
    )
}

export default Contactame