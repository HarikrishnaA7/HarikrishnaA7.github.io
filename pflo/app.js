const http = require('http')
const port = 3000
const fs =require('fs')
const server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    fs.readFile('index.html',function(error,data){
        if(error){
            res.writeHead(404)
            res.write('error: file not found')
        }else{
            res.write(data)
        }
        res.end()
    })

})

server.listen(port,function(error){
    if(error){
        console.log('something went wrong',error)
    }else{
        console.log('server is listening on port'+port)
    }
})
// const navSlide= () =>{
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');

//     burger.addEventListener('click',() => {
//         nav.classList.toggle('nav-active');

//         //animate
//         navLinks.forEach((link ,index) => {
//             if(link.style.animation){
//                 link.style.animation ='';
//             }else{
//                 link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 +1}s`;
//             }
//         });
//         burger.classList.toggle('toggle');
//     });
// }
// navSlide();