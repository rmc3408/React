import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePost } from '../Redux/actions';
import App from './App';


function mapStateToProps(state) {
    return { posts: state };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removePost }, dispatch);
}


const Application = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default Application;
