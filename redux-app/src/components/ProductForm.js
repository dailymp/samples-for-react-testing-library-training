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
        this.props.form[nam] = val;
        //this.setState({ [nam]: val });
    }

    submitHandler = (event) => {
        event.preventDefault();

        postAPI(event.target).then(item => {
            this.clearForm();
        })

        // if (!this.props.form.id) {
        //     this.addProduct();
        // } else {
        //     this.update();
        // }

    }

    addProduct() {
        postAPI(this.state).then(item => {
            this.clearForm();
        })
    }

    update() {
        putAPI(this.props.form).then(item => {
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
                    value={this.props.form.id}
                />
                <input
                    type='text'
                    name='descricao'
                    onChange={this.changeHandler}
                    value={this.props.form.descricao}
                />
                <label>Quantity</label>
                <input
                    type='number'
                    name='quantidade'
                    onChange={this.changeHandler}
                    value={this.props.form.quantidade}
                />
                <label>Price</label>
                <input
                    type='number'
                    name='valor'
                    onChange={this.changeHandler}
                    value={this.props.form.valor}
                />
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button
                        type='submit'
                        disabled={!this.state.descricao || !this.state.quantidade || !this.state.valor}
                        className="btn btn-success">Save</button>
                    <button type="button" className="btn btn-success" onClick={() => { this.clearForm() }}>NEW</button>
                </div>

            </form>);
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.model
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