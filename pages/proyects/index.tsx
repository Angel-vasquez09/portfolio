import { Grid } from '@mui/material'
import { Banner, CardProyect, PortFolioLayout } from 'components'
import { proyects } from 'database'
import { SeedProyects } from 'interfaces/proyects'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

interface Props {
    listProyects: SeedProyects[]
}

const Proyectos: NextPage<Props> = ({ listProyects }) => {

    return (
        <PortFolioLayout
            title={'Proyectos | Angel'}
            description={'Proyectos de Luis Angel'}>

                <Banner
                    title={`Mira mis proyectos`}
                    subtitle={'Transformemos un sitio web en un éxito'}
                    img={'/images/proyects.png'}
                />
                <Grid container sx={{ mt: 5 }} >
                    {
                        listProyects.map((proyect, i) => (
                            <Grid key={ i } item xs={12} sm={6}>
                                <CardProyect
                                    proyect={proyect}
                                    style={{marginBottom: '20px', marginRight: '7px', height: '230px'}}
                                    btnProyect={false}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
        </PortFolioLayout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const listProyects = proyects.seedData.proyects;

    if(!listProyects){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            listProyects
        }
    }
}

export default Proyectos