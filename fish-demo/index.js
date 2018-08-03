$(document).ready(function() {
	
	 $("#datetimepicker").datetimepicker({
        buttonIcon: ''
    });

    $('#chooseDate').datetimepicker({
        buttonIcon: '',
        changeDate: function (e, value) {
            var $this = $(this);
            $this.text($this.val());
        }
    });

    $('#datepicker-inline').datetimepicker({
        inline: true
    });
    $('#datetime').datetimepicker({
        endDate: fish.dateutil.addDays(new Date(), 10)
    });
    $('#date').datetimepicker({
        viewType: "date",
        todayBtn: true
    });
    $('#monthtime').datetimepicker({
        viewType: "month"
    });
    $('#yeartime').datetimepicker({
        viewType: "year"
    });
    $('#time').datetimepicker({
        viewType: "time"
    });
    $('#timeStep').datetimepicker({
        viewType: "time",
        minuteStep:5,
        secondStep:30
    });
	
	$("button").click(
    			function(){
 				console.log("button test");
				}
    		);
    		
    $(function () {
    'use strict';
    $('#fileupload').fileupload({
        url: 'http://10.45.4.30:7888',
        dataType: 'json',
        singleFileUploads: false,
        acceptFileTypes: /(\.|\/)(gif|jpg|jpeg|png)$/i,
        done: function (e, data) {
            $.each(data.originalFiles,function(index,file){
                var fileName = decodeURIComponent(file.name);
                $('<p/>').text(fileName + '   upload suceess, file.size:' + file.size).appendTo('#files');
            })
        },
        progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .progress-bar').css(
                'width',
                progress + '%'
            );
        },
        processfail: function (e, data) {
            var index = data.index,
                file = data.files[index];
            if (file.error && file.error === "File type not allowed" ) {
                fish.error({message:"选择的文件类型不符，只能上传图片类型文件", modal:true});
                return;
            }
        },
        fail: function (e, data) {
            $('<p/>').text("文件上传失败  " + data.errorThrown).appendTo('#files');
        }
    });


    $('.js-fileupload').fileupload({
            url:'http://10.45.4.30:7888',
            dataType: 'json',
            acceptFileTypes: /(\.|\/)(gif|jpg|jpeg|png)$/i,
            done: function (e, data) {
                $.each(data.result, function (index, file) {
                    var fileName = decodeURIComponent(file.name);
                    $('input[name="FILE_PATH"]').val($('input[name="FILE_PATH"]').val() + ";" + fileName);
                });
                console.log("done");
            },
            fail: function (e, data) {
                $('input[name="FILE_PATH"]').val(data.files[0].name);
                console.log("上传失败");
            },
            processfail: function (e, data) {
                var index = data.index,
                    file = data.files[index];
                if (file.error && file.error === "File type not allowed" ) {
                    fish.error({message:"选择的文件类型不符，只能上传图片类型文件", modal:true});
                    return;
                }
            }
        });
});		

	//标签：tabs函数，这里只有调用，没有定义，没法实现
     $("#tabs").tabs();

            $("#selTab").click(function() {
                $("#tabs").tabs("option", "active",1);
            });

            $("#disableTab").click(function() {
                $("#tabs").tabs("disable", "tabs-b");
            });

            $("#enableTab").click(function() {
                $("#tabs").tabs("enable", "tabs-b");
            });

            $("#getSelectTab").click(function() {
                var index = $("#tabs").tabs("option", "active");
                $("#getSelectTab").text("获取选中页签:"+index);
            });

            $("#collapsible").click(function() {
                $("#tabs").tabs("option", "collapsible", true);
            });

            $("#mouseOverEvent").click(function() {
                $("#tabs").tabs("option", "event", "mouseover");
            });

            $("#mouseClickEvent").click(function() {
                $("#tabs").tabs("option", "event", "click");
            });
            
            $("#hideTab").click(function(){
                $("#tabs").tabs("hideTab",0);
            });
            
            $("#showTab").click(function(){
                $("#tabs").tabs("showTab",0,true);
            });

            /**
             * getAllTabs用来获取所有页签，返回的是一个jQuery包装过的li标签数组。getAllTabs方法可以接受2个参数，第一个参数为true时，返回的数据里面会包含已经被隐藏的页签；第二个参数为true时，返回的数据里面会包含已经被禁用的页签，否则不包含。这2个参数默认都为true。
             */
            $("#getAllTabs").click(function(){
                $("#tabs").tabs("getAllTabs",true,true);
            });
	
    $('#form2').form({
        type: 'post', //后续修改成默认值
        beforeSubmit: function(e, data) {
            console.log('beforeSubmit');
            if(data.length){
                data[0].value=data[0].value+"_modify";//此方法可以修改参数值
            }
            // var start=new Date().getTime();
            // console.log(new Date());
            // while(true)  {
            //   if(new Date().getTime()-start> 5000) break;
            // }
            // console.log(new Date())
            // return false;
        },
        success: function() {
            console.log('success----');
        },
        error: function() {
            console.log('error----');
        },
        complete: function() {
            console.log('complete----');
        }
    });

	$("#datetimepicker").datetimepicker({
        buttonIcon: '',
        changeMinute: function (e, value) {
            console.log("changeMinute:" + value.date);
        },
        changeHour: function (e, value) {
            console.log("changeHour:" + value.date);
        },
        changeDay: function (e, value) {
            console.log("changeDay:" + value.date);
        },
        changeMonth: function (e, value) {
            console.log("changeMonth:" + value.date);
        },
        changeYear: function (e, value) {
            console.log("changeYear:" + value.date);
        },
        changeDate: function (e, value) {
            console.log("changeDate:" + value.date);
        },
        outOfRange: function (e, value) {
            console.log("outOfRange:" + value.date + ":" + value.startDate);
        }
    });
    $("#datetimepicker").on('datetimepicker:hide', function (e) {
        console.log('hide');
    });
    $("#datetimepicker").on('datetimepicker:show', function (e) {
        console.log('show');
    });

    //method
    $("#setValue").click(function (event) {
        var date = new Date();
        $("#datetimepicker").datetimepicker("value", date);
    });
    $("#setValueString").click(function (event) {
        $("#datetimepicker").datetimepicker("value", "2014-09-15 13:30:21");
    });
    $("#getValue").click(function (event) {
        var datetime = $("#datetimepicker").datetimepicker("getDate");
        console.log("datetime:" + datetime);
    });
    $("#getValueString").click(function (event) {
        var datetime = $("#datetimepicker").datetimepicker("value");
        console.log("datetime:" + datetime);
    });
    $('#clearValue').click(function(e) {
        $("#datetimepicker").datetimepicker('value', '');
    });
    $("#disable").click(function (event) {
        $("#datetimepicker,#datetime").datetimepicker("disable");
    });
    $("#enable").click(function (event) {
        $("#datetimepicker,#datetime").datetimepicker("enable");
    });
    
    $('#combobox2,#combobox3').combobox();

    var $combobox1 = $('#combobox1').combobox({
        placeholder: 'Select a State',
        dataTextField: 'name',
        dataValueField: 'value',
        dataSource: [
            {name: 'Alabama', value: 'AL'},
            {name: 'Alaska', value: 'AK'},
            {name: 'Arizona', value: 'AZ'},
            {name: 'Arkansas', value: 'AR'},
            {name: 'California', value: 'CA'},
            {name: 'Colorado', value: 'CO'},
            {name: 'Connecticut', value: 'CT'},
            {name: 'Delaware', value: 'DE'},
            {name: 'District Of Columbia', value: 'DC'}
        ],
        template: '<li><a href="#">test</a></li>'
    });

    $combobox1.on('combobox:open', function (e) {
        log('open event');
    });

    $combobox1.on('combobox:close', function (e) {
        log('close event');
    });

    $combobox1.on('combobox:change', function () {
        log('change event');
    });

    $('button').click(function (e) {
        var $target = $(e.target);

        switch ($target.attr('id')) {
            case 'btn1':
                $combobox1.combobox('enable');
                break;
            case 'btn2':
                $combobox1.combobox('disable');
                break;
            case 'btn3':
                $combobox1.combobox('destroy');
                break;
            case 'btn4':
                $combobox1.combobox();
                break;
            case 'btn5':
                $combobox1.combobox('focus');
                break;
            case 'btn21':
                log($combobox1.combobox('value'));
                break;
            case 'btn20':
                log($combobox1.combobox('getSelectedItem'));
                break;
            case 'btn22':
                log($combobox1.combobox('value', 'AZ'));
                break;
            case 'btn25':
                //可以直接写入options { ..., forceSelection:false, ....}
                $combobox1.combobox('option', 'forceSelection', false);
                break;
            case 'btn26':
                $combobox1.combobox('option', 'forceSelection', true);
                break;
            case 'btn28':
                $('#combobox2').combobox('option', 'equalWidth', false);
                break;
            case 'btn29':
                $('#combobox2').combobox('option', 'equalWidth', true);
                break;
            case 'btn30':
                $combobox1.combobox('append', {name: 'test-2', value: 'test2'});
                break;
        }

    });
    
});


function log(obj) {
    window.console && console.log(obj);
}