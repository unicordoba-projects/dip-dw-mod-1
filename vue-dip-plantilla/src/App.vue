<script setup>

import { RouterLink, RouterView } from 'vue-router'
import HeaderPage from './components/HeaderPage.vue'
import SideBar from './components/SideBar.vue'


</script>

<template>
    
    <div>
        <div class="md:flex md:flex-col">
          <div class="md:flex md:flex-col md:h-screen">

            <HeaderPage/>

            <!-- BODY -->
            <div class="md:flex md:flex-grow md:overflow-hidden">
              
                <SideBar/>

                <div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto">
                    
                  <router-view></router-view>

                </div>
                
            </div>
            <!-- // BODY -->

          </div>
        </div>
      </div>

</template>

<style>
</style>