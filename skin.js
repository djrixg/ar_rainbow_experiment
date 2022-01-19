// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: skkk.ggsk
// Generated 2022-01-19T14:23:17

function pano2vrSkin(player,base) {
	player.addVariable('playback_video', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._licl=document.createElement('div');
		els=me._licl__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="LiCl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5%;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 12.5%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Lithium Chloride<br\/>(LiCl)";
		el.appendChild(els);
		me._licl.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._licl.onclick=function (e) {
			me._timer_1.ggTimeout=Number("0") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") - 100);
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") + 3);
			player.setVariableValue('playback_video', true);
			me._timer_1.ggTimeout=Number("12.5") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
		}
		me._licl.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((107-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._licl);
		el=me._srcl=document.createElement('div');
		els=me._srcl__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="SrCl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5%;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Strontium Chloride<br\/>(SrCl)";
		el.appendChild(els);
		me._srcl.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._srcl.onclick=function (e) {
			me._timer_1.ggTimeout=Number("0") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") - 100);
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") + 16);
			player.setVariableValue('playback_video', true);
			me._timer_1.ggTimeout=Number("17") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
		}
		me._srcl.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((107-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._srcl);
		el=me._cacl=document.createElement('div');
		els=me._cacl__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="CaCl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5%;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 37.5%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Calcium Chloride<br\/>(CaCl)";
		el.appendChild(els);
		me._cacl.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cacl.onclick=function (e) {
			me._timer_1.ggTimeout=Number("0") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") - 100);
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") + 32);
			player.setVariableValue('playback_video', true);
			me._timer_1.ggTimeout=Number("13.5") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
		}
		me._cacl.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((107-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._cacl);
		el=me._nacl=document.createElement('div');
		els=me._nacl__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="NaCl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5%;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 50%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Sodium Chloride<br\/>(NaCl)";
		el.appendChild(els);
		me._nacl.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._nacl.onclick=function (e) {
			me._timer_1.ggTimeout=Number("0") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") - 100);
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") + 44.5);
			player.setVariableValue('playback_video', true);
			me._timer_1.ggTimeout=Number("13") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
		}
		me._nacl.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((107-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._nacl);
		el=me._cucl=document.createElement('div');
		els=me._cucl__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="CuCl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5%;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 62.5%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Copper II Chloride<br\/>(CuCl)";
		el.appendChild(els);
		me._cucl.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cucl.onclick=function (e) {
			me._timer_1.ggTimeout=Number("0") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") - 100);
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") + 56.5);
			player.setVariableValue('playback_video', true);
			me._timer_1.ggTimeout=Number("13") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
		}
		me._cucl.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((107-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._cucl);
		el=me._bacl=document.createElement('div');
		els=me._bacl__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="BaCl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5%;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 75%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Barium Chloride<br\/>(BaCl)";
		el.appendChild(els);
		me._bacl.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._bacl.onclick=function (e) {
			me._timer_1.ggTimeout=Number("0") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") - 100);
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") + 69);
			player.setVariableValue('playback_video', true);
			me._timer_1.ggTimeout=Number("14") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
		}
		me._bacl.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((107-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._bacl);
		el=me._kcl=document.createElement('div');
		els=me._kcl__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="KCl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5%;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 87.5%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 105px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 11px;';
		hs+=cssPrefix + 'border-radius: 11px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Potassium Chloride<br\/>(KCl)";
		el.appendChild(els);
		me._kcl.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._kcl.onclick=function (e) {
			me._timer_1.ggTimeout=Number("0") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") - 100);
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") + 82);
			player.setVariableValue('playback_video', true);
			me._timer_1.ggTimeout=Number("13") * 1000.0;
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
		}
		me._kcl.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((107-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._kcl);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 99px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_1);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMT'+
			'MwIDEzMDsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTEwMy41LDU5LjRjLTEuOS0xLjktNC45LTMuOC04LjYtNS40Yy00LjEtMS44LTkuMi0zLjItMTQuOS00LjFjMS4yLDMuNiwyLjMsNy41LDMuMSwxMS42YzEuMSw1LjYsMS42LDExLDEuNywxNS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC41LDAuMS0wLjksMC4yLTEuNCwwLjNjLTEsMC4yLTIsMC40LTMuMSwwLjZjMC0wLjEsMC0wLjMsMC0wLjRjMC00LjgtMC41LTEwLjEtMS42LTE1LjVjLTAuOS00LjctMi4yLTkuMS0zLjctMTMuMSYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTMuMi0wLjMtNi41LTAuNS0xMC0wLjVsLTAuOS00LjVjMC4zLDAsMC42LDAsMC45LDBjMi43LDAsNS40LDAuMSw4LDAuM2MtMi4xLTQuNC00LjQtOC4xLTYuOC0xMC42Yy0xLjctMS44LTMuNC0zLTQuOC0zLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjctMC4zLTEuMy0wLjQtMS45LTAuNWw2LjksMzQuOWwyLjksMTQuN2MtMC45LDAtMS44LDAuMS0yLjcsMC4xbC0yLjgtMTQuMmwtNi45LTM0LjljLTAuNiwwLjMtMS4yLDAuNy0xLjgsMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMSwxLTEuOSwyLjYtMi43LDQuNWMtMS42LDMuOS0yLj'+
			'UsOS41LTIuNSwxNS45YzAsNC44LDAuNSwxMC4xLDEuNiwxNS41bDAsMGMwLjksNC43LDIuMiw5LjEsMy43LDEzLjFjMy4yLDAuMyw2LjUsMC41LDEwLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNy43LDAsMTQuOS0wLjksMjEuMS0yLjRjNi4yLTEuNSwxMS4zLTMuNywxNC44LTYuMWMyLjMtMS42LDMuOS0zLjQsNC43LTVjMC40LTAuOSwwLjctMS44LDAuNy0yLjhjMC0wLjktMC4yLTEuOC0wLjctMi44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxMDUuMSw2MS4zLDEwNC40LDYwLjMsMTAzLjUsNTkuNHogTTUxLjYsNDkuNmMwLjEtMS42LDAuMi0zLjEsMC40LTQuNmMxLjktMC4yLDMu'+
			'OC0wLjQsNS44LTAuNmwwLjksNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M1Ni4yLDQ5LjEsNTMuOCw0OS4zLDUxLjYsNDkuNnoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xQzEyMS4xLDM0LDk2LDguOSw2NSw4Ljl6IE0xMDYuNyw3My44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi41LDIuNS01LjksNC42LTEwLDYuNGMtOC4yLDMuNS0xOS40LDUuNi0zMS42LDUuNmMtMi43LDAtNS40LTAuMS04LTAuM2MyLjEsNC40LDQuNCw4LjEsNi'+
			'44LDEwLjZjMS43LDEuOCwzLjQsMyw0LjgsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjcsMC4zLDEuNCwwLjQsMiwwLjVsLTIuNS0xMi42YzAuOSwwLDEuOC0wLjEsMi43LTAuMWwyLjQsMTIuMmMwLjYtMC4zLDEuMi0wLjcsMS44LTEuM2MxLTEsMS45LTIuNiwyLjctNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjgtMiwxLjQtNC40LDEuOS03LjJjMS0wLjEsMi0wLjMsMy0wLjVjMC42LTAuMSwxLjEtMC4yLDEuNi0wLjNjLTAuMywyLjEtMC42LDQuMS0xLjEsNS45Yy0xLjEsNC0yLjYsNy4zLTQuOSw5LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjUsMS42LTMuNCwy'+
			'LjctNS41LDMuMWwwLDBjLTAuNiwwLjEtMS4yLDAuMi0xLjgsMC4yYy0xLjQsMC0yLjgtMC4zLTQuMS0wLjhjLTEuMy0wLjUtMi42LTEuMy0zLjgtMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi40LTEuOS00LjctNC41LTYuNy03LjhjLTEuNy0yLjYtMy4yLTUuNi00LjYtOC45Yy0zLjItMC40LTYuMi0xLTktMS43Yy02LjYtMS42LTEyLjItMy45LTE2LjMtNi44Yy0yLjgtMS45LTQuOS00LjItNi4yLTYuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNy0xLjUtMS4xLTMuMS0xLjEtNC43YzAtMS42LDAuNC0zLjIsMS4xLTQuN2MwLjctMS41LDEuNy0yLjgsMy00LjFjMi41LTIuNS'+
			'w1LjktNC42LDEwLTYuNGMzLjEtMS4zLDYuNS0yLjQsMTAuMy0zLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEsMS41LTAuMiwzLjEtMC4yLDQuN2MtNiwxLjUtMTEsMy42LTE0LjQsNmMtMi4zLDEuNi0zLjksMy40LTQuNyw1Yy0wLjQsMC45LTAuNywxLjgtMC43LDIuOGgwYzAsMC45LDAuMiwxLjgsMC43LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41LDAuOSwxLjEsMS45LDIuMSwyLjljMS45LDEuOSw0LjksMy44LDguNiw1LjRjNC4xLDEuOCw5LjIsMy4yLDE0LjksNC4xYy0xLjItMy42LTIuMy03LjUtMy4xLTExLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjEt'+
			'NS43LTEuNy0xMS4zLTEuNy0xNi40YzAtNS4xLDAuNS05LjgsMS42LTEzLjhjMS4xLTQsMi42LTcuMyw0LjktOS43YzEuNS0xLjYsMy40LTIuNyw1LjUtMy4xdjBjMC42LTAuMSwxLjItMC4yLDEuOC0wLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNCwwLDIuOCwwLjMsNC4xLDAuOGMxLjMsMC41LDIuNiwxLjMsMy44LDIuM2MyLjQsMS45LDQuNyw0LjUsNi43LDcuOGMxLjcsMi42LDMuMiw1LjYsNC42LDguOWMzLjIsMC40LDYuMiwxLDksMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjYsMS42LDEyLjIsMy45LDE2LjMsNi44YzIuOCwxLjksNC45LDQuMiw2LjEsNi43YzAuNywxLj'+
			'UsMS4xLDMuMSwxLjEsNC43YzAsMS42LTAuNCwzLjItMS4xLDQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTA4LjksNzEuMiwxMDcuOSw3Mi42LDEwNi43LDczLjh6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNTIsNDVjLTAuMiwxLjQtMC4zLDMtMC40LDQuNmMyLjMtMC4zLDQuNi0wLjYsNy0wLjdsLTAuOS00LjVDNTUuOCw0NC42LDUzLjgsNDQuOCw1Miw0NXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwOS42LDYwLjNjLTEuMi0yLjYtMy40LTQuOC02LjEtNi43Yy00LjEtMi45LTkuNy01LjItMTYuMy02LjhjLTIuOC0wLjctNS45LTEu'+
			'Mi05LTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuNC0zLjMtMi45LTYuMy00LjYtOC45Yy0yLjEtMy4yLTQuMy01LjktNi43LTcuOGMtMS4yLTEtMi41LTEuNy0zLjgtMi4zYy0xLjMtMC41LTIuNy0wLjgtNC4xLTAuOGMtMC42LDAtMS4yLDAuMS0xLjgsMC4ydjAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjEsMC40LTQsMS42LTUuNSwzLjFjLTIuMywyLjQtMy44LDUuNy00LjksOS43Yy0xLjEsNC0xLjYsOC43LTEuNiwxMy44YzAsNS4xLDAuNSwxMC43LDEuNywxNi40YzAuOCw0LjEsMS45LDgsMy4xLDExLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LjctMC45LTEwLj'+
			'gtMi4zLTE0LjktNC4xYy0zLjctMS42LTYuNy0zLjUtOC42LTUuNGMtMS0xLTEuNy0xLjktMi4xLTIuOWMtMC40LTAuOS0wLjctMS44LTAuNy0yLjhoMGMwLTAuOSwwLjItMS44LDAuNy0yLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOC0xLjYsMi4zLTMuNCw0LjctNWMzLjQtMi40LDguNC00LjUsMTQuNC02YzAtMS42LDAuMS0zLjIsMC4yLTQuN2MtMy44LDAuOS03LjIsMi0xMC4zLDMuM2MtNC4xLDEuOC03LjUsMy45LTEwLDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMiwxLjMtMi4zLDIuNi0zLDQuMWMtMC43LDEuNS0xLjEsMy4xLTEuMSw0LjdjMCwxLjYsMC40LDMuMiwx'+
			'LjEsNC43YzEuMiwyLjYsMy40LDQuOCw2LjIsNi43YzQuMSwyLjksOS43LDUuMiwxNi4zLDYuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi44LDAuNyw1LjksMS4zLDksMS43YzEuNCwzLjMsMi45LDYuMyw0LjYsOC45YzIuMSwzLjIsNC4zLDUuOSw2LjcsNy44YzEuMiwxLDIuNSwxLjcsMy44LDIuM2MxLjMsMC41LDIuNywwLjgsNC4xLDAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42LDAsMS4yLTAuMSwxLjgtMC4ybDAsMGMyLjEtMC40LDQtMS42LDUuNS0zLjFjMi4zLTIuNCwzLjgtNS43LDQuOS05LjdjMC41LTEuOCwwLjktMy44LDEuMS01LjljLTAuNSwwLjEtMS4xLDAuMi0xLj'+
			'YsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMSwwLjItMiwwLjMtMywwLjVjLTAuNCwyLjctMS4xLDUuMi0xLjksNy4yYy0wLjgsMi0xLjcsMy41LTIuNyw0LjVjLTAuNiwwLjYtMS4yLDEtMS44LDEuM2wtMi40LTEyLjJjLTAuOSwwLTEuOCwwLjEtMi43LDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMi41LDEyLjZjLTAuNiwwLTEuMy0wLjItMi0wLjVjLTEuNS0wLjYtMy4yLTEuOC00LjgtMy42Yy0yLjQtMi41LTQuNy02LjEtNi44LTEwLjZjMi42LDAuMiw1LjMsMC4zLDgsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxMi4zLDAsMjMuNC0yLjEsMzEuNi01LjZjNC4xLTEu'+
			'OCw3LjUtMy45LDEwLTYuNGMxLjItMS4zLDIuMy0yLjYsMy00LjFjMC43LTEuNSwxLjEtMy4xLDEuMS00LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzExMC44LDYzLjQsMTEwLjQsNjEuOCwxMDkuNiw2MC4zeiBNMTA1LjYsNjcuOGMtMC44LDEuNi0yLjMsMy40LTQuNyw1Yy0zLjUsMi41LTguNiw0LjYtMTQuOCw2LjFjLTYuMiwxLjUtMTMuNCwyLjQtMjEuMSwyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjQsMC02LjgtMC4yLTEwLTAuNWMtMS41LTQtMi44LTguNC0zLjctMTMuMWwwLDBjLTEuMS01LjUtMS42LTEwLjctMS42LTE1LjVjMC02LjQsMC45LTEyLDIuNS0xNS45YzAuOC'+
			'0yLDEuNy0zLjUsMi43LTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42LTAuNiwxLjItMS4xLDEuOC0xLjRsNi45LDM0LjlsMi44LDE0LjJjMC45LDAsMS44LDAsMi43LTAuMWwtMi45LTE0LjdsLTYuOS0zNC45YzAuNiwwLDEuMywwLjIsMS45LDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41LDAuNiwzLjIsMS44LDQuOCwzLjZjMi40LDIuNSw0LjcsNi4xLDYuOCwxMC42Yy0yLjYtMC4yLTUuMy0wLjMtOC0wLjNjLTAuMywwLTAuNiwwLTAuOSwwbDAuOSw0LjVjMy40LDAsNi44LDAuMiwxMCwwLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNSw0LDIuOCw4LjQsMy43LDEz'+
			'LjFjMS4xLDUuNSwxLjYsMTAuNywxLjYsMTUuNWMwLDAuMiwwLDAuMywwLDAuNGMxLjEtMC4yLDIuMS0wLjQsMy4xLTAuNmMwLjUtMC4xLDAuOS0wLjIsMS40LTAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC01LTAuNi0xMC40LTEuNy0xNS45Yy0wLjgtNC4xLTEuOS04LTMuMS0xMS42YzUuNywwLjksMTAuNywyLjMsMTQuOSw0LjFjMy43LDEuNiw2LjcsMy41LDguNiw1LjRjMSwxLDEuNywxLjksMi4xLDIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAuOSwwLjcsMS44LDAuNywyLjhDMTA2LjIsNjUuOSwxMDYsNjYuOCwxMDUuNiw2Ny44eiIvPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._gyro_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMT'+
			'MwIDEzMDsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTEwNy44LDU4LjdjLTIuMS0yLjEtNS40LTQuMi05LjYtNmMtNC42LTItMTAuMi0zLjUtMTYuNS00LjVjMS40LDQsMi41LDguMywzLjQsMTIuOGMxLjIsNi4yLDEuOCwxMi4yLDEuOSwxNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC41LDAuMS0xLDAuMi0xLjYsMC4zYy0xLjEsMC4yLTIuMywwLjQtMy40LDAuNmMwLTAuMiwwLTAuMywwLTAuNWMwLTUuMy0wLjYtMTEuMi0xLjgtMTcuM2MtMS01LjItMi40LTEwLjEtNC4xLTE0LjUmI3hk'+
			'OyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjYtMC40LTcuMy0wLjYtMTEuMS0wLjZsLTEtNWMwLjMsMCwwLjcsMCwxLDBjMywwLDYsMC4xLDguOSwwLjRjLTIuMy00LjktNC45LTktNy41LTExLjdjLTEuOS0yLTMuNy0zLjMtNS40LTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjgtMC4zLTEuNS0wLjUtMi4yLTAuNWw3LjcsMzguOEw2OS43LDgxYy0xLDAtMiwwLjEtMywwLjFsLTMuMS0xNS44bC03LjctMzguN2MtMC43LDAuMy0xLjMsMC44LTIsMS41Yy0xLjEsMS4yLTIuMiwyLjktMyw1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M0OS4xLDM3LjUsNDgsNDMuNiw0OCw1MC44YzAsNS4zLD'+
			'AuNiwxMS4yLDEuOCwxNy4ybDAsMGMxLDUuMiwyLjQsMTAuMSw0LjEsMTQuNWMzLjYsMC40LDcuMywwLjYsMTEuMSwwLjZjOC42LDAsMTYuNi0xLDIzLjUtMi43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjktMS43LDEyLjYtNC4xLDE2LjQtNi44YzIuNi0xLjgsNC4zLTMuNyw1LjItNS42YzAuNS0xLDAuNy0yLDAuNy0zLjFjMC0xLTAuMi0yLTAuNy0zLjFDMTA5LjYsNjAuOSwxMDguOCw1OS44LDEwNy44LDU4Ljd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNNTAuMSw0Ny45YzAuMS0xLjgsMC4yLTMuNSwwLjQtNS4xYzIuMS0wLjMsNC4yLTAuNSw2LjQtMC42bDEsNC45QzU1LjIsNDcu'+
			'Myw1Mi42LDQ3LjYsNTAuMSw0Ny45eiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNjUsMi42QzMwLjYsMi42LDIuNiwzMC42LDIuNiw2NWMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNEMxMjcuNCwzMC42LDk5LjQsMi42LDY1LDIuNnomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE0xMTEuMyw3NC44Yy0yLjgsMi44LTYuNiw1LjEtMTEuMiw3LjFDOTEsODUuOCw3OC42LDg4LjEsNjUsODguMWMtMywwLTYtMC4xLTguOS0wLjNjMi4zLDQuOSw0LjksOSw3LjUsMTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS45LDIsMy43LDMuMy'+
			'w1LjQsNGMwLjgsMC4zLDEuNSwwLjUsMi4yLDAuNWwtMi44LTE0YzEsMCwyLTAuMSwzLTAuMWwyLjcsMTMuNWMwLjctMC4zLDEuMy0wLjgsMi0xLjVjMS4xLTEuMiwyLjItMi45LDMtNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC45LTIuMiwxLjYtNC45LDIuMS04YzEuMS0wLjIsMi4zLTAuMywzLjMtMC41YzAuNi0wLjEsMS4yLTAuMiwxLjgtMC40Yy0wLjMsMi4zLTAuNyw0LjUtMS4yLDYuNWMtMS4yLDQuNC0yLjksOC4xLTUuNCwxMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS43LDEuOC0zLjcsMy02LjEsMy41bDAsMGMtMC43LDAuMS0xLjMsMC4yLTIsMC4yYy0xLjUsMC0zLjEt'+
			'MC4zLTQuNS0wLjljLTEuNS0wLjYtMi45LTEuNC00LjItMi41Yy0yLjctMi4xLTUuMi01LTcuNS04LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgtMi45LTMuNi02LjItNS4xLTkuOWMtMy41LTAuNS02LjktMS4xLTEwLTEuOUMzMyw4My41LDI2LjgsODEsMjIuMiw3Ny43Yy0zLjEtMi4yLTUuNC00LjYtNi44LTcuNWMtMC44LTEuNi0xLjItMy40LTEuMi01LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMS44LDAuNC0zLjYsMS4yLTUuMmMwLjgtMS42LDEuOS0zLjIsMy4zLTQuNWMyLjgtMi44LDYuNi01LjEsMTEuMi03LjFjMy40LTEuNSw3LjMtMi43LDExLjUtMy43Yy0wLjEsMS'+
			'43LTAuMiwzLjQtMC4zLDUuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTYuNiwxLjctMTIuMiw0LTE2LDYuN2MtMi42LDEuOC00LjMsMy43LTUuMiw1LjZjLTAuNSwxLTAuNywyLTAuNywzLjFoMGMwLDEsMC4yLDIsMC43LDMuMWMwLjUsMSwxLjMsMi4xLDIuMywzLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuMSwyLjEsNS40LDQuMiw5LjYsNmM0LjYsMiwxMC4yLDMuNSwxNi41LDQuNWMtMS40LTQtMi41LTguMy0zLjQtMTIuOEM0My42LDYyLjYsNDMsNTYuNCw0Myw1MC44YzAtNS43LDAuNi0xMC45LDEuOC0xNS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjItNC40LDIuOS04'+
			'LjEsNS40LTEwLjhjMS43LTEuOCwzLjctMyw2LjEtMy41djBjMC43LTAuMSwxLjMtMC4yLDItMC4yYzEuNSwwLDMuMSwwLjMsNC41LDAuOWMxLjUsMC42LDIuOSwxLjQsNC4yLDIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi43LDIuMSw1LjIsNSw3LjUsOC42YzEuOCwyLjksMy42LDYuMiw1LjEsOS45YzMuNSwwLjUsNi45LDEuMSwxMCwxLjljNy4zLDEuOCwxMy41LDQuNCwxOC4xLDcuNmMzLjEsMi4yLDUuNCw0LjYsNi44LDcuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDEuNiwxLjIsMy40LDEuMiw1LjJjMCwxLjgtMC40LDMuNi0xLjIsNS4yQzExMy44LDcxLjksMTEyLjcsNz'+
			'MuNCwxMTEuMyw3NC44eiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUwLjUsNDIuOGMtMC4yLDEuNi0wLjQsMy4zLTAuNCw1LjFjMi41LTAuNCw1LjEtMC42LDcuOC0wLjhsLTEtNC45QzU0LjcsNDIuMyw1Mi42LDQyLjUsNTAuNSw0Mi44eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTE0LjYsNTkuOGMtMS40LTIuOS0zLjgtNS4zLTYuOC03LjVjLTQuNi0zLjItMTAuOC01LjgtMTguMS03LjZjLTMuMS0wLjgtNi41LTEuNC0xMC0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjUtMy43LTMuMy03LTUuMS05LjljLTIuMy0zLjYtNC44LTYu'+
			'NS03LjUtOC42Yy0xLjMtMS4xLTIuNy0xLjktNC4yLTIuNWMtMS41LTAuNi0zLTAuOS00LjUtMC45Yy0wLjcsMC0xLjQsMC4xLTIsMC4ydjAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjQsMC41LTQuNCwxLjctNi4xLDMuNWMtMi41LDIuNy00LjIsNi40LTUuNCwxMC44Yy0xLjIsNC40LTEuOCw5LjYtMS44LDE1LjNjMCw1LjcsMC42LDExLjgsMS45LDE4LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOSw0LjUsMi4xLDguOCwzLjQsMTIuOGMtNi4zLTEtMTEuOS0yLjYtMTYuNS00LjVjLTQuMi0xLjgtNy40LTMuOS05LjYtNmMtMS4xLTEuMS0xLjgtMi4xLTIuMy0zLjJjLTAuNS0xLT'+
			'AuNy0yLTAuNy0zLjFoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLDAuMi0yLDAuNy0zLjFjMC45LTEuOCwyLjYtMy44LDUuMi01LjZjMy44LTIuNyw5LjMtNSwxNS45LTYuN2MwLTEuOCwwLjEtMy41LDAuMy01LjJjLTQuMiwxLTgsMi4yLTExLjUsMy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNC42LDItOC40LDQuMy0xMS4yLDcuMWMtMS40LDEuNC0yLjUsMi45LTMuMyw0LjVjLTAuOCwxLjYtMS4yLDMuNC0xLjIsNS4yYzAsMS44LDAuNCwzLjYsMS4yLDUuMmMxLjQsMi45LDMuOCw1LjMsNi44LDcuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNC42LDMuMiwxMC44LDUuOCwx'+
			'OC4xLDcuNmMzLjEsMC44LDYuNSwxLjQsMTAsMS45YzEuNSwzLjcsMy4zLDcsNS4xLDkuOWMyLjMsMy42LDQuOCw2LjUsNy41LDguNmMxLjMsMS4xLDIuNywxLjksNC4yLDIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41LDAuNiwzLDAuOSw0LjUsMC45YzAuNywwLDEuMy0wLjEsMi0wLjJsMCwwYzIuNC0wLjUsNC40LTEuNyw2LjEtMy41YzIuNS0yLjcsNC4yLTYuNCw1LjQtMTAuOGMwLjUtMiwwLjktNC4yLDEuMi02LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjYsMC4xLTEuMiwwLjMtMS44LDAuNGMtMS4xLDAuMi0yLjIsMC40LTMuMywwLjVjLTAuNSwzLTEuMiw1LjctMi4xLD'+
			'hjLTAuOSwyLjItMS45LDMuOS0zLDVjLTAuNiwwLjctMS4zLDEuMi0yLDEuNWwtMi43LTEzLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLDAuMS0yLDAuMS0zLDAuMWwyLjgsMTRjLTAuNy0wLjEtMS40LTAuMi0yLjItMC41Yy0xLjctMC43LTMuNS0yLTUuNC00Yy0yLjYtMi44LTUuMi02LjgtNy41LTExLjdDNTksODgsNjIsODguMSw2NSw4OC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxMy42LDAsMjYtMi4zLDM1LjItNi4yYzQuNi0yLDguNC00LjMsMTEuMi03LjFjMS40LTEuNCwyLjUtMi45LDMuMy00LjVjMC44LTEuNiwxLjItMy40LDEuMi01LjImI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7QzExNS44LDYzLjIsMTE1LjQsNjEuNCwxMTQuNiw1OS44eiBNMTEwLjEsNjguMWMtMC45LDEuOC0yLjYsMy44LTUuMiw1LjZjLTMuOSwyLjctOS42LDUuMS0xNi40LDYuOGMtNi45LDEuNy0xNC45LDIuNy0yMy41LDIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTMuOCwwLTcuNS0wLjItMTEuMS0wLjZjLTEuNy00LjQtMy4xLTkuMy00LjEtMTQuNWwwLDBDNDguNiw2MS45LDQ4LDU2LjEsNDgsNTAuOGMwLTcuMSwxLTEzLjMsMi44LTE3LjdjMC45LTIuMiwxLjktMy45LDMtNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC43LTAuNywxLjMtMS4yLDItMS41bDcuNywzOC43bDMuMS'+
			'wxNS44YzEsMCwyLDAsMy0wLjFsLTMuMi0xNi4zTDU4LjgsMjZjMC43LDAuMSwxLjQsMC4yLDIuMiwwLjVjMS42LDAuNywzLjUsMiw1LjQsNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi42LDIuOCw1LjIsNi44LDcuNSwxMS43QzcxLDQyLDY4LDQxLjksNjUsNDEuOWMtMC4zLDAtMC43LDAtMSwwbDEsNWMzLjgsMCw3LjUsMC4yLDExLjEsMC42YzEuNyw0LjQsMy4xLDkuMyw0LjEsMTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS4yLDYuMSwxLjgsMTEuOSwxLjgsMTcuM2MwLDAuMiwwLDAuMywwLDAuNWMxLjItMC4yLDIuMy0wLjQsMy40LTAuNmMwLjUtMC4xLDEtMC4yLDEuNi0wLjNj'+
			'MC01LjUtMC42LTExLjUtMS45LTE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjktNC41LTIuMS04LjgtMy40LTEyLjhjNi4zLDEsMTEuOSwyLjYsMTYuNSw0LjVjNC4yLDEuOCw3LjQsMy45LDkuNiw2YzEuMSwxLjEsMS44LDIuMSwyLjMsMy4yYzAuNSwxLDAuNywyLDAuNywzLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzExMC44LDY2LDExMC42LDY3LDExMC4xLDY4LjF6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_on.style[domTransition]='opacity 0s';
				if (me._gyro_on.ggCurrentLogicStateAlpha == 0) {
					me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
					me._gyro_on.style.opacity=1;
				}
				else {
					me._gyro_on.style.visibility="hidden";
					me._gyro_on.style.opacity=0;
				}
			}
		}
		me._gyro_on.onmouseover=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
		}
		me._gyro_on.onmouseout=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMT'+
			'MwIDEzMDsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNjUsOC45QzM0LDguOSw4LjksMzQsOC45LDY1YzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjFDMTIxLjEsMzQsOTYsOC45LDY1LDguOXogTTQ2LjgsMzguNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMS00LDIuNi03LjMsNC45LTkuN2MxLjUtMS42LDMuNC0yLjcsNS41LTMuMXYwYzAuNi0wLjEsMS4yLTAuMiwxLjgtMC4yYzEuNCwwLDIuOCwwLjMsNC4xLDAuOGMxLjMsMC41LDIuNiwxLjMsMy44LDIuMyYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7YzIuNCwxLjksNC43LDQuNSw2LjcsNy44YzEuNywyLjYsMy4yLDUuNiw0LjYsOC45YzAuMSwwLDAuMiwwLDAuMywwLjFsLTQuMSw0LjFjLTMtMC4zLTYuMi0wLjUtOS41LTAuNWwtMC45LTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNiwwLDAuOSwwYzIuNywwLDUuNCwwLjEsOCwwLjNjLTIuMS00LjQtNC40LTguMS02LjgtMTAuNmMtMS43LTEuOC0zLjQtMy00LjgtMy42Yy0wLjctMC4zLTEuMy0wLjQtMS45LTAuNWw1LjcsMjguNyYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0yLjMsMi4zbC02LTMwLjRjLTAuNiwwLjMtMS4yLDAuNy0xLjgsMS40Yy0xLDEtMS45LDIuNi'+
			'0yLjcsNC41Yy0xLjYsMy45LTIuNSw5LjUtMi41LDE1LjljMCw0LjgsMC41LDEwLjEsMS42LDE1LjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDEuMywwLjUsMi41LDAuOCwzLjhsLTMuNywzLjdjLTAuNi0yLjEtMS4xLTQuMy0xLjYtNi42Yy0xLjEtNS43LTEuNy0xMS4zLTEuNy0xNi40QzQ1LjIsNDcsNDUuOCw0Mi40LDQ2LjgsMzguNHogTTU4LjYsNDguOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjQsMC4yLTQuOCwwLjQtNywwLjdjMC4xLTEuNiwwLjItMy4xLDAuNC00LjZjMS45LTAuMiwzLjgtMC40LDUuOC0wLjZMNTguNiw0OC45eiBNMjAuNCw2OS43Yy0wLjctMS41LTEuMS0zLjEt'+
			'MS4xLTQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS42LDAuNC0zLjIsMS4xLTQuN2MwLjctMS41LDEuNy0yLjgsMy00LjFjMi41LTIuNSw1LjktNC42LDEwLTYuNGMzLjEtMS4zLDYuNS0yLjQsMTAuMy0zLjNjLTAuMSwxLjUtMC4yLDMuMS0wLjIsNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYsMS41LTExLDMuNi0xNC40LDZjLTIuMywxLjYtMy45LDMuNC00LjcsNWMtMC40LDAuOS0wLjcsMS44LTAuNywyLjhoMGMwLDAuOSwwLjIsMS44LDAuNywyLjhjMC41LDAuOSwxLjEsMS45LDIuMSwyLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjksMS45LDQuOSwzLjgsOC42LDUuNGMyLjgsMS4yLDUuOS'+
			'wyLjIsOS40LDNsLTMuNywzLjdjLTUuNy0xLjYtMTAuNi0zLjctMTQuNC02LjNDMjMuOCw3NC41LDIxLjYsNzIuMywyMC40LDY5Ljd6IE0zMi44LDEwMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NkMzMy42LDEwMC4yLDMzLjIsMTAwLjMsMzIuOCwxMDAuM3ogTTc4LjcsNjIuM2MtMC4zLTEuMy0wLjUtMi41LTAuOC0zLjhs'+
			'My43LTMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwyLjEsMS4xLDQuMywxLjYsNi42YzEuMSw1LjYsMS42LDExLDEuNywxNS45Yy0wLjUsMC4xLTAuOSwwLjItMS40LDAuM2MtMSwwLjItMiwwLjQtMy4xLDAuNmMwLTAuMSwwLTAuMywwLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzgwLjMsNzMsNzkuOCw2Ny44LDc4LjcsNjIuM3ogTTY5LjMsNzkuNGMtMC45LDAtMS44LDAuMS0yLjcsMC4xbC0xLjYtOC4xbDIuMy0yLjNMNjkuMyw3OS40eiBNMTA2LjcsNzMuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjUsMi41LTUuOSw0LjYtMTAsNi40Yy04LjIsMy41LTE5LjQsNS42LTMxLjYsNS42Yy0yLj'+
			'csMC01LjQtMC4xLTgtMC4zYzIuMSw0LjQsNC40LDguMSw2LjgsMTAuNmMxLjcsMS44LDMuNCwzLDQuOCwzLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC4zLDEuNCwwLjQsMiwwLjVsLTIuNS0xMi42YzAuOSwwLDEuOC0wLjEsMi43LTAuMWwyLjQsMTIuMmMwLjYtMC4zLDEuMi0wLjcsMS44LTEuM2MxLTEsMS45LTIuNiwyLjctNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTIsMS40LTQuNCwxLjktNy4yYzEtMC4xLDItMC4zLDMtMC41YzAuNi0wLjEsMS4xLTAuMiwxLjYtMC4zYy0wLjMsMi4xLTAuNiw0LjEtMS4xLDUuOWMtMS4xLDQtMi42LDcuMy00LjksOS43JiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTtjLTEuNSwxLjYtMy40LDIuNy01LjUsMy4xbDAsMGMtMC42LDAuMS0xLjIsMC4yLTEuOCwwLjJjLTEuNCwwLTIuOC0wLjMtNC4xLTAuOGMtMS4zLTAuNS0yLjYtMS4zLTMuOC0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi40LTEuOS00LjctNC41LTYuNy03LjhjLTEuNy0yLjYtMy4yLTUuNi00LjYtOC45Yy0wLjEsMC0wLjIsMC0wLjQtMC4xbDQuMS00LjFjMywwLjMsNi4yLDAuNSw5LjUsMC41YzcuNywwLDE0LjktMC45LDIxLjEtMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNi4yLTEuNSwxMS4zLTMuNywxNC44LTYuMWMyLjMtMS42LDMuOS0zLjQsNC43LTVjMC40LTAuOSwwLjctMS44LD'+
			'AuNy0yLjhjMC0wLjktMC4yLTEuOC0wLjctMi44Yy0wLjQtMC45LTEuMS0xLjktMi4xLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjktMS45LTQuOS0zLjgtOC42LTUuNGMtMi44LTEuMi02LTIuMi05LjUtM2wzLjctMy43YzUuNywxLjYsMTAuNiwzLjcsMTQuNCw2LjNjMi44LDEuOSw0LjksNC4yLDYuMSw2LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMS41LDEuMSwzLjEsMS4xLDQuN2MwLDEuNi0wLjQsMy4yLTEuMSw0LjdDMTA4LjksNzEuMiwxMDcuOSw3Mi42LDEwNi43LDczLjh6Ii8+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01MS42LDQ5LjZjMi4zLTAuMyw0LjYt'+
			'MC42LDctMC43bC0wLjktNC41Yy0yLDAuMS0zLjksMC4zLTUuOCwwLjZDNTEuOCw0Ni41LDUxLjcsNDgsNTEuNiw0OS42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNOTkuOSwzMS44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNHMtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4ybDEuNywxLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMxMDAuNSwzMy4zLDEwMC41LDMyLjQsOTkuOSwzMS44eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIi'+
			'BkPSJNNjYuNSw3OS41YzAuOSwwLDEuOCwwLDIuNy0wLjFsLTItMTAuM2wtMi4zLDIuM0w2Ni41LDc5LjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik04My40LDc3LjdjMC41LTAuMSwwLjktMC4yLDEuNC0wLjNjMC01LTAuNi0xMC40LTEuNy0xNS45Yy0wLjQtMi4zLTEtNC41LTEuNi02LjZsLTMuNywzLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywxLjIsMC42LDIuNSwwLjgsMy44YzEuMSw1LjUsMS42LDEwLjcsMS42LDE1LjVjMCwwLjIsMCwwLjMsMCwwLjRDODEuMyw3OC4xLDgyLjQsNzcuOSw4My40LDc3Ljd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00'+
			'OC41LDc1LjJsMy43LTMuN2MtMC4zLTEuMi0wLjYtMi41LTAuOC0zLjhsMCwwYy0xLjEtNS41LTEuNi0xMC43LTEuNi0xNS41YzAtNi40LDAuOS0xMiwyLjUtMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LTIsMS43LTMuNSwyLjctNC41YzAuNi0wLjYsMS4yLTEuMSwxLjgtMS40bDYsMzAuNGwyLjMtMi4zbC01LjctMjguN2MwLjYsMCwxLjMsMC4yLDEuOSwwLjVjMS41LDAuNiwzLjIsMS44LDQuOCwzLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNCwyLjUsNC43LDYuMSw2LjgsMTAuNmMtMi42LTAuMi01LjMtMC4zLTgtMC4zYy0wLjMsMC0wLjYsMC0wLjksMGwwLjksNC41Yz'+
			'MuMywwLDYuNCwwLjIsOS41LDAuNWw0LjEtNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAtMC4yLDAtMC4zLTAuMWMtMS40LTMuMy0yLjktNi4zLTQuNi04LjljLTIuMS0zLjItNC4zLTUuOS02LjctNy44Yy0xLjItMS0yLjUtMS43LTMuOC0yLjNjLTEuMy0wLjUtMi43LTAuOC00LjEtMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC42LDAtMS4yLDAuMS0xLjgsMC4ydjBjLTIuMSwwLjQtNCwxLjYtNS41LDMuMWMtMi4zLDIuNC0zLjgsNS43LTQuOSw5LjdjLTEuMSw0LTEuNiw4LjctMS42LDEzLjhjMCw1LjEsMC41LDEwLjcsMS43LDE2LjQmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7QzQ3LjQsNzAuOCw0Ny45LDczLDQ4LjUsNzUuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0LjYsNzkuMWMtMy41LTAuOC02LjctMS44LTkuNC0zYy0zLjctMS42LTYuNy0zLjUtOC42LTUuNGMtMS0xLTEuNy0xLjktMi4xLTIuOWMtMC40LTAuOS0wLjctMS44LTAuNy0yLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aDBjMC0wLjksMC4yLTEuOCwwLjctMi44YzAuOC0xLjYsMi4zLTMuNCw0LjctNWMzLjQtMi40LDguNC00LjUsMTQuNC02YzAtMS42LDAuMS0zLjIsMC4yLTQuN2MtMy44LDAuOS03LjIsMi0xMC4zLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLT'+
			'QuMSwxLjgtNy41LDMuOS0xMCw2LjRjLTEuMiwxLjMtMi4zLDIuNi0zLDQuMWMtMC43LDEuNS0xLjEsMy4xLTEuMSw0LjdjMCwxLjYsMC40LDMuMiwxLjEsNC43YzEuMiwyLjYsMy40LDQuOCw2LjIsNi43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjcsMi42LDguNiw0LjcsMTQuNCw2LjNMNDQuNiw3OS4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTA5LjcsNjAuM2MtMS4yLTIuNi0zLjQtNC44LTYuMS02LjdjLTMuNy0yLjYtOC42LTQuNy0xNC40LTYuM2wtMy43LDMuN2MzLjUsMC44LDYuNywxLjgsOS41LDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNywxLjYsNi43'+
			'LDMuNSw4LjYsNS40YzEsMSwxLjcsMS45LDIuMSwyLjljMC40LDAuOSwwLjcsMS44LDAuNywyLjhjMCwwLjktMC4yLDEuOC0wLjcsMi44Yy0wLjgsMS42LTIuMywzLjQtNC43LDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjUsMi41LTguNiw0LjYtMTQuOCw2LjFjLTYuMiwxLjUtMTMuNCwyLjQtMjEuMSwyLjRjLTMuMywwLTYuNC0wLjItOS41LTAuNWwtNC4xLDQuMWMwLjEsMCwwLjIsMCwwLjQsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjQsMy4zLDIuOSw2LjMsNC42LDguOWMyLjEsMy4yLDQuMyw1LjksNi43LDcuOGMxLjIsMSwyLjUsMS43LDMuOCwyLjNjMS4zLDAuNSwyLj'+
			'csMC44LDQuMSwwLjhjMC42LDAsMS4yLTAuMSwxLjgtMC4ybDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi4xLTAuNCw0LTEuNiw1LjUtMy4xYzIuMy0yLjQsMy44LTUuNyw0LjktOS43YzAuNS0xLjgsMC45LTMuOCwxLjEtNS45Yy0wLjUsMC4xLTEuMSwwLjItMS42LDAuM2MtMSwwLjItMiwwLjMtMywwLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQsMi43LTEuMSw1LjItMS45LDcuMmMtMC44LDItMS43LDMuNS0yLjcsNC41Yy0wLjYsMC42LTEuMiwxLTEuOCwxLjNsLTIuNC0xMi4yYy0wLjksMC0xLjgsMC4xLTIuNywwLjFsMi41LDEyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYj'+
			'eDk7Yy0wLjYsMC0xLjMtMC4yLTItMC41Yy0xLjUtMC42LTMuMi0xLjgtNC44LTMuNmMtMi40LTIuNS00LjctNi4xLTYuOC0xMC42YzIuNiwwLjIsNS4zLDAuMyw4LDAuM2MxMi4zLDAsMjMuNC0yLjEsMzEuNi01LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzQuMS0xLjgsNy41LTMuOSwxMC02LjRjMS4yLTEuMywyLjMtMi42LDMtNC4xYzAuNy0xLjUsMS4xLTMuMSwxLjEtNC43QzExMC44LDYzLjQsMTEwLjQsNjEuOCwxMDkuNyw2MC4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMT'+
			'MwIDEzMDsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik02NSwyLjZDMzAuNiwyLjYsMi42LDMwLjYsMi42LDY1YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40QzEyNy40LDMwLjYsOTkuNSwyLjYsNjUsMi42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE00NC44LDM1LjRjMS4yLTQuNCwyLjktOC4xLDUuNC0xMC44YzEuNy0xLjgsMy43LTMsNi4xLTMuNXYw'+
			'YzAuNy0wLjEsMS4zLTAuMiwyLTAuMmMxLjUsMCwzLjEsMC4zLDQuNSwwLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjUsMC42LDIuOSwxLjQsNC4yLDIuNWMyLjcsMi4xLDUuMiw1LDcuNSw4LjZjMS44LDIuOSwzLjYsNi4yLDUuMSw5LjljMC4xLDAsMC4zLDAsMC40LDAuMWwtNC41LDQuNWMtMy40LTAuMy02LjktMC41LTEwLjUtMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTEtNWMwLjMsMCwwLjcsMCwxLDBjMywwLDYsMC4xLDguOSwwLjRjLTIuMy00LjktNC45LTktNy41LTExLjdjLTEuOS0yLTMuNy0zLjMtNS40LTRjLTAuOC0wLjMtMS41LTAuNS0yLjItMC41bDYuMywzMS44JiN4ZDsmI3hhOy'+
			'YjeDk7JiN4OTtsLTIuNiwyLjZsLTYuNy0zMy44Yy0wLjcsMC4zLTEuMywwLjgtMiwxLjVjLTEuMSwxLjItMi4yLDIuOS0zLDVDNDkuMSwzNy41LDQ4LDQzLjYsNDgsNTAuOGMwLDUuMywwLjYsMTEuMiwxLjgsMTcuMmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMS40LDAuNiwyLjgsMC45LDQuMmwtNC4xLDQuMWMtMC43LTIuNC0xLjItNC44LTEuNy03LjNDNDMuNiw2Mi42LDQzLDU2LjQsNDMsNTAuOEM0Myw0NS4xLDQzLjYsMzkuOSw0NC44LDM1LjR6IE01Ny45LDQ3LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi43LDAuMi01LjMsMC40LTcuOCwwLjhjMC4xLTEuOCwwLjItMy41LDAuNC01'+
			'LjFjMi4xLTAuMyw0LjItMC41LDYuNC0wLjZMNTcuOSw0Ny4xeiBNMTUuNCw3MC4yYy0wLjgtMS42LTEuMi0zLjQtMS4yLTUuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS44LDAuNC0zLjYsMS4yLTUuMmMwLjgtMS42LDEuOS0zLjIsMy4zLTQuNWMyLjgtMi44LDYuNi01LjEsMTEuMi03LjFjMy40LTEuNSw3LjMtMi43LDExLjUtMy43Yy0wLjEsMS43LTAuMiwzLjQtMC4zLDUuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy02LjYsMS43LTEyLjIsNC0xNiw2LjdjLTIuNiwxLjgtNC4zLDMuNy01LjIsNS42Yy0wLjUsMS0wLjcsMi0wLjcsMy4xaDBjMCwxLDAuMiwyLDAuNywzLjFjMC41LDEsMS4zLDIuMS'+
			'wyLjMsMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi4xLDIuMSw1LjQsNC4yLDkuNiw2YzMuMSwxLjMsNi42LDIuNCwxMC41LDMuM2wtNC4xLDQuMWMtNi40LTEuOC0xMS44LTQuMS0xNi03QzE5LjIsNzUuNiwxNi44LDczLjEsMTUuNCw3MC4yeiBNMjkuMywxMDQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC43LDAuNywxLjcsMCwyLjRsLTczLjMsNzMuM0Mz'+
			'MC4xLDEwNC4xLDI5LjcsMTA0LjMsMjkuMywxMDQuM3ogTTgwLjIsNjJjLTAuMy0xLjQtMC42LTIuOC0wLjktNC4ybDQuMS00LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMi40LDEuMiw0LjgsMS43LDcuM2MxLjIsNi4yLDEuOCwxMi4yLDEuOSwxNy43Yy0wLjUsMC4xLTEsMC4yLTEuNiwwLjNjLTEuMSwwLjItMi4zLDAuNC0zLjQsMC42YzAtMC4yLDAtMC4zLDAtMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDODIsNzMuOSw4MS40LDY4LjEsODAuMiw2MnogTTY5LjcsODFjLTEsMC0yLDAuMS0zLDAuMWwtMS44LTguOWwyLjYtMi42TDY5LjcsODF6IE0xMTEuMyw3NC44Yy0yLjgsMi44LTYuNiw1Lj'+
			'EtMTEuMiw3LjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M5MSw4NS44LDc4LjYsODguMSw2NSw4OC4xYy0zLDAtNi0wLjEtOC45LTAuM2MyLjMsNC45LDQuOSw5LDcuNSwxMS43YzEuOSwyLDMuNywzLjMsNS40LDRjMC44LDAuMywxLjUsMC41LDIuMiwwLjVsLTIuOC0xNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEsMCwyLTAuMSwzLTAuMWwyLjcsMTMuNWMwLjctMC4zLDEuMy0wLjgsMi0xLjVjMS4xLTEuMiwyLjItMi45LDMtNWMwLjktMi4yLDEuNi00LjksMi4xLThjMS4xLTAuMiwyLjMtMC4zLDMuMy0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYtMC4xLDEuMi0wLjIsMS44LTAuNGMtMC4zLDIuMy0w'+
			'LjcsNC41LTEuMiw2LjVjLTEuMiw0LjQtMi45LDguMS01LjQsMTAuOGMtMS43LDEuOC0zLjcsMy02LjEsMy41bDAsMGMtMC43LDAuMS0xLjMsMC4yLTIsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNSwwLTMuMS0wLjMtNC41LTAuOWMtMS41LTAuNi0yLjktMS40LTQuMi0yLjVjLTIuNy0yLjEtNS4yLTUtNy41LTguNmMtMS44LTIuOS0zLjYtNi4yLTUuMS05LjljLTAuMSwwLTAuMywwLTAuNC0wLjFsNC41LTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuNCwwLjMsNi45LDAuNSwxMC41LDAuNWM4LjYsMCwxNi42LTEsMjMuNS0yLjdjNi45LTEuNywxMi42LTQuMSwxNi40LTYuOGMyLjYtMS44LD'+
			'QuMy0zLjcsNS4yLTUuNmMwLjUtMSwwLjctMiwwLjctMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLTAuMi0yLTAuNy0zLjFjLTAuNS0xLTEuMy0yLjEtMi4zLTMuMmMtMi4xLTIuMS01LjQtNC4yLTkuNi02Yy0zLjEtMS4zLTYuNi0yLjQtMTAuNS0zLjRsNC4xLTQuMWM2LjQsMS44LDExLjgsNC4xLDE2LDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MzLjEsMi4yLDUuNCw0LjYsNi44LDcuNWMwLjgsMS42LDEuMiwzLjQsMS4yLDUuMmMwLDEuOC0wLjQsMy42LTEuMiw1LjJDMTEzLjgsNzEuOSwxMTIuNyw3My40LDExMS4zLDc0Ljh6Ii8+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01'+
			'MC4xLDQ3LjljMi41LTAuNCw1LjEtMC42LDcuOC0wLjhsLTEtNC45Yy0yLjIsMC4yLTQuMywwLjQtNi40LDAuNkM1MC4zLDQ0LjQsNTAuMiw0Ni4xLDUwLjEsNDcuOXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwMy44LDI4LjFsLTEuOC0xLjhjLTAuMy0wLjMtMC44LTAuNS0xLjItMC41cy0wLjksMC4yLTEuMiwwLjVMMjYuMiw5OS41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVzMC45LTAuMiwxLjItMC41bDczLjMtNzMuM0MxMDQuNCwyOS44LDEwNC40LDI4LjcsMTAzLjgsMjguMX'+
			'oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTY2LjcsODEuMWMxLDAsMiwwLDMtMC4xbC0yLjMtMTEuNGwtMi42LDIuNkw2Ni43LDgxLjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik04NS40LDc5LjFjMC41LTAuMSwxLTAuMiwxLjYtMC4zYzAtNS41LTAuNi0xMS41LTEuOS0xNy43Yy0wLjUtMi41LTEuMS01LTEuNy03LjNsLTQuMSw0LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywxLjQsMC43LDIuOCwwLjksNC4yYzEuMiw2LjEsMS44LDExLjksMS44LDE3LjNjMCwwLjIsMCwwLjMsMCwwLjVDODMuMiw3OS41LDg0LjMsNzkuMyw4NS40LDc5LjF6Ii8+CiAgIDxw'+
			'YXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00Ni42LDc2LjNsNC4xLTQuMWMtMC4zLTEuNC0wLjYtMi44LTAuOS00LjJsMCwwQzQ4LjYsNjEuOSw0OCw1Ni4xLDQ4LDUwLjhjMC03LjEsMS0xMy4zLDIuOC0xNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjktMi4yLDEuOS0zLjksMy01YzAuNy0wLjcsMS4zLTEuMiwyLTEuNWw2LjcsMzMuOGwyLjYtMi42TDU4LjgsMjZjMC43LDAuMSwxLjQsMC4yLDIuMiwwLjVjMS42LDAuNywzLjUsMiw1LjQsNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi42LDIuOCw1LjIsNi44LDcuNSwxMS43QzcxLDQyLDY4LjEsNDEuOSw2NSw0MS45Yy0wLjMsMC0wLj'+
			'csMC0xLDBsMSw1YzMuNiwwLDcuMSwwLjIsMTAuNSwwLjVsNC41LTQuNWMtMC4xLDAtMC4zLDAtMC40LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuNS0zLjctMy4zLTctNS4xLTkuOWMtMi4zLTMuNi00LjgtNi41LTcuNS04LjZjLTEuMy0xLjEtMi43LTEuOS00LjItMi41Yy0xLjUtMC42LTMtMC45LTQuNS0wLjljLTAuNywwLTEuNCwwLjEtMiwwLjJ2MCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuNCwwLjUtNC40LDEuNy02LjEsMy41Yy0yLjUsMi43LTQuMiw2LjQtNS40LDEwLjhjLTEuMiw0LjQtMS44LDkuNi0xLjgsMTUuM2MwLDUuNywwLjYsMTEuOCwxLjksMTguMiYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtDNDUuNCw3MS41LDQ2LDczLjksNDYuNiw3Ni4zeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDIuMyw4MC42Yy0zLjktMC45LTcuNC0yLTEwLjUtMy4zYy00LjItMS44LTcuNC0zLjktOS42LTZjLTEuMS0xLjEtMS44LTIuMS0yLjMtMy4yYy0wLjUtMS0wLjctMi0wLjctMy4xaDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMSwwLjItMiwwLjctMy4xYzAuOS0xLjgsMi42LTMuOCw1LjItNS42YzMuOC0yLjcsOS4zLTUsMTUuOS02LjdjMC0xLjgsMC4xLTMuNSwwLjMtNS4yYy00LjIsMS04LDIuMi0xMS41LDMuNyYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTtjLTQuNiwyLTguNCw0LjMtMTEuMiw3LjFjLTEuNCwxLjQtMi41LDIuOS0zLjMsNC41Yy0wLjgsMS42LTEuMiwzLjQtMS4yLDUuMmMwLDEuOCwwLjQsMy42LDEuMiw1LjJjMS40LDIuOSwzLjgsNS4zLDYuOCw3LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzQuMSwyLjksOS42LDUuMywxNiw3TDQyLjMsODAuNnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTExNC42LDU5LjhjLTEuNC0yLjktMy44LTUuMy02LjgtNy41Yy00LjEtMi45LTkuNi01LjMtMTYtN2wtNC4xLDQuMWMzLjksMC45LDcuNCwyLDEwLjUsMy40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LjIsMS44'+
			'LDcuNCwzLjksOS42LDZjMS4xLDEuMSwxLjgsMi4xLDIuMywzLjJjMC41LDEsMC43LDIsMC43LDMuMWMwLDEtMC4yLDItMC43LDMuMWMtMC45LDEuOC0yLjYsMy44LTUuMiw1LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjksMi43LTkuNiw1LjEtMTYuNCw2LjhjLTYuOSwxLjctMTQuOSwyLjctMjMuNSwyLjdjLTMuNiwwLTcuMi0wLjItMTAuNS0wLjVMNTAsODcuMWMwLjEsMCwwLjMsMCwwLjQsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjUsMy43LDMuMyw3LDUuMSw5LjljMi4zLDMuNiw0LjgsNi41LDcuNSw4LjZjMS4zLDEuMSwyLjcsMS45LDQuMiwyLjVjMS41LDAuNiwzLD'+
			'AuOSw0LjUsMC45YzAuNywwLDEuMy0wLjEsMi0wLjJsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjQtMC41LDQuNC0xLjcsNi4xLTMuNWMyLjUtMi43LDQuMi02LjQsNS40LTEwLjhjMC41LTIsMC45LTQuMiwxLjItNi41Yy0wLjYsMC4xLTEuMiwwLjMtMS44LDAuNGMtMS4xLDAuMi0yLjIsMC40LTMuMywwLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjUsMy0xLjIsNS43LTIuMSw4Yy0wLjksMi4yLTEuOSwzLjktMyw1Yy0wLjYsMC43LTEuMywxLjItMiwxLjVsLTIuNy0xMy41Yy0xLDAuMS0yLDAuMS0zLDAuMWwyLjgsMTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjct'+
			'MC4xLTEuNC0wLjItMi4yLTAuNWMtMS43LTAuNy0zLjUtMi01LjQtNGMtMi42LTIuOC01LjItNi44LTcuNS0xMS43QzU5LDg4LDYyLDg4LjEsNjUsODguMWMxMy42LDAsMjYtMi4zLDM1LjItNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LjYtMiw4LjQtNC4zLDExLjItNy4xYzEuNC0xLjQsMi41LTIuOSwzLjMtNC41YzAuOC0xLjYsMS4yLTMuNCwxLjItNS4yQzExNS44LDYzLjIsMTE1LjQsNjEuNCwxMTQuNiw1OS44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style[domTransition]='opacity 0s';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.style.opacity=0;
				}
			}
		}
		me._gyro_off.onmouseover=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
		}
		me._gyro_off.onmouseout=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_off);
		me.divSkin.appendChild(me._gyro);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 76px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp + me._timer_1.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style[domTransition]='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('playback_video', false);
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._information_bg=document.createElement('div');
		el.ggId="information_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_bg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._information_bg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 276px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		me._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_popup_close);
		me.divSkin.appendChild(me._information);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('imagesready', function() {
			player.setVariableValue('playback_video', false);
			player.videoPanoStop();
				player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") - 100);
		});
		player.addListener('varchanged_playback_video', function() {if (	(		((player.getVariableValue('playback_video') == false))	)) {		player.soundSetTime("_videopanorama", player.soundGetTime("_videopanorama") - 100);}if (	(		((player.getVariableValue('playback_video') == false))	)) {	player.videoPanoPause();}if (	(		((player.getVariableValue('playback_video') == true))	)) {	player.videoPanoPlay();}});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_hastouch = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
			} else {
				player.setVariableValue('playback_video', false);
			}
		}
		me._timer_1.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 455px;';
		hs+='position : absolute;';
		hs+='top : 214px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNj'+
			'LTAuOCwwLTEuNS0wLjctMS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS'+
			'41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBiYXNlUHJvZmlsZT0idGlueSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0'+
			'MzQuMWgtMTcuN2MtMC45LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style[domTransition]='';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information.style.top='-47px';
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=0;
					me._tt_information.style.top='24px';
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information);
		el=me._ht_info_customimage=document.createElement('div');
		els=me._ht_info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage.style[domTransition]='';
				if (me._ht_info_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage.style.visibility="hidden";
					me._ht_info_customimage__img.src = '';
					me._ht_info_customimage.ggVisible=false;
				}
				else {
					me._ht_info_customimage.style.visibility=(Number(me._ht_info_customimage.style.opacity)>0||!me._ht_info_customimage.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
					me._ht_info_customimage.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage.clientWidth;
			var parentHeight = me._ht_info_customimage.clientHeight;
			var img = me._ht_info_customimage__img;
			var aspectRatioDiv = me._ht_info_customimage.clientWidth / me._ht_info_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info.appendChild(me._ht_info_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._gyro_on.logicBlock_alpha();
	me._gyro_off.logicBlock_alpha();
	me._screentint_info.logicBlock_visible();
	me._information.logicBlock_visible();
	player.addListener('changenode', function(args) { me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha();me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('gyrochanged', function(args) { me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_info_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_info_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_info_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_info_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};