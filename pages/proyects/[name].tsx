import { Box, Button, Grid, Link, Typography } from '@mui/material';
import { Fade, PortFolioLayout, TecnoHerr } from 'components'
import { proyects } from 'database'
import { SeedProyects } from 'interfaces/proyects';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'

interface Props {
    proyect: SeedProyects
}

const Proyecto: NextPage<Props> = ({ proyect }) => {

    return (
        <PortFolioLayout
            title={'Proyecto | Angel'}
            description={'Proyecto'}>
            <Box sx={{ width: '100%', height: '100%'}}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Fade imgs={ proyect.imgs } />
                    </Grid>
                    <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
                        <Box sx={{ mt: { xs: 4, sm: 0},pl: { xs: 0, sm: 3 }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'start'}}}>
                            <Typography variant="h4">{proyect.name}</Typography>
                            <Typography paragraph>{proyect.description}</Typography>
                            <Button
                                href={`${proyect.url}`}
                                className="btn btn1">
                                Visitar sitio
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Typography variant="h4" sx={{ my: 4, textAlign: {xs: 'center', sm: 'start'} }}>Tecnologias utilizadas</Typography>

                <Box display="flex" flexWrap={'wrap'} sx={{ justifyContent: { xs: 'center', sm: 'start'}}}>
                    {
                        proyect.tecnologias.map((tec, i) => (
                            <TecnoHerr
                                key={i}
                                img={`/tecno/${tec}`}
                                width='90px'
                                height='90px'
                            />
                        ))
                    }
                </Box>
            </Box>

        </PortFolioLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const proyect = proyects.seedData.proyects;

    return {
        paths: proyect.map(({ name }) => ({
            params: { name }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name: nom = '' } = params as { name: string };

    const proyect = proyects.seedData.proyects.find(({ name }) => name === nom);


    if(!proyect){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            proyect
        }
    }
}

export default Proyecto