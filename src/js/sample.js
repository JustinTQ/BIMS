/**
 * Created by asus-pc on 2018/6/27.
 */
// var $  = require( 'jquery' );
// require( 'datatables.net' )( window, $ );
// require( 'datatables.net-dt' )( window, $ );
//上面显示的是CommonJS模块。如果您使用AMD加载程序，则不需要执行required库（即删除尾部()）
require( 'jszip' );
require( 'pdfmake' );
require('datatables.net');
require('datatables.net-buttons');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.html5.js');
require( 'datatables.net-buttons/js/buttons.print.js' );
require('../css/sample.css');
$(function(){

    $("#sampleTable").DataTable({
        //1.如果是在相同的文件目录下，就是html文件与json文件在统一目录下，直接可以用ajax去访问
        //2.如果不在同一文件下，就有跨域问题，需要搭建环境来处理，而且json的指向路径必须是根据html的下的路径去指定的
        ajax: "testdata.json",
        columns:[
            {"data":"sId"},
            {"data":"sName"},
            {"data":"sType"},
            {"data":"sSource"},
            {"data":"pName"},
            {"data":"dName"},
            {"data":"stoke"},
            {"data":"position"},
            {"data":"time"},
            {"data":"statue"}
        ],
        //responsive: true,
        //columnDefs: {className: 'dt-head-center'},
        pageLength: 12,
        lengthChange: false,
        deferRender: true,
        language:{
            search: "搜索:",
            emptyTable: "没有相关数据",
            zeroRecords: "没有匹配结果",
            info: "总共找到_TOTAL_结果",
            paginate:{
                first: "首页",
                last: "尾页",
                previous:"&lt",
                next: "&gt",
            }
        },
        dom: 'Bfrtip',
        buttons: ['copy','excel','pdf','print'],
        // buttons: [
        //     {
        //         extend: 'excel',
        //         text: '保存当前页',
        //         exportOptions:{
        //             modifier:{
        //                 page: 'current'
        //             }
        //         }
        //     }
        // ]
    });
});

