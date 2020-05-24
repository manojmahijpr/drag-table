import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { MaterialTable } from '../../components';

class Droppable extends React.Component {

    state = {
        hasTable: false
    }

    dropElement = (e) => {
        e.preventDefault();
        var element = document.getElementById(e.target.id)
        console.log(e.target);
        if (!this.state.hasTable && element != null) {
            var parentElement = element.parentElement;
            this.setState({ hasTable: true }, () => {
                ReactDOM.render(<MaterialTable />, parentElement);
            });
        }
    }

    allowDrop = (e) => {
        e.preventDefault();
    }

    render() {
        const { id, style, children } = this.props;
        return (
            <div id={id} onDrop={this.dropElement} onDragOver={this.allowDrop} style={style}>
                {children}
            </div>
        )
    }
}

Droppable.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.element,
    object: PropTypes.object
}

export default Droppable