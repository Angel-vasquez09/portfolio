import React, { useState } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material'
import { sendMail } from '../../shared/nodemailer';
import { useRouter } from 'next/router';
interface DataMail {
    from   : string;
    text   : string;
    html   : string;
}
const send = async (data: DataMail) => {
    const response = await fetch('/api/contact',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const { ok } = await response.json();
    return ok;
}
export const Contacto = () => {

    const { push } = useRouter();
    const [ form, setForm ] = useState({
        name   : '',
        email  : '',
        phone  : '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, phone, message } = form;

        if(name.length === 0 || email.length === 0 || message.length === 0 || phone.length === 0){
            alert('Todos los campos son obligatorios');
            return;
        }

        const data = {
            from   : form.email,
            subject: 'Contacto',
            text   : form.name,
            html   : `
                <h1>Hola Luis Angel</h1>
                <p style={{ padding: '5px'}}>${form.message}</p>
                <h3><strong>Contactame</strong>: ${form.phone}</h3>
            `
        }
        const res = await send(data);
        if(!res){
            alert('Error al enviar el mensaje, intentelo nuevamente');
        }
        push('/enviado');
    }

    return (
        <Box sx={{ width: {xs: '100%', sm: '70%', md: '50%'}}}>
            <form style={{ width: '100%'}} onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ width: '100%', mb: 3}}>
                        <TextField
                            fullWidth
                            name='name'
                            label="Ingresa tu nombre"
                            variant="outlined"
                            onChange={handleChange}
                            value={form.name}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ width: '100%', mb: 3,pr: 1}}>
                        <TextField
                            fullWidth
                            name='phone'
                            label="Telefono"
                            variant="outlined"
                            onChange={handleChange}
                            value={form.phone}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ width: '100%', mb: 3}}>
                        <TextField
                            fullWidth
                            name='email'
                            label="Correo"
                            variant="outlined"
                            onChange={handleChange}
                            value={form.email}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ width: '100%', mb: 3}}>
                        <TextField
                            multiline
                            name='message'
                            maxRows={4}
                            fullWidth
                            label="Mensaje"
                            variant="outlined"
                            onChange={handleChange}
                            value={form.message}
                        />
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center">
                        <Button className="btn" type="submit">
                            Enviar Formulario
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}
