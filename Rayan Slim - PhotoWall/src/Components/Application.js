import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as anyAction from '../redux/actions';
//import { removePost } from '../Redux/actions';
import App from './App';


function mapStateToProps(state) {
    return {
        posts: state.posts, //name of function must match.
        comments: state.comments
    };
}

function mapDispatchToProps(dispatch) {
    // return bindActionCreators({ removePost }, dispatch); // if one action
    return bindActionCreators(anyAction, dispatch);
}

const Application = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));                       

export default Application;
