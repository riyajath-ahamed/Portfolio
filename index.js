

let scene= document.getElementById('scene');
let parallaxInstance = new Parallax(scene);



//*************************** SWIPER ******************************//
let keys = [
    "Aboutme",
    "Skills",
    "Projects",
    "Contact",


];

let slider = new Swiper('.swiper-container', {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    mousewheel: true,
    pagination:{
        el: ".planet-links",
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + keys[index] + '</div>';
        }
    }
});



//**************************SWIPER ANIMATION ********************************//

slider.on("slideChange", function(){
    gsap.to(".slide-text span", 0.2, {
        x:"-100px"
    })
    gsap.to(".slide-number span", 0.2, {
        x:"-100px"
    })
    gsap.to(".slide-detail span", 0.5, {
        x:"-1000px"
    })
    gsap.to(".slide-detail-facts div", 0.5, {
        x:"-1000px"
    })
    gsap.to(".swiper-slide-active", 0.5, {
       scale:0.85
    })
    gsap.to(".swiper-slide .slide-img", 1, {
        rotation:20
     })
})

slider.on("slideChangeTransitionEnd", function(){
    gsap.to(".slide-text span", 0.2, {
        x:0,
        delay:0.1
    })

    gsap.to(".slide-text span", 0.2, {
        x:"100px",
        
    })

    gsap.to(".slide-number span", 0.2, {
        x:0,
        delay:0.1
    })
    gsap.to(".slide-number span", 0.2, {
        x:"100px",
        
    })

    gsap.to(".slide-detail span", 0.5, {
        x:0
    })
    gsap.to(".slide-detail-facts div", 0.5, {
        x:0
    })
    gsap.to(".swiper-slide-active", 0.5, {
       scale:1,
       ease: Power4.easeOut
    })
    gsap.to(".swiper-slide .slide-img", 1, {
        rotation:10
     })
})



const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C#', 'React Native',
    'Python', 'Java', 'Photoshop',
    'React JS', 'Node.js', 'Angular JS',
    'Illustration', 'MySQL', 'FireBase',
];

var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 250,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'normal',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;






// window.onload = function () {
//     //functions definition
  
//     //class definition
//     class segm {
//       constructor(x, y, l) {
//         this.b = Math.random()*1.9+0.1;
//         this.x0 = x;
//         this.y0 = y;
//         this.a = Math.random() * 2 * Math.PI;
//         this.x1 = this.x0 + l * Math.cos(this.a);
//         this.y1 = this.y0 + l * Math.sin(this.a);
//         this.l = l;
//       }
//       update(x, y) {
//         this.x0 = x;
//         this.y0 = y;
//         this.a = Math.atan2(this.y1 - this.y0, this.x1 - this.x0);
//         this.x1 = this.x0 + this.l * Math.cos(this.a);
//         this.y1 = this.y0 + this.l * Math.sin(this.a);
//       }
//     }
//     class rope {
//       constructor(tx, ty, l, b, slq, typ) {
//         if(typ == "l"){
//           this.res = l / 2;
//         }else{
//           this.res = l / slq;
//         }
//         this.type = typ;
//         this.l = l;
//         this.segm = [];
//         this.segm.push(new segm(tx, ty, this.l / this.res));
//         for (let i = 1; i < this.res; i++) {
//           this.segm.push(
//             new segm(this.segm[i - 1].x1, this.segm[i - 1].y1, this.l / this.res)
//           );
//         }
//         this.b = b;
//       }
//       update(t) {
//         this.segm[0].update(t.x, t.y);
//         for (let i = 1; i < this.res; i++) {
//           this.segm[i].update(this.segm[i - 1].x1, this.segm[i - 1].y1);
//         }
//       }
//       show() {
//         if(this.type == "l"){
//         c.beginPath();
//         for (let i = 0; i < this.segm.length; i++) {
//           c.lineTo(this.segm[i].x0, this.segm[i].y0);
//         }
//         c.lineTo(
//           this.segm[this.segm.length - 1].x1,
//           this.segm[this.segm.length - 1].y1
//         );
//         c.strokeStyle = "white";
//         c.lineWidth = this.b;
//         c.stroke();
  
//         c.beginPath();
//         c.arc(this.segm[0].x0, this.segm[0].y0, 1, 0, 2 * Math.PI);
//         c.fillStyle = "white";
//         c.fill();
  
