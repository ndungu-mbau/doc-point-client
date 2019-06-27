import React from 'react'

export default ({ message, type }) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className={`alert alert-${type} alert-with-icon`}
        data-notify="container"
        style={{ marginTop: '100px', zIndex: 100, position: 'absolute' }}
      >
        <div className="container">
          <div className="alert-wrapper">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <i className="nc-icon nc-simple-remove"></i>
            </button>
            <div className="message">
              <i className="nc-icon nc-bell-55"></i>
              <br />
              OOPS! Something went wrong with the request.
              <br />
              {`${message}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
