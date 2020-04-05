import React, { Component } from 'react';
import { deleteAPI, getAPI } from '../actions/Action';
import { connect } from 'react-redux';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ModalEdit from './ModalEdit';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { props: [], openModal: false };
    }

    componentDidMount() {
        this.loadList();
    }

    edit(model) {

        this.setState({ model: model });

        //this.props.changeModel(model);
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
        const { descricao, id, valor, quantidade } = this.state;
        let closeModal = () => this.setState({ openModal: false });
        return (
            <div>
                <ButtonToolbar>
                    <Button onClick={() => this.setState({ model: {}, openModal: true })}>
                        Add
                    </Button>
                    <ModalEdit model={this.state.model} show={this.state.openModal} onHide={closeModal} />
                </ButtonToolbar>
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
                                    <td>
                                    <ButtonToolbar>
                                        <Button onClick={() => this.setState({ descricao: item.descricao, valor: item.valor, id: item.id, quantidade: item.quantidade, openModal: true })}>
                                            Edit
                                        </Button>
                                        <ModalEdit descricao={descricao} id={id} valor={valor} quantidade={quantidade} show={this.state.openModal} onHide={closeModal} />
                                    </ButtonToolbar>
                                        {/* <div className="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-success" onClick={() => this.setState({ descricao: item.descricao, openModal: true })} >Edit</button>
                                            <button type="button" className="btn btn-success" onClick={() => { this.edit(item) }}>Edit</button>
                                            <button type="button" className="btn btn-danger" onClick={() => { this.delete(item.id) }}>Delete</button>
                                        </div> */}
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
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