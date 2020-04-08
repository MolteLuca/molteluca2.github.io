import React, {Component} from 'react'
import {Parallax} from "react-materialize";

class AboutMe extends Component {
    render() {
        return (
            <div>
                <Parallax
                    image={<img alt="" src="https://blog.scopus.com/sites/default/files/201603/PennState.png"/>}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
                <div className="section" style={{background: '#94949414'}}>
                    <div className="row container">
                        <h2 style={{'text-align': 'center'}} className="header">
                            Who Am I?
                        </h2>
                        <p style={{'text-align': 'justify', margin: '0 10%'}}
                           className="grey-text text-darken-3 lighten-3">
                            My name is Luca Molteni, I'm 25 years old, and I'm originally from Monza, Italy <br/>
                            I moved to the United States in 2017 to pursue my education at Penn State University and
                            I will be graduating in May in Computer Science with a minor in Mathematics <br/><br/>
                            Coding has always been a huge passion of mine. In particular, I've always enjoyed creating
                            beautiful and user-friendly interfaces for web applications.
                            I love the logic and the structure behind coding and always strive to improve myself and
                            to find elegant and efficient solutions to different problems. <br/><br/>
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
                            After my graduation, I'm considering the idea of pursuing a Master Degree at Penn State
                            University. Alternatively, I'd like to start my career as a Software/Web Developer and move
                            to a bigger city. My ultimate dream is to open an authentic Italian restaurant in Miami and
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