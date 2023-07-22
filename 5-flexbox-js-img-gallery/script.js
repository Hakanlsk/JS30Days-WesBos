const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    } 
}

/* tıkladığımız panellere open clası vererek css teki flex özellikleri ile genişletiyoruz */
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

/* active classı vererek normalde translateY özelliği görünmez kıldığımız panellere
active classına yazdığımız translateY özelliğini çalıştırarak görünürüz kılıyoruz - transitation bitince çalışacak */
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));
