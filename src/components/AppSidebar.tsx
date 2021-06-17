import React from "react"
import clsx from "clsx"
import { useDispatch, useSelector } from "react-redux"
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { navStateSelector } from "../redux/global/selector"
import Icon from "./Icon"
import { NavLink, useLocation } from "react-router-dom"
import { updateNavState } from "../redux/global"
import { useMediaQuery } from "@material-ui/core"

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      zIndex: 1019,
    },
    drawerOpen: {
      zIndex: 1019,
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      zIndex: 1019,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: 0,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7) + 1,
      },
    },
    toolbar: {
      height: 70,
    },
    listItem: {
      paddingRight: 15,
      paddingLeft: 15,
    },
    selected: {
      textDecoration: "none",
      backgroundColor: "#F0F0F0",
    },
    bgGrey: {
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#00000075",
        position: "fixed",
        zIndex: 1018,
      },
    },
  })
)

const AppSidebar = () => {
  const classes = useStyles()
  const open = useSelector(navStateSelector)
  const menu = [
    {
      name: "Home",
      to: "/",
      icon: "home_rounded",
    },
    {
      name: "Trade",
      to: "/trade",
      icon: "sync_alt_rounded",
    },
    {
      name: "Mint",
      to: "/mint",
      icon: "eco_rounded",
    },
    {
      name: "Pool",
      to: "/pool",
      icon: "business_center_rounded",
    },
    {
      name: "Stake",
      to: "/stake",
      icon: "bar_chart_rounded",
    },
    {
      name: "Governacne",
      to: "/gov",
      icon: "store_front_rounded",
    },
  ]
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const toggle = () => {
    if (isMobile) {
      dispatch(updateNavState(!open))
    }
  }
  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={clsx(classes.toolbar)} />
        <List>
          {menu.map((attr, index) => {
            const isSelected = pathname === attr.to

            return (
              <NavLink to={attr.to}>
                <ListItem
                  button
                  key={attr.to}
                  className={clsx(
                    classes.listItem,
                    isSelected && classes.selected
                  )}
                  onClick={toggle}
                >
                  <ListItemIcon>
                    <Icon name={attr.icon} size={24} />
                  </ListItemIcon>
                  <ListItemText primary={attr.name} />
                </ListItem>
              </NavLink>
            )
          })}
        </List>
      </Drawer>
      <div className={clsx(open && classes.bgGrey)} onClick={toggle} />
    </>
  )
}

export default AppSidebar
