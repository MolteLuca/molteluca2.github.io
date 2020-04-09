import React from 'react';
import Sidebar from "./components/Sidebar";
import VerticalCarousel from "./components/VerticalCarousel";
import './scss.scss'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";


function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Sidebar/>
            <Switch>

                <Route exact path='/'>
                    <div className={"verticalCarousel toMove"}>
                        <VerticalCarousel data={data}/>
                    </div>
                </Route>
                <Route path={'/aboutMe'}>
                    <div className={"aboutMe toMove"}>
                        <AboutMe/>
                    </div>
                </Route>
                <Route path={'/experience'}>
                    <div className={"experience toMove"}>
                    <Experience/>
                    </div>
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

const data = [{
    id: 0,
    header: "Hi!\n I'm Luca",
    body: "Welcome to my portfolio",
    colour: '#242845',
    img: 'https://scontent.fagc1-2.fna.fbcdn.net/v/t1.0-9/p960x960/39246769_10215127759335072_7903717415031144448_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=f5U8hA5vlRYAX8LKC-p&_nc_ht=scontent.fagc1-2.fna&_nc_tp=6&oh=13c0916e70a76884e380f817afe99f7a&oe=5EB2BD59'
}, {
    id: 1,
    header: "My Passions are...",
    body: 'Web Development \n Videogames \n Soccer',
    colour: '#23170be0',
    img: 'https://i.pinimg.com/originals/51/95/eb/5195ebb8c5f9772deda82aa2937134d3.jpg'
}, {
    id: 2,
    header: 'Short-Term Goals',
    body: 'Earning my Undergraduate Degree \n Starting a career as Software/Web Developer \n Move to a big city',
    colour: '#231e2ceb',
    img: 'https://wallpaperaccess.com/full/123346.jpg'
}];

export default App