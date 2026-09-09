const preview=document.getElementById('preview');
preview.addEventListener('load',()=>{document.getElementById('measure').disabled=false;});
document.getElementById('load').addEventListener('click',()=>{
  document.getElementById('measure').disabled=true;
  const [width,height]=document.getElementById('viewport').value.split('×').map(Number);
  preview.width=width;preview.height=height;preview.src=new URL(document.getElementById('page').value,location.origin).href;
  document.getElementById('report').textContent='';
});
document.getElementById('measure').addEventListener('click',async()=>{
  const doc=preview.contentDocument,win=preview.contentWindow;
  if(!doc){document.getElementById('report').textContent='Página indisponível neste ambiente de teste.';return;}
  await doc.fonts.ready;
  const over=[...doc.querySelectorAll('body *')].filter(e=>{
    const r=e.getBoundingClientRect();return r.width&&win.getComputedStyle(e).position!=='fixed'&&(r.right>doc.documentElement.clientWidth+1||r.left< -1)&&!e.closest('.skip-link');
  }).map(e=>e.tagName+'.'+e.className);
  const imgs=[...doc.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.getAttribute('src'));
  const deferred=[...doc.images].filter(i=>!i.complete).map(i=>i.getAttribute('src'));
  document.getElementById('report').textContent=JSON.stringify({width:win.innerWidth,height:win.innerHeight,clientWidth:doc.documentElement.clientWidth,scrollWidth:doc.documentElement.scrollWidth,overflow:over,brokenImages:imgs,deferredImages:deferred,fonts:doc.fonts.status});
});
