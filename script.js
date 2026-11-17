const A='assets/';

const archiveItems=[
 {name:'The International — Tickets', cat:'graphics', img:'ti-ticket-new.png', year:'2026'},
 {name:'Running Merch 01', cat:'apparel', img:'mystart-white-new.png', year:'2026', tagEn:'APPAREL', tagRu:'ОДЕЖДА'},
 {name:'Manhole Concept — Baikonur', cat:'objects', img:'manhole-baikonur-v38.png', year:'2026', tagEn:'OBJECT CONCEPT', tagRu:'КОНЦЕПТ ЛЮКА'},
 {name:'heronwater figurine', cat:'3d', img:'heronwater-figurine.png', year:'2026', tagEn:'FIGURINE', tagRu:'ФИГУРКА'},
 {name:'The International — Player Pass', cat:'graphics', img:'ti-pass-red.png', year:'2026', tagEn:'BADGE', tagRu:'БЕЙДЖ'},
 {name:'Running Merch 02', cat:'apparel', img:'mystart-blue-new.png', year:'2026', tagEn:'APPAREL', tagRu:'ОДЕЖДА'},
 {name:'Almaty City Stamps', cat:'graphics', img:'city-almaty-v38.png', year:'2026', tagEn:'GRAPHICS', tagRu:'ГРАФИКА'},
 {name:'depressant figurine', cat:'3d', img:'depressant-figurine.png', year:'2026', tagEn:'FIGURINE', tagRu:'ФИГУРКА'},
 {name:'Milli Mücadele Müzesi — ID Card', cat:'graphics', img:'museum-badge-v38.png', year:'2026', tagEn:'ID CARD', tagRu:'АЙДИ-КАРТА'},
 {name:'ICEWHEEL — Work Uniform', cat:'apparel', img:'ice-v31-jacket.png', year:'2026', tagEn:'UNIFORM', tagRu:'УНИФОРМА'},
 {name:'Manhole Concept — Turkistan', cat:'objects', img:'manhole-turkistan-v38.png', year:'2026', tagEn:'OBJECT CONCEPT', tagRu:'КОНЦЕПТ ЛЮКА'},
 {name:'ICEWHEEL — Utility Gloves', cat:'apparel', img:'ice-v31-gloves.png', year:'2026', tagEn:'UNIFORM', tagRu:'УНИФОРМА'},
 {name:'depressant — earth', cat:'covers', img:'depressant-earth.webp', year:'2026', tagEn:'COVER ART', tagRu:'ОБЛОЖКА'},
 {name:'xxxmanera figurine', cat:'3d', img:'xxxmanera-figurine.png', year:'2026', tagEn:'FIGURINE', tagRu:'ФИГУРКА'},
 {name:'OGBUDA figurine', cat:'3d', img:'ogbuda-figurine.png', year:'2026', tagEn:'FIGURINE', tagRu:'ФИГУРКА'},
 {name:'depressant — not fair', cat:'covers', img:'depressant-not-fair.jpg', year:'2026', tagEn:'COVER ART', tagRu:'ОБЛОЖКА'},
 {name:'The International — T-Shirt 03', cat:'apparel', img:'ti-tee-crimson.png', year:'2026', tagEn:'APPAREL', tagRu:'ОДЕЖДА'},
 {name:'depressant — rebola pro pai', cat:'covers', img:'depressant-rebola-pro-pai.jpg', year:'2026', tagEn:'COVER ART', tagRu:'ОБЛОЖКА'},
 {name:'The International — T-Shirt 02', cat:'apparel', img:'ti-polo-onyx.png', year:'2026', tagEn:'APPAREL', tagRu:'ОДЕЖДА'},
 {name:'depressant — why?', cat:'covers', img:'depressant-why.webp', year:'2026', tagEn:'COVER ART', tagRu:'ОБЛОЖКА'},
 {name:'The International — T-Shirt 01', cat:'apparel', img:'ti-tee-dragon.png', year:'2026', tagEn:'APPAREL', tagRu:'ОДЕЖДА'},
 {name:'depressant — где ты?', cat:'covers', img:'depressant-gde-ty.webp', year:'2026', tagEn:'COVER ART', tagRu:'ОБЛОЖКА'},
 {name:'heronwater — Cap', cat:'apparel', img:'heron-v32-cap.png', year:'2026', tagEn:'APPAREL', tagRu:'ОДЕЖДА'},
 {name:'heronwater — T-Shirt', cat:'apparel', img:'heron-v32-shirt.png', year:'2026', tagEn:'APPAREL', tagRu:'ОДЕЖДА'},
 {name:'heronwater — Baseball Bat', cat:'objects', img:'heron-v32-bat.png', year:'2026', tagEn:'OBJECT', tagRu:'ОБЪЕКТ'},
 {name:'heronwater — USB Piece', cat:'objects', img:'heron-v32-usb.png', year:'2026', tagEn:'OBJECT', tagRu:'ОБЪЕКТ'},
 {name:'heronwater — Notebook', cat:'objects', img:'heron-v32-notebook.png', year:'2026', tagEn:'OBJECT', tagRu:'ОБЪЕКТ'},
 {name:'ICEWHEEL — Branded Flask', cat:'objects', img:'ice-v31-object-a.png', year:'2026', tagEn:'OBJECT', tagRu:'ОБЪЕКТ'},
 {name:'ICEWHEEL — Wheel Design', cat:'objects', img:'ice-v31-object-b.png', year:'2026', tagEn:'OBJECT', tagRu:'ОБЪЕКТ'},
 {name:'ICEWHEEL — Keychain', cat:'objects', img:'ice-v31-keychain.png', year:'2026', tagEn:'ACCESSORY', tagRu:'АКСЕССУАР'},
 {name:'ICEWHEEL — Car Air Fresheners', cat:'objects', img:'ice-v31-tag.png', year:'2026', tagEn:'CAR AIR FRESHENERS', tagRu:'АВТОАРОМАТИЗАТОРЫ'},
 {name:'ICEWHEEL — Envelope', cat:'graphics', img:'ice-v31-envelope.png', year:'2026', tagEn:'STATIONERY', tagRu:'КАНЦЕЛЯРИЯ'},
 {name:'Memories — Logo', cat:'graphics', img:'memories-logo.svg', year:'2026', tagEn:'LOGO', tagRu:'ЛОГОТИП'},
 {name:'The International — Spirit Rises Banner', cat:'graphics', img:'ti-banner-spirit-rises.jpg', year:'2026', tagEn:'BANNER', tagRu:'БАННЕР'},
 {name:'The International — The World Is Watching Banner', cat:'graphics', img:'ti-banner-world-is-watching.png', year:'2026', tagEn:'BANNER', tagRu:'БАННЕР'},
 {name:'The International — The International Banner', cat:'graphics', img:'ti-banner-the-international.png', year:'2026', tagEn:'BANNER', tagRu:'БАННЕР'},
 {name:'The International — XV Banner', cat:'graphics', img:'ti-banner-xi.jpg', year:'2026', tagEn:'BANNER', tagRu:'БАННЕР'},
 {name:'The International — VIP Badge', cat:'graphics', img:'ti-badge-vip.png', year:'2026', tagEn:'BADGE', tagRu:'БЕЙДЖ'},
 {name:'The International — Staff Badge', cat:'graphics', img:'ti-badge-staff.png', year:'2026', tagEn:'BADGE', tagRu:'БЕЙДЖ'},
 {name:'Master Farm — Packaging Redesign', cat:'graphics', img:'master-farm-packaging-redesign.png', year:'2026', tagEn:'PACKAGING', tagRu:'УПАКОВКА'},
 {name:'Maretti — Packaging Redesign', cat:'graphics', img:'maretti-packaging-redesign.png', year:'2026', tagEn:'PACKAGING', tagRu:'УПАКОВКА'},
 {name:'Too Zurman — Logo', cat:'graphics', img:'too-zurman-logo.png', year:'2026', tagEn:'LOGO', tagRu:'ЛОГОТИП'},
 {name:'International Registrations — Folder', cat:'graphics', img:'irs-madrid-folder.png', year:'2026', tagEn:'STATIONERY', tagRu:'КАНЦЕЛЯРИЯ'},
 {name:'Phoenix Shop — Shopping Bags', cat:'objects', img:'phoenix-v33-bags.png', year:'2026', tagEn:'PACKAGING', tagRu:'УПАКОВКА'},
 {name:'Phoenix Shop — Delivery Packaging', cat:'objects', img:'phoenix-v33-mailer.png', year:'2026', tagEn:'PACKAGING', tagRu:'УПАКОВКА'},
 {name:'Phoenix Shop — Sticker Set', cat:'graphics', img:'phoenix-v33-stickers.png', year:'2026', tagEn:'STICKERS', tagRu:'НАКЛЕЙКИ'},
 {name:'The International — T-Shirt Packaging', cat:'objects', img:'ti-tshirt-packaging.png', year:'2026', tagEn:'PACKAGING', tagRu:'УПАКОВКА'},
 {name:'Milli Mücadele Müzesi — Shopper', cat:'objects', img:'museum-shopper.png', year:'2026', tagEn:'SHOPPER', tagRu:'ШОППЕР'},
 {name:'Milli Mücadele Müzesi — Tickets', cat:'graphics', img:'museum-ticket-v38.png', year:'2026', tagEn:'TICKETS', tagRu:'БИЛЕТЫ'},
 {name:'Milli Mücadele Müzesi — Staff Shirt', cat:'apparel', img:'museum-shirt-v38.png', year:'2026', tagEn:'STAFF SHIRT', tagRu:'СТАФФ-РУБАШКА'},
 {name:'Pattern Study 01 (Phoenix Shop)', cat:'graphics', img:'pattern-brush-frame.jpg', year:'2026', tagEn:'PATTERN', tagRu:'ПАТТЕРН'},
 {name:'Pattern Study 02 (Phoenix Shop)', cat:'graphics', img:'pattern-corner-distress.jpg', year:'2026', tagEn:'PATTERN', tagRu:'ПАТТЕРН'},
 {name:'Pattern Study 03 (Phoenix Shop)', cat:'graphics', img:'pattern-spiral.jpg', year:'2026', tagEn:'PATTERN', tagRu:'ПАТТЕРН'},
 {name:'Pattern Study 04 (Phoenix Shop)', cat:'graphics', img:'pattern-red-bars.jpg', year:'2026', tagEn:'PATTERN', tagRu:'ПАТТЕРН'},
 {name:'Phoenix Shop — Logo', cat:'graphics', img:'phoenix-logo-mark.png', year:'2026', tagEn:'LOGO', tagRu:'ЛОГОТИП'},
 {name:'ICEWHEEL — Logo', cat:'graphics', img:'icewheel-logo-mark.png', year:'2026', tagEn:'LOGO', tagRu:'ЛОГОТИП'},
 {name:'Astana City Stamps', cat:'graphics', img:'city-astana-v38.png', year:'2026', tagEn:'GRAPHICS', tagRu:'ГРАФИКА'},
 {name:'Manhole Concept — Astana', cat:'objects', img:'manhole-astana-v38.png', year:'2026', tagEn:'OBJECT CONCEPT', tagRu:'КОНЦЕПТ ЛЮКА'},
 {name:'Manhole Concept — Almaty', cat:'objects', img:'manhole-almaty-v38.png', year:'2026', tagEn:'OBJECT CONCEPT', tagRu:'КОНЦЕПТ ЛЮКА'}
];

