import { Component, ElementRef, OnInit, Renderer2, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(private ref:ElementRef, private renderer:Renderer2, private rendererFactory:RendererFactory2) { 
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  

  ngOnInit(): void { 

    if(window.innerWidth > 768) {
      if (!('requestAnimationFrame' in window)) return;
      if (/Mobile|Android/.test(navigator.userAgent)) return;

      var backgrounds:any = [];
      var backgroundToSpeed = new WeakMap;
      var parallaxBackgrounds = this.ref.nativeElement.querySelectorAll('[data-bss-scroll-zoom]');

      for (var el of parallaxBackgrounds) {
        var bg = this.renderer.createElement('div');
    
        bg.style.backgroundImage = el.style.backgroundImage;
        bg.style.backgroundSize = 'cover';
        bg.style.backgroundPosition = 'center';
        bg.style.position = 'absolute';
        bg.style.height = '100%';
        bg.style.width = '100%';
        bg.style.top = 0;
        bg.style.left = 0;
        bg.style.zIndex = 0;
        
        this.renderer.setProperty(bg,'id', 'nuevoBG');
        this.renderer.appendChild(el, bg);

        backgrounds.push(bg);
        backgroundToSpeed.set(bg, el.getAttribute('data-bss-scroll-zoom-speed') || 1);
    
        el.style.position = 'relative';
        el.style.background = 'transparent';
        el.style.overflow = 'hidden';
      }

      if (!backgrounds.length) return;
    
      var visible:any = [];
      var scheduled:any;
    
      window.addEventListener('scroll', scroll);
      window.addEventListener('resize', scroll);
    
      scroll();
    
      function scroll() {
    
        visible.length = 0;
    
        for (var i = 0; i < backgrounds.length; i++) {
          var rect = backgrounds[i].parentNode.getBoundingClientRect();
    
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            visible.push({
              rect: rect,
              node: backgrounds[i],
              speed: backgroundToSpeed.get(backgrounds[i])
            });
          }
    
        }
    
        cancelAnimationFrame(scheduled);
    
        if (visible.length) {
          scheduled = requestAnimationFrame(update);
        }
    
      }
    
      function update(){
        
        for(var i = 0; i < visible.length; i++){
          var rect = visible[i].rect;
          var node = visible[i].node;
          var speed = visible[i].speed;
          var quot = rect.top < 0 ? Math.abs(rect.top) / rect.height : 0;
          
          node.style.transform = 'scale3d('+ (1 + quot * speed) + ', ' + (1 + quot * speed) + ', 1)';
        }
    
      }
    
    }
    
  }
}
