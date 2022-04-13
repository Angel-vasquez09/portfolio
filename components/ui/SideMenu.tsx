import React, { useContext } from 'react'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { SideContext } from 'context';
import { HomeOutlined, HiveOutlined, PersonOutlineOutlined, PhoneCallbackOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { url } from 'inspector';

export const SideMenu = () => {

    const { push } = useRouter();

    const { toggleDrawer, openDrawer } = useContext(SideContext);

    const navigateTo = (url: string) => {
        push(url);
        toggleDrawer();
    }


    return (
        <>
            <Drawer
                anchor={'left'}
                open={openDrawer}
                onClose={toggleDrawer}
                sx={{ backdropFilter: 'blur(4px)'}}
            >

                <Typography variant="h6" sx={{ textAlign: 'center', mt: 3}}><strong>Angel|Code</strong></Typography>

                <Divider sx={{ my: 2, width: '80%' }} />

                <List>
                    <ListItem button onClick={ () => navigateTo('/')}>
                        <ListItemIcon>
                            <HomeOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Inicio'} />
                    </ListItem>
                    <ListItem button onClick={ () => navigateTo('/proyects')}>
                        <ListItemIcon>
                            <HiveOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Proyectos'} />
                    </ListItem>
                    <ListItem button onClick={ () => navigateTo('/acerca-de-mi')}>
                        <ListItemIcon>
                            <PersonOutlineOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Acerca de mi'} />
                    </ListItem>
                    <ListItem button onClick={ () => navigateTo('/contactame')}>
                        <ListItemIcon>
                            <PhoneCallbackOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Contactame'} />
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}
