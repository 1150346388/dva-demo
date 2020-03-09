import Mock from 'mockjs'
const proxy = {
  'GET /product/detail': (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const { pid } = req.query
    console.log(pid)
    res.send(Mock.mock(
      {
        "20010": {
          "message": "",
          "code": 200,
          "data": {
            "page_title": "新手宝",
            "id": "20010",
            "type": "10",
            "type_desc": "产品类型",
            "name": "新手宝",
            "name_desc": "产品名称",
            "status": 1,
            "status_desc": "产品状态",
            "days": 7,
            "days_desc": "持有天数",
            "is_vip_product": false,
            "is_vip_product_desc": "VIP专享",
            "service_fee": 0,
            "service_fee_desc": "转让变现手续费",
            "service_fee_rate": 0.02,
            "service_fee_rate_desc": "转让变现手续费率",
            "button": {
              "enable": true,
              "type": "buy",
              "text": "立即投资",
              "color": "#F39360",
              "tips": ""
            },
            "activity": true,
            "interest_formula": "amount * days * 15.00 / 36000",
            "transfer_formula": "amount * 2 / 100",
            "show_calculator": true,
            "cal_desc": "",
            "detail": [
              {
                "name": "活动奖励",
                "value": "",
                "action": "",
                "url": "https://www.qianshengqian.com/mobile/active/newbie161111/#/index.html",
                "color": {
                  "name": "#EB3F2C",
                  "value": "#909090"
                }
              },
              {
                "name": "退出说明",
                "value": "持有7天后自动退出",
                "action": "",
                "url": "",
                "color": {
                  "name": "#7D7D7D",
                  "value": "#909090"
                }
              }
            ],
            "min_money": {
              "name": "起投金额（元）",
              "value": 100
            },
            "has_limit": {
              "name": "单笔限额（元）",
              "value": "2万",
              "amount": 20000
            },
            "is_fanli_f0": false,
            "rate": "15.00",
            "rate_desc": "历史年化收益率",
            "rate_range": [],
            "rate_add": "",
            "rate_add_value": 0,
            "rate_add_desc": "加息利率",
            "min_rate_integer": "15.00",
            "min_rate_decimal": "%",
            "max_rate_integer": "",
            "max_rate_decimal": "",
            "use_range_revenue": false
          }
        },
        "20006": { "message": "", "code": 200, "data": { "page_title": "灵活宝", "id": "20006", "type": "6", "type_desc": "产品类型", "name": "灵活宝", "name_desc": "产品名称", "status": 1, "status_desc": "产品状态", "days": 1, "days_desc": "持有天数", "is_vip_product": false, "is_vip_product_desc": "VIP专享", "service_fee": 0, "service_fee_desc": "转让变现手续费", "service_fee_rate": 0, "service_fee_rate_desc": "转让变现手续费率", "button": { "enable": true, "type": "buy", "text": "立即投资", "color": "#F39360", "tips": "" }, "activity": false, "interest_formula": "amount * days * 6.50 \/ 36000", "transfer_formula": "amount * 0 \/ 100", "show_calculator": true, "cal_desc": "", "detail": [{ "name": "投资期限", "value": "无固定期限", "action": "", "url": "", "color": { "name": "#7D7D7D", "value": "#909090" } }], "min_money": { "name": "起投金额（元）", "value": 100 }, "has_limit": { "name": "持有上限（元）", "value": "5万", "amount": 50000 }, "is_fanli_f0": false, "rate": "6.50", "rate_desc": "历史年化收益率", "rate_range": [], "rate_add": "", "rate_add_value": 0, "rate_add_desc": "加息利率", "min_rate_integer": "6.50", "min_rate_decimal": "%", "max_rate_integer": "", "max_rate_decimal": "", "use_range_revenue": false } },
        "20017": { "message": "", "code": 200, "data": { "page_title": "升息宝", "id": "20017", "type": "17", "type_desc": "产品类型", "name": "升息宝", "name_desc": "产品名称", "status": 1, "status_desc": "产品状态", "days": 30, "days_desc": "持有天数", "is_vip_product": false, "is_vip_product_desc": "VIP专享", "service_fee": 0, "service_fee_desc": "转让变现手续费", "service_fee_rate": 0.02, "service_fee_rate_desc": "转让变现手续费率", "button": { "enable": true, "type": "buy", "text": "立即投资", "color": "#F39360", "tips": "" }, "activity": false, "interest_formula": "amount * days * revenue \/ 36000", "transfer_formula": "amount * 2 \/ 100", "show_calculator": true, "cal_desc": "*升息宝收益按阶梯利率计算", "detail": [{ "name": "退出说明", "value": "持有30天后可退出", "action": "", "url": "", "color": { "name": "#7D7D7D", "value": "#909090" } }], "min_money": { "name": "起投金额（元）", "value": 500 }, "has_limit": { "name": "单笔限额（元）", "value": "100万", "amount": 1000000 }, "is_fanli_f0": false, "rate": "6.00", "rate_desc": "历史年化收益率", "rate_range": [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11], "rate_add": "", "rate_add_value": 0, "rate_add_desc": "加息利率", "min_rate_integer": "6", "min_rate_decimal": ".00%~", "max_rate_integer": "11", "max_rate_decimal": ".00%", "use_range_revenue": true } },
        "20007": { "message": "", "code": 200, "data": { "page_title": "灵通宝 - A", "id": "20007", "type": "7", "type_desc": "产品类型", "name": "灵通宝 - A", "name_desc": "产品名称", "status": 1, "status_desc": "产品状态", "days": 30, "days_desc": "持有天数", "is_vip_product": false, "is_vip_product_desc": "VIP专享", "service_fee": 0, "service_fee_desc": "转让变现手续费", "service_fee_rate": 0.02, "service_fee_rate_desc": "转让变现手续费率", "button": { "enable": true, "type": "buy", "text": "立即投资", "color": "#F39360", "tips": "" }, "activity": false, "interest_formula": "amount * days * 7.00 \/ 36000", "transfer_formula": "amount * 2 \/ 100", "show_calculator": true, "cal_desc": "", "detail": [{ "name": "退出说明", "value": "持有30天后可退出", "action": "", "url": "", "color": { "name": "#7D7D7D", "value": "#909090" } }], "min_money": { "name": "起投金额（元）", "value": 500 }, "has_limit": { "name": "单笔限额（元）", "value": "100万", "amount": 1000000 }, "is_fanli_f0": false, "rate": "7.00", "rate_desc": "历史年化收益率", "rate_range": [], "rate_add": "", "rate_add_value": 0, "rate_add_desc": "加息利率", "min_rate_integer": "7.00", "min_rate_decimal": "%", "max_rate_integer": "", "max_rate_decimal": "", "use_range_revenue": false } },
        "20008": { "message": "", "code": 200, "data": { "page_title": "灵通宝 - B", "id": "20008", "type": "8", "type_desc": "产品类型", "name": "灵通宝 - B", "name_desc": "产品名称", "status": 1, "status_desc": "产品状态", "days": 90, "days_desc": "持有天数", "is_vip_product": false, "is_vip_product_desc": "VIP专享", "service_fee": 0, "service_fee_desc": "转让变现手续费", "service_fee_rate": 0.02, "service_fee_rate_desc": "转让变现手续费率", "button": { "enable": true, "type": "buy", "text": "立即投资", "color": "#F39360", "tips": "" }, "activity": false, "interest_formula": "amount * days * 8.00 \/ 36000", "transfer_formula": "amount * 2 \/ 100", "show_calculator": true, "cal_desc": "", "detail": [{ "name": "退出说明", "value": "持有90天后可退出", "action": "", "url": "", "color": { "name": "#7D7D7D", "value": "#909090" } }], "min_money": { "name": "起投金额（元）", "value": 500 }, "has_limit": { "name": "单笔限额（元）", "value": "100万", "amount": 1000000 }, "is_fanli_f0": false, "rate": "8.00", "rate_desc": "历史年化收益率", "rate_range": [], "rate_add": "", "rate_add_value": 0, "rate_add_desc": "加息利率", "min_rate_integer": "8.00", "min_rate_decimal": "%", "max_rate_integer": "", "max_rate_decimal": "", "use_range_revenue": false } },
        "20009": { "message": "", "code": 200, "data": { "page_title": "灵通宝 - C", "id": "20009", "type": "9", "type_desc": "产品类型", "name": "灵通宝 - C", "name_desc": "产品名称", "status": 1, "status_desc": "产品状态", "days": 180, "days_desc": "持有天数", "is_vip_product": false, "is_vip_product_desc": "VIP专享", "service_fee": 0, "service_fee_desc": "转让变现手续费", "service_fee_rate": 0.02, "service_fee_rate_desc": "转让变现手续费率", "button": { "enable": true, "type": "buy", "text": "立即投资", "color": "#F39360", "tips": "" }, "activity": false, "interest_formula": "amount * days * 9.00 \/ 36000", "transfer_formula": "amount * 2 \/ 100", "show_calculator": true, "cal_desc": "", "detail": [{ "name": "退出说明", "value": "持有180天后可退出", "action": "", "url": "", "color": { "name": "#7D7D7D", "value": "#909090" } }], "min_money": { "name": "起投金额（元）", "value": 500 }, "has_limit": { "name": "单笔限额（元）", "value": "100万", "amount": 1000000 }, "is_fanli_f0": false, "rate": "9.00", "rate_desc": "历史年化收益率", "rate_range": [], "rate_add": "", "rate_add_value": 0, "rate_add_desc": "加息利率", "min_rate_integer": "9.00", "min_rate_decimal": "%", "max_rate_integer": "", "max_rate_decimal": "", "use_range_revenue": false } },
        "20018": { "message": "", "code": 200, "data": { "page_title": "灵通宝 - D", "id": "20018", "type": "18", "type_desc": "产品类型", "name": "灵通宝 - D", "name_desc": "产品名称", "status": 1, "status_desc": "产品状态", "days": 270, "days_desc": "持有天数", "is_vip_product": false, "is_vip_product_desc": "VIP专享", "service_fee": 0, "service_fee_desc": "转让变现手续费", "service_fee_rate": 0.02, "service_fee_rate_desc": "转让变现手续费率", "button": { "enable": true, "type": "buy", "text": "立即投资", "color": "#F39360", "tips": "" }, "activity": false, "interest_formula": "amount * days * 10.00 \/ 36000", "transfer_formula": "amount * 2 \/ 100", "show_calculator": true, "cal_desc": "", "detail": [{ "name": "退出说明", "value": "持有270天后可退出", "action": "", "url": "", "color": { "name": "#7D7D7D", "value": "#909090" } }], "min_money": { "name": "起投金额（元）", "value": 500 }, "has_limit": { "name": "单笔限额（元）", "value": "100万", "amount": 1000000 }, "is_fanli_f0": false, "rate": "10.00", "rate_desc": "历史年化收益率", "rate_range": [], "rate_add": "", "rate_add_value": 0, "rate_add_desc": "加息利率", "min_rate_integer": "10.00", "min_rate_decimal": "%", "max_rate_integer": "", "max_rate_decimal": "", "use_range_revenue": false } },
        "20011": { "message": "", "code": 200, "data": { "page_title": "灵通宝 - E", "id": "20011", "type": "11", "type_desc": "产品类型", "name": "灵通宝 - E", "name_desc": "产品名称", "status": 1, "status_desc": "产品状态", "days": 360, "days_desc": "持有天数", "is_vip_product": false, "is_vip_product_desc": "VIP专享", "service_fee": 0, "service_fee_desc": "转让变现手续费", "service_fee_rate": 0.02, "service_fee_rate_desc": "转让变现手续费率", "button": { "enable": true, "type": "buy", "text": "立即投资", "color": "#F39360", "tips": "" }, "activity": false, "interest_formula": "amount * days * 11.00 \/ 36000", "transfer_formula": "amount * 2 \/ 100", "show_calculator": true, "cal_desc": "", "detail": [{ "name": "退出说明", "value": "持有360天后可退出", "action": "", "url": "", "color": { "name": "#7D7D7D", "value": "#909090" } }], "min_money": { "name": "起投金额（元）", "value": 500 }, "has_limit": { "name": "单笔限额（元）", "value": "100万", "amount": 1000000 }, "is_fanli_f0": false, "rate": "11.00", "rate_desc": "历史年化收益率", "rate_range": [], "rate_add": "", "rate_add_value": 0, "rate_add_desc": "加息利率", "min_rate_integer": "11.00", "min_rate_decimal": "%", "max_rate_integer": "", "max_rate_decimal": "", "use_range_revenue": false } },
        "20012": { "message": "", "code": 200, "data": { "page_title": "灵通宝 - F", "id": "20012", "type": "12", "type_desc": "产品类型", "name": "灵通宝 - F", "name_desc": "产品名称", "status": 1, "status_desc": "产品状态", "days": 360, "days_desc": "持有天数", "is_vip_product": false, "is_vip_product_desc": "VIP专享", "service_fee": 0, "service_fee_desc": "转让变现手续费", "service_fee_rate": 0.02, "service_fee_rate_desc": "转让变现手续费率", "button": { "enable": true, "type": "buy", "text": "立即投资", "color": "#F39360", "tips": "" }, "activity": false, "interest_formula": "amount * days * 12.00 \/ 36000", "transfer_formula": "amount * 2 \/ 100", "show_calculator": true, "cal_desc": "", "detail": [{ "name": "退出说明", "value": "持有360天后可退出", "action": "", "url": "", "color": { "name": "#7D7D7D", "value": "#909090" } }], "min_money": { "name": "起投金额（元）", "value": 100000 }, "has_limit": { "name": "单笔限额（元）", "value": "100万", "amount": 1000000 }, "is_fanli_f0": false, "rate": "12.00", "rate_desc": "历史年化收益率", "rate_range": [], "rate_add": "", "rate_add_value": 0, "rate_add_desc": "加息利率", "min_rate_integer": "12.00", "min_rate_decimal": "%", "max_rate_integer": "", "max_rate_decimal": "", "use_range_revenue": false } }
      }[pid]
    ));
  }
};

// 调用 delay 函数，统一处理
export default proxy
