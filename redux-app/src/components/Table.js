import React, { Component } from 'react';
import { deleteAPI, getAPI } from '../actions/Action';
import { connect } from 'react-redux';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ModalEdit from './ModalEdit';
import ModalAdd from './ModalAdd';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { openModalEdit: false, openModalAdd: false };
    }

    componentDidMount() {
        this.loadList();
    }

    delete(id) {
        if (!window.confirm("Delete?")) {
            return;
        }

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
        let closeModalAdd = () => this.setState({ openModalAdd: false });
        let closeModalEdit = () => this.setState({ openModalEdit: false });
        return (
            <div>
                <ButtonToolbar>
                    <Button onClick={() => this.setState({ model: {}, openModalAdd: true })}>
                        Add
                    </Button>
                    <ModalAdd show={this.state.openModalAdd} onHide={closeModalAdd} />
                </ButtonToolbar>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
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
                                            <Button variant="success" onClick={() => this.setState({ descricao: item.descricao, valor: item.valor, id: item.id, quantidade: item.quantidade, openModal: true })}>
                                                Edit
                                        </Button>
                                            <Button variant="danger" onClick={() => { this.delete(item.id) }}>Delete</Button>

                                            <ModalEdit descricao={descricao} id={id} valor={valor} quantidade={quantidade} show={this.state.openModalEdit} onHide={closeModalEdit} />
                                        </ButtonToolbar>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeList: (list) => {
            dispatch({
                type: "CHANGE_LIST",
                payload: list,
                key: 'lista'
            })
        },
    }
}

export default connect(null, mapDispatchToProps)(Table);