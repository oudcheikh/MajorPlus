import React from "react";
import PropTypes from "prop-types";
import PaginationDot from "./PaginationDot.js";

const styles = {
    root: {
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid lightgrey",
        marginBottom: "10px",
        width: "100%",
    },
};

class Pagination extends React.Component {
    handleClick = (event, index) => {
        this.props.onChangeIndex(index);
    };

    render() {
        const { index, dots } = this.props;

        const children = [];

        for (let i = 0; i < dots; i += 1) {
            children.push(<PaginationDot key={i} index={i} active={i <= index} onClick={this.handleClick} />);
        }

        return <div style={styles.root}>{children}</div>;
    }
}

Pagination.propTypes = {
    dots: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    onChangeIndex: PropTypes.func.isRequired,
};

export default Pagination;
