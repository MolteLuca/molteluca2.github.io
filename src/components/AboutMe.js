import React, {Component} from 'react'
import {Parallax} from "react-materialize";

class AboutMe extends Component {
    render() {
        return (
            <div>
                <div className={'largeImage'}>
                    <Parallax
                        image={
                            <img alt="" src="../images/PSU_HBO_RGB_2C.png"/>
                        }

                        options={{
                            responsiveThreshold: 0
                        }}
                    /></div>
                <div className={'smallImage'}>
                    <Parallax
                        image={
                            <img alt="" src="../images/PSU_RGB_1C-01.png"/>
                        }

                        options={{
                            responsiveThreshold: 0
                        }}
                    /></div>
                <div className="section" style={{background: '#94949414'}}>
                    <div className="row container">
                        <h2 style={{'text-align': 'center'}} className="header">
                            Who Am I?
                        </h2>
                        <p style={{'text-align': 'justify', margin: '0 10%'}}
                           className="grey-text text-darken-3 lighten-3">
                            My name is Luca Molteni. I'm 25 years old and am originally from Monza, Italy. <br/>
                            I moved to the United States in 2017 to pursue my education at Penn State University and
                            I will be graduating in May with a bachelor's degree Computer Science and a minor in
                            Mathematics <br/><br/>
                            Coding has always been a huge passion of mine. I've always enjoyed creating
                            beautiful and user-friendly interfaces for web applications.
                            I love the logic and the structure behind coding and always strive to improve myself and
                            to find elegant and efficient solutions to a variety of challenges. <br/><br/>
                            When I'm not coding, you can find me at the gym or having a good time with my friends

                        </p>
                    </div>
                </div>
                <Parallax
                    image={<img alt=""
                                src="https://cdn.vox-cdn.com/thumbor/kHMKnm8YIP_KFv21HPhip_sypiw=/0x0:6500x4336/1200x900/filters:focal(2730x1648:3770x2688)/cdn.vox-cdn.com/uploads/chorus_image/image/59283049/GettyImages_970171320.1522954032.jpg"/>}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
                <div className="section" style={{background: '#94949414'}}>
                    <div className="row container">
                        <h2 style={{'text-align': 'center'}} className="header">
                            Who Do I Want To Be?
                        </h2>
                        <p style={{'text-align': 'justify', margin: '0 10%'}}
                           className="grey-text text-darken-3 lighten-3">
                            After my graduation, I'm considering pursuing graduate study in Management and
                            Organizational Leadership to supplement my knowledge and achieve my goal of becoming a
                            leader in the development and provision of creative and personalized web interfaces.
                            Concurrently, I'm looking to begin my career as a Web Developer.
                            My ultimate dream is to open an authentic Italian restaurant in Miami and
                            move there for the rest of my life.

                        </p>
                    </div>
                </div>
                <Parallax
                    image={<img alt="" src="https://www.w3schools.com/getcertified.jpg"/>}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
            </div>
        );
    }
}

export default AboutMe