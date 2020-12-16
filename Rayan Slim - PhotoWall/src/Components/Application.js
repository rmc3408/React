import { connect } from 'react-redux';
import App from './App';


function mapStateToProps(state) {
    return { posts: state };
}

const Application = connect(mapStateToProps)(App);

export default Application;
