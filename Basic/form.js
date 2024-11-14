function SubmitData() {

    let user_form = document.forms['user-form']

    let user_name = user_form['user-name'].value

    let user_age = user_form['user-age'].value

    let user_data = {
        username: user_name,
        age: user_age
    }

    console.log(user_data)
}

