import {projectList} from './projects.js';
console.log(projectList);


var projekt = projectList[4];
let x = 0;
let htmlList = '';
let htmlGrid = '';

createHeader();
createText();
createPicture();
createAbout();

function createHeader(){
    var name = projekt.name;
    var html = '';
    for(var x = 0; x<15; x++){
        html = html + name + " ";
        };
    document.querySelector('.HeaderText').innerHTML = html;
    console.log(html);
};

function createText(){
    document.querySelector('.Text').innerHTML = projekt.text;
};

function createPicture(){
            for(x = 0; x<projekt.picNum; x++){
                    let html = `<div class="grid-inhalt js-image">
                                <img src="images/${projekt.name}-${x}.jpg">
                                </div>`
                    htmlGrid += html;
                    };
                    document.querySelector('.js-grid').innerHTML = htmlGrid;
            };

function createAbout(){
    var html = '';
    html = projekt.imp;
    document.querySelector('.About').innerHTML = html;
};