import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare,  faInstagramSquare,} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="redes">
                <h4>Seguinos</h4>

                <div className="redesIcons">
                    <a href="https:/www.facebook.com/" target="_blank">
                        <FontAwesomeIcon icon={faFacebookSquare} size="lg" />{" "}
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <FontAwesomeIcon icon={faInstagramSquare} size="lg" />{" "}
                    </a>
                </div>
            </div>
            <div>
                <h4>Necesitas ayuda?</h4>
                <Link to={"/ayuda"}>
                    <button className="btnBlue">Ayuda</button>{" "}
                </Link>
            </div>
            <div>
                <h4>Nuestros horarios</h4>
                <p>
                    Estamos abiertos de lunes a sabados de 9:00 a 14:00 y de 17:00 a 22:00
                </p>
            </div>

            <div>
                <h4>Donde estamos?</h4>
                <p>Encontranos en la calle belgrano al 1030, CABA, Argentina</p>
            </div>
        </footer>
    );
}

export default Footer;
