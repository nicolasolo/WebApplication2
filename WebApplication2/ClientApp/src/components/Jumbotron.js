import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cazzo from '.././images/header-bg.jpg';



const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        objectFit: 'cover',
    },
};

function Jumbo(props) {
    const { classes } = props;
    return (


        <CardMedia
            component="img"
            className={classes.media}
            height="240"
            image={cazzo} />
           


    );
};
Jumbo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Jumbo);
