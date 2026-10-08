
const toggle=document.querySelector('.mobile-btn');
const menu=document.querySelector('.menu');
if(toggle){
 toggle.addEventListener('click',()=>{
   menu.classList.toggle('open');
   menu.style.display=menu.classList.contains('open')?'flex':'none';
   menu.style.flexDirection='column';
   menu.style.position='absolute';
   menu.style.top='86px';
   menu.style.left='0';
   menu.style.right='0';
   menu.style.padding='25px';
   menu.style.background='#fff';
   menu.style.boxShadow='0 15px 30px rgba(0,0,0,.12)';
 });
}
