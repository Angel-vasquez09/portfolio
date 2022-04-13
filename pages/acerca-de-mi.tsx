import { Box, Grid, Typography } from '@mui/material'
import { Banner, PortFolioLayout, SobreMi, TecnoHerr } from 'components'
import { NextPage } from 'next'
import React from 'react'

const AcercaDeMi: NextPage = () => {
    return (
        <PortFolioLayout
            title={'Acerca de | Angel'}
            description={'Acerca de Luis Angel'}>
                <Banner
                    title={`Conoce un poco más sobre mi`}
                    subtitle={''}
                    img={'/images/my.png'}
                />

                <SobreMi />
                <Typography variant="h4" sx={{ my: 5}}>Tecnologias y herramientas</Typography>

                <Box display="flex" flexWrap={'wrap'} justifyContent='center'>
                    <TecnoHerr img={'/tecno/html.png'}    />
                    <TecnoHerr img={'/tecno/css.png'}     />
                    <TecnoHerr img={'/tecno/script.png'}  />
                    <TecnoHerr img={'/tecno/boost.png'}   />
                    <TecnoHerr img={'/tecno/tail.png'}    />
                    <TecnoHerr img={'/tecno/node.png'}    />
                    <TecnoHerr img={'/tecno/express.png'} />
                    <TecnoHerr img={'/tecno/mdb.png'}     />
                    <TecnoHerr img={'/tecno/react.png'}   />
                    <TecnoHerr img={'/tecno/materialUi.png'} />
                    <TecnoHerr img={'/tecno/nextjs.png'}     />
                </Box>
        </PortFolioLayout>
    )
}

export default AcercaDeMi