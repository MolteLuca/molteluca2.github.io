import React, {Component} from 'react'
import {SideNav, SideNavItem} from "react-materialize";
import 'materialize-css'
import M from "materialize-css";
import {NavLink} from "react-router-dom";
import {SocialIcon} from 'react-social-icons'


class Sidebar extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {

        return (

            <div>
                <SideNav id="SideNav-10" options={{draggable: true}} style={{width: '260px', height: '100%'}}>
                    <SideNavItem style={{height: '210px'}} subheader>
                        <img src={'../images/download.png'} className={'circle'}
                             style={{height: '190px', width: '175px', margin: '25px 10px'}} alt={'Picture of me'}/>
                    </SideNavItem>

                    <SideNavItem subheader>
                        <p style={{'text-align': 'center', 'font-size': '20px', color: 'black'}}> Luca Molteni </p>
                    </SideNavItem>

                    <SideNavItem>
                        <NavLink to={'/'}><p style={{'text-align': 'center', color: 'black'}}>Home</p></NavLink>
                    </SideNavItem>

                    <SideNavItem>
                        <NavLink to={'/aboutMe'}><p style={{'text-align': 'center', color: 'black'}}>About Me</p>
                        </NavLink>
                    </SideNavItem>

                    <SideNavItem href="#!second">
                        <NavLink to={'/experience'}>
                        <p style={{'text-align': 'center', color:'black'}}>Experience</p>
                        </NavLink>
                    </SideNavItem>

                    <SideNavItem divider/>

                    <SideNavItem subheader>
                        <p style={{'text-align': 'center'}}>Follow me</p>
                    </SideNavItem>
                    <SideNavItem href={'https://github.com/MolteLuca'}>
                        <p style={{size: 'x-small', 'text-align': 'center'}}>
                            <SocialIcon url={'https://github.com/MolteLuca'}/>
                        </p>
                    </SideNavItem>
                    <SideNavItem href={'https://www.linkedin.com/in/luca-molteni-29b543135/'}>
                        <p style={{size: 'x-small', 'text-align': 'center'}}>
                            <SocialIcon url={'https://www.linkedin.com/in/luca-molteni-29b543135/'}/>
                        </p>
                    </SideNavItem>
                    <SideNavItem href={'https://www.facebook.com/luca.molteni.798'}>
                        <p style={{size: 'x-small', 'text-align': 'center'}}>
                            <SocialIcon url={'https://www.facebook.com/luca.molteni.798'}/>
                        </p>
                    </SideNavItem>

                    <SideNavItem href={'https://www.instagram.com/luca_molte/'} style={{'margin-bottom': '40px'}}>
                        <p style={{size: 'x-small', 'text-align': 'center'}}>
                            <SocialIcon url={'https://www.instagram.com/luca_molte/'}/>
                        </p>
                    </SideNavItem>

                    <SideNavItem divider/>

                </SideNav>
            </div>

        );
    }
}

export default Sidebar