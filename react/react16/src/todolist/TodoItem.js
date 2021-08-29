
import React, {Component} from "react";
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    handleItemDelete(index) {
        this.props.deleteItemFun(index);
    }

    render() {
        let {item, index} = this.props;
        return <li onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
    }

}

TodoItem.propTypes = {
    item: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    deleteItemFun: PropTypes.func
};

TodoItem.defaultProps = {
    item: '',
    index: 0
}

export default TodoItem;