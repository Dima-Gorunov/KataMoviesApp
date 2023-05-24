import React, {Component} from 'react';
import {Pagination} from 'antd';


class PaginationComp extends Component {
    change(page, pageSize) {
        console.log(page, pageSize);
        this.props.getMoviesThunk(page)
    }

    render() {
        return (
            <Pagination onChange={(page, pageSize) => this.change(page, pageSize)} defaultPageSize={1}
                        defaultCurrent={1} current={this.props.ActivePage}
                        total={this.props.Pages}/>
        )
    }
}

export default PaginationComp