import React from 'react';
import Button from '@material-ui/core/Button'
import Ticket from '../../../resources/images/icons/ticket.png';

const myButton = (props) => {
    return (
        <div>
            <Button href={props.link} variant="contained" size="small" style={{ background: props.bck, color: props.color }}>
                <img src={Ticket} className="iconImage" alt="icon button" />{props.text}
            </Button>
        </div>
    );
};

export default myButton;