import React from "react";
import {connect} from "react-redux";
import actions from "../../redux/actions";

const Filter = ({filter, handleInputChange}) => {
    return (
        <>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={filter}
                //при использовании, событие обрабатывается в mapDispatchToProps
                onChange={handleInputChange}
                // onChange={e => handleInputChange(e.target.value)}
            />
        </>
    );
};

const mapStateToProps = state => ({
    filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
    handleInputChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
