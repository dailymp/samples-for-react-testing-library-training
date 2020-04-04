import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postAPI, getAPI, putAPI } from '../actions/Action';

class ProductForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            descricao: '',
            quantidade: 0,
            valor: 0,
        };
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.props.model[nam] = val;
        this.setState({ [nam]: val });
    }

    submitHandler = (event) => {
        event.preventDefault();
        
        if (!this.props.model.id) {
            this.addProduct();
        } else {
            this.update();
        }

    }

    addProduct() {
        postAPI(this.state).then(item => {
            this.clearForm();
        })
    }

    update() {
        putAPI(this.props.model).then(item => {
            this.clearForm();
        });
    }

    clearForm() {
        this.props.changeModel({});
        this.setState({
            id: 0,
            descricao: '',
            quantidade: 0,
            valor: 0,
        });
        this.loadList();
    }

    loadList() {
        getAPI().then(item => {
            this.props.changeList(item);
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label>Description</label>
                <input disabled
                    type='number'
                    name='id'
                    onChange={this.changeHandler}
                    value={this.props.model.id}
                />
                <input
                    type='text'
                    name='descricao'
                    onChange={this.changeHandler}
                    value={this.props.model.descricao}
                />
                <label>Quantity</label>
                <input
                    type='number'
                    name='quantidade'
                    onChange={this.changeHandler}
                    value={this.props.model.quantidade}
                />
                <label>Price</label>
                <input
                    type='number'
                    name='valor'
                    onChange={this.changeHandler}
                    value={this.props.model.valor}
                />
                <button
                    type='submit'
                    disabled={!this.props.model.descricao || !this.props.model.quantidade || !this.props.model.valor}
                    className="btn btn-success">Save</button>
            </form>);
    }
}

const mapStateToProps = (state) => {
    return {
        model: state.model
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeModel: (model) => {
            dispatch({
                type: "CHANGE_MODEL",
                payload: model,
                key: 'model'
            })
        },
        changeList: (list) => {
            dispatch({
                type: "CHANGE_LIST",
                payload: list,
                key: 'lista'
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);