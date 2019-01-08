import React, {Component} from 'react';
import '../home/Home.css';
import Header from '../../common/header/Header';
import { Tab } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
//import IconButton from "@material-ui/core/IconButton/IconButton";
//import Fastfood from '@material-ui/icons/Fastfood';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import SearchIcon from '@material-ui/icons/Search';
//import Toc from '@material-ui/icons/Toc';
import Grid from "@material-ui/core/Grid/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from "@material-ui/core/Menu/Menu";

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{padding: 0, textAlign: 'center', width: 'parent'}}>
            {props.children}
        </Typography>
    )
};

class BDAmaster extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            value: 0,
            anchorEl: null,
            
            firstnameRequired: "dispNone",
            firstname: "",
            lastnameRequired: "dispNone",
            lastname: "",
            emailRequired: "dispNone",
            isEmailValid: "dispNone",
            email: "",
            isMobileNoValid: "dispNone",
            isPhoneNoValid: "dispNone",
            mobileNoRequired: "dispNone",
            mobileNo: "",
            phoneNoRequired: "dispNone",
            phoneNo: "",
            registrationSuccess: false,
            formValid: false,
            address: "",
            successMessage: "",
            errorResponse: "",
            showUserProfileDropDown: false,
            enableMyAccount: false,
            loggedIn: sessionStorage.getItem("access-token") != null
        }
    }

    openModalHandler = () => {
        this.setState({
            modalIsOpen: false,
            value: 0,
            anchorEl: null,
            
            firstnameRequired: "dispNone",
            firstname: "",
            lastnameRequired: "dispNone",
            lastname: "",
            emailRequired: "dispNone",
            isEmailValid: "dispNone",
            email: "",
            isMobileNoValid: "dispNone",
            isPhoneNoValid: "dispNone",
            mobileNoRequired: "dispNone",
            mobileNo: "",
            phoneNoRequired: "dispNone",
            phoneNo: "",
            registrationSuccess: false,
            formValid: false,
            address: "",
            successMessage: "",
            errorResponse: ""
        });
    };

    render() {
        return(
            <div>
                 <Header />

               
                {this.state.value === 1 &&
                <TabContainer>
                        <FormControl required className="form-control">
                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                            <Input id="firstname" type="text" firstname={this.state.firstname}
                                   onChange={this.inputFirstNameChangeHandler}
                                   value={this.state.firstname}/>
                            <FormHelperText className={this.state.firstnameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br/><br/>
                        <FormControl className="form-control">
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" type="text" lastname={this.state.lastname}
                                   onChange={this.inputLastNameChangeHandler} value={this.state.lastname}/>
                            <FormHelperText className={this.state.lastnameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br/><br/>
                        <FormControl required className="form-control">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="email" email={this.state.email}
                                   onChange={this.inputEmailChangeHandler} value={this.state.email}/>
                            <FormHelperText className={this.state.emailRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                            <FormHelperText className={this.state.isEmailValid}>
                                <span className="red">Invalid Email</span>
                            </FormHelperText>
                        </FormControl>
                        <br/><br/>
                        <FormControl required className="form-control">
                            <InputLabel htmlFor="mobile">Mobile No.</InputLabel>
                            <Input id="mobile" type="text" movile={this.state.mobile}
                                   onChange={this.inputMobileChangeHandler} value={this.state.mobile}/>
                            <FormHelperText className={this.state.mobileRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                            <FormHelperText className={this.state.isMobileValid}>
                                <span
                                    className="red">Mobile No. must contain only numbers and must be 10 digits long</span>
                            </FormHelperText>
                        </FormControl>
                        <br/><br/>
                        <FormControl required className="form-control">
                            <InputLabel htmlFor="phone">Phone No.</InputLabel>
                            <Input id="phone" type="text" phone={this.state.phone}
                                   onChange={this.inputPhoneChangeHandler} value={this.state.phone}/>
                            <FormHelperText className={this.state.phoneRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                            <FormHelperText className={this.state.isPhoneValid}>
                                <span
                                    className="red">Phone No. must contain only numbers and must be 10 digits long</span>
                            </FormHelperText>
                        </FormControl>
                        <br/><br/>
                        <FormControl className="form-control">
                            <InputLabel htmlFor="address">Address</InputLabel>
                            <Input id="address" type="text" address={this.state.address}
                                   onChange={this.inputAddressChangeHandler}
                                   value={this.state.address}/>
                            <FormHelperText className={this.state.addressRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                </TabContainer>     
                }  
            </div>                
        )
    }
}

export default BDAmaster;
