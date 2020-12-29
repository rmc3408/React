import React, { Component } from 'react';
import './Profile.css';
import List from '../components/List/List';
import Link from '../components/Link/Link';


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            repositories: [],
            loading: true
        }
    }
    async componentDidMount() {
        const profile = await fetch('https://api.github.com/users/rmc3408'); //connect
        const profileConvertedJSON = await profile.json(); //convert in JSON

        if (profileConvertedJSON !== null) {
            const repolist = await fetch(profileConvertedJSON.repos_url);
            const repoJSON = await repolist.json();
            
            this.setState({
                data: profileConvertedJSON,
                repositories: repoJSON,
                loading: false
            })
        }
    }

    render() {
        console.log(this.state);
        const myData = this.state.data;
        const myRepo = this.state.repositories;
        console.log(myRepo);

        if (this.state.loading) {
            return <h1> ...loading </h1>;
        }

        const gitItems = [
            { label: 'Full name', value: myData.name },
            { label: 'location', value: myData.location },
            { label: 'bio', value: myData.bio },
            { label: 'html_url', value: <Link className="blackStyle" url={myData.html_url} title='my personal Github URL' /> },
            { label: 'login', value: myData.login},
            { label: 'repos_url', value: myData.repos_url }
        ];

        const projects = myRepo.map(repository => ({
            label: repository.name,
            value: <Link url={repository.html_url} size={repository.size} />
        }));
        
        return (
            <div>
                <div className='Profile-container'>
                    <img className='Profile-avatar' src={myData.avatar_url} alt='avatar' />
                    <List title='Profile' items={gitItems} />
                    <List title='Repositories' items={projects} />
                </div>    
            </div>
        );
      }
}
export default Profile;
