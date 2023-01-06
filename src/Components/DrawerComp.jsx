import { Drawer, IconButton, List, ListItemButton, ListItemIcon } from '@mui/material'
import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavLink } from 'react-router-dom';

const DrawerComp = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Drawer open={open} onClose={() => setOpen(!open)}>
        <List>
            <ListItemButton>
                <ListItemIcon onClick={() => setOpen(!open)}>
                    <NavLink
                        to="/video-feed"
                        className={({ isActive }) =>
                            isActive ? "header__nav-is-active" : "header__nav"
                        }
                        >
                        Video Feed
                    </NavLink>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon onClick={() => setOpen(!open)}>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? "header__nav-is-active" : "header__nav"
                        }
                        >
                        Dashboard
                    </NavLink>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon onClick={() => setOpen(!open)}>
                    <NavLink
                        to="/control-panel/tolerances"
                        className={({ isActive }) =>
                            isActive ? "header__nav-is-active" : "header__nav"
                        }
                        >
                        Control Panel
                    </NavLink>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon onClick={() => setOpen(!open)}>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? "header__nav-is-active" : "header__nav"
                        }
                        >
                        Settings
                    </NavLink>
                </ListItemIcon>
            </ListItemButton>
        </List>
    </Drawer>
    <IconButton onClick={() => setOpen(!open)}>
        <MenuRoundedIcon />

    </IconButton>
    </>
  )
}

export default DrawerComp