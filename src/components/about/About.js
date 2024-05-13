import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; // Make sure to import the CSS

const About = () => {
    return (
        <Container className="about-section mx-auto" style={{ marginTop: '80px' }}>
            <Row className="justify-content-center mt-5">
                <Col lg={8}>
                    <h2 className="about-heading">About Us</h2>
                    <p className="about-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit mi sit amet turpis vestibulum, nec sollicitudin neque luctus.
                        Maecenas in tristique dolor. Duis eget dapibus velit. Sed aliquet lacus nec eros varius, in finibus libero posuere. Vestibulum id
                        lorem non velit semper ultricies. Nullam porttitor justo eu sapien laoreet, eu sagittis odio dapibus. Integer feugiat lacus a quam
                        efficitur, vitae feugiat leo rhoncus. Proin laoreet scelerisque orci, eget elementum mi hendrerit id.
                    </p>
                    <p className="about-text">
                        Phasellus fringilla nisl a neque hendrerit, ut sodales arcu dictum. Mauris vitae lobortis risus. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia Curae; Sed venenatis ut justo vel vestibulum. Donec interdum ligula sit amet elit
                        varius, ac commodo eros ultricies. Suspendisse potenti. Aenean fermentum ante ac ipsum volutpat vestibulum.
                    </p>
                    <p className="about-text">
                        Nullam nec velit nec magna facilisis tincidunt. Suspendisse eu dui aliquam, accumsan nunc at, tincidunt nisi. Curabitur eget dolor
                        at mauris cursus suscipit. Phasellus nec massa euismod, bibendum purus eu, consectetur elit. Vivamus eu nisi vitae dui malesuada
                        vehicula ac in purus. Aliquam erat volutpat. Integer ut nulla nec arcu efficitur maximus.
                    </p>
                    <p className="about-text">
                        Quisque at lorem vitae nisl scelerisque convallis non non lectus. Nam id fringilla purus. Cras nec feugiat felis. Donec vel mi vel
                        quam posuere ullamcorper eget vitae turpis. Etiam vel fringilla nulla. Integer eget urna risus. Sed elementum odio at odio mattis,
                        nec varius nisi tristique. Nam venenatis mi vel ante vehicula, eget condimentum metus pulvinar. Cras fringilla aliquet magna, nec
                        dapibus urna consequat eget. Maecenas ut dui a risus dictum elementum.
                    </p>
                    <p className="about-text">
                        Sed ultrices, est ut ullamcorper gravida, eros sapien consequat odio, ac ultrices quam odio nec nibh. Nulla facilisi. Pellentesque
                        sed risus tincidunt, fermentum elit eu, euismod lacus. Nulla sed eleifend elit, nec viverra velit. Integer sagittis magna sit amet
                        fermentum faucibus. Aliquam eget odio ultrices, consectetur odio id, efficitur lorem. Nam at mauris eget nulla viverra elementum
                        nec id magna.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