const cases={
 phoenix:{title:'PHOENIX<br>SHOP',label:'PHOENIX SHOP',kind:'BRAND IDENTITY / RETAIL / MERCH',description:'A visual language with strong contrasts, a bold emblem and streetwear sensibility — a selected presentation of brand applications',intro:'A bold system made to leave a mark',story:'The Phoenix Shop selection explores a distinctive graphic mark, high-contrast typography and repeatable branding elements — applied across packaging, printed tape, apparel and graphic details',cover:'phoenix-cover.png',images:['phoenix-tape.webp','phoenix-bag.webp','phoenix-stickers.webp'],next:'icewheel'},
 icewheel:{title:'ICEWHEEL',label:'ICEWHEEL',kind:'IDENTITY / OBJECTS / MERCHANDISE',description:'A brand world expressed through industrial objects, fashion applications and collectible details',intro:'Identity that moves across materials',story:'From metallic wheel forms to custom product details, car air fresheners, apparel and branded accessories, ICEWHEEL uses a distinctive geometric motif across a varied family of physical objects',cover:'icewheel-cover.jpg',images:['icewheel-wheel.webp','icewheel-letter.webp','icewheel-tag.webp','icewheel-charm.webp','icewheel-jacket.webp','icewheel-gloves.webp','icewheel-flask.webp'],next:'heronwater'},
 heronwater:{title:'HOW FEELS<br>HERONWATER',label:'HOW FEELS HERONWATER',kind:'VISUAL IDENTITY / MUSIC / MERCH',description:'An expressive visual world built around handwritten lettering, contrast and music-inspired objects',intro:'A visual identity with a restless character',story:'A collection of expressive graphics and physical applications — from lettering to apparel and collectible objects, presented through the available project artwork',cover:'heronwater-cover.png',images:['heronwater-collage.webp'],next:'phoenix'}
};
const caseRU={
 phoenix:{kind:'АЙДЕНТИКА / РИТЕЙЛ / МЕРЧ',description:'Графический язык на контрастах, выразительном знаке и эстетике стритвира — подборка фирменных носителей',intro:'Айдентика, которая оставляет след',story:'Phoenix Shop объединяет выразительный фирменный знак, контрастную типографику и повторяющиеся графические элементы — от фирменной ленты и упаковки до одежды и наклеек. Здесь представлена подборка визуальных применений, а не полный отчёт о проекте'},
 icewheel:{kind:'АЙДЕНТИКА / ОБЪЕКТЫ / МЕРЧ',description:'Бренд, визуальная система которого раскрывается через индустриальные объекты, одежду и коллекционные детали',intro:'Айдентика в разных материалах',story:'Геометрический знак ICEWHEEL появляется на колесных дисках, автомобильных ароматизаторах, одежде и аксессуарах. Эта страница объединяет разработанные фирменные применения из текущей подборки'},
 heronwater:{kind:'АЙДЕНТИКА / МУЗЫКА / МЕРЧ',description:'Выразительный визуальный мир с рукописной типографикой, контрастами и предметами, связанными с музыкой',intro:'Айдентика с дерзким характером',story:'Подборка выразительной графики и фирменных носителей — от леттеринга до одежды и коллекционных объектов, собранных на основе предоставленных материалов'}
};

