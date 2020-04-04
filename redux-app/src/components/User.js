import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
    }

    changeName(e) {
        this.props.changeName(e.target.value || "Ramon");
    }

    changeEmail(e) {
        this.props.changeEmail(e.target.value || "ramon.w.rocha@gmail.com");
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input onChange={this.changeName} ref="name" className="form-control" />
                            <button className="btn btn-primary" onClick={() => { this.props.changeName("Ramon"); this.refs.name.value = '' }} >Reset</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input onChange={this.changeEmail} ref="email" className="form-control" />
                            <button className="btn btn-primary" onClick={() => { this.props.changeEmail("ramon.w.rocha@gmail.com"); this.refs.email.value = '' }} >Reset</button>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <h2>CRUD - PRODUTOS</h2>
                <div className="row">
                    <div className="col-md-6"></div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         myname: state.nombre,
//         myemail: state.email
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (nombre) => {
            dispatch({
                type: "CHANGE_NAME",
                payload: nombre,
                key: 'nombre'
            })
        },
        changeEmail: (email) => {
            dispatch({
                type: "CHANGE_EMAIL",
                payload: email,
                key: 'email'
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(User);