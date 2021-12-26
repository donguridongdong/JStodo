const body = document.querySelector("body");
const pictures = ["desk.jpg"];
/*const img = document.createElement("img");
img.src = pictures[Math.floor(Math.random()*pictures.length)];
body.appendChild(img); 노마드 코드, item들의 제일 밑에 사진이 추가됨.*/

body.style = `background-image: url(${pictures[Math.floor(Math.random()*pictures.length)]})`
/* background-image: url("파일이름")은 css코드로, html의 head style에서도 쓸수있으므로.
이렇게 해야  온전한 배경이미지가 됨. */