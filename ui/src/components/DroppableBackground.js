import React from 'react'
import { droppableBackgroundStyles } from '../styles'

const DroppableBackground = () => {
    return (
        <div style={droppableBackgroundStyles} id="droppable-background">
            <h1 id="droppable-background-header" style={{ textAlign: "center" }}>Please Drop here</h1>
        </div>
    )
}

export default DroppableBackground
