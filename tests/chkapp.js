const {chromium}=require('playwright');const fs=require('fs');const http=require('http');const path=require('path');
(async()=>{
const root=path.join(process.cwd(),'app');let cfg=null;
const srv=http.createServer((q,r)=>{let u=q.url.split('?')[0];if(u==='/')u='/index.html';
  if(u==='/config.js'){r.setHeader('content-type','text/javascript');return r.end('window.ASPIRE_FIREBASE='+JSON.stringify(cfg)+';');}
  const f=path.join(root,u);if(!fs.existsSync(f)){r.statusCode=404;return r.end();}
  r.setHeader('content-type',{'.html':'text/html','.js':'text/javascript','.png':'image/png','.webmanifest':'application/manifest+json'}[path.extname(f)]||'text/plain');r.end(fs.readFileSync(f));}).listen(0);
const url='http://127.0.0.1:'+srv.address().port+'/';
const b=await chromium.launch();const errs=[];const R=[];const ok=(n,c,x)=>R.push((c?'PASS ':'FAIL ')+n+(c?'':' -> '+JSON.stringify(x)));
const W=(p,t=200)=>p.waitForTimeout(t);
// ---------- demo mode ----------
{const ctx=await b.newContext({viewport:{width:1280,height:900},acceptDownloads:true});const p=await ctx.newPage();p.on('pageerror',e=>errs.push('demo '+e.message));
await p.goto(url);await W(p,500);
ok('demo: no login, banner',!(await p.isVisible('#auth'))&&await p.isVisible('#demo-note'));
ok('demo: dashboard',await p.textContent('#k-net')==='−₹5,628');
await p.click('.tabs a[data-v=khata]');await W(p);ok('demo: khata online',(await p.textContent('#k-diag')).includes('online')&&(await p.textContent('#k-diag')).includes('chalu'),await p.textContent('#k-diag'));
await p.click('#entry-card .seg button[data-t=party]');await p.fill('#e-name','Sharma');await p.click('#e-save');await W(p);
await p.click('#entry-card .seg button[data-t=purchase]');await p.fill('#e-product','Bag');await p.fill('#e-qty','10');await p.fill('#e-rate','100');await p.click('#e-save');await W(p);
ok('demo: owe 1050',await p.textContent('#ks-owe')==='₹1,050',await p.textContent('#ks-owe'));
const [d]=await Promise.all([p.waitForEvent('download'),p.click('#k-bkp')]);ok('demo: real file download',d.suggestedFilename().startsWith('aspire-backup-'),d.suggestedFilename());await d.saveAs('app-bkp.json');
await p.reload();await W(p,500);await p.click('.tabs a[data-v=khata]');await W(p);ok('demo: persists after reload',await p.textContent('#ks-owe')==='₹1,050');
await p.screenshot({path:'app-demo.png'});await ctx.close();}
// ---------- online mode with a stand-in Firebase ----------
cfg={apiKey:'x',projectId:'t'};
const stub=`(function(){var S=window.__fs=JSON.parse(sessionStorage.getItem('__fs')||'{}'),subs={},ds={},user=JSON.parse(sessionStorage.getItem('__u')||'null'),al=[],i=0;
function save(){sessionStorage.setItem('__fs',JSON.stringify(S))}
function fire(p){(subs[p]||[]).forEach(function(fn){fn({docs:Object.keys(S[p]||{}).map(function(id){return{id:id,data:function(){return JSON.parse(JSON.stringify(S[p][id]))}}}),metadata:{fromCache:false}})});Object.keys(ds).forEach(function(k){if(k.indexOf(p+'/')===0)ds[k].forEach(function(f){f()})})}
function col(p){return{onSnapshot:function(fn){(subs[p]=subs[p]||[]).push(fn);setTimeout(function(){fire(p)},10);return function(){}},add:function(d){var r=doc(p,'f'+(++i)+Date.now());return r.set(d).then(function(){return r})},doc:function(id){return doc(p,id||('f'+(++i)+Date.now()))}}}
function doc(p,id){return{id:id,collection:function(c){return col(p+'/'+id+'/'+c)},set:function(d){if(JSON.stringify(d)===undefined)throw 1;(S[p]=S[p]||{})[id]=JSON.parse(JSON.stringify(d));save();fire(p);return Promise.resolve()},delete:function(){if(S[p])delete S[p][id];save();fire(p);return Promise.resolve()},onSnapshot:function(fn){var f=function(){var d=(S[p]||{})[id];fn({exists:!!d,data:function(){return d},metadata:{}})};(ds[p+'/'+id]=ds[p+'/'+id]||[]).push(f);setTimeout(f,10);return function(){}}}}
function setU(u){user=u;sessionStorage.setItem('__u',JSON.stringify(u));al.forEach(function(f){f(u)})}
var auth={onAuthStateChanged:function(f){al.push(f);setTimeout(function(){f(user)},10)},signInWithEmailAndPassword:function(e,p){return p==='secret1'?(setU({uid:'u_'+e.split('@')[0],email:e}),Promise.resolve()):Promise.reject({code:'auth/invalid-credential'})},createUserWithEmailAndPassword:function(e,p){setU({uid:'u_'+e.split('@')[0],email:e});return Promise.resolve()},sendPasswordResetEmail:function(){return Promise.resolve()},signOut:function(){setU(null);return Promise.resolve()}};
window.firebase={initializeApp:function(){},auth:function(){return auth},firestore:function(){return{settings:function(){},enablePersistence:function(){return Promise.resolve()},collection:function(c){return col(c)}}}}})();`;
{const ctx=await b.newContext({viewport:{width:390,height:800}});const p=await ctx.newPage();p.on('pageerror',e=>errs.push('online '+e.message));
await ctx.route('https://www.gstatic.com/**',r=>r.fulfill({contentType:'text/javascript',body:r.request().url().includes('app-compat')?stub:''}));
await p.goto(url);await W(p,500);
ok('online: login shown, no demo banner',await p.isVisible('#auth')&&!(await p.isVisible('#demo-note')));
await p.screenshot({path:'app-login.png'});
await p.fill('#auth-email','a@x.com');await p.fill('#auth-pass','wrongpw');await p.click('#auth-go');await W(p);ok('online: wrong password msg',(await p.textContent('#auth-msg')).includes('galat'),await p.textContent('#auth-msg'));
await p.fill('#auth-pass','secret1');await p.click('#auth-go');await W(p,400);ok('online: logged in',!(await p.isVisible('#auth'))&&await p.isVisible('#app-user button'));
await p.click('.tabs a[data-v=khata]');await W(p);ok('online: khata connected',(await p.textContent('#k-diag')).includes('online ✓'),await p.textContent('#k-diag'));
await p.click('#entry-card .seg button[data-t=party]');await p.fill('#e-name','Raj');await p.click('#e-save');await W(p);
let keys=await p.evaluate(()=>Object.keys(window.__fs));ok('online: data under users/uid',keys.includes('users/u_a/parties'),keys);
// restore the demo backup = migration path
await p.click('#k-rst');await p.setInputFiles('#k-file','app-bkp.json');await W(p);await p.click('#k-ryes');await W(p,600);
ok('online: backup restore migrates data',await p.textContent('#ks-owe')==='₹1,050',await p.textContent('#ks-owe'));
// calculator numbers sync up
await p.click('.tabs a[data-v=assumptions]');await p.fill('#s-ads, #s-ad, [id^=s-ad]','12345').catch(()=>{});await W(p,3200);
ok('online: calc pushed to cloud',await p.evaluate(()=>!!(window.__fs['users/u_a/calc']||{}).main));
// second user sees nothing of first
await p.click('#app-user button');await W(p,500);ok('online: logout shows login',await p.isVisible('#auth'));
await p.click('#auth-mode');await p.fill('#auth-email','b@x.com');await p.fill('#auth-pass','secret1');await p.click('#auth-go');await W(p,400);await p.click('.tabs a[data-v=khata]');await W(p);
ok('online: other user has empty khata',await p.textContent('#ks-owe')==='₹0',await p.textContent('#ks-owe'));
ok('online: no overflow',await p.evaluate(()=>document.documentElement.scrollWidth-innerWidth)<=0);
await ctx.close();}
console.log(R.filter(r=>r.startsWith('FAIL')).join('\n')||'ALL PASS');console.log(R.length,'checks','errors',errs);await b.close();srv.close();})();
