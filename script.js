// let select = (selector) => {
//     return document.querySelector(selector);
//   };
  
//   let next = select("#next");
//   let prev = select("#prev");
  
//   let tl = gsap
//     .timeline({
//       paused: true,
//       defaults: { duration: 1, scale: 0, opacity: 0, ease: "power1.in" }
//     })
  
//     .from(".b0", { scale: 1, opacity: 1 })
//     .addPause()
//     .to(".b0", { opacity: 0, xPercent: 100 })
  
//     .from(".b1", { rotation: -180, yPercent: -100,opacity: 0 })
//     .addPause()
//     .to(".b1", { opacity: 0, xPercent: 100 })
  
//     .from(".b2", { rotation: -180, yPercent: -100, opacity: 0 })
//     .addPause()
//     .to(".b2", { opacity: 0, xPercent: 100 })
  
//     .from(".b3", { rotation: -180, yPercent: -100, opacity: 0 });
//   // .to(".b3", {opacity:0})
  
//   next.addEventListener("click", () => tl.play());
//   prev.addEventListener("click", () => tl.reverse());

gsap.to(".to-left", {x: -280, duration: 10, ease: "linear", yoyo:true, repeat: -1})
gsap.to(".to-right", {x: 0, duration: 10, ease: "linear", yoyo:true, repeat: -1})


Splitting();

let select = (selector) => {
    return document.querySelector(selector);
  };
  
  let sitLeft = select("#nav > p.to-left > span:nth-child(4)");
  let sitRight = select("#nav > p.to-right > span:nth-child(2)");
  let prev = select("section#sit .back");


  let tl = gsap
    .timeline({
      paused: true,
      defaults: { duration: 1.4,transformOrigin: "50% 50%", opacity: 0, ease: "elastic(.1, 1)" }
    })

    .fromTo("section#sit", {yPercent: 50,scale: 0, opacity: 0, borderRadius: "50%"}, {yPercent: -50,scale: 1, opacity: 1, borderRadius: "0px"})
    
  
    .to(".logo", {
      color:"hsl(15, 50%, 88%)",
      opacity: 1
    }, "<.6")
    


    .fromTo("section#sit img", {duration: 5, y: -100, opacity: 0, ease: "elastic(2, .1)"}, {
        y:0, opacity:1
    }, "<.6")

    .from(".splitting .char", {
        y: 40,
        duration: 1.8,
        stagger: 0.01,
        ease: "elastic(.8, 0.0)"
      }, "<.6")


      // .to("#tracker", {
      //   background:"hsl(15, 50%, 16%)",
      //   opacity: 1
      // }, "<.6")

    sitLeft.addEventListener("click", () => tl.play());
    sitRight.addEventListener("click", () => tl.play());
    prev.addEventListener("click", () => tl.reverse());






//       document.addEventListener("click", () => {
//         tracker.classList.add("clicked");
//         setTimeout(() => {
//           tracker.classList.remove("clicked");
//         }, 640);
// });
  

