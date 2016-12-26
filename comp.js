define(['jquery'],function($){
	function Widget(){
		this.boudingBox = null; //���ԣ����������
	}
	Widget.prototype={
		on:function(type,handler){
			if (typeof this.handlers[type]=='undefined') {
				this.handlers[type]=[];
			}
			this.handlers[type].push(handler);
			return this;
		},
		fire:function(type,data){
			if (this.handlers[type] instanceof Array) {
				var handlers = this.handlers[type];
				for(var i=0,len=handlers.length;i<len;i++){
					handlers[i](data);
				}
			};
		},
		render:function(container){		//��������Ⱦ���
			this.renderUI();
			this.handlers={};
			this.bindUI();
			this.syncUI();
			$(container||document.body).append(this.boudingBox);
		},
		destroy:function(){		 //��������Ⱦ���
			this.destructor();
			this.boudingBox.off();
			this.boudingBox.remove();
		},
		renderUI:function(){},	//�ӿڣ����dom�ڵ�
		bindUI:function(){},	//�ӿڣ������¼�
		syncUI:function(){},	//�ӿڣ���ʼ���������
		destructor:function(){} //�ӿڣ�����ǰ�Ĵ�����
	}
	return{
		Widget:Widget
	}
})