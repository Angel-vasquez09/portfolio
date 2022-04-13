import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export const ListRedes = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: 24, height: 24 }} alt="facebook"  src="/static/images/avatar/1.jpg" />
            <Avatar sx={{ width: 24, height: 24 }} alt="instagram" src="/static/images/avatar/1.jpg" />
            <Avatar sx={{ width: 24, height: 24 }} alt="github"    src="/static/images/avatar/1.jpg" />
        </Stack>
    );
}