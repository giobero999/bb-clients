function __ShowSnow(o){function n(){for(window.snowtimer&&clearTimeout(snowtimer),s=0;w>s;s++)flakes[s].hide()}var t,a,e,i,d,r,s,m=o.SnowImage,w=o.Quantity,f=$(window).width()-10,h=$(window).height();for(t=[],a=[],e=[],i=[],d=[],r=[],flakes=[],s=0;w>s;++s){t[s]=0,a[s]=Math.random()*(f-20),e[s]=Math.random()*h,i[s]=20*Math.random(),d[s]=.02+Math.random()/10,r[s]=.7+Math.random();var u=$("<div />"),p="dot"+s;u.attr("id",p),u.css({position:"absolute",zIndex:s,top:"15px",left:"15px"}),u.append("<img src='"+m+"'>"),u.appendTo("body"),flakes[s]=$("#"+p)}var c;c=function(){for(s=0;w>s;++s)e[s]+=r[s],e[s]>h-0&&(a[s]=Math.random()*(f-i[s]-10),e[s]=0,d[s]=.02+Math.random()/1e3,r[s]=.6+Math.random()),t[s]+=d[s],flakes[s].css("top",e[s]+"px"),flakes[s].css("left",a[s]+i[s]*Math.sin(t[s])+"px");snowtimer=setTimeout(c,10)},c(),o.HideSnowTime>0&&setTimeout(n,100*o.HideSnowTime)}!function(o){o.fn.snow=function(n){var t=o.extend({SnowImage:void 0,Quantity:260,HideSnowTime:0},n);return __ShowSnow(t),this}}(jQuery);