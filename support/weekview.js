

class WeekView extends HTMLDivElement {
  static gat(el, attr, def) { return el.getAttribute(attr) || el.getAttribute('data-'+attr) || def; }
  static d2s(d) { return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0')+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); }
  
  constructor() { super(); }
  
  connectedCallback() {
    const gat = WeekView.gat;
    this.kind = gat(this, 'kind', '5');
    this.st = Math.floor(gat(this,'st',9));
    this.et = Math.ceil(gat(this,'et',5));

    const shadow = this.attachShadow({mode:'open'});
    
    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        position: relative;
        height: ${4.5*(this.et-this.st)}em;
      }

      .lgutter, .rgutter {
        position: absolute;
        height: 100%;
        width: 1.5em;
      }
      .lgutter {
        left: 0;
        text-align: right;
      }
      .rgutter {
        right: 0;
        text-align: left;
      }
      .lgutter > *, .rgutter > * { position:absolute; width: 100%; }

      .events {
        position: absolute;
        left: 2em;
        right: 2em;
        height: 100%;
        background-image: repeating-linear-gradient(0deg, #0001, #0000 4.5em)
      }
      .event {
        position: absolute;
        width: calc(${100/this.kind}% - 0.8ex);
        border: 0.1ex solid black;
        margin: 0.1ex 0.4ex;
        padding: 0.2ex;
        border-radius: 0.4ex;
        background: white;
        color: black;
        overflow: scroll;
        margin: 0 !important;
      }
    `;
    shadow.append(style);
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    
    const tdivs = [document.createElement('div'), document.createElement('div')];
    for(let i=0; i<tdivs.length; i+=1) {
      const tdiv = tdivs[i];
      tdiv.classList.add(i == 0? 'lgutter' : 'rgutter')
      tdiv.setAttribute('aria-hidden', 'true');
      for(let t=Math.ceil(this.st); t<this.et; t+=1) {
        const hdiv = document.createElement('div');
        hdiv.style.top = (4.5*(t-this.st)) + 'em'
        hdiv.append((t-1)%12+1);
        tdiv.append(hdiv);
      }
    }
    this.inner = document.createElement('div');
    this.inner.classList.add('events')
    wrapper.append(tdivs[0]);
    wrapper.append(this.inner);
    wrapper.append(tdivs[1]);
    shadow.append(wrapper);
    
    this.observer = new MutationObserver(evt => this.mutated(evt))
    this.observer.observe(this, {childList:true})
  }
  
  mutated(mutations) {
    const gat = WeekView.gat;
    const d2s = WeekView.d2s;

    for(let mutation of mutations) {
      for(let added of mutation.addedNodes) {
        if (added.parentElement == this) {
          if (added.nodeName === 'DIV') {
            let dow = Number(gat(added, 'dow'));

            let st = gat(added, 'st');
            if (st) {
              st = st.replace(/:[0-9][0-9]/, e=>'.'+String(Number(e.substr(1))/60).substr(2));
              st = Number(st);
              if (st < this.st && st < 12) st += 12;
            }

            let date = gat(added, 'date');
            if (date) {
              let parsed = new Date(...(date.split(/\D+/).map((e,i)=>Number(e) - (i==1))));
              if (date.length > 10) st = parsed.getHours() + parsed.getMinutes()/60;
              dow = date.getDay();
              date = parsed;
            }
            if (!dow || !st) {
              console.warn('missing date, dow and/or st attribute',added);
              continue;
            }
            if (!date) {
              date = new Date(Date.now() + (dow-new Date().getDay())*86400000);
              date.setHours(st);
              date.setMinutes((st*60)%60);
            }
  
            const d = Number(gat(added, 'd'));
            const te = document.createElement('time');
            te.dateTime = d2s(date);
            te.append(['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][dow]);
            te.append(' '+date.toLocaleTimeString().replace(/(:\d+):.*/, '$1').replace(':00',''));
            if (d) { 
              te.append('–'+new Date(date.getTime() + d*60000).toLocaleTimeString().replace(/(:\d+):.*/, '$1').replace(':00',''));
            }
            te.style.display = 'block';
            added.insertAdjacentElement('afterbegin', te);

            added.classList.add('event')
            added.style.left = 'calc('+(this.kind == '5' ? (dow-1)*20 : dow*14.2857)+'% - 0.4ex)'
            added.style.top = (st-this.st)*4.5 + 'em'
            if (d) added.style.height = (d/60)*4.5 + 'em'
          }
          this.inner.append(added)
        }
      }
    }
  }
}
customElements.define("week-view", WeekView, { extends: "div" });
