import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Divider from 'material-ui/Divider'
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import PlayerCard from './components/PlayerCard/index'
import Grid from 'material-ui/Grid'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    order: 1,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

function App(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography type="title" color="inherit" noWrap>
              Fantasy Football News
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          type="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader} />
          <Divider />
          <List>
            <ListItem button>
              <ListItemText
                primary='Players'
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary='News'
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary='Rankings'
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary='ADP'
              />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <Typography type="body1" noWrap>
            <Grid container spacing={40}>
              <Grid item xs={6}>
                <PlayerCard />
              </Grid>
              <Grid item xs={6}>
                <PlayerCard />
              </Grid>
            </Grid>
            {props.children}
          </Typography>
        </main>
      </div>
    </div>  )
}

App.propTypes = {
  children: PropTypes.node
}

App.defaultProps = {
  children: null
}

export default withStyles(styles)(App)