const archiveTitlesRU={
 'The International — Tickets':'The International — Билеты',
 'Running Merch 01':'Беговой мерч 01',
 'Manhole Concept — Baikonur':'Концепт люка — Байконур',
 'Manhole Concept — Almaty':'Концепт люка — Алматы',
 'heronwater figurine':'heronwater — Фигурка',
 'The International — Player Pass':'The International — Бейдж игрока',
 'Running Merch 02':'Беговой мерч 02',
 'Almaty City Stamps':'Алматы — Городские штампы',
 'Astana City Stamps':'Астана — Городские штампы',
 'depressant figurine':'depressant — Фигурка',
 'Milli Mücadele Müzesi — ID Card':'Milli Mücadele Müzesi — Айди-карта',
 'Milli Mücadele Müzesi — Tickets':'Milli Mücadele Müzesi — Билеты',
 'Milli Mücadele Müzesi — Staff Shirt':'Milli Mücadele Müzesi — Стафф-рубашка',
 'ICEWHEEL — Work Uniform':'ICEWHEEL — Рабочая куртка',
 'Manhole Concept — Turkistan':'Концепт люка — Туркестан',
 'Manhole Concept — Astana':'Концепт люка — Астана',
 'ICEWHEEL — Utility Gloves':'ICEWHEEL — Рабочие перчатки',
 'depressant — earth':'depressant — earth',
 'xxxmanera figurine':'xxxmanera — Фигурка',
 'OGBUDA figurine':'OGBUDA — Фигурка',
 'depressant — not fair':'depressant — not fair',
 'The International — T-Shirt 03':'The International — Футболка 03',
 'depressant — rebola pro pai':'depressant — rebola pro pai',
 'The International — T-Shirt 02':'The International — Футболка 02',
 'depressant — why?':'depressant — why?',
 'The International — T-Shirt 01':'The International — Футболка 01',
 'depressant — где ты?':'depressant — где ты?',
 'heronwater — Cap':'heronwater — Кепка',
 'heronwater — T-Shirt':'heronwater — Футболка',
 'heronwater — Baseball Bat':'heronwater — Бейсбольная бита',
 'heronwater — USB Piece':'heronwater — USB-носитель',
 'heronwater — Notebook':'heronwater — Блокнот',
 'ICEWHEEL — Branded Flask':'ICEWHEEL — Фляга',
 'ICEWHEEL — Wheel Design':'ICEWHEEL — Дизайн диска',
 'ICEWHEEL — Keychain':'ICEWHEEL — Брелок',
 'ICEWHEEL — Car Air Fresheners':'ICEWHEEL — Автомобильные ароматизаторы',
 'ICEWHEEL — Envelope':'ICEWHEEL — Конверт',
 'Memories — Logo':'Memories — Логотип',
 'The International — Spirit Rises Banner':'The International — Баннер Spirit Rises',
 'The International — The World Is Watching Banner':'The International — Баннер The World Is Watching',
 'The International — The International Banner':'The International — Баннер The International',
 'The International — XV Banner':'The International — Баннер XV',
 'The International — VIP Badge':'The International — VIP-бейдж',
 'The International — Staff Badge':'The International — Staff-бейдж',
 'Master Farm — Packaging Redesign':'Master Farm — Редизайн упаковки',
 'Maretti — Packaging Redesign':'Maretti — Редизайн упаковки',
 'Too Zurman — Logo':'TOO Зурман — Логотип',
 'International Registrations — Folder':'Международные регистрации — Папка',
 'Phoenix Shop — Shopping Bags':'Phoenix Shop — Пакеты',
 'Phoenix Shop — Delivery Packaging':'Phoenix Shop — Почтовая упаковка',
 'Phoenix Shop — Sticker Set':'Phoenix Shop — Набор наклеек',
 'The International — T-Shirt Packaging':'The International — Упаковка футболки',
 'Milli Mücadele Müzesi — Shopper':'Milli Mücadele Müzesi — Шоппер',
 'Pattern Study 01 (Phoenix Shop)':'Паттерн 01 (Phoenix Shop)',
 'Pattern Study 02 (Phoenix Shop)':'Паттерн 02 (Phoenix Shop)',
 'Pattern Study 03 (Phoenix Shop)':'Паттерн 03 (Phoenix Shop)',
 'Pattern Study 04 (Phoenix Shop)':'Паттерн 04 (Phoenix Shop)',
 'Phoenix Shop — Logo':'Phoenix Shop — Логотип',
 'ICEWHEEL — Logo':'ICEWHEEL — Логотип'
};


