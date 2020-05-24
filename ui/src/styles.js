import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 260;
const minContentWidth = 1000
const minTableHeight = 440
const containerStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    content: {
        flexGrow: 1,
        marginTop: theme.spacing(9),
        maxWidth: minContentWidth,
        maxHeight: minTableHeight,
        padding: theme.spacing(1)
    },
    divider: {
        padding: theme.spacing(3)
    }
}));

const drawerStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    drawerInstructionsComponent: {
        padding: theme.spacing(3),
        fontSize: '15px'
    },
    drawerInstructions: {
        fontWeight: 'bold',
        textDecoration: 'underline'
    },
    dragContainer: {
        padding: theme.spacing(2),
    },
    button: {
        textAlign: 'center'
    }
}));


const tableStyles = theme => ({
    root: {
        width: '100%',
    },
    head: {
        backgroundColor: "#3f51b5",
        color: theme.palette.common.white,
        borderWidth: '1px',
        borderColor: 'white',
        borderStyle: 'dashed',
        textAlign: 'center'

    },
    container: {
        maxHeight: minTableHeight,
    },
    table: {
        minWidth: 340,
    },
    tableCell: {
        paddingRight: 4,
        paddingLeft: 5,
        borderTopWidth: 1,
        borderWidth: '1px',
        borderColor: "#3f51b5",
        borderStyle: 'dashed',
        textAlign: 'center'
    }
});

const droppableStyles = {
    padding: '1px',
    justifyContent: 'center'
}

const droppableBackgroundStyles = {
    width: '100%',
    height: minTableHeight,
    borderWidth: '1px',
    borderColor: "#3f51b5",
    borderStyle: 'dashed',
    // justifyContent: 'center'
}

export {
    containerStyles,
    droppableStyles,
    droppableBackgroundStyles,
    drawerStyles,
    tableStyles
}