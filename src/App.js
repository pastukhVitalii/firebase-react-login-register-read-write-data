import React, {Component} from 'react';
import './App.css';
import * as firebase from 'firebase';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hasAccount: false,
            name: '',
            key: '',
            value: ''
        }
    }

    componentDidMount() {
        //read db
        const db = firebase.database();
        const name = db.ref('name');
        name.on('value', (elem) => {
            this.setState({name: elem.val()});
        });
        console.log(db)
    }

    handleChange = ({target: {value, id}}) => {
        this.setState({
            [id]: value,
        })
    }

    createAcount = () => {
        const {email, password} = this.state;
        /*firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => console.log(error) )*/

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({hasAccount: true});
            })
            .catch(error => console.log(error))
    }

    sendData = () => {
        const {key, value} = this.state;
        const db = firebase.database();
        db.ref(key).push(value);
        alert('your data written to db');
    };

    render() {
        const {hasAccount, name} = this.state;
        return (
            <div>
                {hasAccount ?
                    <div>
                        <input type="text"
                               id='key'
                               placeholder='enter key'
                               onChange={this.handleChange}/>
                        <input type="text"
                               id='value'
                               placeholder='enter value'
                               onChange={this.handleChange}/>
                        <input type="submit"
                               onClick={this.sendData}/>
                    </div> :
                    <div className="login-block">
                        <input type="text"
                               placeholder='email'
                               id='email'
                               onChange={this.handleChange}/>
                        <input type="password"
                               placeholder='password'
                               id='password'
                               onChange={this.handleChange}/>
                        <input type="submit"
                               onClick={this.createAcount}/>
                    </div>
                }
            </div>
        )
    }
}