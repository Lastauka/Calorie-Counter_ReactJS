import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.jsx';
import Form from "./Components/Form.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {
                weight: 70,
                height: 175,
                age: 30,
                gender: '',
                activity: 1.2,
                dailyNeed: '1234.00',
            },
            formSubmitted: false
        }
    }

    setDailyNeed(dailyNeed) {
        this.setState((state) => {

            const newUserDetails = {...state.userDetails}; // or: const newCurrUserDetails = Object.assign({}, state.userDetails);
            newUserDetails.dailyNeed = dailyNeed;

            return({
                userDetails: newUserDetails
            })
        })
    }

    updateUser(updatedUser) {
        this.setState((state) => {
            const newUserDetails = {...state.userDetails};
            newUserDetails.weight = updatedUser.weight;
            newUserDetails.height = updatedUser.height;
            newUserDetails.age = updatedUser.age;
            newUserDetails.gender = updatedUser.gender;
            newUserDetails.activity = updatedUser.activity;

            return({
                userDetails: newUserDetails
            })
        })
    }

    setFormSubmitted() {
        this.setState({
            formSubmitted: true
        })
    }

    render() {
        return (
            <div>
                <Header/>
                {!this.state.formSubmitted &&
                <Form setDailyNeed={this.setDailyNeed.bind(this)}
                      setFormSubmitted={this.setFormSubmitted.bind(this)}
                      updateUser={this.updateUser.bind(this)}
                />}

            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
