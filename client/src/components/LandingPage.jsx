import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
//import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing(1),
    },
    textField: {
        flexBasis: 200,
    },
    margin: {
        margin: theme.spacing(1),
    },
}));
//const classes = useStyles();
class LandPage extends Component {


    state = {
        username: "",
        password: "",
        showPassword: false
    };


    handleChange = e => {
        const value = e.target.value;
        //setValues({ ...values, [prop]: event.target.value });
        this.setState({
            password: value
        })
    };

    handleClickShowPassword = () => {
        //setValues({ ...values, showPassword: !values.showPassword });
        this.setState({
            showPassword: !this.state.showPassword
        })
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    render() {
        //console.log("the state prop ", this.state.showPassword);

        return (<div>
            <h1>Welcome <br /> to <br /> the Blog</h1>
            <div className={useStyles.root}>

                <FormControl className={clsx(useStyles.margin, useStyles.textField)}>
                    <InputLabel htmlFor="adornment-password">Username</InputLabel>
                    <Input
                        id="adornment-username"
                        type="text"
                        value={this.state.username}
                        className={useStyles.input}
                        inputProps={{
                            'aria-label': 'description',
                        }}
                        onChange={this.handleChange}

                    />
                </FormControl>
                <form>
                    <FormControl className={clsx(useStyles.margin, useStyles.textField)}>
                        <InputLabel htmlFor="adornment-password">Password</InputLabel>
                        <Input
                            id="adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                        onMouseDown={this.handleMouseDownPassword}
                                    >
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </form>

            </div>

        </div>);
    }
}

export default LandPage;