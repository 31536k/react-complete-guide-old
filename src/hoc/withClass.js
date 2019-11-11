import React from 'react'

const withClass = (WrappedComponent, className) => {
    return props => (
        <div class={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass