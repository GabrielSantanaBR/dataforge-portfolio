// Served only under /__qa/ by the local development server. Never published.
const scenario=new URLSearchParams(location.search).get('scenario');
window.fetch=async (url,options)=>{
  if(url!=='https://api.web3forms.com/submit')throw new Error('Unexpected test request');
  if(scenario==='rate')return new Response(JSON.stringify({success:false}),{status:429});
  if(scenario==='error')return new Response(JSON.stringify({success:false}),{status:500});
  return new Response(JSON.stringify({success:true}),{status:200});
};
document.addEventListener('DOMContentLoaded',()=>{
  const note=document.getElementById('qa-mode');
  if(note)note.textContent='Teste local: envio externo bloqueado. Simulador carregado.';
});
