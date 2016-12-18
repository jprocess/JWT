'use strict'

import 'angular';
import 'angular-ui-router';

//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.paper.min.css'; // theme
import 'animate.css/animate.min.css';

import './styles/index.css';
import './styles/alert.css';

import './app.js';
import './app.config.js'

import './controllers/register.js';
import './services/alert.js';
import './directives/validateEquals.js';

import numeral from 'numeral';

import {
    getUsers,
    deleteUser
} from './api/userApi';

const courseValue = numeral(1000).format('$0,0.00');
// notice these are not single quotes but backticks
console.log(`I would pay ${courseValue} for this awseome course!`);
console.log('did you see the numeral message?')