let currentLang='en';
let currentFilter='all',currentView='grid',archiveExpanded=false;
const copy={
 en:{empty:'No artworks in this category yet',more:'view more',less:'show less',next:'NEXT CASE',study:'CASE STUDY',project:'SELECTED PROJECT',author:'ZANGGAR AIDARKHANOV',category:{apparel:'APPAREL',graphics:'GRAPHICS',objects:'OBJECTS','3d':'3D',covers:'COVER ART'}},
 ru:{empty:'В этой категории пока нет работ',more:'смотреть ещё',less:'свернуть',next:'СЛЕДУЮЩИЙ КЕЙС',study:'ПРОЕКТ',project:'ИЗБРАННЫЙ ПРОЕКТ',author:'ЗАНГАР АЙДАРХАНОВ',category:{apparel:'ОДЕЖДА',graphics:'ГРАФИКА',objects:'ОБЪЕКТЫ','3d':'3D',covers:'ОБЛОЖКИ'}}
};
const stripDots=str=>str.replace(/\.(?=\s*(?:<|$))/g,'');
function fixRuWidows(root){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 let node;
 while((node=walker.nextNode())){
  const original=node.textContent;
  // Bind short Russian prepositions/conjunctions to the following word
  node.textContent=original.replace(/(^|[\s(«„])((?:[вксоуаяи]|на|по|от|до|из|за|со|во|ко|об|обо|под|над|без|для|при|про|не|же|бы|ли))\s+(?=[\p{L}\d])/giu,(match,prefix,word)=>prefix+word+'\u00a0');
 }
}

function translate(lang, skipCaseRender=false){
 currentLang=lang;document.documentElement.lang=lang;
 document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=el.dataset[lang]});
 document.querySelectorAll('[data-en-html]').forEach(el=>{el.innerHTML=stripDots(el.dataset[lang+'Html'])});
 document.querySelector('.lang-switch').classList.toggle('ru',lang==='ru');
 document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));
 document.title=lang==='ru'?'ЗАНГАР — Графический дизайнер':'ZANGGAR® — Graphic Designer';
 if(lang==='ru')document.querySelectorAll('[data-ru],[data-ru-html]').forEach(fixRuWidows);
 renderArchive();
 if(!skipCaseRender && document.getElementById('case-view').classList.contains('open')){const k=(location.hash||'').split('/')[1];if(cases[k])renderCase(k,false)}
 startFooterTyping();
}
document.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>translate(el.dataset.lang)));
const grid=document.getElementById('archive-grid');
const archiveFrame=document.getElementById('archive-frame');
const archiveMoreBtn=document.getElementById('archive-more');
const archiveCollapseActions=document.getElementById('archive-collapse-actions');
const archiveLessBtn=document.getElementById('archive-less');
const archiveOverlay=document.getElementById('archive-overlay');
const ITEMS_PER_SHELF=5;
let visibleShelves=1;
let activePerShelf={};
let archiveAnimationBusy=false;
const prefersReducedMotion=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function escapeHTML(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function circularOffset(slot,active,total){let offset=slot-active;const half=Math.floor(total/2);if(offset>half)offset-=total;if(offset<-half)offset+=total;return offset}
function filteredItems(){return archiveItems.filter(i=>currentFilter==='all'||i.cat===currentFilter)}
function displayTitle(i){return currentLang==='ru'?(archiveTitlesRU[i.name]||i.name):i.name}
function displayTag(i){return currentLang==='ru'?(i.tagRu||copy[currentLang].category[i.cat]):(i.tagEn||copy[currentLang].category[i.cat])}
function tileHTML(i){const title=displayTitle(i),tag=displayTag(i);return `<article class="archive-tile" role="button" tabindex="0" aria-label="${escapeHTML(title)}" data-img="${escapeHTML(i.img)}" data-name="${escapeHTML(title)}"><div class="archive-img"><img loading="lazy" src="assets/${escapeHTML(i.img)}" alt="${escapeHTML(title)}"></div><div class="archive-meta"><strong>${escapeHTML(title)}</strong><span>${escapeHTML(tag)}</span></div></article>`}
function shelfHTML(items,index){
 const active=Math.min(activePerShelf[index]??0,items.length-1);
 activePerShelf[index]=active;
 return `<section class="archive-shelf" data-shelf="${index}" aria-label="${currentLang==='ru'?'Группа проектов':'Project shelf'} ${index+1}">
 <div class="shelf-stage" role="group" aria-label="${currentLang==='ru'?'Переключение проектов':'Browse projects'}">
 ${items.map((item,slot)=>{
   const offset=circularOffset(slot,active,items.length);
   const title=displayTitle(item),tag=displayTag(item);
   return `<button type="button" class="shelf-card" data-slot="${slot}" data-offset="${offset}" aria-label="${escapeHTML(title)}" aria-current="${offset===0?'true':'false'}" tabindex="${Math.abs(offset)>2?'-1':'0'}"><span class="shelf-media"><img loading="lazy" src="assets/${escapeHTML(item.img)}" alt=""></span><span class="shelf-meta"><strong>${escapeHTML(title)}</strong><span>${escapeHTML(tag)}</span></span></button>`;
 }).join('')}</div>
 <div class="shelf-controls"><button type="button" class="shelf-nav" data-step="-1" aria-label="${currentLang==='ru'?'Предыдущий проект':'Previous project'}">←</button><span class="shelf-count">${String(active+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')}</span><button type="button" class="shelf-nav" data-step="1" aria-label="${currentLang==='ru'?'Следующий проект':'Next project'}">→</button></div>
 </section>`;
}
function getShelfGroups(){const items=filteredItems();const groups=[];for(let i=0;i<items.length;i+=ITEMS_PER_SHELF)groups.push(items.slice(i,i+ITEMS_PER_SHELF));return groups}
function sizeArchiveShelves(){
 // The cards are absolutely positioned; measure the actual card rather than
 // guessing its height from a viewport-based clamp.
 if(currentView!=='grid')return;
 grid.querySelectorAll('.archive-shelf').forEach(shelf=>{
   const stage=shelf.querySelector('.shelf-stage');
   const card=shelf.querySelector('.shelf-card[data-offset="0"]');
   if(stage&&card){
     const height=Math.ceil(card.getBoundingClientRect().height)+12;
     stage.style.setProperty('height',height+'px','important');
   }
 });
}
function renderedViewHeight(){
 if(currentView==='grid'){
   const shelves=[...grid.querySelectorAll('.archive-shelf')];
   if(!shelves.length)return grid.scrollHeight;
   const visibleIndex=Math.min(visibleShelves-1,shelves.length-1);
   const last=shelves[visibleIndex];
   const next=shelves[visibleIndex+1];
   const contentBottom=last.offsetTop+last.offsetHeight;
   if(!next)return contentBottom;
   // Show the top of the next row, without ever clipping the current row.
   const stage=next.querySelector('.shelf-stage');
   return next.offsetTop+Math.min(stage ? stage.offsetHeight*.51 : 300,380);
 }
 const tiles=[...grid.querySelectorAll('.archive-tile')];
 if(!tiles.length)return grid.scrollHeight;
 if(archiveExpanded)return grid.scrollHeight;
 const shown=Math.min(tiles.length,6);
 const last=tiles[shown-1];
 const next=tiles[shown];
 return last.offsetTop+last.offsetHeight+(next?Math.min(next.offsetHeight*.65,180):0);
}
function updateArchiveClamp(animate=true){
 sizeArchiveShelves();
 grid.querySelectorAll('.archive-shelf').forEach((shelf,i)=>{
   shelf.classList.toggle('is-preview',currentView==='grid'&&i>=visibleShelves);
 });
 const total=currentView==='grid'?getShelfGroups().length:grid.querySelectorAll('.archive-tile').length;
 const canExpand=currentView==='grid'?visibleShelves<total:!archiveExpanded&&total>6;
 const canCollapse=currentView==='grid'?visibleShelves>1:archiveExpanded&&total>6;
 archiveCollapseActions.hidden=!canCollapse;
 archiveFrame.classList.toggle('is-collapsed',canExpand);
 archiveOverlay.style.display=canExpand?'block':'none';
 const target=currentView==='grid'?renderedViewHeight():(archiveExpanded?grid.scrollHeight:renderedViewHeight());
 if(!animate||prefersReducedMotion())archiveFrame.style.transition='none';
 else archiveFrame.style.transition='max-height .82s cubic-bezier(.22,1,.36,1)';
 archiveFrame.style.maxHeight=Math.ceil(target)+'px';
 if(!animate||prefersReducedMotion())requestAnimationFrame(()=>archiveFrame.style.removeProperty('transition'));
}
function renderArchive(){
 const groups=getShelfGroups(),items=filteredItems();
 grid.classList.toggle('list',currentView==='list');
 grid.classList.toggle('shelf-mode',currentView==='grid');
 if(currentView==='grid')grid.innerHTML=groups.length?groups.map(shelfHTML).join(''):`<p>${copy[currentLang].empty}</p>`;
 else grid.innerHTML=items.length?items.map(tileHTML).join(''):`<p>${copy[currentLang].empty}</p>`;
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter===currentFilter);b.setAttribute('aria-pressed',String(b.dataset.filter===currentFilter))});
 document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===currentView);b.setAttribute('aria-pressed',String(b.dataset.view===currentView))});
 archiveMoreBtn.textContent=copy[currentLang].more;
 archiveLessBtn.textContent=copy[currentLang].less;
 requestAnimationFrame(()=>updateArchiveClamp(false));
}
function setShelfActive(shelf,index){
 const cards=[...shelf.querySelectorAll('.shelf-card')];
 if(!cards.length)return;
 const next=(index+cards.length)%cards.length;
 const rowNumber=Number(shelf.dataset.shelf);
 activePerShelf[rowNumber]=next;
 cards.forEach((card,i)=>{
   const offset=circularOffset(i,next,cards.length);
   card.dataset.offset=offset;
   card.setAttribute('aria-current',String(offset===0));
   card.tabIndex=Math.abs(offset)>2?-1:0;
 });
 shelf.querySelector('.shelf-count').textContent=`${String(next+1).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`;
}
function expandArchive(){
 if(archiveAnimationBusy)return;
 if(currentView==='grid'){
   if(visibleShelves>=getShelfGroups().length)return;
   visibleShelves++;
 }else{
   if(archiveExpanded)return;
   archiveExpanded=true;
 }
 updateArchiveClamp(true);
}
function collapseArchive(){
 if(archiveAnimationBusy)return;
 archiveAnimationBusy=true;
 if(currentView==='grid')visibleShelves=1;
 else archiveExpanded=false;
 updateArchiveClamp(true);
 const services=document.getElementById('services');
 let finished=false;
 const finish=()=>{
   if(finished)return;
   finished=true;
   archiveAnimationBusy=false;
   requestAnimationFrame(()=>{ const top = services.getBoundingClientRect().top + window.scrollY - 18; window.scrollTo({top, behavior: prefersReducedMotion() ? 'auto' : 'smooth'}); });
 };
 if(prefersReducedMotion()){
   finish();
 }else{
   const onEnd=e=>{if(e.target===archiveFrame&&e.propertyName==='max-height')finish()};
   archiveFrame.addEventListener('transitionend',onEnd,{once:true});
   setTimeout(finish,980);
 }
}
const filterBar=document.getElementById('filters');
filterBar.addEventListener('click',e=>{
 const b=e.target.closest('[data-filter]');if(!b)return;
 currentFilter=b.dataset.filter;archiveExpanded=false;visibleShelves=1;activePerShelf={};renderArchive();
});
document.querySelector('.view-switch').addEventListener('click',e=>{
 const b=e.target.closest('[data-view]');if(!b)return;
 currentView=b.dataset.view;archiveExpanded=false;visibleShelves=1;activePerShelf={};renderArchive();
});
archiveMoreBtn.addEventListener('click',expandArchive);
archiveLessBtn.addEventListener('click',collapseArchive);
window.addEventListener('resize',()=>requestAnimationFrame(()=>updateArchiveClamp(false)));
if(document.fonts)document.fonts.ready.then(()=>updateArchiveClamp(false));
// A click on a side card promotes it to the centre; the centre opens the work
// Arrow keys and buttons provide an equivalent to the mouse interaction
function activateShelfCard(card){
 const shelf=card.closest('.archive-shelf');
 if(shelf.classList.contains('is-preview'))return;
 const index=Number(card.dataset.slot),active=activePerShelf[Number(shelf.dataset.shelf)];
 if(index===active){
   const item=getShelfGroups()[Number(shelf.dataset.shelf)][index];
   if(item)openLightbox('assets/'+item.img,displayTitle(item));
 }else setShelfActive(shelf,index);
}
grid.addEventListener('click',e=>{
 const nav=e.target.closest('.shelf-nav');
 if(nav){const shelf=nav.closest('.archive-shelf');if(shelf.classList.contains('is-preview'))return;setShelfActive(shelf,(activePerShelf[Number(shelf.dataset.shelf)]||0)+Number(nav.dataset.step));return}
 const card=e.target.closest('.shelf-card');if(card){activateShelfCard(card);return}
 const tile=e.target.closest('.archive-tile');if(tile)openLightbox('assets/'+tile.dataset.img,tile.dataset.name);
});
grid.addEventListener('keydown',e=>{
 const card=e.target.closest('.shelf-card');
 if(card&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){
   e.preventDefault();const shelf=card.closest('.archive-shelf');setShelfActive(shelf,(activePerShelf[Number(shelf.dataset.shelf)]||0)+(e.key==='ArrowRight'?1:-1));
   shelf.querySelector('.shelf-card[aria-current="true"]')?.focus();
 }
 if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('archive-tile')){
   e.preventDefault();openLightbox('assets/'+e.target.dataset.img,e.target.dataset.name);
 }
});
const lightbox=document.getElementById('lightbox'),lightboxImg=document.getElementById('lightbox-img');
function openLightbox(src,label){lightboxImg.src=src;lightboxImg.alt=label;document.getElementById('lightbox-caption').textContent=label;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow=document.getElementById('case-view').classList.contains('open')?'hidden':''}
document.getElementById('lightbox-close').addEventListener('click',closeLightbox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});


