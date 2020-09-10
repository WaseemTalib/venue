import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll'

const SideDrawer = (props) => {

    const scrollElement = (elements) => {
        scroller.scrollTo(elements, {
            duration: 1500, 
            delay: 100, 
            smooth: true,
            offset: -80
        })
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right" open={props.open} onClose={() => props.onClose(false)}>
            <List component="nav">
                <ListItem button onClick={() => { scrollElement('featured') }}>
                    Event Starts In
               </ListItem>
                <ListItem button onClick={() => { scrollElement('nfo') }}>
                    Venue NFO
               </ListItem>
                <ListItem button onClick={() => { scrollElement('highlight') }}>
                    Highlights
               </ListItem>
                <ListItem button onClick={() => { scrollElement('pricing') }}>
                    Pricing
               </ListItem>
                <ListItem button onClick={() => { scrollElement('location') }}>
                    Location
               </ListItem>
            </List>

        </Drawer>
    );
};

export default SideDrawer;