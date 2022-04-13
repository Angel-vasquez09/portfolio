import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SideContext } from 'context';
import NextLink from 'next/link';
import { Link } from '@mui/material';

const pages = ['Inicio', 'Proyectos', 'Acerca de mi'];

export const Navbar = () => {
    const { push, asPath } = useRouter();
    const { toggleDrawer } = useContext(SideContext);
    const navigateTo = (url: string) => {
        push(url);
    }

    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Angel |Code
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={ toggleDrawer }
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        onClick={ () => navigateTo('/') }
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Angel|Code
                    </Typography>

                    <Box sx={{ flex: { xs: 0, md: 1 } }}/>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <NextLink href='/' passHref>
                            <Link underline="none">
                                <Button
                                    className="btn-hover"
                                    sx={{
                                        textTransform: 'none',
                                        my: 2, color: 'white', display: 'block',
                                        borderBottom: `${asPath === '/' ? '2px solid white' : ''}`,
                                    }}
                                >
                                    Inicio
                                </Button>
                            </Link>
                        </NextLink>
                        <NextLink href='/proyects' passHref>
                            <Link underline="none">
                                <Button
                                    className="btn-hover"
                                    sx={{
                                        textTransform: 'none',
                                        my: 2, color: 'white', display: 'block',
                                        borderBottom: `${asPath === '/proyects' ? '2px solid white' : ''}`,
                                    }}
                                >
                                    Proyectos
                                </Button>
                            </Link>
                        </NextLink>
                        <NextLink href='/acerca-de-mi' passHref>
                            <Link underline="none">
                                <Button
                                    className="btn-hover"
                                    sx={{
                                        textTransform: 'none',
                                        my: 2, color: 'white', display: 'block',
                                        borderBottom: `${asPath === '/acerca-de-mi' ? '2px solid white' : ''}`,
                                    }}
                                >
                                    Acerca de mi
                                </Button>
                            </Link>
                        </NextLink>
                        <NextLink href='/contactame' passHref>
                            <Link underline="none">
                                <Button
                                    className="btn-hover"
                                    sx={{
                                        textTransform: 'none',
                                        my: 2, color: 'white', display: 'block',
                                        borderBottom: `${asPath === '/contactame' ? '2px solid white' : ''}`,
                                    }}
                                >
                                    Contactame
                                </Button>
                            </Link>
                        </NextLink>



                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar>L</Avatar>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
