import { Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import PhotoWall from './Photowall';
import './App.css';
import AddPhoto from './AddPhoto';
import Single from './single';
//import { removePost } from '../Redux/actions';

class App extends Component {
  constructor() {
    super();
    console.log('App constructor loaded');    
  }

   componentDidMount() {
       //this.props.dispatch(removePost(1)); IF dont bind Actions to 
       //this.props.removePost(1);
       //console.log('App DidMount component');
     this.props.startLoadingPost();
     this.props.startLoadingComments();
   }

    // addPhotoUpdate(postUpdated) {
    //   this.setState(state => ({
    //     posts: state.posts.concat([postUpdated])
    //   }));
    // }
    // removePhoto(postRemoved) {
    //   console.log(postRemoved.description);
    //   this.setState(state => ({
    //     posts: state.posts.filter(p => p !== postRemoved)
    //   }));
    // }
  
  render() {
    //console.log('render');
    // console.log(this.state.posts); //without redux
    //console.log(this.props);
    //console.warn = () => { };
    return (   
      <div> 
        <h2> <Link to='/' >PhotoWall</Link> </h2>
        <Route
          exact path="/" render={() =>
          (<div>
            
            <PhotoWall {...this.props} />
            {/* <PhotoWall posteds={this.props.posts} /> */}
            {/* <PhotoWall
              posteds={this.state.posts} onRemovePhoto={this.removePhoto}
              onNavigate={this.navigate}
            /> */}
          </div>)}
        />
        
        {/*<Route exact path="/AddPhoto" component={AddPhoto} />*/}

        <Route
          path="/AddPhoto"
          render={({ history }) => (<AddPhoto {...this.props} onHistory={history} />)} />
        <Route
          path='/single/:id' render={(params) => (
          <Single {...this.props} {...params} />
        )} />      
      </div>
    );
  }
}
export default App;
