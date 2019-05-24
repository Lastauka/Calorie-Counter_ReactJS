import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: 70,
            height: 175,
            age: 30,
            gender: '',
            activity: 1.2,
        }
    }

    changeInput = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    submitForm = (e) => {
        e.preventDefault();
        const {weight, height, age, gender, activity} = this.state;
        const {setDailyNeed, setFormSubmitted, updateUser} = this.props;

        let dailyNeedLocal = '';
        if (gender === "Male") {
            dailyNeedLocal = activity * (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            dailyNeedLocal = activity * (10 * weight) + (6.25 * height) - (5 * age) - 166;
        }

        let newCurrUserDetails = {weight: weight, height: height, age: age, gender: gender, activity: activity};
        console.log(newCurrUserDetails, 'newCurrDetails from FORM');

        if (typeof setDailyNeed === "function") {
            setDailyNeed(dailyNeedLocal);}

        if (typeof setFormSubmitted === 'function') {
            setFormSubmitted();}

        if (typeof updateUser === 'function') {
            updateUser(newCurrUserDetails);}

        console.log(newCurrUserDetails.weight, 'weight from FORM')

        localStorage.setItem('userDetails', 'xxx');
    };

    render() {
        return (
            <div className={"profile__container"}>
                <h3>
                    How many calories you should eat... {this.state.dailyNeed}
                </h3>
                <form onSubmit={this.submitForm}>
                    <p>Weight (kg) <input
                        name="weight" type="number" value={this.state.weight}
                        onChange={this.changeInput}/></p>
                    <p>Height (cm) <input
                        name="height" type="number" value={this.state.height}
                        onChange={this.changeInput}/></p>
                    <p>Age (years) <input
                        name="age" type="number" value={this.state.age}
                        onChange={this.changeInput}/>
                    </p>
                    <p>Gender</p>
                    <div style={{display: "flex"}}>
                        <div><input name="gender" type="radio" value={"Male"} onChange={this.changeInput}/>
                            <label htmlFor={"Male"}>Male</label>
                        </div>
                        <div><input name="gender" type="radio" value={"Female"} onChange={this.changeInput}/>
                            <label htmlFor={"Female"}>Female</label>
                        </div>
                    </div>

                    <p>Physical activity level
                        <select name="activity" value={this.state.activity} onChange={this.changeInput}>
                            <option value={"1.2"}>Sedentary (little or no exercise)</option>
                            <option value={"1.375"}>Lightly active (light exercise 1-3 days/week)</option>
                            <option value={"1.55"}>Moderately active (moderate exercise 3-5 days/week)</option>
                            <option value={"1.725"}>Very active (hard exercise 6-7 days a week)</option>
                            <option value={"1.9"}>Extra active (very hard exercise & physical job</option>
                        </select></p>
                    <p><input type="submit"/></p>
                </form>
            </div>
        );
    }
}

export default Form;