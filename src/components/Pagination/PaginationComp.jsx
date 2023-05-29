import React, { Component } from 'react';
import { Pagination } from 'antd';

class PaginationComp extends Component {
  change(page, pageSize) {
    console.log(page, pageSize);
    if (this.props.MenuItem === 'Rated') {
      this.props.getRatedMoviesThunk(page);
    } else {
      this.props.getMoviesThunk(page, this.props.InputText);
    }
  }

  render() {
    return (
      <div className="pagination-container">
        <Pagination
          onChange={(page, pageSize) => this.change(page, pageSize)}
          defaultPageSize={1}
          defaultCurrent={1}
          current={this.props.ActivePage}
          total={this.props.Pages}
        />
      </div>
    );
  }
}

export default PaginationComp;
