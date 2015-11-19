/**
* audio Module
*
* Description
*/
angular.module('tech.audio', [])
.factory('MusicVisualizer', [function(){
	function MusicVisualizer(){
		this.source = null;
		this.analyser = MusicVisualizer.ac.createAnalyser();
		//通过audio标签创建MediaaudioElementSourceNode时使用的audio元素
		this.audio = new Audio();
		this.audioSource = MusicVisualizer.ac.createMediaElementSource(this.audio);

		this.analyser = MusicVisualizer.ac.createAnalyser();
	};
	MusicVisualizer.ac = new (window.AudioContext ||window.webkitAudioContext || window.mozAudioContext)();
	MusicVisualizer.load = function(path,fun){
		var xhr = new XMLHttpRequest();
		xhr.open("get",path);
		xhr.responseType = 'arraybuffer';
		xhr.onload = function(){
			MusicVisualizer.isFunc(fun) && fun.call(xhr.response);
		}
		xhr.send(null);
	};
	MusicVisualizer.isFunc = function(fun){
		return (fun instanceof Function);
	};
	MusicVisualizer.play = function(mv){


		// mv.source.connect(mv.analyser);
		mv.source.connect(MusicVisualizer.ac.destination);

		if(mv.source === mv.audioSource){
			console.log(333,mv.audio);
			mv.audio.play();
			// mv.audio.onended = mv.onended;
		}else{		
			//兼容较老的API
			console.log(mv.source)
			
			mv.source.start();
			// mv.source[mv.source.start ? "start" : "noteOn"](0);

			//为该bufferSource绑定onended事件
			// MusicVisualizer.isFunc(mv.onended) && (mv.source.onended = mv.onended);
		}
		
	};
	MusicVisualizer.stop = function(mv){
		if(mv.source === mv.audioSource){
			mv.audio.pause();
		}else{
			mv.source[mv.source.stop ? "stop" : "noteOff"](0);
		}
	};
	MusicVisualizer.prototype.decode = function(arraybuffer,fun){
		var self = this;
		MusicVisualizer.ac.decodeAudioData(arraybuffer, function(buffer){
			var bufferSourceNode = MusicVisualizer.ac.createBufferSource();
			bufferSourceNode.buffer = buffer;
			fun.call(bufferSourceNode);
		},function(err){
			console.log(err);
		})
	};
	MusicVisualizer.prototype.play = function(path,isMobile){
		var self = this;

		self.source && MusicVisualizer.stop(self);

		if(isMobile){
			MusicVisualizer.load(path,function(){
				self.decode(this,function(){
					self.source = this;
					MusicVisualizer.play(self);
				});
			});
		}else{
			self.audio.src = path;
			self.source = self.audioSource;
			MusicVisualizer.play(self);
		}
		
	};

	return new MusicVisualizer();
}])
