import React, {Component} from 'react';
import {Navbar, NavItem, Icon, SideNavItem} from "react-materialize";

import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

class NavBar extends Component{
    render (){
        return (

            <Navbar
                className={'navbarItem'}
                style ={{background: 'lightgrey'}}
                alignLinks="right"
                id="mobile-nav"
                menuIcon={<Icon medium>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <NavItem style={{height: '210px'}} subheader>
                    <img src={'../images/download.png'} className={'circle'}
                         style={{height: '190px', width: '175px', margin: '30px'}} alt={'Picture of me'}/>
                </NavItem>

                <NavItem subheader>
                    <p style={{'text-align': 'center', 'font-size': '20px', color: 'black'}}> Luca Molteni </p>
                </NavItem>

                <NavItem>
                    <NavLink to={'/'}><p style={{'text-align': 'center', color: 'black'}}>Home</p></NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to={'/aboutMe'}><p style={{'text-align': 'center', color: 'black'}}>About Me</p>
                    </NavLink>
                </NavItem>

                <NavItem href="#!second">
                    <NavLink to={'/experience'}>
                        <p style={{'text-align': 'center', color:'black'}}>Experience</p>
                    </NavLink>
                </NavItem>

                <NavItem divider/>

                <NavItem subheader>
                    <p style={{'text-align': 'center'}}>Follow me</p>
                </NavItem>
                <NavItem href={'https://github.com/MolteLuca'}>
                    <p style={{size: 'x-small', 'text-align': 'center'}}>
                        <SocialIcon url={'https://github.com/MolteLuca'}/>
                    </p>
                </NavItem>
                <NavItem href={'https://www.linkedin.com/in/luca-molteni-29b543135/'}>
                    <p style={{size: 'x-small', 'text-align': 'center'}}>
                        <SocialIcon url={'https://www.linkedin.com/in/luca-molteni-29b543135/'}/>
                    </p>
                </NavItem>
                <NavItem href={'https://www.facebook.com/luca.molteni.798'}>
                    <p style={{size: 'x-small', 'text-align': 'center'}}>
                        <SocialIcon url={'https://www.facebook.com/luca.molteni.798'}/>
                    </p>
                </NavItem>

                <NavItem href={'https://www.instagram.com/luca_molte/'}>
                    <p style={{size: 'x-small', 'text-align': 'center'}}>
                        <SocialIcon url={'https://www.instagram.com/luca_molte/'}/>
                    </p>
                </NavItem>

            </Navbar>

        );
    }
}
export default NavBar