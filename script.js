const navlinks=document.querySelector('.nav-links')
const navMenuOpen=document.querySelector('#open-menu')
const navMenuClose=document.querySelector('#close-menu')
const navMenuItem=document.querySelectorAll('.nav-links a')


navMenuOpen.addEventListener('click',()=>{
    navlinks.style.display='flex'
    navMenuOpen.style.display='none'
    navMenuClose.style.display='inline-block'
    
    navMenuItem.forEach(item => {
      item.addEventListener('click', () => {
        navlinks.style.display = 'none';          
        navMenuOpen.style.display = 'inline-block'; 
        navMenuClose.style.display = 'none';      
      });
    });
   
})


navMenuClose.addEventListener('click',()=>{
    navlinks.style.display='none'
    navMenuOpen.style.display='inline-block'
    navMenuClose.style.display='none'
})