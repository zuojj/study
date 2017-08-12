/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-11-12 21:32:30
 * @version $Id$
 */

import {Person} from './person.js';

const person = new Person('Page Index');

require('./index.scss');

document.body.appendChild(document.createTextNode('print: -->' + person.getName() + '<br>'));