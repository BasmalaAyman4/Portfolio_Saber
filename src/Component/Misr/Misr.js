import React from 'react'
import top from '../../assets/images/misr/misr1.png';
import styles from '../../Styles/misr.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img2 from '../../assets/images/misr/misr2.png'
import img3 from '../../assets/images/misr/misr3.png'
import img4 from '../../assets/images/misr/misr4.png'
import img5 from '../../assets/images/misr/misr5.png'
import arrow from '../../assets/images/arrow-up-right.svg'
const Misr = () => {
    return (
        <>
            <section className={`${styles.sec}`}>
                <Container>
                    <img alt='' src={top} className={`${styles.top}`} />
                    <Row className={`${styles.sec__row}`}>
                        <Col xl='6'>
                            <h3> Misr Health Insurance</h3>
                            <h8>
                                Developed a digital platform for Misr Health Insurance (MHI) to enhance user experience and service delivery.
                                Enabled beneficiaries to access insurance details, manage claims, and connect with healthcare providers.
                                Focused on improving operational efficiency, transparency, and data security.
                            </h8>
                        </Col>
                        <Col xl='3'>
                            <div className='text-align-center'>
                                <h6>Category</h6>
                                <p>Mobile App</p>
                            </div>
                            <div>
                                <h6>Start Date</h6>
                                <p>August 20, 2023</p>
                            </div>
                        </Col>
                        <Col xl='3'>
                            <div>
                                <h6>Client</h6>
                                <p>Graduation Project</p>
                            </div>
                            <div>
                                <h6>End Date</h6>
                                <p>August 20, 2023</p>
                            </div>
                        </Col>
                    </Row>
                    <Carousel>
                        <Carousel.Item>
                            <img alt='' src={img2} className={`${styles.slideimg}`} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt='' src={img3} className={`${styles.slideimg}`} />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt='' src={img4} className={`${styles.slideimg}`} />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt='' src={img5} className={`${styles.slideimg}`} />

                        </Carousel.Item>
                    </Carousel>
                    <div className={`${styles.project__body}`}>
                        <h2>
                            Project Description
                        </h2>
                        <p>The goal is there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                        </p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

                        </p>
                    </div>
                    <Row className={`${styles.project__row}`}>
                        <Col xl='3'>
                            <h2>THE STORY
</h2>

                        </Col>
                        <Col xl='7'>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

                            </p>
                        </Col>
                    </Row>
                    <Row className={`${styles.project__row}`}>
                        <Col xl='3'>
                            <h2>OUR APPROACH

                            </h2>
                           
                        </Col>
                        <Col xl='7'>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

                            </p>
                        </Col>
                    </Row>
                    <div class="portfolio_navigation">
                        <div class="navigation_item prev-project">
                            <a href="#" class="project">
                                <img alt='' src={arrow} className='i'/>
                                <div class="nav_project">
                                    <div class="label">Previous Project</div>
                                    <h3 class="title">BeNeshty</h3>
                                </div>
                            </a>
                        </div>

                        <div class="navigation_item next-project">
                            <a href="#" class="project">
                                <div class="nav_project">
                                    <div class="label">Next Project</div>
                                    <h3 class="title">Tarweej</h3>
                                </div>
                                <img alt='' src={arrow} className='i' />

                            </a>
                        </div>
                    </div>
                </Container>

            </section>
        </>
    )
}

export default Misr
