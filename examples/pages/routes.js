module.exports = [
    {
        path: '/',
        redirect: '/index'
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
      path: '/components/trader/appoint/:id',
      name: 'Appoint',
      component: require('./components/trader/Appoint.vue'),
        meta: {
            doc_title: '确认订单信息',
            depth: 20
        }
    },
    {
      path: '/components/trader/vouchers',
      name: 'VoucherSelect',
      component: require('./components/trader/VoucherSelect.vue'),
        meta: {
            doc_title: '代金券',
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
            doc_title: '团课详细',
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
    }
];
