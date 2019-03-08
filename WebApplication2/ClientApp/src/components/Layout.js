import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import AppBar from './AppBar';
import Grid from './Grid';
import { Container, } from 'reactstrap';


class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <div>
            <AppBar />
            <Container fluid >
               
                

                    {this.props.children}
               
                </Container>
            </div>
        );
    }
}
export default Layout;
