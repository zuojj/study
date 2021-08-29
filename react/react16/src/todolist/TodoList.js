import React, {Component, Fragment} from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: []
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    handleInputChange(e) {
        let value = e.target.value;
        this.setState(() => ({
            value
        }));
    }

    handleButtonClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.value],
            value: ''
        }));
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        });
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return <TodoItem item={item} index={index} key={index} deleteItemFun={this.handleItemDelete} />;
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insert"></label>
                    <input id="insert" type="text" className="" value={this.state.value} onChange={this.handleInputChange}></input>
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul className="">{this.getTodoItem()}</ul>
            </Fragment>
        );
    }
}

export default TodoList;