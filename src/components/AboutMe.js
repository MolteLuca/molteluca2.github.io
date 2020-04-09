import React, {Component} from 'react'
import {Parallax} from "react-materialize";

class AboutMe extends Component {
    render() {
        return (
            <div>
                <Parallax
                    image={
                        <img className={'largeImage'} alt="" src="https://dl.boxcloud.com/api/2.0/internal_files/34941753397/versions/34307943637/representations/png_paged_2048x2048/content/1.png?access_token=1!jpdIcD7nBYPLBBZ3Bx5tNCqV7FRw6bYDpCx0s9KhxFwqvInwpUkChbSTEIx_c5ZlSSI_zmsxYLVmtXaL4DFvfH9-tBSwVFQ4JDoWWn-N6c06NiFAcplcnMt5eziVkxZMNlyHSuhlQ9xdZFjfuwIhtD5Cc5MSbZGr46AAPgRt5BJ7CUZe_ls6p0NI8VjGAD7bXAfLFZXgzyS2POeBBxK2J8P0jSncJTGumbPqU1OxOrp1MOjIhsKJTYLlvDu9lbGOFav3745SYfMyiUWcdOugGyKyay50AeTVaj9IBGo6vN8DUrqWLUaAesfp3F8aUVN0i7Hj1WzRjlUCS6kQA2Ol5pl_o6WvS73d1Udr6LGftUj2DVJ9vhM6MRQw_QS1egyQdINA6lUGRWtiaQOT44gTG0JO7LE2uoidDRguWq8qwaGxeSRvnk--mS2dHefXA5hscEqzyw-ZwQMCIW6CK3e5fCfkn7ZquNaktbUXiLZorky3nG_UoODQ4GcXbGbVhiZarFhLan96XcX75azS0G82B7X4YcLchalHdl8-OIXpsPD-_ZofWYmcgn8T8LNBH13NkgJeQw6Yrf019LeNVNhl7NagijC14zt9iWd_cFbCejA7iE9KwX2Nm2MH8Bu2NQDoOLk.&shared_link=https%3A%2F%2Fpsu.app.box.com%2Fs%2Frh79vhu9fetxhq6mkvd135vz1qdj92z8&box_client_name=box-content-preview&box_client_version=2.37.0"/>
                    }

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