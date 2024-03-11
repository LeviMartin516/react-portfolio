import React from 'react';
import '../../pages/Contact/ContactPage.css'
/* TypedJs */
import Typical from 'react-typical';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Contact = () => (

    <section className="contactos" id="contactos">

        <h2 className="heading">
            <FormattedMessage
                id='contact'
                defaultMessage='Contact'
            />
        </h2>
        <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
            <FormattedMessage
                id='contact-info'
                defaultMessage='Contact me by: '
            />
            <Typical
                className="site-contacto"
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Gmail', 1500,
                    'skype', 1500,
                    'Telegram', 1500,
                    'Linkedin', 1500,
                    'Github', 1500,
                ]}
            />

        </h3>

    </section>
);

export default React.memo(Contact);