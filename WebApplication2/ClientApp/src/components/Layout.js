import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import AppBar from './AppBar';
import Grid from './Grid';
import { Container, } from 'reactstrap';
import Col from 'react-bootstrap/Col';

class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            
            <Container fluid >
                <Col>
                <AppBar />

                    {this.props.children}
                </Col>
                </Container>
           
        );
    }
}
export default Layout;
