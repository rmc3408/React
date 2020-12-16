//import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as anyAction from '../Redux/actions';
//import { removePost } from '../Redux/actions';
import App from './App';


function mapStateToProps(state) {
    return { posts: state };
}

function mapDispatchToProps(dispatch) {
    // return bindActionCreators({ removePost }, dispatch); // if one action
    return bindActionCreators(anyAction, dispatch);
}

const Application = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));                       

export default Application;
