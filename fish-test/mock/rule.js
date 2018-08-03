define(['./mock'], function (Mock) {
    /*
     * 	设置默认的参数
     */
    $.ajaxSetup({
        data: Math.random().toString()
    });

    function getDataType(data) {
        var str = Object.prototype.toString.call(data);
        return str.split(' ')[1].substring(0, str.split(' ')[1].length - 1)
    }

    $(document).ajaxSuccess(function (event, jqXHR, ajaxOptions) {
        var data = ajaxOptions.data == undefined ? null : ajaxOptions.data
        // 只能打印出get类型的传参
        // console.group('===================');
        // console.info('请求地址：%s', ajaxOptions.url);
        // console.log('提交数据 [%s]: %s', getDataType(data), decodeURIComponent(data));
        // if (jqXHR.responseJSON) {
        //     console.log('返回数据 [%s]: %s', getDataType(jqXHR.responseJSON), JSON.stringify(jqXHR.responseJSON, null, '\t'))
        // }
        // ;
        // console.groupEnd();
    });
    
    var Random = Mock.Random;
    Mock.setup({
        timeout: '1000'
    });
    
    //登录
    Mock.mock('mock/fishAjax/ISignOnByDWR/loginByFish', function (options) {

        return Mock.mock({
            "result": {
                "success": "1", "loginsession": {
                    "username": "hntest010@@371",
                    "userType": "customer",
                    "access_terminal": "01",
                    "rolesIdList": [
                        "61122"
                    ],
                    "specialPrivleges": [],
                    "privlegesList": [
                        "/tasklist/taskList.jsp?title_name=todo",
                        "/provinceCompany/orderProduct/prov_product_list.jsp",
                        "/user/user_manage2.jsp"
                    ],
                    "searchLimit": "5",
                    "uid": "24580",
                    "usercode": "hntest010@@371",
                    "provinceCode": "371",
                    "countryCode": "000000",
                    "roleNameList": [
                        "政省直连-省管理员"
                    ],
                    "divPrivlegesList": [
                        "d_sysmanage"
                    ],
                    "dataPrivilegeList": [
                        "2913"
                    ],
                    "examList": [
                        "-999"
                    ],
                    "org_name": "河南",
                    "isbiyou": "not",
                    "oper_id": "24580",
                    "favorList": [],
                    "cityCode": "0000",
                    "mobileno": "17722225081",
                    "orgids": [
                        "2913"
                    ],
                    "score": null,
                    "ifjf": "true",
                    "portal": "1",
                    "email": "13700009999@123.com",
                    "userphoto": "",
                    "nickname": "hntest010"
                }
            }
        });
    });
    
    //菜单
    Mock.mock('mock/admin/base/menu.json', function (options) {
        return Mock.mock({
            'code': '1',
            'msg': '',
            'list': [
                
                {menu_name: '首页', menu_url: "esop/admin/base/frame/content/views/rightContentMain", icon: "home_01"},
                {
                    menu_name: '快捷入口', menu_url: "entry", icon: "start_01"
                },
                {
                    menu_name: '账户管理', menu_url: "account", icon: "customer_01"
                },
                {
                    menu_name: '产品订购', menu_url: "esop/admin/products", icon: "product_01", children:
                        [{
                            menu_name: '产品订购主页',
                            menu_url: "esop/admin/products/views/product",
                            icon: "product_01",
                            children:
                                [{
                                    menu_name: '产品订购主页',
                                    menu_url: "esop/admin/products/views/product",
                                    icon: "product_01"
                                },
                                    {menu_name: '财务发票', menu_url: "financial", icon: "financial_01"},
                                    {menu_name: '协作管理', menu_url: "management", icon: "cooperation_01"}]
                        },
                            {menu_name: '财务发票', menu_url: "financial", icon: "financial_01"},
                            {menu_name: '协作管理', menu_url: "management", icon: "cooperation_01"},
                            {menu_name: '订购管理', menu_url: "esop/admin/products/myOrder/index", icon: "financial_01"},
                            {menu_name: '购物车', menu_url: "esop/admin/productHall/hall/views/shoppingCart", icon: "product_01"},
                            {menu_name: '订购管理', menu_url: "esop/admin/products/myOrder/index", icon: "financial_01"},
                            {
                                menu_name: '新增订购',
                                menu_url: "esop/admin/products/addOrder/views/addOrderView",
                                icon: "financial_01"
                            }
                        ]
                },
                {
                    menu_name: '客户管理', menu_url: "esop/admin/myCustomer", icon: "financial_01", children: [
                        {
                            menu_name: '我的客户',
                            menu_url: "esop/admin/myCustomer/index/views/customerView",
                            icon: "customer_01"
                        },
                        {
                            menu_name: '集团客户详情',
                            menu_url: "esop/admin/myCustomer/detail/views/groupcustDtlView",
                            icon: "product_01"
                        },
                        {
                            menu_name: '签约客户详情',
                            menu_url: "esop/admin/myCustomer/detail/views/signcustDtlView",
                            icon: "product_01"
                        },
                        {
                            menu_name: '客户关系维护',
                            menu_url: "esop/admin/myCustomer/relation/views/relationView",
                            icon: "product_01"
                        }]
                },
                {
                    menu_name: '运维管理', menu_url: "esop/admin/productHall/adminMgr", icon: "product_01", children:
                        [{
                            menu_name: '产品大厅-首页',
                            menu_url: "esop/admin/productHall/hall/views/productHall",
                            icon: "financial_01"
                        },
                            {
                                menu_name: '单个产品详情',
                                menu_url: "esop/admin/productHall/hall/views/productDetail",
                                icon: "financial_01"
                            },{
                                menu_name: '产品介绍管理',
                                menu_url: "esop/admin/productHall/adminMgr/views/productIntroduction",
                                icon: "financial_01"
                            },
                            {
                                menu_name: '产品-资费详情',
                                menu_url: "esop/admin/productHall/adminMgr/rateItem/views/rateIndex",
                                icon: "cooperation_01"
                            },
                            {menu_name: '公告管理', menu_url: "manager/notice", icon: "customer_01"},
                            {
                                menu_name: '链接配置',
                                menu_url: "esop/admin/productHall/adminMgr/linkMgr/views/linkConfig",
                                icon: "product_01"
                            },
                            {
                                menu_name: '轮播图管理',
                                menu_url: "esop/admin/productHall/adminMgr/views/slidePic",
                                icon: "customer_01"
                            },
                            {
                                menu_name: '产品资费管理',
                                menu_url: "esop/admin/productHall/adminMgr/views/productRate",
                                icon: "product_01"
                            },
                        	{
                                menu_name: '产品大厅列表配置',
                                menu_url: "esop/admin/productHall/adminMgr/views/productList",
                                icon: "product_01"
                            }]
                },
                {
                    menu_name: '拜访管理', menu_url: "esop/admin/visit", icon: "financial_01", children: [
                        {
                            menu_name: '计划列表',
                            menu_url: "esop/admin/visit/planList/views/index?kk=9",
                            icon: "customer_01"
                        },
                        {menu_name: '拜访统计', menu_url: "esop/admin/visit/statistics/views/index", icon: "product_01"},
                        {menu_name: '拜访明细', menu_url: "esop/admin/visit/detail/views/index", icon: "financial_01"}]
                },
                {
                    menu_name: '商机管理', menu_url: "esop/admin/opp", icon: "financial_01", children: [
                        {menu_name: '商机查询', menu_url: "esop/admin/opp/views/index", icon: "customer_01"}
                    ]
                },
                {menu_name: '待办待阅', menu_url: "esop/admin/tasks/index", icon: "financial_01"},
                {menu_name: '财务发票', menu_url: "financial", icon: "financial_01"},
                {menu_name: '协作管理', menu_url: "management", icon: "cooperation_01"},
                {menu_name: '营销管理', menu_url: "statistic", icon: "marketing_01"},
                {menu_name: '公共组件', menu_url: "esop/admin/base/components/views/components", icon: "system_01"},
                // {menu_name: '资源管理', menu_url: "system", icon: "explorer_01"},
                // {menu_name: "合作伙伴管理", menu_url: "system", icon: "partner_01"},
                // {menu_name: '知识库', menu_url: "system", icon: "knowlege_01"},
                // {menu_name: '统计分析', menu_url: "system", icon: "date-analysis_01"},
                // {menu_name: '系统管理', menu_url: "system", icon: "system_01"},
            ]
        })
    });

    //登录
    Mock.mock('mock/fishAjax/ISignOnByDWR/getUserinfo', function (options) {

        if (fish.cookies.get("isLogin") == "true") {
            return Mock.mock({
                result: {
                    "username": "hntest010@@371",
                    "userType": "customer",
                    "access_terminal": "01",
                    "rolesIdList": ["61122"],
                    "specialPrivleges": [],
                    "privlegesList": ["/tasklist/taskList.jsp?title_name=todo", "/provinceCompany/orderProduct/prov_product_list.jsp", "/user/user_manage2.jsp"],
                    "searchLimit": "5",
                    "uid": "24580",
                    "usercode": "hntest010@@371",
                    "provinceCode": "371",
                    "countryCode": "000000",
                    "roleNameList": ["政省直连-省管理员"],
                    "divPrivlegesList": ["d_sysmanage"],
                    "dataPrivilegeList": ["2913"],
                    "examList": ["-999"],
                    "org_name": "河南",
                    "isbiyou": "not",
                    "oper_id": "24580",
                    "favorList": [],
                    "cityCode": "0000",
                    "mobileno": "17722225081",
                    "orgids": ["2913"],
                    "score": null,
                    "ifjf": "true",
                    "portal": "3",
                    "email": "13700009999@123.com",
                    "userphoto": "",
                    "nickname": "hntest010"
                }
            });
        } else {
            return null;
        }
    });

    //登出
    Mock.mock('mock/fishAjax/ISignOnByDWR/invalidSession', function (options) {
        return null;
    });
    /*
    首页功能
     */
    // 领导首页
    Mock.mock('mock/fishAjax/IBossReportPrivBO/queryBossReportPrivAndData', function (options) {
        return Mock.mock({
            "BizCode": "0000",
            "BizDesc": "成功",
            "result": {
                "tab1": {
                    "report_list": [{
                        "field_list": ["战略客户总签约率", "战略客户总收入", "通信及信息化份额", "集团单位产品份额", "IDC份额", "9项重点产品收入合计"],
                        "unit_list": ["万元", "%", "%", "%", "%", "万元"],
                        "value_list": [39, 46, 25, 23, 96, 37]
                    }],
                    "report_type_name": "KPI指标"
                },
                "tab2": {
                    "report_list": [{
                        "field_list": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                        "report_name": "通信及信息化收入及份额",
                        "value_list": [{
                            "data": [1, 6, 51, 43, 57, 18, "", "", "", "", "", ""],
                            "name": "本月值",
                            "show_stype": "3",
                            "unit": "万元"
                        }, {
                            "data": [67, 17, 95, 80, 1, 97, "", "", "", "", "", ""],
                            "name": "年累计值",
                            "show_stype": "3",
                            "unit": "%"
                        }, {
                            "data": [75, 43, 32, 11, 1, 48, "", "", "", "", "", ""],
                            "name": "同比(环比)",
                            "show_stype": "3",
                            "unit": "万元"
                        }, {
                            "data": [38, 90, 53, 9, 66, 98, "", "", "", "", "", ""],
                            "name": "份额（接口1）",
                            "show_stype": "3",
                            "unit": "%"
                        }]
                    }, {
                        "field_list": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                        "report_name": "集团单位产品收入份额",
                        "value_list": [{
                            "data": [27, 43, 44, 62, 25, 71, "", "", "", "", "", ""],
                            "name": "本月值",
                            "show_stype": "3",
                            "unit": "万元"
                        }, {
                            "data": [24, 16, 44, 92, 95, 39, "", "", "", "", "", ""],
                            "name": "年累计值",
                            "show_stype": "3",
                            "unit": "%"
                        }, {
                            "data": [69, 65, 77, 25, 77, 58, "", "", "", "", "", ""],
                            "name": "同比(环比)",
                            "show_stype": "3",
                            "unit": "万元"
                        }, {
                            "data": [60, 79, 38, 18, 44, 5, "", "", "", "", "", ""],
                            "name": "份额（接口1）",
                            "show_stype": "3",
                            "unit": "%"
                        }]
                    }, {
                        "field_list": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                        "report_name": "IDC收入份额",
                        "value_list": [{
                            "data": [29, 27, 51, 19, 96, 6, "", "", "", "", "", ""],
                            "name": "本月值",
                            "show_stype": "3",
                            "unit": "万元"
                        }, {
                            "data": [51, 83, 19, 39, 83, 44, "", "", "", "", "", ""],
                            "name": "年累计值",
                            "show_stype": "3",
                            "unit": "%"
                        }, {
                            "data": [86, 17, 93, 29, 64, 4, "", "", "", "", "", ""],
                            "name": "同比(环比)",
                            "show_stype": "3",
                            "unit": "万元"
                        }, {
                            "data": [27, 27, 65, 43, 75, 82, "", "", "", "", "", ""],
                            "name": "份额（接口1）",
                            "show_stype": "3",
                            "unit": "%"
                        }]
                    }, {
                        "field_list": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                        "report_name": "9项重点产品收入合计",
                        "value_list": [{
                            "data": [50, 70, 56, 4, 57, 86, "", "", "", "", "", ""],
                            "name": "本月值",
                            "show_stype": "3",
                            "unit": "万元"
                        }, {
                            "data": [63, 77, 67, 20, 5, 83, "", "", "", "", "", ""],
                            "name": "年累计值",
                            "show_stype": "3",
                            "unit": "%"
                        }, {
                            "data": [12, 84, 80, 84, 97, 30, "", "", "", "", "", ""],
                            "name": "同比(环比)",
                            "show_stype": "3",
                            "unit": "万元"
                        }, {
                            "data": [13, 97, 87, 78, 6, 93, "", "", "", "", "", ""],
                            "name": "份额（接口1）",
                            "show_stype": "3",
                            "unit": "%"
                        }]
                    }, {
                        "field_list": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                        "report_name": "战略客户总收入及签约率",
                        "value_list": [{
                            "data": [92, 5, 18, 61, 73, 59, "", "", "", "", "", ""],
                            "name": "收入（本月值）",
                            "show_stype": "3",
                            "unit": "万元"
                        }, {
                            "data": [88, 1, 70, 65, 1, 82, "", "", "", "", "", ""],
                            "name": "签约率",
                            "show_stype": "3",
                            "unit": "%"
                        }]
                    }],
                    "report_type_name": "KPI展现"
                },
                "tab3": {
                    "report_list": [{
                        "field_list": ["计划收入总额", "实际收入总额", "计划收入总额", "实际收入总额"],
                        "report_name": "年度",
                        "unit_list": ["元", "元", "元", "元"],
                        "value_list": [314, 95, 64, 77]
                    }, {
                        "field_list": ["计划收入总额", "实际收入总额", "计划收入总额", "实际收入总额"],
                        "report_name": "累计",
                        "unit_list": ["元", "元", "元", "元"],
                        "value_list": [123, 32, 64, 77]
                    }],
                    "report_type_name": "公司真实收入"
                },
                "tab4": {
                    "report_list": [{
                        "field_list": ["投资计划", "需求", "立项/可研", "采购", "设计", "工程实施", "试运行", "竣工投产"],
                        "report_name": "CAPEX项目流程",
                        "value_list": [{
                            "data": [19, 24, 65, 44, 0, 3, 92, 19],
                            "name": "项目数量",
                            "show_stype": "3",
                            "unit": "个"
                        }, {
                            "data": [7, 3, 1, 2, 2, 0, 8, 4],
                            "name": "新建数量",
                            "show_stype": "3",
                            "unit": "个"
                        }]
                    }, {
                        "field_list": ["投资计划总额", "资金决策总金额", "合同不含税金额", "设计批复金额"],
                        "report_name": "CAPEX-指标金额",
                        "value_list": [{
                            "data": [62, 96, 98, 86],
                            "name": "指标金额",
                            "show_stype": "3",
                            "unit": "万元"
                        }]
                    }],
                    "report_type_name": "CAPEX项目流程"
                },
                "tab4_2": {
                    "report_list": [{
                        "field_list": ["预算", "需求", "项目/决策", "采购", "执行", "报账", "入账"],
                        "report_name": "OPEX项目流程",
                        "value_list": [{
                            "data": [34, 71, 18, 54, 88, 7, 0],
                            "name": "项目数量",
                            "show_stype": "3",
                            "unit": "个"
                        }]
                    }, {
                        "field_list": ["预算金额", "立项决策金额", "合同不含税金额", "业务支持/运维服务", "报账金额", "入账金额"],
                        "report_name": "OPEX-指标金额",
                        "value_list": [{
                            "data": [18, 51, 98, 95, 73, 62],
                            "name": "指标金额",
                            "show_stype": "3",
                            "unit": "万元"
                        }]
                    }, {
                        "field_list": ["初级", "中级", "高级"],
                        "report_name": "人员人天",
                        "value_list": [{
                            "data": [62, 5, 25],
                            "name": "人员人天",
                            "show_stype": "3",
                            "unit": "人天"
                        }]
                    }],
                    "report_type_name": "OPEX项目流程"
                }
            }
        });
    });
    // 待办列表查询-首页
    Mock.mock('mock/IQueryTodoBO/queryToDoList', function (options) {
        return Mock.mock({
            "resCode": "00000",
            "resMsg": "请求正常",
            "result": {
                "list": [{
                    "apply_order_id": "619641",
                    "create_date": "2018-07-11 15:27:26",
                    "curr_operator": "fanxiaochen",
                    "flow_operator": "fanxiaochen",
                    "flow_operator_name": "范小辰",
                    "order_name": "任务待办-发票审批",
                    "pre_operator_name": "范小辰",
                    "tache_name": "重新填写发票信息",
                    "todo_seq": "847058",
                    "type_name": "发票管理",
                    "typecode": "30402",
                    "url": "/invoice/groupClientInvoiceAudit.jsp",
                    "url_param": "applyOrderId",
                    "url_param_value": "apply_order_id"
                }, {
                    "apply_order_id": "619639",
                    "create_date": "2018-07-11 15:18:42",
                    "curr_operator": "fanxiaochen",
                    "flow_operator": "fanxiaochen",
                    "flow_operator_name": "范小辰",
                    "order_name": "任务待办-发票审批",
                    "pre_operator_name": "李海丹",
                    "tache_name": "重新填写发票信息",
                    "todo_seq": "847059",
                    "type_name": "发票管理",
                    "typecode": "30402",
                    "url": "/invoice/groupClientInvoiceAudit.jsp",
                    "url_param": "applyOrderId",
                    "url_param_value": "apply_order_id"
                }, {
                    "apply_order_id": "100000002915",
                    "create_date": "2018-07-10 11:32:37",
                    "curr_operator": "fanxiaochen",
                    "flow_operator": "fanxiaochen",
                    "flow_operator_name": "范小辰",
                    "order_name": "业务受理人员发起号码批量开通申请-文件校验失败",
                    "pre_operator_name": "范小辰",
                    "tache_name": "业务受理人员发起号码批量开通申请",
                    "todo_seq": "1",
                    "type_name": "资源管理",
                    "typecode": "30202",
                    "url": "/resources/card-manage-num-open-update.jsp",
                    "url_param": "applyOrderId",
                    "url_param_value": "apply_order_id"
                }, {
                    "apply_order_id": "619610",
                    "create_date": "2018-07-10 10:39:20",
                    "curr_operator": "fanxiaochen",
                    "flow_operator": "fanxiaochen",
                    "flow_operator_name": "范小辰",
                    "order_name": "任务待办-发票审批",
                    "pre_operator_name": "李海丹",
                    "tache_name": "重新填写发票信息",
                    "todo_seq": "846987",
                    "type_name": "发票管理",
                    "typecode": "30402",
                    "url": "/invoice/groupClientInvoiceAudit.jsp",
                    "url_param": "applyOrderId",
                    "url_param_value": "apply_order_id"
                }, {
                    "apply_order_id": "619603",
                    "create_date": "2018-07-09 16:52:38",
                    "curr_operator": "fanxiaochen",
                    "flow_operator": "fanxiaochen",
                    "flow_operator_name": "范小辰",
                    "order_name": "任务待办-一般纳税人资质审核",
                    "pre_operator_name": "刘浏",
                    "tache_name": "修改资质认证申请",
                    "todo_seq": "846966",
                    "type_name": "发票管理",
                    "typecode": "30401",
                    "url": "/invoice/taxpayer-certification.jsp",
                    "url_param": "applyOrderId",
                    "url_param_value": "apply_order_id"
                }], "page": "1", "total": 16, "totalRow": "76"
            }
        });
    });
    // 待阅列表查询-首页
    Mock.mock('mock/fishAjax/IIndexPageBO/quertToReadnew', function (options) {
        return Mock.mock({
            "resCode": "00000",
            "resMsg": "请求正常",
            "result": {
                "list": [{
                    "apply_order_id": "11690",
                    "create_date": "18-06-25 17:48:23",
                    "create_user_name": "fanxiaochen",
                    "cust_name": "",
                    "key_params": "",
                    "ncust_code": "",
                    "order_name": "您发起的『4G云医护产品续订（单号：11690）』已被『赵磊（政企）』退回，请知悉。",
                    "order_type": "",
                    "read_content": "",
                    "read_id": "2527",
                    "read_state": "0",
                    "read_type": "40",
                    "receiver": "fanxiaochen",
                    "send_code": "000"
                }, {
                    "apply_order_id": "11794",
                    "create_date": "18-06-25 17:03:39",
                    "create_user_name": "fanxiaochen",
                    "cust_name": "",
                    "key_params": "",
                    "ncust_code": "",
                    "order_name": "互联网解决方案部-目标客户-项目名称报价审批，已审批通过",
                    "order_type": "",
                    "read_content": "",
                    "read_id": "2524",
                    "read_state": "0",
                    "read_type": "19",
                    "receiver": "fanxiaochen",
                    "send_code": "000"
                }, {
                    "apply_order_id": "11751",
                    "create_date": "18-06-23 15:49:31",
                    "create_user_name": "fanxiaochen",
                    "cust_name": "",
                    "key_params": "",
                    "ncust_code": "",
                    "order_name": "互联网解决方案部-目标客户-项目名称报价审批，未通过",
                    "order_type": "",
                    "read_content": "",
                    "read_id": "2520",
                    "read_state": "0",
                    "read_type": "19",
                    "receiver": "fanxiaochen",
                    "send_code": "000"
                }, {
                    "apply_order_id": "11750",
                    "create_date": "18-06-23 15:33:49",
                    "create_user_name": "fanxiaochen",
                    "cust_name": "",
                    "key_params": "",
                    "ncust_code": "",
                    "order_name": "互联网解决方案部-目标客户-项目名称报价审批，已被fanxiaochen退回",
                    "order_type": "",
                    "read_content": "",
                    "read_id": "2514",
                    "read_state": "0",
                    "read_type": "19",
                    "receiver": "fanxiaochen",
                    "send_code": "000"
                }, {
                    "apply_order_id": "11719",
                    "create_date": "18-06-22 15:15:20",
                    "create_user_name": "fanxiaochen",
                    "cust_name": "",
                    "key_params": "",
                    "ncust_code": "",
                    "order_name": "互联网解决方案部-目标客户-项目名称报价审批，已被fanxiaochen退回",
                    "order_type": "",
                    "read_content": "",
                    "read_id": "2500",
                    "read_state": "0",
                    "read_type": "19",
                    "receiver": "fanxiaochen",
                    "send_code": "000"
                }], "pageCount": 4, "pageIndex": 1, "pageSize": 5, "totalCount": 25
            }
        });
    });
    //草稿箱查询-首页
    Mock.mock('mock/fishAjax/IIndexPageBO/querydraftInfoNew', function (options) {
        return Mock.mock({
            "resCode": "00000",
            "resMsg": "请求正常",
            "result": {
                "list": [{
                    "draft_create_time": "2018-07-09 15:48:24",
                    "draft_id": "20180709154824",
                    "draft_name": "家庭医生",
                    "draft_small_type": "",
                    "draft_status": "00A",
                    "draft_type": "003",
                    "draft_update_time": "",
                    "update_user_code": "",
                    "user_code": "fanxiaochen"
                }, {
                    "draft_create_time": "2018-06-28 15:56:57",
                    "draft_id": "20180628155700",
                    "draft_name": "乾坤大数据-数据标签",
                    "draft_small_type": "",
                    "draft_status": "00A",
                    "draft_type": "003",
                    "draft_update_time": "",
                    "update_user_code": "",
                    "user_code": "fanxiaochen"
                }, {
                    "draft_create_time": "2018-06-28 11:55:07",
                    "draft_id": "20180628115507",
                    "draft_name": "IDC组合包",
                    "draft_small_type": "",
                    "draft_status": "00A",
                    "draft_type": "003",
                    "draft_update_time": "",
                    "update_user_code": "",
                    "user_code": "fanxiaochen"
                }, {
                    "draft_create_time": "2018-06-27 17:26:03",
                    "draft_id": "20180627172603",
                    "draft_name": "1231",
                    "draft_small_type": "",
                    "draft_status": "00A",
                    "draft_type": "001",
                    "draft_update_time": "",
                    "update_user_code": "",
                    "user_code": "fanxiaochen"
                }, {
                    "draft_create_time": "2018-06-25 16:50:49",
                    "draft_id": "20180625165053",
                    "draft_name": "云视讯C21",
                    "draft_small_type": "",
                    "draft_status": "00A",
                    "draft_type": "003",
                    "draft_update_time": "2018-06-25 17:43:35",
                    "update_user_code": "fanxiaochen",
                    "user_code": "fanxiaochen"
                }], "pageCount": 15, "pageIndex": 1, "pageSize": 5, "totalCount": 71
            }
        });
    });
    //三种信息（待办-待阅-重要提醒）的个数查询-首页
    Mock.mock('mock/fishAjax/IQueryTodoBO/queryOrderNum', function (options) {
        return Mock.mock({
            "resCode": "00000",
            "resMsg": "请求正常",
            "result": {"remind": "13", "todo": "20", "toread": "42"}
        });
    });
    /*
    积分页
     */
    //查询积分列表图标的信息
    Mock.mock('mock/fishAjax/InotesJunZhangDansData/selectEcharsData', function (options) {
        return Mock.mock({
            "loginData": "1083.00",
            "xData": ["集团客户资料", "客户开户", "商机", "拜访", "订购", "情报", "账务"],
            "yData": ["3.80", "1427.00", "14.90", "10.00", "2876.00", "2.22", "0"]
        });
    });
    //读取积分信息
    Mock.mock('mock/fishAjax/InotesJunZhangDansData/selectOpenInteData', function (options) {
        var currentPage = serialize(options.body).pageindex;
        var code = serialize(options.body).params.inte_code;
        switch (code) {
            case "001":
                return Mock.mock(
                    {
                        "list|10":
                            [{
                                "customer_code|+1": 2018020110008181,
                                "name": "@cname()",
                                "score_num": "@natural(1,1000)"
                            },],
                        "pageIndex": currentPage,
                        "pageSize": 10,
                        "totalCount": 100
                    });
            default:
                return Mock.mock(
                    {
                        "list|10":
                            [{
                                "create_time": function () {
                                    return Random.date('yyyy-MM-dd') + ' ' + Random.time('HH:mm:ss')
                                },
                                "customer_code|+1": 2018020110008181,
                                "name": "@cname()",
                                "score_num": "@natural(1,1000)"
                            },],
                        "pageIndex": currentPage,
                        "pageSize": 10,
                        "totalCount": 100
                    });
        }
    });
    //查询个人积分
    Mock.mock('mock/fishAjax/INotesJunZhangDansData/queryPersonScoreList', function (options) {
        var currentPage = serialize(options.body).pageindex;
        return Mock.mock(
            {
                "list|10":
                    [{
                        "xuhao|+1": 1,
                        "orgid": "@natural(1000,1000000)",
                        "uid|+1": 2018020110008181,
                        "nickname": "@cname()",
                        "org_name": "@word()",
                        "idcard|1": ['esop/images/scoreboard/man.png','esop/images/scoreboard/woman.png'],
                        "medal_num": "@integer(1,100)",
                        "golden_num": "@integer(1,10)",
                        "siliver_num": "@integer(1,50)",
                        "copper_num": "@integer(1,100)",
                        "appreciate_num": "@integer(1,100)",
                        "score": "@natural(1,1000)"
                    }],
                "pageIndex": currentPage,
                "pageSize": 10,
                "totalCount": 100
            });
    });
    //查询点赞数量
    Mock.mock('mock/fishAjax/InotesJunZhangDansData/getPraiseNumber', function (options) {
        var currentPage = serialize(options.body).pageindex;
        return Mock.mock(
            {
                "list|10":
                    [{
                        "xuhao|+1": 1,
                        "orgid": "@natural(1000,1000000)",
                        "uid|+1": 2018020110008181,
                        "nickname": "@cname()",
                        "org_name": "@word()",
                        "idcard|1": ['esop/images/scoreboard/man.png','esop/images/scoreboard/woman.png'],
                        "medal_num": "@natural(1,100)",
                        "golden_num": "@natural(1,10)",
                        "siliver_num": "@natural(1,50)",
                        "copper_num": "@natural(1,100)",
                        "score": "@natural(1,1000)"
                    }],
                "pageIndex": currentPage,
                "pageSize": 10,
                "totalCount": 100
            });
    });
    //点赞
    Mock.mock('mock/fishAjax/INotesJunZhangDansData/praiseForOther', function (options) {
        var puid = serialize(options.body).puid;
        return Mock.mock(
            {
                "code":'0000',
                "msg":"成功"
            });
    });
    //查询部门积分
    Mock.mock('mock/fishAjax/INotesJunZhangDansData/queryDepartmentScoreList', function (options) {
        var currentPage = serialize(options.body).pageindex;
        return Mock.mock(
            {
                "list|10":
                    [{
                        "xuhao|+1": 1,
                        "orgid": "@natural(1000,1000000)",
                        "nickname": "@cname()",
                        "org_name": "@word()",
                        "idcard|1": ['esop/images/scoreboard/1.png','esop/images/scoreboard/2.png',
                            'esop/images/scoreboard/3.png','esop/images/scoreboard/4.png',
                            'esop/images/scoreboard/5.png','esop/images/scoreboard/6.png',
                            'esop/images/scoreboard/7.png','esop/images/scoreboard/8.png'],
                        "medal_num": "@natural(1,100)",
                        "golden_num": "@natural(1,10)",
                        "men": "@natural(1,1000)"
                    }],
                "pageIndex": currentPage,
                "pageSize": 10,
                "totalCount": 100
            });
    });
    /*
    消息提醒功能
     */

    //代办待阅 - 代办
    var serialize = function(str) {
        if (str == '') {
            return {}
        }
        //修复 jquery.serialize() 会把空格转成'+'的坑
        var str = str.replace(/\+/g, " ");
        var obj = {};
        var params = str.split('&');
        for (var i = 0; i < params.length; i++) {
            var val = params[i].split("=");
            //多选的select，在jquery.serialize()的时候名称都是相同的，如右：rules=1&rules=3
            //这个时候需要把值以数组的形式保存，如右：rules：[1,3]
            if (obj[val[0]]) {
                var arr = [];
                Object.prototype.toString.call(obj[val[0]]) === "[object Array]" ? arr = arr.concat(obj[val[0]]) : arr.push(obj[val[0]]);
                arr.push(unescape(val[1]));
                obj[val[0]] = arr;
            } else {
                obj[val[0]] = unescape(val[1])
            }
        }
        return obj
    };
    Mock.mock('mock/fishAjax/IQueryTodoBO/queryToDoList', function(options) {
        var currentPage = serialize(options.body).currentPage;
        return Mock.mock({
            "resCode": "00000",
            "resMsg": "请求正常",
            "result": {
                "list|10": [{
                    "apply_order_id": "@natural(1,1000000)",
                    "create_date": function() {
                        return Random.date('yyyy-MM-dd') + ' ' + Random.time('HH:mm:ss')
                    },
                    "curr_operator": "fanxiaochen",
                    "flow_operator": "fanxiaochen",
                    "flow_operator_name": "@cname()",
                    "order_name": "@cword(5,15)",
                    "pre_operator_name": "@cname()",
                    "tache_name": function() {
                        var str = '';
                        switch (this.typecode) {
                            case '009':
                                //销售铁三角项目奖励
                                str = '新增项目奖励立项申请';
                                break;
                            case '010':
                                str = '续签项目奖励立项申请';
                                break;
                            case '012':
                                str = '新增项目（售前阶段）奖励发放申请';
                                break;
                            case '013':
                                str = '新增项目（售中阶段）奖励发放申请';
                                break;
                            case '014':
                                str = '新增项目（售后阶段）奖励发放申请';
                                break;
                            case '015':
                                str = '续签项目（售前阶段）奖励发放申请';
                                break;
                            case '016':
                                str = '续签项目（售中阶段）奖励发放申请';
                                break;
                            case '017':
                                str = '续签项目（售后阶段）奖励发放申请';
                                break;
                            case '018':
                                str = '奖励阶段价值系数调整申请';
                                break;
                            case '019':
                                str = '奖金分配调整申请';
                                break;
                            case '028':
                                str = '账号审批';
                                break;
                            case '029':
                                str = '工作组审批';
                                break;
                            case '031':
                                str = '战略客户签约覆盖奖申请';
                                break;
                            case '032':
                                str = '和教育工单';
                                break;
                            case '040':
                                str = '创新产品突破奖申请';
                                break;
                            case '060':
                                str = "大单奖新增立项申请";
                                break;
                            case '061':
                                str = "大单奖续签立项申请";
                                break;
                            case '062':
                                str = "新增项目（售前阶段）奖励发放申请";
                                break;
                            case '063':
                                str = "新增项目（售中阶段）奖励发放申请";
                                break;
                            case '064':
                                str = "新增项目（售后阶段）奖励发放申请";
                                break;
                            case '065':
                                str = "续签项目（售前阶段）奖励发放申请";
                                break;
                            case '066':
                                str = "续签项目（售中阶段）奖励发放申请";
                                break;
                            case '067':
                                str = "续签项目（售后阶段）奖励发放申请";
                                break;
                            case '068':
                                str = "奖金分配调整申请";
                                break;
                            default:
                                str = "其他";                                
                        }
                        return str;
                    },
                    "todo_seq": "1487940046847",
                    "type_name|1": function(){
                        var str = '';
                        if(this.typecode == '009' || this.typecode == '010' || this.typecode == '012' || this.typecode == '013' || this.typecode == '014' || this.typecode == '015' || this.typecode == '016' || this.typecode == '017' || this.typecode == '018' || this.typecode == '019' ){
                           str = '销售铁三角项目奖励';
                        }else if(this.typecode == '028' || this.typecode == '029'){
                           str = '账号管理';
                        }else if(this.typecode == '031'){
                           str = '战略客户签约覆盖奖申请';
                        }else if(this.typecode == '032'){
                           str = '和教育工单';
                        }else if(this.typecode == '040'){
                           str = '创新产品突破奖申请';
                        }else if(this.typecode == '060' || this.typecode == '061' || this.typecode == '062' || this.typecode == '063' || this.typecode == '064' || this.typecode == '065' || this.typecode == '066'|| this.typecode == '067'|| this.typecode == '068'){
                           str = '产品大单奖';
                        }
                        return str;
                    },
                    "typecode|1": ['009', '010', '012', '013', '014', '015', '016', '017', '018', '019', '031', '040', '032', '028', '029', '060', '061', '062', '063', '064', '065', '066', '067', '068'],
                    "url": "/provinceCompany/orderProduct/provinceOrderApprove.jsp",
                    "url_param": "orderId",
                    "url_param_value": "apply_order_id"
                }],
                "total": '7', //总页数
                "totalRow": "61", //总记录数
                "page": currentPage, //当前页码
            }
        })
    });
    Mock.mock('mock/fishAjax/IIndexPageBO/quertToReadnew', function(options) {
        var currentPage = serialize(options.body).currentPage;
        return Mock.mock({
            "resCode": "00000",
            "resMsg": "请求正常",
            "result": {
                "list|10": [{
                    "apply_order_id": "@natural(1,1000000)",
                    "create_date": function() {
                        return Random.date('yyyy-MM-dd') + ' ' + Random.time('HH:mm:ss')
                    },
                    "create_user_name": "fanxiaochen",
                    "cust_name": "@cname()",
                    "key_params":'',
                    "ncust_code":'',
                    "order_name": "@cword(5,15)",
                    "order_type": "",
                    "read_content": "",
                    "read_id": "@natural(1,1000000)",
                    "read_state": "0",
                    "read_type": "40",
                    "receiver": "@cname()",
                    "send_code": "000"
                }],
                "pageCount": '7', //总页数
                "totalCount": "61", //总记录数
                "pageIndex": currentPage, //当前页码
                "pageSize": 5
            }
        })
    });

    Mock.mock('mock/fishAjax/IQueryTodoBO/getTaskConditionEnum', {
            "resCode": "00000",
            "resMsg": "请求正常",
            "result": {
                "orderType": [{
                    "pcode": "30010",
                    "pname": "订单审核"
                }, {
                    "pcode": "30011",
                    "pname": "资源管理"
                }, {
                    "pcode": "30012",
                    "pname": "发票管理"
                }, {
                    "pcode": "30013",
                    "pname": "账务审核"
                }, {
                    "pcode": "30015",
                    "pname": "代理商管理"
                }, {
                    "pcode": "30016",
                    "pname": "客户管理"
                }, {
                    "pcode": "30018",
                    "pname": "售前协作单"
                }, {
                    "pcode": "30021",
                    "pname": "销售铁三角项目奖励"
                }, {
                    "pcode": "30022",
                    "pname": "知识库管理"
                }, {
                    "pcode": "30024",
                    "pname": "报价审批"
                }, {
                    "pcode": "30025",
                    "pname": "账号管理"
                }, {
                    "pcode": "030",
                    "pname": "后评估打分"
                }, {
                    "pcode": "031",
                    "pname": "战略客户签约覆盖奖申请"
                }, {
                    "pcode": "032",
                    "pname": "和教育工单"
                }, {
                    "pcode": "040",
                    "pname": "创新产品突破奖申请"
                }, {
                    "pcode": "035",
                    "pname": "营销管理"
                }, {
                    "pcode": "050",
                    "pname": "长流程预约单审批"
                }, {
                    "pcode": "051",
                    "pname": "长流程预约单审批ESOP端"
                }, {
                    "pcode": "052",
                    "pname": "角色分配"
                }, {
                    "pcode": "30013",
                    "pname": "智能硬件审批"
                }, {
                    "pcode": "30013",
                    "pname": "智能硬件退货审批"
                }, {
                    "pcode": "032",
                    "pname": "产品资费录入"
                }, {
                    "pcode": "080",
                    "pname": "080test"
                }],
                "staffOrg": [{
                    "pcode": "1.3",
                    "pkey": "3",
                    "pname": "综合部"
                }, {
                    "pcode": "1.4",
                    "pkey": "4",
                    "pname": "发展战略部"
                }, {
                    "pcode": "1.5",
                    "pkey": "5",
                    "pname": "财务部"
                }, {
                    "pcode": "1.6",
                    "pkey": "6",
                    "pname": "市场经营部"
                }, {
                    "pcode": "1.7",
                    "pkey": "7",
                    "pname": "党政军客户解决方案部"
                }, {
                    "pcode": "1.8",
                    "pkey": "8",
                    "pname": "金融行业解决方案部"
                }, {
                    "pcode": "1.9",
                    "pkey": "9",
                    "pname": "互联网解决方案部"
                }, {
                    "pcode": "1.10",
                    "pkey": "10",
                    "pname": "工业和能源行业解决方案部"
                }, {
                    "pcode": "1.11",
                    "pkey": "11",
                    "pname": "产品一中心"
                }, {
                    "pcode": "1.12",
                    "pkey": "12",
                    "pname": "云计算中心"
                }, {
                    "pcode": "1.13",
                    "pkey": "13",
                    "pname": "教育行业解决方案部"
                }, {
                    "pcode": "1.14",
                    "pkey": "14",
                    "pname": "医疗行业解决方案部"
                }, {
                    "pcode": "1.15",
                    "pkey": "15",
                    "pname": "交通行业解决方案部"
                }, {
                    "pcode": "1.16",
                    "pkey": "16",
                    "pname": "产品二中心"
                }, {
                    "pcode": "1.17",
                    "pkey": "17",
                    "pname": "企业管理创新中心"
                }, {
                    "pcode": "1.19",
                    "pkey": "19",
                    "pname": "服务支撑中心"
                }, {
                    "pcode": "1.20",
                    "pkey": "20",
                    "pname": "业务支撑中心"
                }, {
                    "pcode": "1.25",
                    "pkey": "25",
                    "pname": "计划采购部"
                }, {
                    "pcode": "1.26",
                    "pkey": "26",
                    "pname": "人力资源部"
                }, {
                    "pcode": "1.27",
                    "pkey": "27",
                    "pname": "党群工作部"
                }, {
                    "pcode": "1.28",
                    "pkey": "28",
                    "pname": "百度项目工程办公室"
                }, {
                    "pcode": "1.29",
                    "pkey": "29",
                    "pname": "省公司"
                }, {
                    "pcode": "1.30",
                    "pkey": "30",
                    "pname": "纪检监察室"
                }, {
                    "pcode": "1.31",
                    "pkey": "31",
                    "pname": "全通改革工作小组"
                }, {
                    "pcode": "1.84",
                    "pkey": "84",
                    "pname": "在线服务公司"
                }, {
                    "pcode": "1.2942",
                    "pkey": "2942",
                    "pname": "农商行业解决方案部"
                }, {
                    "pcode": "294203.294204",
                    "pkey": "294204",
                    "pname": "产品事业部"
                }, {
                    "pcode": "1.29200916",
                    "pkey": "29200916",
                    "pname": "cs_007测试"
                }, {
                    "pcode": "1.29200920",
                    "pkey": "29200920",
                    "pname": "测试0201-001"
                }, {
                    "pcode": "1.29200934",
                    "pkey": "29200934",
                    "pname": "梁山好汉"
                }, {
                    "pcode": "1.29200938",
                    "pkey": "29200938",
                    "pname": "测试app修改机构"
                }, {
                    "pcode": "1.29200940",
                    "pkey": "29200940",
                    "pname": "修改一个app机构"
                }, {
                    "pcode": "1.29200941",
                    "pkey": "29200941",
                    "pname": "村上春树"
                }, {
                    "pcode": "1.29200950",
                    "pkey": "29200950",
                    "pname": "计划采购部"
                }, {
                    "pcode": "1.29211415",
                    "pkey": "29211415",
                    "pname": "测试部门修改"
                }]
            }
    });



    //产品大厅 -购物车
    Mock.mock('mock/fishAjax/IProductHallBO/queryShoppingCart', function(options) {
        var currentPage = options.body.currentPage;
        console.log("购物车服务器请求，请求报文:"+JSON.stringify(options));
        return Mock.mock({
            "resCode": "00000",
            "resMsg": "请求正常",
            "result": {
                    "list|10": [{
                        "id":function () {
                            return Random.int(1,1000);
                        },
                        "product_name":"会议助理",
                        "product_icon":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531894678&di=118ce8abd03a14cdd321895fd3a14090&imgtype=jpg&er=1&src=http%3A%2F%2Ffile.chnsourcing.com.cn%2F2015%2F03%2F14276804348401.jpg",
                        "order_info":"xxxxxxxxxxx",
                        "customer_name":"阿里巴巴",
                    }],
                    "total": '7', //总页数
                    "totalRow": "61", //总记录数
                    "page": currentPage, //当前页码
            }
        })
    });

    //集团客户弹窗查询
    Mock.mock('mock/fishAjax/fishAjax/ICustomerManageBO/getCustsByName', function(options) {
        var currentPage = options.body.currentPage;
        console.log("集团客户弹窗查询服务器请求，请求报文:"+JSON.stringify(options));
        return Mock.mock({
            "resCode": "00000",
            "resMsg": "请求正常",
            "result": {
                "outputPara":{
                    "list|5": [{
                        "customer_code":function () {
                            return Random.int(1,1000);
                        },
                        "customer_name":"阿里巴巴",
                    }],
                    "total": '7', //总页数
                    "totalRow": "61", //总记录数
                    "page": currentPage, //当前页码
                },
                "bizCode":"0000",
                "bizDesc":"成功"
            }
        })
    });

    //和教育产品查询
    Mock.mock('mock/fishAjax/IOrderManageBO2/getEduProduct', function(options) {
        var currentPage = options.body.currentPage;
        console.log("和教育产品查询服务器请求，请求报文:"+JSON.stringify(options));
        return Mock.mock({
            "resCode": "00000",
            "resMsg": "请求正常",
            "result": {
                    "list|5": [{
                        "product_code":function () {
                            return Random.int(1,1000);
                        },
                        "product_name":"每日精练",
                        "fee_remark":"每日精炼"+Random.int(1,100)+"天",
                        "dbi_name":"每日精炼费",
                        "product_remark":"每日精炼"+Random.int(1,100)+"天"
                    }],
                    "total": '7', //总页数
                    "totalCount": "61", //总记录数
                    "page": currentPage, //当前页码
            }
        })
    });
    Mock.mock('mock/fishAjax/IQueryTodoBO/getTaskConditionEnum', {
        "resCode": "00000",
        "resMsg": "请求正常",
        "result": {
            "orderType": [{
                "pcode": "30010",
                "pname": "订单审核"
            }, {
                "pcode": "30011",
                "pname": "资源管理"
            }, {
                "pcode": "30012",
                "pname": "发票管理"
            }, {
                "pcode": "30013",
                "pname": "账务审核"
            }, {
                "pcode": "30015",
                "pname": "代理商管理"
            }, {
                "pcode": "30016",
                "pname": "客户管理"
            }, {
                "pcode": "30018",
                "pname": "售前协作单"
            }, {
                "pcode": "30021",
                "pname": "销售铁三角项目奖励"
            }, {
                "pcode": "30022",
                "pname": "知识库管理"
            }, {
                "pcode": "30024",
                "pname": "报价审批"
            }, {
                "pcode": "30025",
                "pname": "账号管理"
            }, {
                "pcode": "030",
                "pname": "后评估打分"
            }, {
                "pcode": "031",
                "pname": "战略客户签约覆盖奖申请"
            }, {
                "pcode": "032",
                "pname": "和教育工单"
            }, {
                "pcode": "040",
                "pname": "创新产品突破奖申请"
            }, {
                "pcode": "035",
                "pname": "营销管理"
            }, {
                "pcode": "050",
                "pname": "长流程预约单审批"
            }, {
                "pcode": "051",
                "pname": "长流程预约单审批ESOP端"
            }, {
                "pcode": "052",
                "pname": "角色分配"
            }, {
                "pcode": "30013",
                "pname": "智能硬件审批"
            }, {
                "pcode": "30013",
                "pname": "智能硬件退货审批"
            }, {
                "pcode": "032",
                "pname": "产品资费录入"
            }, {
                "pcode": "080",
                "pname": "080test"
            }],
            "staffOrg": [{
                "pcode": "1.3",
                "pkey": "3",
                "pname": "综合部"
            }, {
                "pcode": "1.4",
                "pkey": "4",
                "pname": "发展战略部"
            }, {
                "pcode": "1.5",
                "pkey": "5",
                "pname": "财务部"
            }, {
                "pcode": "1.6",
                "pkey": "6",
                "pname": "市场经营部"
            }, {
                "pcode": "1.7",
                "pkey": "7",
                "pname": "党政军客户解决方案部"
            }, {
                "pcode": "1.8",
                "pkey": "8",
                "pname": "金融行业解决方案部"
            }, {
                "pcode": "1.9",
                "pkey": "9",
                "pname": "互联网解决方案部"
            }, {
                "pcode": "1.10",
                "pkey": "10",
                "pname": "工业和能源行业解决方案部"
            }, {
                "pcode": "1.11",
                "pkey": "11",
                "pname": "产品一中心"
            }, {
                "pcode": "1.12",
                "pkey": "12",
                "pname": "云计算中心"
            }, {
                "pcode": "1.13",
                "pkey": "13",
                "pname": "教育行业解决方案部"
            }, {
                "pcode": "1.14",
                "pkey": "14",
                "pname": "医疗行业解决方案部"
            }, {
                "pcode": "1.15",
                "pkey": "15",
                "pname": "交通行业解决方案部"
            }, {
                "pcode": "1.16",
                "pkey": "16",
                "pname": "产品二中心"
            }, {
                "pcode": "1.17",
                "pkey": "17",
                "pname": "企业管理创新中心"
            }, {
                "pcode": "1.19",
                "pkey": "19",
                "pname": "服务支撑中心"
            }, {
                "pcode": "1.20",
                "pkey": "20",
                "pname": "业务支撑中心"
            }, {
                "pcode": "1.25",
                "pkey": "25",
                "pname": "计划采购部"
            }, {
                "pcode": "1.26",
                "pkey": "26",
                "pname": "人力资源部"
            }, {
                "pcode": "1.27",
                "pkey": "27",
                "pname": "党群工作部"
            }, {
                "pcode": "1.28",
                "pkey": "28",
                "pname": "百度项目工程办公室"
            }, {
                "pcode": "1.29",
                "pkey": "29",
                "pname": "省公司"
            }, {
                "pcode": "1.30",
                "pkey": "30",
                "pname": "纪检监察室"
            }, {
                "pcode": "1.31",
                "pkey": "31",
                "pname": "全通改革工作小组"
            }, {
                "pcode": "1.84",
                "pkey": "84",
                "pname": "在线服务公司"
            }, {
                "pcode": "1.2942",
                "pkey": "2942",
                "pname": "农商行业解决方案部"
            }, {
                "pcode": "294203.294204",
                "pkey": "294204",
                "pname": "产品事业部"
            }, {
                "pcode": "1.29200916",
                "pkey": "29200916",
                "pname": "cs_007测试"
            }, {
                "pcode": "1.29200920",
                "pkey": "29200920",
                "pname": "测试0201-001"
            }, {
                "pcode": "1.29200934",
                "pkey": "29200934",
                "pname": "梁山好汉"
            }, {
                "pcode": "1.29200938",
                "pkey": "29200938",
                "pname": "测试app修改机构"
            }, {
                "pcode": "1.29200940",
                "pkey": "29200940",
                "pname": "修改一个app机构"
            }, {
                "pcode": "1.29200941",
                "pkey": "29200941",
                "pname": "村上春树"
            }, {
                "pcode": "1.29200950",
                "pkey": "29200950",
                "pname": "计划采购部"
            }, {
                "pcode": "1.29211415",
                "pkey": "29211415",
                "pname": "测试部门修改"
            }]
        }
    });
})

