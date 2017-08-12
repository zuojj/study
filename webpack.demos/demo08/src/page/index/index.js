/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-11-12 21:32:30
 * @version $Id$
 */

import {Person} from '../../static/js/person.js';

const person = new Person('Page Index');

require('./index.scss');

document.querySelector('header').appendChild(document.createTextNode('Print：' + person.getName()));