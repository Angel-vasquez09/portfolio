import React, { FC } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Navbar, ListRedes } from 'components';
import { Box, Grid, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { SideMenu } from 'components/ui';

interface Props{
    title: string;
    description: string;
    children: React.ReactNode;
}

export const PortFolioLayout: FC<Props> = ({children,title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="og:title" content={title}/>
                <meta name="og:description" content={description}/>
            </Head>

            <nav>
                <Navbar />
            </nav>

            <SideMenu />

            <main className='main' style=
                {{
                    margin: '0px auto',
                    maxWidth: '1440px',
                    padding: '70px 20px',
                    minHeight: '100vh',
                    height: 'auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    { children }
            </main>

            <footer className={styles.footer}>
                <Grid container>
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, alignItems: 'center', mb: {xs: 3, sm: 0}}}>
                        <Typography variant="h6" ><strong>Angel</strong>|Code</Typography>
                        {/* <ListRedes /> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box display={'flex'} justifyContent="center" sx={{mb: 4, flexDirection: { xs: 'column', sm: 'row'}}}>
                            <NextLink href="/" passHref prefetch={false}>
                                <Link sx={{ mr: { xs: 0, sm: 4 } ,color: '#ffffff' }} >
                                    Inicio
                                </Link>
                            </NextLink>
                            <NextLink  href="/proyects" passHref prefetch={false}>
                                <Link sx={{ mr: { xs: 0, sm: 4 } ,color: '#ffffff' }}>
                                    Proyectos
                                </Link>
                            </NextLink>
                            <NextLink  href="/acerca-de-mi" passHref prefetch={false}>
                                <Link sx={{ mr: { xs: 0, sm: 4 } ,color: '#ffffff' }}>
                                    Acerca de mi
                                </Link>
                            </NextLink>
                            <NextLink  href="/contactame" passHref prefetch={false}>
                                <Link sx={{ mr: { xs: 0, sm: 4 } ,color: '#ffffff' }}>
                                    Contactame
                                </Link>
                            </NextLink>
                        </Box>
                        <Box display="flex" flexDirection={'column'} justifyContent="end" alignItems="center">
                            <Typography sx={{ textAlign: 'center'}} variant="subtitle1">Contactame en</Typography>
                            <Box display="flex" sx={{ flexDirection: {xs: 'column', sm: 'row'}}}>
                                <Typography variant="subtitle2" sx={{ fontSize: '13px', mr: 2, textAlign: {xs: 'center', sm: ''}}}>301-6200-769</Typography>
                                <Typography variant="subtitle2" sx={{ fontSize: '13px'}}>vasquez092020@outlook.es</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </footer>
        </>
    )
}
