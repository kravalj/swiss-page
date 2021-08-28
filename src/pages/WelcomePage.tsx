import {Button, Card, Grid} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import '../Components/Sidebar.css';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
import chs from '../Images/chs.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Card: {
            backgroundColor: 'rgb(196, 229, 255, 0.5)',
            height: '750px',
            marginTop: '12%',
            border: '1px solid rgb(196, 229, 255, 1)'

        },

    }),
);

const WelcomePage = () => {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
            <div>

                <Sidebar/>

                <div>
                    <Grid container spacing={3} alignItems='center' justify='center'>
                        <Grid item xs={6}>
                            <Card className={classes.Card} elevation={4}>
                                <h1 className="Side">from Old Cherry Tree</h1>
                                <Typography variant="subtitle1" className="Subtitle">
                                    Vítejte na stránkách chovatelské stanice Bílého Švýcarského ovčáka
                                </Typography>
                                <p className="Text" style={{marginTop: '3rem'}}>
                                    Naši chovatelskou stanici najdete v Moravskoslezském kraji, v městském obvodě
                                    Ostrava - Plesná.
                                </p>
                                <p className="Text">Máme jednu chovnou fenku - <Link className='LinkGA' to="/">Gloria of Aiwak´s Paradise.</Link></p>
                                <Grid container justify='center'>
                                    <img src={chs} alt="CHS" className="picCHS"/>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;