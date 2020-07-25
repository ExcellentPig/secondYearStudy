//import Vue from 'vue'

import index from './components/index.vue'
import MyElementuiA01 from './components/elementui01/MyElementuiA01'
import MyElementuiC01 from './components/elementui01/MyElementuiC01'
import A1_Layout01 from './components/elementui02/A1_Layout01'
import A2_eCharts01 from './components/elementui02/A2_eCharts01'
import filter_demo1 from './components/complexfilter/demo1'
import filter_demo2 from './components/complexfilter/demo2'

export default [
  {
    path:'/',
    name:''
  },
  {
    path:'/index',
    name:'index',
    component:index,
    children:[
      // {
      //   path:'/MyElementuiA01',
      //   name:'MyElementuiA01',
      //   component:MyElementuiA01
      // },
      {
        path:'/MyElementuiC01_index',
        name:'MyElementuiC01_index',
        component:MyElementuiC01
      },
      {
        path:'/A1_Layout01_index',
        name:'A1_Layout01_index',
        component:A1_Layout01
      },
      {
        path:'/A2_eCharts01_index',
        name:'A2_eCharts01_index',
        component:A2_eCharts01
      }
    ]
  },
  {
  path:'/MyElementuiA01',
  name:'MyElementuiA01',
  component:MyElementuiA01
  },
  {
  path:'/MyElementuiC01',
  name:'MyElementuiC01',
  component:MyElementuiC01
  },
  {
  path:'/A1_Layout01',
  name:'A1_Layout01',
  component:A1_Layout01
  },
  {
  path:'/A2_eCharts01',
  name:'A2_eCharts01',
  component:A2_eCharts01
  },
  {
    path:'/filter_demo1',
    name:'filter_demo1',
    component:filter_demo1
  },
  {
    path:'/filter_demo2',
    name:'filter_demo2',
    component:filter_demo2
  },
]
