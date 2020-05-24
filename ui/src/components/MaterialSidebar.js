import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { drawerStyles } from "../styles";
import { Typography, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Draggable, Droppable } from "../plugins/DragDrop"
import TableChartIcon from '@material-ui/icons/TableChart';

/**
 * Material Sidebar contains Instructions and the Draggable option to create table
 */
const MaterialSidebar = () => {
  const classes = drawerStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <Typography variant="h6" className={classes.drawerInstructionsComponent}>
          <span className={classes.drawerInstructions}>Instructions:
          </span> Please Drag and Drop the below component <b>'Create Book List Table'</b> to the right Container, to create Material UI Table
        </Typography>
        <Divider />
        <div className={classes.dragContainer}>
          <Droppable id="drop-books-table">
            <Draggable id="books-table">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<TableChartIcon />}
              >
                Create Book List Table
              </Button>
            </Draggable>
          </Droppable>
        </div>

      </div>
    </Drawer>
  )
}

export default MaterialSidebar
