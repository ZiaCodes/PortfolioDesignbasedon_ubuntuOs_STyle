const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const home = document.querySelector('#home')
const camera = document.querySelector('#camera')
const twitter = document.querySelector('#twitter-icon')
const insta = document.querySelector('#insta-icon')
const facebook = document.querySelector('#facebook-icon')
const linkedin = document.querySelector('#linkedin-icon')
const cli = document.querySelector('#terminal')

//Inner Html Content
about.addEventListener('click', ()=>{
   const aboutBox = new WinBox({
       title:'Zicodes:~About_me$',
       background: '#00aa00',
       width: '400px',
       height: '400px',
       left: 835,
       top: 30,
       mount: aboutContent,
       onfocus: function(){
           this.setBackground('#00aa00')
       },
       onblur: function(){
           this.setBackground('#111')
       }
   })
})

//For contact
contact.addEventListener('click', ()=>{
   const contactBox = new WinBox({
       title:'Zicodes:~Contact_me$',
       background: '#00aa00',
       width: '400px',
       height: '400px',
       top: 150,
       left: 650,
       mount: contactContent,
       onfocus: function(){
        this.setBackground('#00aa00')
    },
    onblur: function(){
        this.setBackground('#111')
    }
   })
})

//for twitter
twitter.addEventListener('click', ()=>{
    const twitterBox = new WinBox({
        title:'ZiaXdev:~Twitter$',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 250,
        left: 950,
        url:'https://www.twitter.com/ZiaXdev',
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#111')
        }
    })
 })

 //For Facebook
facebook.addEventListener('click', ()=>{
    const facebookBox = new WinBox({
        title:'ZiaXdev:~facebook$',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 200,
        left: 800,
        url:'https://www.facebook.com/syed.ziauddin.549221/',
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#111')
        }
    })
 })

  //For Instagram
insta.addEventListener('click', ()=>{
    const instaBox = new WinBox({
        title:'ZiaXdev:~Instagram$',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 50,
        left: 1050,
        url:'https://www.instagram.com/ziaxdev/?hl=en',
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#111')
        }
    })
 })

  //For LinkedIn
linkedin.addEventListener('click', ()=>{
    const linkedinBox = new WinBox({
        title:'ZiaXdev:~facebook$',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 350,
        left: 450,
        url:'https://www.linkedin.com/in/syed-ziauddin-183678164/',
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#111')
        }
    })
 })

//for camera
camera.addEventListener('click', ()=>{
    const cameraBox = new WinBox({
        title:'ZiaXdev:~Camera$',
        background: '#00aa00',
        width: '400px',
        height: '400px',
        top: 450,
        left: 1050,
        url:'https://selfiecam.netlify.app/',
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#111')
        }
    })
 })

 //portfolio home
home.addEventListener('click', ()=>{
    const homeBox = new WinBox({
        title:'ZiaCodes~:$|',
        background: '#00aa00',
        width: '400px',
        height: '600px',
        top: 200,
        left: 300,
        url:'https://www.syed.codes',
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#111')
        }
    })
 })
 //cli
cli.addEventListener('click', ()=>{
    const cliBox = new WinBox({
        title:'ZiaCodes~:$|',
        background: '#00aa00',
        width: '300px',
        height: '450px',
        left: 0,
        bottom:0,
        url:'https://terminal7866.000webhostapp.com/',
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#111')
        }
    })
 })


// // Search command Logic
// var input = document.getElementById("myInput");
// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("about").click();
//   }
// });

//Date and time method
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById('center').innerHTML = dateTime;


// Typewriter Js
const TypeWritter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = ''; //by default words which will be on the screen
    this.wordIndex = 0; //Index of words during the effect
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false; //Deleted words = false
}
// Type Method
TypeWritter.prototype.type = function () {
    //Current index of word
    const current = this.wordIndex % this.words.length;

    //Get full text of current word
    const fullTxt = this.words[current];

    //check if deleting
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        //Add Character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert Text Into Element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Initial TypeSpeed
    let TypeSpeed = 200;
    if (this.isDeleting) {
        TypeSpeed /= 2;
    }

    //If Word is Complete
    if (!this.isDeleting && this.txt === fullTxt) {
        //make pause at the end
        TypeSpeed = this.wait;
        //Set isDeleting = true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        //Move to next Word
        this.wordIndex++;
        //Pause before start typing
        TypeSpeed = 300;
    }


    setTimeout(() => this.type(), TypeSpeed)
}

//InIt on DOM load
document.addEventListener('DOMContentLoaded', init);

//init app
function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute('data-words')); //JSON is a method for parsing all the words
    const wait = txtElement.getAttribute('data-wait');

    //init typewriter
    new TypeWritter(txtElement, words, wait);
}
