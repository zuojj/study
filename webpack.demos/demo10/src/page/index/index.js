/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-11-12 21:32:30
 * @version $Id$
 */

require('../../static/css/base.scss');
require('./index.scss');

import {Person} from '../../static/js/person.js';

const person = new Person('Page Index');
document.querySelector('header').appendChild(document.createTextNode('Print：' + person.getName()));