import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    render() {
        console.log(this.props.stream);
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>{this.props.stream.title}</div>
        );
    }
};

const mapStateToProp = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProp, { fetchStream })(StreamEdit);