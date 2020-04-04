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
        this.props.changeName(e.target.value || "ramon.w.rocha@gmail.com");
    }

    render() {
        return (
            <div>
                <h1>Hola {this.props.myname}</h1>
                <h2>{this.props.myemail}</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input onChange={this.changeName} />
                            <button className="btn btn-primary" onClick={() => { this.props.changeName("Ramon") }} >Nome por defecto</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input onChange={this.changeEmail} />
                            <button className="btn btn-primary" onClick={() => { this.props.changeEmail("ramon.w.rocha@gmail.com") }} >Email por defecto</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        myname: state.nombre,
        myemail: state.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (nombre) => {
            dispatch({
                type: "CHANGE_NAME",
                payload: nombre
            })
        },
        changeEmail: (email) => {
            dispatch({
                type: "CHANGE_EMAIL",
                payload: email
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);