function renderPhoenixCase(c){
 const ru=currentLang==='ru';
 const t=(en,russian)=>ru?russian:en;
 const clean=s=>s.replace(/[.!?]+\s*$/,'');
 const local=(en,russian,tag='span',cls='')=>`<${tag} class="${cls}" data-ph-en="${en}" data-ph-ru="${russian}">${clean(t(en,russian))}</${tag}>`;
 const asset=(file,alt)=>`<img src="assets/${file}" alt="${alt}" loading="lazy" decoding="async">`;
 const header=(en,rus,textEn,textRu)=>`<div class="ph29-caption">${local(en,rus,'h2','ph29-hand')}${local(textEn,textRu,'p')}</div>`;
 const tags=[['BRAND IDENTITY','АЙДЕНТИКА'],['PACKAGING','УПАКОВКА'],['MERCH','МЕРЧ']];
 return `<article class="ph29" id="phoenix-case-page">
  <header class="ph29-top wrap">
   <div class="ph29-toprow">${local('selected case','избранный кейс','span','ph29-overline')}
    <div class="ph29-lang lang-switch ${ru?'ru':''}" role="group" aria-label="Language / Язык"><span class="lang-pill"></span><button type="button" data-case-lang="ru" aria-pressed="${ru}">RU</button><button type="button" data-case-lang="en" aria-pressed="${!ru}">EN</button></div></div>
   <div class="ph29-hero"><h1>PHOENIX<br>SHOP</h1><div class="ph29-tags">${tags.map(x=>local(x[0],x[1],'span')).join('')}</div></div>
  </header>
  <main class="ph29-body">
   <section class="ph29-section wrap ph29-task">${header('the brief','задача','Build a recognizable visual identity for a streetwear store that lives beyond the logo','Создать узнаваемый визуальный стиль стритвир-магазина, который работает на каждом носителе')}</section>
   <section class="ph29-section wrap ph29-logo">${header('new logo','новый логотип','A distinctive emblem paired with clean typography — the foundation of the identity','Выразительный знак и лаконичная типографика — основа фирменного стиля')}
    <div class="ph29-logo-visual">${asset('phoenix-v30-logo.png','Phoenix Shop — logo construction')}</div></section>
   <section class="ph29-section wrap ph29-product">${header('shopping bags','пакеты','Everyday packaging carries the bold visual identity into the street','Контрастные пакеты превращаются в часть фирменной коммуникации')}
    <div class="ph29-art">${asset('phoenix-v33-bags.png','Phoenix Shop — shopping bags')}</div></section>
   <section class="ph29-section wrap ph29-product">${header('delivery packaging','почтовая упаковка','A vivid brand mark makes even a delivered parcel recognizable','Фирменный знак делает узнаваемой даже посылку')}
    <div class="ph29-art">${asset('phoenix-v33-mailer.png','Phoenix Shop — delivery packaging')}</div></section>
   <section class="ph29-section wrap ph29-product">${header('digital patterns','паттерны','Graphic elements create a consistent look across social content','Графические элементы объединяют визуальный язык сторис')}
    <div class="ph29-art">${asset('phoenix-v29-stories.png','Phoenix Shop — social graphics')}</div></section>
   <section class="ph29-section wrap ph29-product">${header('stickers','наклейки','Lettering and short phrases bring the brand’s character into the details','Леттеринг и короткие фразы продолжают характер бренда')}
    <div class="ph29-art">${asset('phoenix-v33-stickers.png','Phoenix Shop — stickers')}</div></section>
  </main>
  <div class="ph29-tape" role="img" aria-label="Phoenix Shop branded tape">${asset('phoenix-v29-tape.png','')}</div>
  <nav class="ph29-nav wrap" aria-label="Case navigation">
   <a href="#work">${local('back','назад')}</a><a href="#contact">${local('contact','контакт')}</a>
   <a href="#case/icewheel">${local('next case','следующий кейс')}<strong>ICEWHEEL ↗</strong></a>
  </nav>
 </article>`;
}

