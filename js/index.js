import {projectList} from '../js/projects.js';


let aboutElement = document.querySelector('.About');
let listElement = document.querySelector('.List');
let pictureElement = document.querySelector('.Picture');
let picBandElement = document.querySelector('.picBand');
let gridElement = document.querySelector('.picGrid');
let listListElement = document.querySelector('.listList');
let listBandElement = document.querySelector('.listBand');

const rndInt = Math.floor(Math.random() * 3);


let x = 0;
let gridLength = 100;
let htmlList = '';
let htmlGrid = '';
let gridOpen = 0;
let listOpen = 0;
let aboutOpen = false;


createFlex();
createList();

var transitionEnd = whichTransitionEvent();


$(document).ready(function(){
    $(".Picture").click(function(){
        if(gridOpen === 0 && listOpen === 0){
            htmlGrid = '';
            createGridwithHref();
            $(".List").addClass('list-closed');
            $(".listList").addClass('listList-closed');
            $(".listBand").addClass('listBand-closed');
            $(".Picture").addClass('picture-open');
            $(".picGrid").addClass('picGrid-open');
            $(".picBand").addClass('picBand-top');
            $(".picBand").addClass('picBand-filled');
            $(".listBand").removeClass('listBand-filled');
            gridElement.scrollTop = 0;
            gridOpen = 1;
            listOpen = 2;
        }else if(gridOpen === 1 && listOpen === 2) {
            htmlGrid = '';
            createFlex();
            htmlList = '';
            createList();
            $(".List").removeClass('list-closed');
            $(".listList").removeClass('listList-closed');
            $(".listBand").removeClass('listBand-closed');
            $(".Picture").removeClass('picture-open');
            $(".picGrid").removeClass('picGrid-open');
            $(".picBand").removeClass('picBand-top');
            $(".picBand").removeClass('picBand-filled');
            $(".listBand").removeClass('listBand-filled');
            gridElement.scrollTop = 0;
            gridOpen = 0;
            listOpen = 0;
        }else if(gridOpen === 2 && listOpen === 1){
            console.log("testasdf")
            htmlGrid = '';
            createGridwithHref();
            $(".List").addClass('list-closed');
            $(".listList").addClass('listList-closed');
            $(".listBand").addClass('listBand-closed');
            $(".picBand").addClass('picBand-filled');
            $(".List").removeClass('list-open');
            $(".listList").removeClass('listList-open');
            $(".Picture").addClass('picture-open');
            $(".Picture").removeClass('picture-closed');
            $(".picGrid").addClass('picGrid-open');
            $(".picGrid").removeClass('picGrid-closed');
            $(".listBand").removeClass('listBand-filled');
            gridElement.scrollTop = 0;
            gridOpen = 1;
            listOpen = 2;
        }
    });

    $(".List").click(function(){
        if(gridOpen === 0 && listOpen === 0){
            htmlList = '';
            createListwithHref();
            $(".List").addClass('list-open');
            $(".listList").addClass('listList-open');
            $(".listBand").addClass('listBand-closed');
            $(".listBand").addClass('listBand-filled');
            $(".Picture").addClass('picture-closed');
            $(".picGrid").addClass('picGrid-closed');
            $(".picBand").addClass('picBand-top');
            $(".List").removeClass('list-closed');
            $(".listList").removeClass('listList-closed');
            $(".picBand").removeClass('picBand-filled');
            gridOpen = 2;
            listOpen = 1;
        }else if (gridOpen === 2 && listOpen === 1){
            htmlList = '';
            createList();
            htmlGrid = '';
            createFlex();
            $(".List").removeClass('list-open');
            $(".listList").removeClass('listList-open');
            $(".listBand").removeClass('listBand-closed');
            $(".List").removeClass('list-closed');
            $(".listList").removeClass('listList-closed');
            $(".listBand").removeClass('listBand-closed');
            $(".Picture").removeClass('picture-closed');
            $(".picGrid").removeClass('picGrid-closed');
            $(".picGrid").removeClass('picGrid-open');
            $(".Picture").removeClass('picture-open');
            $(".picBand").removeClass('picBand-top');
            $(".listBand").removeClass('listBand-filled');
            $(".picBand").removeClass('picBand-filled');
            gridOpen = 0;
            listOpen = 0;
        }else if(gridOpen === 1 && listOpen === 2){
            htmlList = '';
            createListwithHref();
            $(".List").addClass('list-open');
            $(".listList").addClass('listList-open');
            $(".listBand").addClass('listBand-closed');
            $(".listBand").addClass('listBand-filled');
            $(".Picture").addClass('picture-closed');
            $(".picGrid").addClass('picGrid-closed');
            $(".picBand").addClass('picBand-top');
            $(".List").removeClass('list-closed');
            $(".listList").removeClass('listList-closed');
            $(".picBand").removeClass('picBand-filled');
            gridOpen = 2;
            listOpen = 1;
        }
    });

    $(".About").click(function(){
        if(!aboutOpen){
            $(".About").addClass('about-open');
            aboutElement.addEventListener(transitionEnd, visibilityAbout, false);
            aboutOpen = true;
        }else{
            $(".About").removeClass('about-open');
            $(".aboutText").removeClass('aboutText-open');
            aboutOpen = false;
        }
    });
});


