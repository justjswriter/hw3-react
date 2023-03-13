import { Component } from 'react'
import { ITodo } from '../../types'
import './TodoListItem.css'


interface iTodoListItemProps extends ITodo{
    onDoneClick: () => void
    onImportantClick: () => void
}

export default class TodoListItem extends Component<iTodoListItemProps>{


    render() {
        const { text, done, important } = this.props
        let className = '';
        if (done) {
            className += ' done'
        }
        if (important) {
            className += ' important'
        }
        return (
            <li className={className} >
                {text}
                <button onClick={this.props.onDoneClick}>Done </button>
                <button onClick={this.props.onImportantClick}>Important</button>
            </li>
        )
    }
}