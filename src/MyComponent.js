import React from 'react';
import PropTypes from 'prop-types';

const MyComponents = ({name, children}) => {
    return(
        <div>
            <h1>{name} 의 새롭고 멋진 컴포넌트</h1>
            <h2>{children}</h2>
        </div>
    )

};

MyComponents.defaultProps = {
    name : '아무값도 설정안됨'
}

MyComponents.propTypes = {
    name:PropTypes.string
}

export default MyComponents;