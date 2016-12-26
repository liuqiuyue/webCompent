/**
 * Created by liuqiuyue on 2016/12/23.
 */
require.config({
    // 指定映射关系，模块名-文件名
    paths:{
        jquery:'jquery',
        // jqueryUI:'http://apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min'
        jqueryUI:'jquery-ui.min'
    }
});
require(['jquery','window'],function ($,w) {
    $("#a").click(function () {
       var win=new w.Window().alert({
            content:"welcome111!",
            title:"提示",
            width:400,
            height:150,
            y:50,
            hasCloseBtn:true,
            skinClassName:"window_skin_a",
            text4AlertBtn:"NO000",
            hasMask:true,
            dragHandle:".window_header",
               handler4AlertBtn:function () {
                   alert("you click the Alert button");
                   // location.href="www.baidu.com"
               },
               handler4CloseBtn:function () {
                   alert("you click the Close button");
                   // location.href="www.baidu.com"
               }

        }).on("alert",function(){ alert("you click the second Alert handler");
        }).on("close",function(){ alert("you click the second close handler");
        });

        // win.on("alert",function(){ alert("you click the Alert button");});
        // win.on("alert",function(){ alert("you click the second Alert handler");});
        win.on("alert",function(){ alert("you click the third Alert handler");
        });
    });
        // win.on("close",function(){ alert("you click the Close button");});
        // win.on("close",function(){ alert("you click the second close handler");});
        // handler4AlertBtn:function () {
        //     alert("you click the Alert button");
        //     // location.href="www.baidu.com"
        // },
        // handler4CloseBtn:function () {
        //     alert("you click the Close button");
        //     // location.href="www.baidu.com"
        // },
        $("#b").click(function () {
            new w.Window().confirm({
                content:"welcome111!",
                title:"系统消息",
                width:300,
                height:150,
                y:50,
                hasCloseBtn:true,
                skinClassName:"window_skin_a",
                text4ConfirmBtn:"是",
                text4CancelBtn:"否",
                hasMask:true,
                dragHandle:".window_header"
            }).on("confirm",function(){ alert("确定");
            }).on("cancel",function(){ alert("取消");
            });
    });
    $("#c").click(function () {
        new w.Window().prompt({
            content:"我们会为你输入的信息保密",
            title:"请输入你的名字",
            width:300,
            height:150,
            y:50,

            text4PromptBtn:"是",
            text4CancelBtn:"否",
            defaultValue4PromptInput:"张三",
            hasMask:true,
            dragHandle:".window_header",
            handler4PromptBtn:function (inputValue) {
                if (inputValue){
                    alert("你输入的内容是："+inputValue);
                }
                    else{
                    alert("你没有输入的内容");
                }
            },
            handler4CancelBtn:function () {
                alert("取消");
            }
        });
    });
    $("#d").click(function () {
        new w.Window().common({
            content:"我是一个通用弹窗",
            width:300,
            height:150,
            y:50,
            hasCloseBtn:true
        });
    });
});