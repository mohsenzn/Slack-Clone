import { Button} from '@material-ui/core'
import React from 'react'
import {auth,provider} from '../../firebase';
import { useStateValue } from '../Context/StateProvider';
import {actionTypes} from '../Context/reducer'
function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
           dispatch({
               type:actionTypes.SET_USER,
               user:result.user
           })
        })
        .catch(err => console.warn(err))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://assets.brandfolder.com/pl546j-7le8zk-btwjnu/v/2925183/original/Slack_RGB.png" alt=""/>
                <h1>Sign In to clever Programmer hq</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button onClick={signIn}>Sign in with google</Button>
            </div>
        </div>
    )
}

export default Login;
