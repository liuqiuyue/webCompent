/**
 * Created by liuqiuyue on 2016/12/26.
 * widget.js
 */
define(['jquery'],function ($) {
    function Widget() {
        // this.handlers={};
        // 属性：最外层容器
        this.boundingBox=null;
    }
    Widget.prototype={
        on:function (type,handler) {
            if(typeof  this.handlers[type]=="undefined"){
                this.handlers[type]=[];
            }
            this.handlers[type].push(handler);
            return this;
        },
        fire:function (type,data) {
            if(this.handlers[type] instanceof Array){
                var handlers=this.handlers[type];
                for(var i=0,len=handlers.length;i<len;i++){
                    handlers[i](data);
                }
            }
        },
        // 接口：添加dom节点
        renderUI:function () {

        },
        // 接口：监听事件
        bindUI:function () {

        },
        // 接口：初始化组件属性
        syncUI:function () {

        },
        // 方法：渲染组件
        render:function (container) {
            this.renderUI();
            this.handlers={};
            this.bindUI();
            this.syncUI();
            $(container||document.body).append(this.boundingBox);
        },
        // 接口：销毁前的处理函数
        destructor:function () {

        },
        // 方法：销毁组件
        destroy:function () {
            this.destructor();
            this.boundingBox.off();
            this.boundingBox.remove();
        }
    }
    return{
        Widget:Widget
    }
})