function renderIcewheelCase(){
 const ru=currentLang==='ru';
 const t=(en,ruText)=>ru?ruText:en;
 const local=(en,rus,tag='span',cls='')=>`<${tag} class="${cls}" data-ph-en="${en}" data-ph-ru="${rus}">${t(en,rus)}</${tag}>`;
 const img=(file,alt)=>`<img src="assets/${file}" alt="${alt}" loading="lazy" decoding="async">`;
 const caption=(en,rus,descEn,descRu)=>`<div class="ph29-caption">${local(en,rus,'h2','ph29-hand')}${local(descEn,descRu,'p')}</div>`;
 const section=(en,rus,de,dr,file,cls='')=>`<section class="ph29-section wrap ph29-product ${cls}">${caption(en,rus,de,dr)}<div class="ph29-art">${img(file,en)}</div></section>`;
 const tags=[['IDENTITY','АЙДЕНТИКА'],['OBJECTS','ОБЪЕКТЫ'],['MERCH','МЕРЧ']];
 return `<article class="ph29 ice31" id="icewheel-case-page">
 <header class="ph29-top wrap"><div class="ph29-toprow">${local('selected case','избранный кейс','span','ph29-overline')}<div class="ph29-lang lang-switch ${ru?'ru':''}" role="group" aria-label="Language / Язык"><span class="lang-pill"></span><button type="button" data-case-lang="ru" aria-pressed="${ru}">RU</button><button type="button" data-case-lang="en" aria-pressed="${!ru}">EN</button></div></div>
 <div class="ph29-hero"><h1>ICEWHEEL</h1><div class="ph29-tags">${tags.map(x=>local(x[0],x[1],'span')).join('')}</div></div></header>
 <main class="ph29-body">
 <section class="ph29-section wrap ph29-task">${caption('the brief','задача','Create a visual identity for a wheel and automotive accessories brand, connecting engineering with a distinct visual language','Создать айдентику для бренда автомобильных дисков и аксессуаров, объединив техническую эстетику и узнаваемый характер')}</section>
 <section class="ph29-section wrap ph29-logo">${caption('new logo','новый логотип','An eight-point geometric mark inspired by the structure of a wheel, paired with refined typography','Восьмилучевой геометрический знак, вдохновлённый формой колеса, в сочетании с лаконичной типографикой')}<div class="ph29-logo-visual">${img('ice-v31-logo-sketch.png','ICEWHEEL — logo construction')}</div></section>
 ${section('outerwear','верхняя одежда','A technical jacket transforms the signature geometry into a functional uniform detail','Куртка переносит геометрию бренда в функциональную одежду','ice-v31-jacket.png')}
 ${section('brand stationery','фирменные материалы','An envelope and note extend the identity into personal communication with customers','Конверт и карточка продолжают фирменный стиль в общении с покупателями','ice-v31-envelope.png')}
 ${section('work gloves','перчатки','Practical accessories carry the branded motifs and color palette','Рабочие аксессуары сохраняют узнаваемую палитру и графические элементы','ice-v31-gloves.png')}
 ${section('keychain','брелок','The emblem becomes a collectible metal object, recognizable from either side','Фирменный знак превращается в металлический брелок','ice-v31-keychain.png')}
 ${section('car air fresheners','автомобильные ароматизаторы','Hanging car air fresheners bring the geometric identity into the cabin','Подвесные ароматизаторы для автомобиля переносят фирменную геометрию в салон','ice-v31-tag.png')}
 <section class="ph29-section wrap ice31-finale">${caption('objects & details','предметы и детали','The identity also lives on physical products — one visual system across different materials','Фирменная система объединяет предметы и материалы в едином визуальном языке')}<div class="ice31-pair">${img('ice-v31-object-a.png','ICEWHEEL branded object')}${img('ice-v31-object-b.png','ICEWHEEL branded wheel design')}</div></section>
 </main>
 <nav class="ph29-nav wrap" aria-label="Case navigation"><a href="#work">${local('back','назад')}</a><a href="#contact">${local('contact','контакт')}</a><a href="#case/heronwater">${local('next case','следующий кейс')}<strong>HERONWATER ↗</strong></a></nav>
 </article>`;
}

