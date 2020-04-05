import React, { Component } from 'react';
import { Modal, Row, Col, Form, Button } from 'react-bootstrap'
import { postAPI, getAPI } from '../actions/Action';
import { connect } from 'react-redux';

class ModalAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        postAPI(this.state).then(item => {
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

                                <Col md="6">
                                    <Form.Group controlId="descricao">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control name="descricao"
                                            onChange={this.handleChange}
                                            type="text" required>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col md="3">
                                    <Form.Group controlId="quantidade">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control name="quantidade"
                                            onChange={this.handleChange}
                                            type="number" required>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col md="3">
                                    <Form.Group controlId="valor">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control name="valor"
                                            onChange={this.handleChange}
                                            type="number" required>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>

                            </Row>

                            <Form.Group>
                                <Button disabled={!this.state.valor || !this.state.descricao || !this.state.quantidade} variant="success" type="submit">Save</Button>
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

export default connect(null, mapDispatchToProps)(ModalAdd);