//         c.beginPath();
//         c.arc(
//           this.segm[this.segm.length - 1].x1,
//           this.segm[this.segm.length - 1].y1,
//           2,
//           0,
//           2 * Math.PI
//         );
//         c.fillStyle = "white";
//         c.fill();
//         }else{
//         for (let i = 0; i < this.segm.length; i++) {
//           c.beginPath();
//           c.arc(this.segm[i].x0, this.segm[i].y0, this.segm[i].b, 0, 2*Math.PI);
//           c.fillStyle = "white";
//         c.fill();
//         }
//           c.beginPath();
//         c.arc(
//           this.segm[this.segm.length - 1].x1,
//           this.segm[this.segm.length - 1].y1,
//           2, 0, 2*Math.PI
//         );
//         c.fillStyle = "white";
//         c.fill();
//         }
//       }
//     }
  
//     //setting up canvas
//     let c = init("canvas").c,
//       canvas = init("canvas").canvas,
//       w = (canvas.width = window.innerWidth),
//       h = (canvas.height = window.innerHeight),
//       ropes = [];
  
//     //variables definition
//     let nameOfVariable = "value",
//       mouse = {},
//       last_mouse = {},
//       rl = 50,
//       randl = [],
//       target = { x: w/2, y: h/2 },
//       last_target = {},
//       t = 0,
//       q = 10,
//       da = [],
//       type = "l";
  
//     for (let i = 0; i < 100; i++) {
//       if(Math.random() > 0.25){
//           type = "l";
//         }else{
//           type = "o";
//         }
//       ropes.push(
//         new rope(
//           w / 2,
//           h / 2,
//           (Math.random() * 1 + 0.5) * 500,
//           Math.random() * 0.4 + 0.1,
//           Math.random()*15+5,
//           type
//         )
//       );
//       randl.push(Math.random() * 2 - 1);
//       da.push(0);
//     }
  
//     //place for objects in animation
//     function draw() {
      
//       if (mouse.x) {
//         target.errx = mouse.x - target.x;
//         target.erry = mouse.y - target.y;
//       } else {
//         target.errx =
//           w / 2 +
//           (h / 2 - q) *
//             Math.sqrt(2) *
//             Math.cos(t) /
//             (Math.pow(Math.sin(t), 2) + 1) -
//           target.x;
//         target.erry =
//           h / 2 +
//           (h / 2 - q) *
//             Math.sqrt(2) *
//             Math.cos(t) *
//             Math.sin(t) /
//             (Math.pow(Math.sin(t), 2) + 1) -
//           target.y;
//       }
  
//       target.x += target.errx / 10;
//       target.y += target.erry / 10;
  
//       t += 0.01;
      
//       for (let i = 0; i < ropes.length; i++) {
//         if (randl[i] > 0) {
//           da[i] += (1 - randl[i]) / 10;
//         } else {
//           da[i] += (-1 - randl[i]) / 10;
//         }
//         ropes[i].update({
//           x:
//             target.x +
//             randl[i] * rl * Math.cos((i * 2 * Math.PI) / ropes.length + da[i]),
//           y:
//             target.y +
//             randl[i] * rl * Math.sin((i * 2 * Math.PI) / ropes.length + da[i])
//         });
//         ropes[i].show();
//       }
//       last_target.x = target.x;
//       last_target.y = target.y;
//     }
  
//     //mouse position
//     canvas.addEventListener(
//       "mousemove",
//       function (e) {
//         last_mouse.x = mouse.x;
//         last_mouse.y = mouse.y;
  
//         mouse.x = e.pageX - this.offsetLeft;
//         mouse.y = e.pageY - this.offsetTop;
//       },
//       false
//     );
    
//     canvas.addEventListener("mouseleave", function(e) {
//       mouse.x = false;
//       mouse.y = false;
//     });
  
//     //animation frame
//     function loop() {
//       window.requestAnimFrame(loop);
//       c.clearRect(0, 0, w, h);
//       draw();
//     }
  
//     //window resize
//     window.addEventListener("resize", function () {
//       (w = canvas.width = window.innerWidth),
//         (h = canvas.height = window.innerHeight);
//       loop();
//     });
  
//     //animation runner
//     loop();
//     setInterval(loop, 1000 / 60);
//   };
  