function renderHeronwaterCase(){
 const ru=currentLang==='ru';
 const t=(en,rus)=>ru?rus:en;
 const clean=s=>s.replace(/[.!?]+\s*$/,'');
 const local=(en,rus,tag='span',cls='')=>`<${tag} class="${cls}" data-ph-en="${en}" data-ph-ru="${rus}">${clean(t(en,rus))}</${tag}>`;
 const img=(file,alt)=>`<img src="assets/${file}" alt="${alt}" loading="lazy" decoding="async">`;
 const caption=(en,rus,de,dr)=>`<div class="ph29-caption">${local(en,rus,'h2','ph29-hand')}${local(de,dr,'p')}</div>`;
 const section=(en,rus,de,dr,file)=>`<section class="ph29-section wrap ph29-product">${caption(en,rus,de,dr)}<div class="ph29-art">${img(file,en)}</div></section>`;
 const tags=[['VISUAL IDENTITY','АЙДЕНТИКА'],['MUSIC','МУЗЫКА'],['MERCH','МЕРЧ']];
 return `<article class="ph29 heron32" id="heronwater-case-page">
 <header class="ph29-top wrap"><div class="ph29-toprow">${local('selected case','избранный кейс','span','ph29-overline')}<div class="ph29-lang lang-switch ${ru?'ru':''}" role="group" aria-label="Language / Язык"><span class="lang-pill"></span><button type="button" data-case-lang="ru" aria-pressed="${ru}">RU</button><button type="button" data-case-lang="en" aria-pressed="${!ru}">EN</button></div></div>
 <div class="ph29-hero"><h1>HOW FEELS<br>HERONWATER</h1><div class="ph29-tags">${tags.map(x=>local(x[0],x[1],'span')).join('')}</div></div></header>
 <main class="ph29-body">
 <section class="ph29-section wrap ph29-task">${caption('the brief','задача','Develop a distinctive visual language for music-inspired merchandise, connecting album concepts with tangible pieces','Создать выразительную визуальную систему мерча, которая переносит идеи музыкальных альбомов в реальные предметы')}</section>
 <section class="ph29-section wrap ph29-logo">${caption('visual language','визуальный язык','Hand-drawn lettering and sharp contrasts establish the tone of the collection','Рукописный леттеринг и сильные контрасты задают характер всей коллекции')}<div class="ph29-logo-visual">${img('heron-v32-logo.png','how feels heronwater — lettering study')}</div></section>
 <section class="ph29-section wrap heron32-outfits">${caption('apparel','одежда','A cap and T-shirt bring the artist’s distinctive lettering into everyday wear','Кепка и футболка переносят фирменный леттеринг артиста на повседневную одежду')}<div class="heron32-pair">${img('heron-v32-shirt.png','Heronwater black shirt')}${img('heron-v32-cap.png','Heronwater black cap')}</div></section>
 ${section('no commercial lyrics','no commercial lyrics','The album that established Heronwater as a strong, independent artist, translated into a collectible USB piece','Альбом, который закрепил heronwater как сильного и самостоятельного артиста, представлен в формате коллекционной флешки','heron-v32-usb.png')}
 ${section('dreams money can buy','dreams money can buy','An album about ambition, pressure and confidence in one’s own image, reflected in a bold baseball bat','Альбом про амбиции, давление и уверенность в собственном образе, воплощённый в выразительной бейсбольной бите','heron-v32-bat.png')}
 ${section('odyssey minds','odyssey minds','A personal archive of the artist’s thoughts, sketches and inner state — expressed as a notebook','Личный архив мыслей, набросков и внутреннего состояния артиста, воплощённый в блокноте','heron-v32-notebook.png')}
 ${section('collectible figurine','коллекционная фигурка','The artist’s visual identity takes a new shape as a character with recognizable details','Визуальный образ артиста превращается в фигурку с узнаваемыми деталями','heron-v32-figurine.png')}
 </main>
 <nav class="ph29-nav wrap" aria-label="Case navigation"><a href="#work">${local('back','назад')}</a><a href="#contact">${local('contact','контакт')}</a><a href="#case/phoenix">${local('next case','следующий кейс')}<strong>PHOENIX SHOP ↗</strong></a></nav>
 </article>`;
}

