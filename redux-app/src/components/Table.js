import React, { Component } from 'react';

export default class Table extends Component {
    render() {
        return (
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">UserId</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((item, i) =>
                            <tr key={i}>
                                <th scope="row">{item.id}</th>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td>{item.userId}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        );
    }
}