import React from 'react'
import PropTypes from "prop-types";
import { TRANSFER_ID } from '../../constants';

/**
 * Draggable class allows child component to drag over the webpage
 */
class Draggable extends React.Component {

    startDrag = (e) => {
        e.dataTransfer.setData(TRANSFER_ID, e.target.id);
    }

    disAllowDrop = (e) => {
        e.stopPropagation();
    }

    render() {
        const { id, style, children } = this.props;
        return (
            <div id={id} draggable="true" onDragStart={this.startDrag} onDragOver={this.disAllowDrop} style={style}>
                {children}
            </div>
        )
    }
}

Draggable.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    object: PropTypes.object
}

export default Draggable