import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
/* import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'; */
import {PhotoCamera} from '@material-ui/icons'

import useStyles from './styles'

const cards = [1,2,3,4,5,6,7,8,9]

const App = () => {
    const classes = useStyles();

    return(
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className = {classes.icon}/>
                    <Typography variant = "h6">
                        Photo Album   
                    </Typography> 
                </Toolbar>
            </AppBar>
            <main>
                <div className = {classes.container}>
                    <Container maxWidth = "sm">
                        <Typography variant = "h2" align = "center" color ="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant = "h5" aling = "center" color = "textSecondary" paragraph > 
                            aaaaaaaaaaaaaaaaaaaaaa estoooooooooooooooooooooo es un parrafoooooooooooooooooo yyyyyyyyyyy uqeeeeeeeeeeee 
                            ladilaaaaaaaaaaa escribiiiiiiiiiir maaaaaaaaas
                        </Typography>
                        <div className = {classes.button}>
                            <Grid container spacing = {2} justify = "center">
                                <Grid item>
                                    <Button variant = 'contained' color = "primary">
                                        ve mis fotoooos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant = 'outlined' color = "primary">
                                        segunda accion
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <container className = {classes.cardGrid} maxWidth = "md">
                    <Grid container spacing = {4}>
                        {cards.map((card)=> (
                            <Grid item key = {card} xs={12} sm={6} md={4}>
                                <Card className = {classes.card}>
                                    <CardMedia
                                        className = {classes.cardMedia}
                                        image = "https://source.unsplash.com/random"
                                        title = "Image title"    
                                    />
                                    <CardContent className = {classes.cardContent}>
                                        <Typography gutterbotton variant = "h5">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Esta es una carta de imagenes para usar la carta
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size = "small" color = "primary">View</Button>
                                        <Button size = "small" color = "primary"> Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                        
                    </Grid>
                </container>
                {/* <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                    <Button>Four</Button>
                </ButtonGroup> */}
            </main>
            <footer className = {classes.footer}>
                <Typography variant = "h6" aling = "center" gutterBottom>
                    footer
                </Typography>
                <Typography variant = "subtitle1" aling = "center" color = "textSecondary">
                    algooooooooooooo para tener un pie
                </Typography>
            </footer>
        </>
    );
}

export default App;