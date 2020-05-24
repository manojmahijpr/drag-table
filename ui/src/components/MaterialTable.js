import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { tableStyles } from "../styles";
import { tableHeader } from '../constants';
import axios from 'axios';
import { TablePagination } from '@material-ui/core';

/**
 * Material Table class contains the React Component for Materialzed UI Table with Client Side Pagination option
 */
class MaterialTable extends Component {

    /**
     * booksData {string} list of books
     * page {integer} value of current page
     * rowsPerPage {integer} value of number of rows per page
     */
    state = {
        booksData: [],
        page: 0,
        rowsPerPage: 10
    }

    /**
     * this life cycle method will fetch list of books
     */
    componentDidMount() {
        axios.get("/api/books")
            .then(res => this.setState({ booksData: res.data.books }))
            .catch(err => console.log(err))
    }

    render() {
        const { classes } = this.props;
        const { booksData, page, rowsPerPage } = this.state;
        return (
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {tableHeader.map((header, i) => <TableCell className={classes.head} key={i}>{header}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {booksData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((book, i) => (
                                <TableRow key={i}>
                                    <TableCell className={classes.tableCell} >{book.title}</TableCell>
                                    <TableCell className={classes.tableCell} >{book.author}</TableCell>
                                    <TableCell className={classes.tableCell} >{book.year}</TableCell>
                                    <TableCell className={classes.tableCell} >{book.publisher}</TableCell>
                                    <TableCell className={classes.tableCell} >{book.language}</TableCell>
                                    <TableCell className={classes.tableCell} >{book.edition}</TableCell>
                                    <TableCell className={classes.tableCell} >{book.pages}</TableCell>
                                    <TableCell className={classes.tableCell} >{book.topic}</TableCell>
                                    <TableCell className={classes.tableCell} >{book.issue}</TableCell>
                                    <TableCell className={classes.tableCell} >{book.identifier}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10]}
                    component="div"
                    count={this.state.booksData.length}
                    rowsPerPage={10}
                    page={this.state.page}
                    onChangePage={(event, page) => this.setState({ page })}
                />
            </Paper>
        );
    }
}

MaterialTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyles)(MaterialTable);