import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { containerStyles, droppableStyles } from "../styles";
import { MaterialSidebar } from '../components';
import { Droppable } from '../plugins/DragDrop';
import { DroppableBackground } from '../components';

const MaterialContainer = () => {
  const classes = containerStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" noWrap>
            Material UI Drag-n-Drop Table
          </Typography>
        </Toolbar>
      </AppBar>
      <MaterialSidebar />
      <main className={classes.content}>
        <Droppable id="drop-table" style={droppableStyles}>
          <DroppableBackground />
        </Droppable>
      </main>
    </div>
  );
}

export default MaterialContainer