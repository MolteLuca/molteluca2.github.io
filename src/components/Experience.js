import React, {Component} from "react";
import {Card, CardTitle, Icon, Row, Col} from "react-materialize";

class Experience extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col
                        m={6}
                        s={12}
                    >
                        <Card
                            className={'card medium'}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle
                                image="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg"
                                reveal/>}
                            reveal={<p style={{'text-align': 'justify'}}><Icon> check </Icon> Assisted to the entire
                                software lifecycle, from gathering
                                the information and
                                designing the website, to the actual deployment of the web application. <br/>
                                <Icon> check </Icon> Applied key concepts learned in class to the development of a real
                                website using Python in
                                Django Framework<br/>
                                <Icon> check </Icon> Served as a key member of the frontend team, but also worked on the
                                backend
                                side of the project<br/>
                                <Icon> check </Icon> Used VS and SQL Management to perform changes required by the
                                company’s clients
                            </p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Computer Aid, INC."
                        >
                            <p style={{color: 'grey'}}>
                                IT Intern
                            </p>
                        </Card>
                    </Col>
                    <Col
                        m={6}
                        s={12}
                    >
                        <Card
                            className={'card medium'}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle
                                image="https://am02bpbsu4-flywheel.netdna-ssl.com/wp-content/uploads/2013/07/logo.jpg"
                                reveal/>}
                            reveal={<p style={{'text-align': 'justify'}}><Icon> check </Icon> Helped college students to
                                improve their academic
                                performance in classes such as Mathematics, Physics and Computer Science. <br/>
                                <Icon> check </Icon> Consistently communicated with my supervisors and meticulously
                                documented each tutoring session. <br/>
                                <Icon> check </Icon> Participated in additional seminars to increase skills including
                                teamwork, communication, and leadership</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Penn State Harrisburg Russel E. Horn Sr. Learning Center"
                        >
                            <p style={{color: 'grey'}}>
                                Peer Tutor
                            </p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col
                        m={6}
                        s={12}
                    >
                        <Card
                            className={'card medium'}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle
                                image="https://torange.biz/photofx/173/8/digital-computer-internet-media-background-173473.jpg"
                                reveal
                            />}
                            reveal={<p style={{'text-align': 'justify'}}><Icon> check </Icon> Currently working in a
                                group of five people to develop a
                                web-based application and
                                an Android application which would allow users to reserve rooms and party areas at
                                Paramount Sports Complex <br/>
                                <Icon> check </Icon> Mainly working on the development of the web application using
                                React for the frontend and NoSQL database Firebase</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Capstone Project: Online Scheduler for Paramount Sports Complex"
                        >
                            <p style={{color: 'grey'}}>
                                Full Stack Developer
                            </p>
                        </Card>
                    </Col>
                    <Col
                        m={6}
                        s={12}
                    >
                        <Card
                            className={'card medium'}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle
                                image="https://cdn.dribbble.com/users/211312/screenshots/5571571/artboard_1-100.jpg"
                                reveal/>}
                            reveal={<p style={{'text-align': 'justify'}}><Icon> check </Icon> Used React and Materialize
                                Css to create my personal
                                portfolio</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Personal Portfolio"
                        >
                            <p style={{color: 'grey'}}>
                                Developer
                            </p>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Experience