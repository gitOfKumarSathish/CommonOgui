import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    MenuList,
    MenuItem,
    ListItemText,
    Theme,
    createStyles,

} from '@mui/material/';
import Routes from './Routes';
import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             flexGrow: 1,
//         },
//         menuButton: {
//             marginRight: theme.spacing(2),
//         },
//         title: {
//             flexGrow: 1,
//         },
//         drawer: {
//             width: 300,
//         },
//         fullList: {
//             width: 'auto',
//         },
//     }),
// );

const NavigationBar: React.FC = (props: any) => {
    console.log('props', props);
    // const classes = useStyles();
    const classes = '';
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setIsOpen(open);
    };

    const activeRoute = (routeName: any) => {
        return props.location.pathname === routeName ? true : false;
    };

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            {/* <MenuIcon /> */}
                            <h1>MEnu</h1>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Football Almanac
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <Drawer classes={{ paper: classes.drawer }} open={isOpen} onClose={toggleDrawer(false)}>
                <div
                    className={classes.fullList}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <MenuList>
                        {Routes.map((prop, key) => {
                            return (
                                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                                    <MenuItem selected={activeRoute(prop.path)}>
                                        <ListItemText primary={prop.sidebarName} />
                                    </MenuItem>
                                </NavLink>
                            );
                        })}
                    </MenuList>
                </div>
            </Drawer>
        </div>
    );
};

export default (NavigationBar);