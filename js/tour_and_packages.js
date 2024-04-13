
function changeBg(num){

 const bg=document.getElementById("bg-img");
 bg.className='heading';
 if (num==1){
 bg.className='heading1';

 const b=document.getElementById("bg1");
 b.classList.add("border");
 const b1=document.getElementById("bg2");
 b1.classList.remove("border");
 const b2=document.getElementById("bg3");
 b2.classList.remove("border");
 const b3=document.getElementById("bg4");
 b3.classList.remove("border");

 }
 else if(num==2){
  bg.src='./../img/packages_img/background/bg2.jpg';
  bg.className='heading2';

  const back_img=document.getElementById("bg2");
  back_img.classList.add("border");

 const b=document.getElementById("bg1");
 b.classList.remove("border");
 
 const b2=document.getElementById("bg3");
 b2.classList.remove("border");
 const b3=document.getElementById("bg4");
 b3.classList.remove("border");
 }
 else if(num==3) {
  bg.src='./../img/packages_img/background/bg3.jpg';
  bg.className='heading3';

  const back_img=document.getElementById("bg3");
  back_img.classList.add("border");
 const b=document.getElementById("bg2");
 b.classList.remove("border");

 const b1=document.getElementById("bg1");
 b1.classList.remove("border");
 
 const b3=document.getElementById("bg4");
 b3.classList.remove("border");
}
else if (num==4){
  bg.src='./../img/packages_img/background/bg4.jpg';
  bg.className='heading4';

  const back_img=document.getElementById("bg4");
  back_img.classList.add("border");
 const b=document.getElementById("bg3");
 b.classList.remove("border");
 const b1=document.getElementById("bg2");
 b1.classList.remove("border");
 const b2=document.getElementById("bg1");
 b2.classList.remove("border");

}
}