const cv=document.getElementById('case-view'),caseContent=document.getElementById('case-content');
caseContent.addEventListener('click',e=>{const b=e.target.closest('[data-case-lang]');if(b){
 const lang=b.dataset.caseLang;
 if(lang===currentLang)return;
 translate(lang,true);
 const ph=caseContent.querySelector('.ph29');
 if(ph){
  ph.querySelector('.ph29-lang').classList.toggle('ru',lang==='ru');
  ph.querySelectorAll('[data-case-lang]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.caseLang===lang)));
  ph.querySelectorAll('[data-ph-en]').forEach(x=>{x.textContent=x.dataset['ph'+(lang==='ru'?'Ru':'En')].replace(/[.!?]+\s*$/,'')});
  if(lang==='ru')fixRuWidows(ph);
 }
}});
function renderCase(key,scrollToTop=true){
 const base=cases[key];if(!base)return;const c=currentLang==='ru'?{...base,...caseRU[key]}:base;
 caseContent.innerHTML=key==='phoenix'?renderPhoenixCase(c):key==='icewheel'?renderIcewheelCase():key==='heronwater'?renderHeronwaterCase():`<div class="case-hero wrap"><span>${copy[currentLang].study} / ${escapeHTML(c.kind)}</span><h1>${c.title}</h1><div class="case-hero-meta"><span>${copy[currentLang].author}<br>${copy[currentLang].project}</span><p>${escapeHTML(c.description)}</p></div></div><div class="case-cover"><img src="assets/${escapeHTML(c.cover)}" alt="${escapeHTML(c.label)} featured artwork"></div><div class="case-story wrap"><h3>${escapeHTML(c.intro)}</h3><p>${escapeHTML(c.story)}</p></div><div class="case-gallery wrap">${c.images.map((f,j)=>`<img src="assets/${escapeHTML(f)}" alt="${escapeHTML(c.label)} project artwork ${j+1}" loading="lazy">`).join('')}</div><a class="case-next" href="#case/${c.next}"><span>${copy[currentLang].next}</span><strong>${escapeHTML(cases[c.next].label)}</strong></a>`;
 if(currentLang==='ru')fixRuWidows(caseContent);
 cv.classList.add('open');cv.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';if(scrollToTop)cv.querySelector('.case-view-scroll').scrollTop=0;
}
function route(){
 const hash=decodeURIComponent(location.hash||'#home');
 if(hash.startsWith('#case/')){renderCase(hash.split('/')[1]);return}
 cv.classList.remove('open');cv.setAttribute('aria-hidden','true');document.body.style.overflow='';
 if(hash==='#contact'){ requestAnimationFrame(()=>scrollToContactCenter(false)); return }
 if(hash.length>1){const target=document.getElementById(hash.slice(1));if(target)requestAnimationFrame(()=>target.scrollIntoView({behavior:'smooth'}))}
}
window.addEventListener('hashchange',route);
document.getElementById('back-case').addEventListener('click',()=>{location.hash='work'});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){if(lightbox.classList.contains('open'))closeLightbox();else if(cv.classList.contains('open'))location.hash='work'}});
const progress=document.getElementById('progress');
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'}
window.addEventListener('scroll',()=>requestAnimationFrame(updateProgress),{passive:true});


function scrollToContactCenter(updateHash=true){
 const section=document.getElementById('contact');
 const main=section?.querySelector('.contact-main') || section;
 if(!main)return;
 const rect=main.getBoundingClientRect();
 const top=window.scrollY + rect.top - Math.max((window.innerHeight - rect.height)/2, 40);
 window.scrollTo({top,behavior:prefersReducedMotion()?'auto':'smooth'});
 if(updateHash){
  try{history.replaceState(null,'','#contact')}catch(e){location.hash='contact'}
 }
}

document.querySelectorAll('a[href="#contact"]').forEach(link=>{
 link.addEventListener('click',e=>{e.preventDefault();scrollToContactCenter(true)});
});

function startFooterTyping(){
 const el=document.getElementById('footer-statement');
 if(!el)return;
 if(startFooterTyping._timer)clearTimeout(startFooterTyping._timer);
 const base=(currentLang==='ru'?(el.dataset.ru||''):(el.dataset.en||'')) + '..';
 let i=0;
 const type=()=>{
  el.textContent=base.slice(0,i);
  if(i<base.length){ i++; startFooterTyping._timer=setTimeout(type, Math.round(2000/base.length)); }
  else startFooterTyping._timer=setTimeout(()=>{ i=0; type(); }, 1200);
 };
 type();
}

function fitHeroComposition(){
 const stage=document.querySelector('.hero-stage');
 const first=document.querySelector('.hero-name-first');
 const last=document.querySelector('.hero-name-last');
 const portrait=document.querySelector('.hero-portrait');
 if(!stage||!first||!last||!portrait)return;
 // Never scale up ZANGGAR: its font size comes directly from the original V35 CSS.
 first.style.removeProperty('font-size');
 last.style.removeProperty('font-size');
 portrait.style.removeProperty('height');
 const firstRange=document.createRange();
 firstRange.selectNodeContents(first.firstChild); // exclude the superscript ®
 const firstText=firstRange.getBoundingClientRect();
 const surnameRange=document.createRange();
 surnameRange.selectNodeContents(last.firstChild);
 const lastText=surnameRange.getBoundingClientRect();
 if(!firstText.width||!lastText.width)return;
 const initialSize=parseFloat(getComputedStyle(last).fontSize);
 last.style.fontSize=(initialSize*firstText.width/lastText.width).toFixed(2)+'px';
 // Position the person's BACK almost touching the actual right edge of the letters.
 const headlineRight=Math.max(firstText.right,last.getBoundingClientRect().right);
 const stageRect=stage.getBoundingClientRect();
 const left=headlineRight-stageRect.left-(window.innerWidth<=750?2:10);
 portrait.style.left=Math.round(left)+'px';
 portrait.style.right='auto';
 // Keep the portrait inside the stage without separating it from the text.
 const availableWidth=stageRect.width-left+12;
 const normalHeight=Math.min(stageRect.height*(window.innerWidth<=750?.66:.88),690);
 const portraitRatio=(portrait.naturalWidth||439)/(portrait.naturalHeight||1333);
 portrait.style.height=Math.max(100,Math.min(normalHeight,availableWidth/portraitRatio))+'px';
}
window.addEventListener('resize',()=>requestAnimationFrame(fitHeroComposition));
if(document.fonts)document.fonts.ready.then(fitHeroComposition);
const portraitImage=document.querySelector('.hero-portrait');
if(portraitImage&&!portraitImage.complete)portraitImage.addEventListener('load',fitHeroComposition,{once:true});
requestAnimationFrame(fitHeroComposition);

translate('en');route();updateProgress();startFooterTyping();
