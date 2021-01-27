import React, { Component } from 'react';
import { Modal, Row, Col, Form, Button } from 'react-bootstrap'
import { putAPI, getAPI } from '../actions/Action';
import { connect } from 'react-redux';

class ModalEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let model = {
            id: event.target.id.value,
            descricao: event.target.descricao.value,
            quantidade: event.target.quantidade.value,
            valor: event.target.valor.value
        };

        putAPI(model).then(item => {
            this.loadList();
        });
    }

    loadList() {
        getAPI().then(item => {
            this.props.changeList(item);
            this.props.onHide();
        })
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Product
              </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col md="3">
                                    <Form.Group controlId="id">
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control name="id"
                                            type="text" required disabled
                                            defaultValue={this.props.id}>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col md="9">
                                    <Form.Group controlId="descricao">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control name="descricao"
                                            type="text" required
                                            defaultValue={this.props.descricao}>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col md="6">
                                    <Form.Group controlId="quantidade">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control name="quantidade"
                                            type="number" required
                                            defaultValue={this.props.quantidade}>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col md="6">
                                    <Form.Group controlId="valor">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control name="valor"
                                            type="number" required
                                            defaultValue={this.props.valor}>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group>
                                <Button variant="success" type="submit">Save</Button>
                            </Form.Group>

                        </Form>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>);
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

export default connect(null, mapDispatchToProps)(ModalEdit);