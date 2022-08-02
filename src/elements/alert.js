import React from 'react'
// import PropTypes from 'prop-types'


function Alert(props) {
    return (
        props.alert && <div className="alert  alert-dismissible fade show  alert-success" role="alert">
            <strong>{props.alert.typ}</strong>: {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        // use props.alert&& trick on the most outside tag
    )
}

export default Alert