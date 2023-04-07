

import {headerList} from './header.js';
import {mainContent} from './mainContent.js';

import './style.css'; 


let mainContentBox=document.createElement('div')
mainContentBox.id="mainContent"
mainContentBox.className="mainContent";

let headerPlace=document.createElement('div');
headerPlace.id="headerPlace";
mainContentBox.appendChild(headerPlace);

let innerPlace=document.createElement('div');
innerPlace.id="innerPlace";
mainContentBox.appendChild(innerPlace);


document.body.appendChild(mainContentBox);

let localHeader=headerList();
let mainContentLocal=mainContent();
mainContentLocal.generating()

