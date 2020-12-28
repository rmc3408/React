import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            loading: true
        }
    }
    async componentDidMount() {
        const profile = await fetch('https://api.github.com/users/rmc3408'); //connect
        const profileConvertedJSON = await profile.json(); //convert in JSON

        if (profileConvertedJSON !== null) {
            this.setState({
                data: profileConvertedJSON,
                loading: false
            })
        }
    }

    render() {
        console.log(this.state);
        const myData = this.state.data;

        if (this.state.loading) {
            return <h1> ...loading </h1>;
        }

        return (
            <div>
                <div className='Profile-container'>
                    <img className='Profile-avatar' src={myData.avatar_url} alt='avatar' />
                <ol className='Profile-info'>
                    <li>Full name: {myData.name}</li>
                    <li>Login name: {myData.login}</li>
                    <li>html_url: {myData.html_url}</li>
                    <li>repos_url: {myData.repos_url}</li>
                    <li>location: {myData.location}</li>
                    <li>bio: {myData.bio}</li>
                    </ol>
                </div>    
            
            </div>
        );
      }
}
export default Profile;
