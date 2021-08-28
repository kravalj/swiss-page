import React from 'react';
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";
import Sidebar from "../Components/Sidebar";
import Logo from "../Images/Logo.png";
import Map from '../Images/Map.png'
import {Link} from 'react-router-dom'


const Contact = () => {

    return (
        <div>
            <Sidebar/>

            <div className='ContactsInfo'>
                <h1 className="Contact" style={{marginTop: '100px'}}>Kontakt</h1>
            </div>

            <div>
                <h2 className="Contact"> Jan Žídek </h2>
                <h3 className="Contact"> Telefon:
                    <a className="contactInfo">
                        +420 602 596 644
                    </a>

                </h3>
                <h3 className="Contact">
                    E-mail:
                    <a className="contactInfo">
                        zidek.jan@seznam.cz
                    </a>
                </h3>
                <h3 className="Contact">
                    Adresa:
                    <a className="contactInfo">
                        Hrabek 251, Ostrava-Plesná 725 27
                    </a>
                </h3>
            </div>

            <a href="https://www.google.com/maps/place/Hrabek+251,+725+27+Ostrava-Plesn%C3%A1/@49.851191,18.1514587,17z/data=!3m1!4b1!4m5!3m4!1s0x4713e115af75ed29:0x3434ac513ac68d19!8m2!3d49.851191!4d18.1536474"
               target='_blank'>
                <img src={Map} className="mapGoogle" alt="MP"/>
            </a>

        </div>

    )
}

export default Contact;