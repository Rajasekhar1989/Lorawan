import { createRouter, createWebHistory } from '@ionic/vue-router';
import { genDateTimeID } from '../assets/scripts/reusefunctions';

import LoginPage from '../views/LoginPage.vue';


import nwdashboard from '../views/network_server/dashboard.vue';
import nwtenants from '../views/network_server/tenants.vue';
import nwusers from '../views/network_server/users.vue';
import nwdeviceprofiletemplates from '../views/network_server/deviceprofiletemplates.vue';
import nwregions from '../views/network_server/regions.vue';

import tendashboard from '../views/tenant_server/dashboard.vue';
import tenusers from '../views/tenant_server/users.vue';
import tendeviceprofiles from '../views/tenant_server/deviceprofiles.vue';
import tengateways from '../views/tenant_server/gateways.vue';
import tengatewaymesh from '../views/tenant_server/gatewaymesh.vue';
import tenapplications from '../views/tenant_server/applications.vue';

const routes = [
  { path: '/', redirect: '/login' },  
  { path: '/login', name: 'LoginPage', component: LoginPage }, 
  
  { path: '/analytics', name: 'AnalyticsDashboard', component: tendashboard },

  { path: '/net_dashboard', name: 'NetworkDashboard', component: nwdashboard },
  { path: '/net_tenants', name: 'NetworkTenants', component: nwtenants },
  { path: '/net_users', name: 'NetworkUsers', component: nwusers },
  { path: '/net_device_profile_templates', name: 'NetworkDeviceProfileTemplates', component: nwdeviceprofiletemplates },
  { path: '/net_regions', name: 'NetworkRegions', component: nwregions },

  { path: '/ten_dashboard', name: 'TenantDashboard', component: tendashboard },
  { path: '/ten_users', name: 'TenantUsers', component: tenusers },
  { path: '/ten_device_profiles', name: 'TenantDeviceProfiles', component: tendeviceprofiles },
  { path: '/ten_gateways', name: 'TenantGateways', component: tengateways },
  { path: '/ten_gateway_mesh', name: 'TenantGatewayMesh', component: tengatewaymesh },
  { path: '/ten_applications', name: 'TenantApplications', component: tenapplications }  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(),
  routes,
});

/* Add navigation guard */ 
router.beforeEach((to, from, next) => {  
  // Generate a random number
  const uuid = genDateTimeID();
  if (!to.query.uuid) {
    next({ path: to.path, query: { ...to.query, uuid } });
  } else {
    next();
  }
});

export default router;