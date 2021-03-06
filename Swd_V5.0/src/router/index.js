import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
const index = () =>
    import('../views/index/index')
const lectureIndex = () =>
    import('../views/lecture/index')
const lectureSearch = () =>
    import('../views/lecture/search')
const videoDetails = () =>
    import('../views/lecture/videoDetails')
const articleDetails = () =>
    import('../views/lecture/articleDetails')
const test = () =>
    import('../views/test/test')
const chat = () =>
    import('../views/chat/chat')
const friendManage = () =>
    import('../views/friendManage/friendManage')
const activitiesIndex = () =>
    import('../views/publicActivities/activitiesIndex')
const activityRegister = () =>
    import('../views/publicActivities/activityRegister')
const writeAddress = () =>
    import('../views/publicActivities/writeAddress')
const registerDetails = () =>
    import('../views/publicActivities/registerDetails')
const reportDetails = () =>
    import('../views/publicActivities/reportDetails')
const historyTests = () =>
    import('../views/funnyTest/historyTests')
const testResDec = () =>
    import('../views/funnyTest/testResDec')
const interestIndex = () =>
    import('../views/funnyTest/interestIndex')
const interestTest = () =>
    import('../views/funnyTest/interestTest')
const healthReportList = () =>
    import('../views/healthReport/healthReportList')
const healthReportDetails = () =>
    import('../views/healthReport/healthReportDetails')
const downloadAPP = () =>
    import('../views/downloadAPP/downloadAPP')
const prescriptionDetail = () =>
    import('../views/prescriptionDetail/prescriptionDetail')
const examinationData = () =>
    import('../views/examinationData/examinationData')
const filloutInfoPC = () =>
    import('../views/machinePC/filloutInfoPC')
const presDetails = () =>
    import('../views/machinePC/presDetails')

Vue.use(Router)

var router = new Router({
    mode: 'history',
    base: 'nfysH5',
    routes: [{
        path: '/',
        component: App,
        children: [{
            path: '',
            redirect: '/lectureIndex',
            meta: {
                title: '???????????????'
            }
        }, {
            path: '/index',
            component: index,
            meta: {
                title: '??????'
            },
        }, {
            path: '/lectureIndex',
            name: 'lectureIndex',
            component: lectureIndex,
            meta: {
                title: '???????????????'
            },
        }, {
            path: '/videoDetails',
            component: videoDetails,
            name: 'videoDetails',
            meta: {
                title: '???????????????'
            },
        }, {
            path: '/articleDetails',
            component: articleDetails,
            name: 'articleDetails',
            meta: {
                title: '???????????????'
            },
        }, {
            path: '/lectureSearch',
            component: lectureSearch,
            name: 'lectureSearch',
            meta: {
                title: '???????????????'
            },
        }, {
            path: '/chat',
            component: chat,
            name: 'chat',
            meta: {
                title: '????????????'
            },
        }, {
            path: '/friendManage',
            component: friendManage,
            name: 'friendManage',
            meta: {
                title: '????????????'
            },
        }, {
            path: '/test',
            path: '/activitiesIndex',
            component: activitiesIndex,
            name: 'activitiesIndex',
            meta: {
                title: '????????????'
            },
        }, {
            path: '/activityRegister',
            component: activityRegister,
            name: 'activityRegister',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/writeAddress',
            component: writeAddress,
            name: 'writeAddress',
            meta: {
                title: '??????????????????'
            }
        }, {
            path: '/registerDetails',
            component: registerDetails,
            name: 'registerDetails',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/reportDetails',
            component: reportDetails,
            name: 'reportDetails',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/historyTests',
            component: historyTests,
            name: 'historyTests',
            meta: {
                title: '????????????????????????'
            }
        }, {
            path: '/testResDec',
            component: testResDec,
            name: 'testResDec',
            meta: {
                title: '??????????????????????????????'
            }
        }, {
            path: '/interestIndex',
            component: interestIndex,
            name: 'interestIndex',
            meta: {
                title: '??????????????????'
            }
        }, {
            path: '/interestTest',
            component: interestTest,
            name: 'interestTest',
            meta: {
                title: '????????????????????????'
            }
        }, {
            path: '/healthReportList',
            component: healthReportList,
            name: 'healthReportList',
            meta: {
                title: '????????????????????????'
            }
        }, {
            path: '/healthReportDetails',
            component: healthReportDetails,
            name: 'healthReportDetails',
            meta: {
                title: '????????????????????????'
            }
        }, {
            path: '/test',
            component: test,
            meta: {
                title: '??????'
            },
        }, {
            path: '/mall',
            component: () => import('../views/mall/home'),
            name: 'home',
            meta: {
                title: '??????'
            }
        }, {
            path: '/sendDrug',
            component: () => import('../views/mall/sendDrug'),
            name: 'sendDrug',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/productSearch/:columnType',
            component: () => import('../views/mall/productSearch'),
            name: 'productSearch',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/productDetail/:columnId/:id/:shareUserId',
            component: () => import('../views/mall/productDetail'),
            name: 'productDetail',
            meta: {
                title: '????????????'
            }
        },
        {
            path: '/requirementList',
            component: () => import('../views/mall/requirementList'),
            name: 'requirementList',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/shopCart',
            component: () => import('../views/mall/shopCart'),
            name: 'shopCart',
            meta: {
                title: '?????????'
            }
        }, {
            path: '/addressList',
            component: () => import('../views/mall/addressList'),
            name: 'addressList',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/addressEdit/:id',
            component: () => import('../views/mall/addressEdit'),
            name: 'addressEdit',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/orderConfirm',
            component: () => import('../views/mall/orderConfirm'),
            name: 'orderConfirm',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/pay',
            component: () => import('../views/mall/pay'),
            name: 'pay',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/recommend/:columnId',
            component: () => import('../views/mall/recommend'),
            name: 'recommend',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/healthShare',
            component: () => import('../views/share/healthShare'),
            name: 'healthShare',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/downloadAPP',
            component: downloadAPP,
            name: 'downloadAPP',
            meta: {
                title: 'APP??????'
            }
        }, {
            path: '/prescriptionDetail',
            component: prescriptionDetail,
            name: 'prescriptionDetail',
            meta: {
                title: '????????????'
            }
        }, {  // ????????????????????????
            path: '/centerSailAddress',
            component: () => import('../views/centerSail/address'),
            name: 'centerSailAddress',
            meta: {
                title: '??????????????????'
            }
        }, {  // ??????????????????
            path: '/centerSailOrderDetail',
            component: () => import('../views/centerSail/orderDetail'),
            name: 'centerSailOrderDetail',
            meta: {
                title: '??????????????????'
            }
        }, {
            path: '/examinationData',
            component: examinationData,
            name: 'examinationData',
            meta: {
                title: '????????????'
            }
        }, {
            path: '/filloutInfoPC',
            component: filloutInfoPC,
            name: 'filloutInfoPC',
            meta: { 
                title: '?????????????????????'
            }
        }, {
            path: '/presDetails',
            component: presDetails,
            name: 'presDetails',
            meta: {
                title: '????????????'
            }
        }]
    }]
})
export default router;