function createGridwithHref(){
    projectList.forEach((project) => {
    for(x = 0; x<project.picNum; x++){
        let html = `<a href="${project.name}.html">
                    <img src="images/${project.name}-${x}.jpg">
                    </a>`
        console.log(`${project.name}-${x}`);
        htmlGrid += html;
        };
    });
    document.querySelector('.js-grid').innerHTML = htmlGrid;
    console.log("withHref");
};



function createFlex(){
    projectList.forEach((project) => {
        for(x = 0; x<project.picNum; x++){
            let html = `<div class="grid-inhalt js-image">
                        <img src="images/${project.name}-${x}.jpg">
                        </div>`
            htmlGrid += html;
            };
    });
    console.log(htmlGrid);
    document.querySelector('.js-grid').innerHTML = htmlGrid;
    console.log("without Href");
};

/*
function createFlex(){
    const titleProject = ["dreisaess", "tessere", "arkaden"];
    var projectFlex = titleProject[rndInt];
    for(x = 0; x<8; x++){
        let html = `<div class="grid-inhalt js-image">
                    <img src="images/${projectFlex}-${x}.jpg">
                    </div>`
        htmlGrid += html;
        };
    console.log(htmlGrid);
    document.querySelector('.js-grid').innerHTML = htmlGrid;
    console.log("without Href");
};*/

function createList(){
    projectList.forEach((project) => {
        if(project.listEintrag){
            let html = `<div class="Listeneintrag">
                        <div class="Listeninfo pl">${project.nameList}</div>
                        <div class="Listeninfo pm">${project.type}</div>
                        <div class="Listeninfo pr">${project.year}</div>
                    </div>`
                htmlList += html;
            }
        });
        document.querySelector('.js-list').innerHTML = htmlList;
        console.log("without Href");
        console.log(htmlList);
};


function createListwithHref(){
    projectList.forEach((project) => {
        if(project.listEintrag){
              let html = `<a href="${project.name}.html"><div class="Listeneintrag">
                            <div class="Listeninfo pl">${project.nameList}</div>
                            <div class="Listeninfo pm">${project.type}</div>
                            <div class="Listeninfo pr">${project.year}</div>
                        </div></a>`
                htmlList += html;
            }
        });
        document.querySelector('.js-list').innerHTML = htmlList;
        console.log("without Href");
        console.log(htmlList);
};

function visibilityAbout(){
    if(aboutOpen){
        $(".aboutText").addClass('aboutText-open');
    }else{
        $(".aboutText").removeClass('aboutText-open');
    }
};


function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

