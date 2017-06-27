module.exports = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: 'login',
        path: '/login',
        component: require('./components/login/Login.vue'),
        meta: {
            doc_title: '绑定手机号码',
            depth: 10
        }
    },
    {
        name: 'useragreement',
        path: '/login/useragreement',
        component: require('./components/login/UserAgreement.vue'),
        meta: {
            doc_title: '用户服务协议',
            depth: 10
        }
    },
    {
        name: 'myappoint',
        path: '/components/myappoint',
        component: require('./components/myappoint/MyAppoint.vue'),
        meta: {
            doc_title: '我的预约',
            depth: 10
        }
    },
    {
        name: 'personal',
        path: '/components/personal',
        component: require('./components/personal/Personal.vue'),
        meta: {
            doc_title: '个人中心',
            depth: 10
        }
    },
    {
        name: 'historybill',
        path: '/personal/historybill',
        component: require('./components/personal/HistoryBill.vue'),
        meta: {
            doc_title: '历史账单',
            depth: 10
        }
    },
    {
      path: '/personal/vouchers',
      name: 'MyVouchers',
      component: require('./components/personal/MyVouchers.vue'),
        meta: {
            doc_title: '我的代金券',
            depth: 20
        }
    },
    {
        name: 'traderecord',
        path: '/personal/traderecord',
        component: require('./components/personal/TradeRecord.vue'),
        meta: {
            doc_title: '训练记录',
            depth: 10
        }
    },
    {
        name: 'appointgroup',
        path: '/personal/appointgroup',
        component: require('./components/personal/AppointGroup.vue'),
        meta: {
            doc_title: '已预约团课',
            depth: 10
        }
    },
    {
        name: 'appointtrader',
        path: '/personal/appointtrader',
        component: require('./components/personal/AppoinTrader.vue'),
        meta: {
            doc_title: '已预约私教',
            depth: 10
        }
    },
    {
        name: 'appointcampus',
        path: '/personal/appointcampus',
        component: require('./components/personal/AppointCampus.vue'),
        meta: {
            doc_title: '已报名训练营',
            depth: 10
        }
    },
    {
        name: 'info',
        path: '/personal/info',
        component: require('./components/personal/Info.vue'),
        meta: {
            doc_title: '用户信息',
            depth: 10
        }
    },
    {
        name: 'index',
        path: '/index',
        component: require('./index.vue'),
        meta: {
            doc_title: '操场',
            depth: 10
        }
    },
    {
      path: '/components/trader',
      name: 'PrivateTrader',
      component: require('./components/trader/PrivateTrader.vue'),
        meta: {
            doc_title: '约私教',
            depth: 20
        }
    },
    {
      path: '/components/trader/detail/:id',
      name: 'TraderDetail',
      component: require('./components/trader/TraderDetail.vue'),
        meta: {
            doc_title: '约私教',
            depth: 20
        }
    },
    {
      path: '/components/appoint/:id',
      name: 'Appoint',
      component: require('./components/submitorder/Appoint.vue'),
        meta: {
            doc_title: '确认订单信息',
            depth: 20
        }
    },
    {
      path: '/components/recharge',
      name: 'Recharge',
      component: require('./components/Recharge.vue'),
        meta: {
            doc_title: '充值',
            depth: 20
        }
    },
    {
      path: '/components/recommend',
      name: 'recommend',
      component: require('./components/recommend/Recommend.vue'),
        meta: {
            doc_title: '邀请',
            depth: 20
        }
    },
    {
      path: '/components/beinvitated',
      name: 'beinvitated',
      component: require('./components/recommend/BeInvitated.vue'),
        meta: {
            doc_title: '邀请有礼',
            depth: 20
        }
    },
    {
      path: '/components/vouchers',
      name: 'VoucherSelect',
      component: require('./components/submitorder/VoucherSelect.vue'),
        meta: {
            doc_title: '选择代金券',
            depth: 20
        }
    },
    {
      path: '/components/group',
      name: 'Group',
      component: require('./components/group/Group.vue'),
        meta: {
            doc_title: '约团课',
            depth: 20
        }
    },
    {
      path: '/components/group/detail/:id',
      name: 'GroupDetail',
      component: require('./components/group/GroupDetail.vue'),
        meta: {
            doc_title: '',
            depth: 20
        }
    },
    {
      path: '/components/playground',
      name: 'PlayGround',
      component: require('./components/playground/PlayGround.vue'),
        meta: {
            doc_title: '训练营',
            depth: 20
        }
    },
    {
      path: '/components/playground/PlayGroundDetail/:id',
      name: 'PlayGroundDetail',
      component: require('./components/playground/PlayGroundDetail.vue'),
        meta: {
            doc_title: '训练营详情',
            depth: 20
        }
    }
];
