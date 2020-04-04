import React, { Component } from 'react';
import { deleteAPI, getAPI } from '../actions/Action';
import { connect } from 'react-redux';

class Table extends Component {

    componentDidMount() {
        this.loadList();
    }

    edit(model) {
        this.props.changeModel(model);
    }

    delete(id) {
        deleteAPI(id).then(resp => {
            if (resp.ok) {
                this.loadList();
            }
        })
    }

    loadList() {
        getAPI().then(item => this.props.changeList(item));
    }

    render() {
        return (
            <table className="table table-striped table-dark">                
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((item, i) =>
                            <tr key={i}>
                                <th scope="row">{item.id}</th>
                                <td>{item.descricao}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td><div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-success" onClick={()=>{this.edit(item)}}>Edit</button>
                                    <button type="button" className="btn btn-danger" onClick={()=>{this.delete(item.id)}}>Delete</button>
                                </div></td>
                            </tr>)
                    }
                </tbody>
            </table>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Table);