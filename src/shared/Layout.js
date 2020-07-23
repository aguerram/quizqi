import React, {Component, useEffect} from "react";
import {Button, Container, Icon, Menu, Responsive, Segment, Sidebar, Visibility} from "semantic-ui-react";
import Heading from "./Header";
import PropTypes from "prop-types";
import {Link, useHistory, useLocation} from "react-router-dom";
import logo from "../assets/logo.png"
const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const LINK_ITEMS = [
    {
        title:"Accueil",
        link:"/"
    },
    {
        title:"Commencer le test",
        link:"/start"
    }
]
const Header = (props) =>{
    const history = useHistory()
    const location = useLocation()
    useEffect(()=>{
    },[location])
    const changePage = (link)=>{
        history.push(link)
    }
    return <Menu secondary borderless={false}>
        {
            LINK_ITEMS.map(e=>
                <Menu.Item key={e.link} active={location.pathname === e.link} onClick={()=>{
                    changePage(e.link)
                }} as={"a"}>{e.title}</Menu.Item>
            )
        }
        <Menu.Item position={"right"}>
            <Button primary={true}>Connectez-vous à
                votre espace personnel</Button>
        </Menu.Item>
    </Menu>
}
const MainLayout = (props)=>{
    const location = useLocation()
    useEffect(()=>{
    },[location])
    return <Container>
        <Header/>
        <br/>
        <Container>
            {props.children}
        </Container>
    </Container>
}
export default MainLayout