import Mock from 'mockjs'
const proxy = {
  'GET /home/newhome': (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(Mock.mock(
      {
        "message": "",
        "code": 200,
        "data": {
          "banners": [
            {
              "id": "1",
              "url": "https://www.qianshengqian.com/activity2/new-user/#/index",
              "img": "https://qsqweb-10000035.image.myqcloud.com/7a147bf12471a1c860303358498d2111.png",
              "img_x": "https://qsqweb-10000035.image.myqcloud.com/e1276a9c31250145e9beeb699095560f.png",
              "target": ""
            },
            {
              "id": "640",
              "url": "https://www.qianshengqian.com/activity2/luckday/#/detail/1212",
              "img": "https://qsqweb-10000035.image.myqcloud.com/819df6a34523e7891ac7f45160b0d746.png",
              "img_x": "https://qsqweb-10000035.image.myqcloud.com/819df6a34523e7891ac7f45160b0d746.png",
              "target": "self"
            },
            {
              "id": "637",
              "url": "https://www.qianshengqian.com/activity2/commonweal/#/one-period",
              "img": "https://qsqweb-10000035.image.myqcloud.com/8bbf1657ce9f68617f7b1b7c89040c13.png",
              "img_x": "https://qsqweb-10000035.image.myqcloud.com/d2958560f31b70a90f5b6cb69612cf1d.png",
              "target": "self"
            },
            {
              "id": "580",
              "url": "http://dwz.cn/66Ht2M",
              "img": "https://qsqweb-10000035.image.myqcloud.com/4116c0f48e9361ef737d0e15ea3811a4.png",
              "img_x": "https://qsqweb-10000035.image.myqcloud.com/4116c0f48e9361ef737d0e15ea3811a4.png",
              "target": "self"
            }
          ],
          "news": [
            {
              "news_title": "钱牛牛获京东金融B+轮战略融资",
              "news_url": "http://mp.weixin.qq.com/s?__biz=MzU0NjExODQ2Ng==&amp;mid=2247485482&amp;idx=1&amp;sn=dab8a7d0eda58328c6205bfaad8c8fe7",
              "news_title_color": "#89612E"
            },
            {
              "news_title": "钱牛牛受邀出席2016年世界互联网大会",
              "news_url": "http://mp.weixin.qq.com/s?__biz=MzUyMTExNzAyNA==&amp;mid=2247491100&amp;idx=2&amp;sn=036f8278bf38cfd42f343460aeae2e3d",
              "news_title_color": "#89612E"
            },
            {
              "news_title": "“元方”云风控系统反欺诈识别全面升级",
              "news_url": "http://wap.zqcn.com.cn/qiye/content/201609/21/c484760.html",
              "news_title_color": "#89612E"
            },
            {
              "news_title": "钱升钱品牌升级“钱牛牛” 现金贷、云风控产品亮相",
              "news_url": "http://xw.qq.com/sh/20160920049702/SH2016092004970200?from=singlemessage&isappinstalled=0",
              "news_title_color": "#89612E"
            }
          ],
          "hot": [
            {
              "img": "https://cdn.qianshengqian.com/asset/image/api3/icons/api_version_one_1.png?version=2",
              "float_img": "",
              "url": "https://www.qianshengqian.com/mobile/active/may_invita_gift/#/index",
              "title": "邀请有礼",
              "title_color": "#575757",
              "jump_id": 0,
              "need_login": false,
              "cid": "9001001001"
            },
            {
              "img": "https://cdn.qianshengqian.com/asset/image/api3/icons/api_version_one_5.png?version=2",
              "float_img": "",
              "url": "https://www.qianshengqian.com/mobile/active/mission/#/index",
              "title": "新手任务",
              "title_color": "#575757",
              "jump_id": 0,
              "need_login": true,
              "cid": "9001001023"
            },
            {
              "img": "https://cdn.qianshengqian.com/asset/image/api3/icons/api_version_one_3.png?version=2",
              "float_img": "https://cdn.qianshengqian.com/asset/image/api3/icons/api_version_one_3_float_img.png",
              "url": "https://www.qianshengqian.com/activity2/que/#/index",
              "title": "平台介绍",
              "title_color": "#575757",
              "jump_id": 0,
              "need_login": false,
              "cid": "9001001004"
            },
            {
              "img": "https://cdn.qianshengqian.com/asset/image/api3/icons/api_version_one_4.png?version=2",
              "float_img": "",
              "url": "https://www.qianshengqian.com/api3/m/shakeinit?from_app=1&user_token=",
              "title": "摇一摇",
              "title_color": "#575757",
              "jump_id": 0,
              "need_login": true,
              "cid": "9001001009"
            }
          ],
          "invest": {
            "invest_num": "3,005,654",
            "invest_total": "20,471,142,734.47",
            "invest_times": {
              "times": "3,005,654",
              "click": true,
              "url": "https://www.qianshengqian.com/activity2/que/#/data171201"
            },
            "invest_amont": {
              "amount": "20,471,142,734.47",
              "click": false,
              "url": ""
            },
            "invest_url": "https://www.qianshengqian.com/activity2/que/#/data171201"
          },
          "float_entry": {
            "is_show": true,
            "type": "web",
            "img_url": "https://qsqweb-10000035.image.myqcloud.com/d2399b747709b483f502240cfc025490.png",
            "target": "https://www.qianshengqian.com/mobile/active/mission/#/index",
            "need_login": true
          },
          "products": [
            {
              "cat_color": "",
              "cat_title": "新手宝计划",
              "cat_title_desc": {
                "front": "新手宝计划",
                "back": "",
                "front_color": "#333333",
                "back_color": "#747474"
              },
              "title_color": "#333333",
              "cat_desc": "新手首投专享",
              "desc_color": "#9E9E9E",
              "title_desc": "",
              "title_desc_color": "",
              "show_img": "",
              "records": [
                {
                  "type": "1",
                  "p_type": "10",
                  "pid": "20010",
                  "middle_title": "",
                  "middle_desc": "持有期7天",
                  "lock_days": 7,
                  "detail_url": "https://www.qianshengqian.com/mobile/#/product-novice-detail/20010?ptype=10",
                  "right_title": "",
                  "right_desc": "持有期7天",
                  "button": "立即投资",
                  "cid": "9001002005020010",
                  "color": {
                    "title_color": "#383838",
                    "rate": "#E33133",
                    "rate_desc": "#A0A0A0",
                    "middle_title": "#A0A0A0",
                    "middle_desc": "#A0A0A0",
                    "right_title": "",
                    "right_desc": "",
                    "rate_add_color": "#FFFFFF"
                  },
                  "bid": "9001002006020010",
                  "float_type": 1,
                  "title": "新手宝计划",
                  "title_description": {
                    "front": "新手宝计划",
                    "back": "",
                    "front_color": "#383838",
                    "back_color": "#747474"
                  },
                  "has_title": "1",
                  "today_num": "74314",
                  "img": "",
                  "status": 1,
                  "min_buy": "100起投",
                  "max_buy": "20,000.00",
                  "min_buy_amount": "100",
                  "is_vip_product": false,
                  "is_activity_product": false,
                  "vip_img": "",
                  "is_prebuy": "0",
                  "sell_out_img": "",
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
              ]
            },
            {
              "cat_color": "",
              "cat_title": "牛牛公益 - 1计划",
              "cat_title_desc": {
                "front": "牛牛公益 - 1计划",
                "back": "",
                "front_color": "#333333",
                "back_color": "#747474"
              },
              "title_color": "#333333",
              "cat_desc": "存越久 赚越多",
              "desc_color": "#9E9E9E",
              "title_desc": "",
              "title_desc_color": "",
              "show_img": "https://qsqweb-10000035.image.myqcloud.com/6b61f0ad2516d714ce22639da45e6aae.png",
              "records": [
                {
                  "type": "1",
                  "p_type": "8",
                  "pid": "20030",
                  "middle_title": "可转让",
                  "middle_desc": "持有90天后",
                  "lock_days": 90,
                  "detail_url": "https://www.qianshengqian.com/mobile/#/product-active-detail/20030?ptype=8&is_vip=6",
                  "right_title": "",
                  "right_desc": "持有90天后可转让",
                  "button": "立即投资",
                  "cid": "9001002013020030",
                  "color": {
                    "title_color": "#383838",
                    "rate": "#E33133",
                    "rate_desc": "#A0A0A0",
                    "middle_title": "#A0A0A0",
                    "middle_desc": "#A0A0A0",
                    "right_title": "",
                    "right_desc": "",
                    "rate_add_color": "#FFFFFF"
                  },
                  "bid": "9001002014020030",
                  "float_type": 1,
                  "title": "牛牛公益 - 1计划",
                  "title_description": {
                    "front": "牛牛公益 - 1计划",
                    "back": "",
                    "front_color": "#383838",
                    "back_color": "#747474"
                  },
                  "has_title": "1",
                  "today_num": "2719",
                  "img": "",
                  "status": 1,
                  "min_buy": "500起投",
                  "max_buy": "0.00",
                  "min_buy_amount": "500",
                  "is_vip_product": false,
                  "is_activity_product": false,
                  "vip_img": "",
                  "is_prebuy": "0",
                  "sell_out_img": "",
                  "rate": "7.50",
                  "rate_desc": "历史年化收益率",
                  "rate_range": [],
                  "rate_add": "",
                  "rate_add_value": 0,
                  "rate_add_desc": "加息利率",
                  "min_rate_integer": "7.50",
                  "min_rate_decimal": "%",
                  "max_rate_integer": "",
                  "max_rate_decimal": "",
                  "use_range_revenue": false
                }
              ]
            }
          ],
          "is_login": false,
          "wechat_status": false
        }
      }
    ));
  }
};

// 调用 delay 函数，统一处理
export default proxy
