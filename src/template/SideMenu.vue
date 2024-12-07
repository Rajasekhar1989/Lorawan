<template>
	<div class="wrapper-navbar-used">
		<nav role="navigation" class="sidebar sidebar-bg-dark sidebar-rounded-top-right" id="navigation">
			<div class="sidebar-menu">
				<div class="sidebar-menu-fixed">					
					<ul class="list list-unstyled list-bg-dark list-icon-red mb-0">
						<li class="list-item">
							<ul class="list-unstyled">
								<li class="parent">
									<a href="#" class="list-link link-arrow" :class="getMenuClass('tenetconfig')">
										<span class="list-icon" v-html="$store.state.home"></span>Tenant
										<span v-html="$store.state.svgarrow" class="angle"></span>
									</a>
									<ul class="list-unstyled list-hidden">
										<li><a href="#" class="list-link" :class="getMenuClass('ten_dashboard')" @click.prevent="selectMenu('ten_dashboard')"><span class="list-icon" v-html="$store.state.dashboard"></span>Dashboard</a></li>
										<li><a href="#" class="list-link" :class="getMenuClass('ten_users')" @click.prevent="selectMenu('ten_users')"><span class="list-icon" v-html="$store.state.users"></span>Users</a></li>										
										<li><a href="#" class="list-link" :class="getMenuClass('ten_gateways')" @click.prevent="selectMenu('ten_gateways')"><span class="list-icon" v-html="$store.state.wifi"></span>Gateways</a></li>										
										<li><a href="#" class="list-link" :class="getMenuClass('ten_applications')" @click.prevent="selectMenu('ten_applications')"><span class="list-icon" v-html="$store.state.applications"></span>Applications</a></li>
									</ul>
								</li>		
							</ul>
						</li>
					</ul>					
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
// import { useRouter, useRoute } from 'vue-router';
import store from '../store';

export default defineComponent({
	name: 'SideMenu',
	data() {
		return {
			// Any local data properties (if needed)
		};
	},
	computed: {
		// Computed property to get the selected menu from the store
		selectedMenu() {
			return store.getters.selectedMenu;
		},
	},
	mounted() {
		// On component mount, update the selectedMenu from the route
		const currentPath = this.$route.path.substring(1); // Remove leading '/'
		store.dispatch('updateSelectedMenu', currentPath || '/');
	},
	methods: {
		// Function to select a menu item and update the store and route
		selectMenu(menu) {
			switch (menu) {				
				default: {
					localStorage.setItem('displayButtons', JSON.stringify(['view']));				
				}
				break;
			}			
			store.dispatch('updateSelectedMenu', menu);
			this.$router.push('/' + menu);
		},
		// Centralized method to determine the class for different menu types
		getMenuClass(menuType) {
			const menuMapping = {			

				networkserverconfig: () => {
					const mastersMenuItems = ['net_dashboard', 'net_tenants', 'net_users', 'net_device_profile_templates', 'net_regions'];
					const isActive = mastersMenuItems.includes(this.selectedMenu);
					return { active: isActive, rotate: isActive, 'link-current': isActive };
				},
				net_dashboard: () => ({ selected: ['net_dashboard'].includes(this.selectedMenu) }),
				net_tenants: () => ({selected: ['net_tenants'].includes(this.selectedMenu) }), 
				net_users: () => ({selected: ['net_users'].includes(this.selectedMenu) }), 
				net_device_profile_templates: () => ({selected: ['net_device_profile_templates'].includes(this.selectedMenu) }), 
				net_regions: () => ({selected: ['net_regions'].includes(this.selectedMenu) }),
				tenetconfig: () => {
					const empMenuItems = ['ten_dashboard', 'ten_users', 'ten_device_profiles', 'ten_gateways','ten_gateway_mesh','ten_applications'];
					const isActive = empMenuItems.includes(this.selectedMenu);
					return { active: isActive, rotate: isActive, 'link-current': isActive };
				},					
				ten_dashboard: () => ({ selected: this.selectedMenu === 'ten_dashboard' }),	
				ten_users: () => ({ selected: this.selectedMenu === 'ten_users' }),	
				ten_device_profiles: () => ({ selected: this.selectedMenu === 'ten_device_profiles' }),
				ten_gateways: () => ({ selected: this.selectedMenu === 'ten_gateways' }),	
				ten_gateway_mesh: () => ({ selected: this.selectedMenu === 'ten_gateway_mesh' }),	
				ten_applications: () => ({ selected: this.selectedMenu === 'ten_applications' })	
			};
			// Call the appropriate function from the map based on the menuType
			return menuMapping[menuType] ? menuMapping[menuType]() : {};
		},
	},
});
</script>
