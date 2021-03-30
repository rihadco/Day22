// src/Table.js

import React, { Component } from "react";

// TableHeader
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
            </tr>
        </thead>
    )
}

// TableBody
const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Lary</td>
                <td>Page</td>
            </tr>
            <tr>
                <td>Ada</td>
                <td>Lovelace</td>
            </tr>
            <tr>
                <td>Alan</td>
                <td>Turing</td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lary</td>
                        <td>Page</td>
                    </tr>
                    <tr>
                        <td>Ada</td>
                        <td>Lovelace</td>
                    </tr>
                    <tr>
                        <td>Alan</td>
                        <td>Turing</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;