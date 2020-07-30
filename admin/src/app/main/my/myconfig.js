import React from 'react';
import My from './MyApp';
import MyTask from './MyTask';
import MyOwnTask from './MyOwnTask';

import MyPromotion from './MyPromotion'
import MyPromotionSubmit from './MyPromotionSubmit'


import MyFinancial from './MyFinancial'
import MyWallet from './MyWallet'


import Invite from './Invite'
import {authRoles} from 'app/auth';

export const MyConfig = {
    settings: {
        layout: {
            config: {
                navbar        : {
                    display: true
                },
                toolbar       : {
                    display: true
                },
                footer        : {
                    display: false
                },
                leftSidePanel : {
                    display: true
                },
                rightSidePanel: {
                    display: false
                }
            }
        }
    },  
    auth    : authRoles.user,
    routes  : [
        {
            path    :'/my/task',
            component:MyTask
        },
        {
            path    :'/my/promotion/submit',
            component:MyPromotionSubmit
        },
        {
            path    :'/my/promotion',
            component:MyPromotion
        },
        {
            path    :'/my/invite/:who?',
            component:Invite
        },        
        {
            path    :'/my/owntask',
            component:MyOwnTask
        },
        {
            path    :'/my/financial',
            component:MyFinancial
        },
        {
            path    :'/my/wallet',
            component:MyWallet
        },
        {
            path     : '/my',
            component: My
        }
        
    ]
};
