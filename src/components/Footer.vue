<template>
    <v-card dark flat tile class="d-flex align-center justify-center flex-column pa-6"
            :style="{'background': `url('${footerBg}')`}">
        <!--
        <a href="http://www.colourlovers.com/pattern/17252/Grey_Background" target="_blank"><img src="http://www.colourlovers.com/images/badges/n/17/17252_Grey_Background.png" style="width: 240px; height: 120px; border: 0 none;" alt="Grey_Background" /></a><br /><span style="font-size: 10px; color: #5e5e5e;"><a href="//www.colourlovers.com/seamless-studio" target="_blank" style="font-size: 10px; color: #5e5e5e;">Vector Patterns</a> by <a href="//www.colourlovers.com/" target="_blank" style="font-size: 10px; color: #5e5e5e;">COLOURlovers</a></span>
        -->
        <div class="subtitle-1 pa-1 mb-3">
            Made with
            <v-icon>favorite</v-icon>
            ,
            <v-avatar flat tile size="24">
                <v-img :src="vueIcon"></v-img>
            </v-avatar>
            and
            <v-avatar flat tile size="24">
                <v-img :src="vuetifyIcon"></v-img>
            </v-avatar>
        </div>
        <div class="d-flex align-center justify-center white rounded-pill pa-1" style="width: fit-content">
            <v-btn large icon v-for="link in $root.social" :key="link[0]" :href="link[1]" target="_blank" class="mx-1">
                <span :class="`flaticon-${link[0]}`" class="red--text text--darken-3"></span>
            </v-btn>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                footerBg: require('../assets/webb-dark.png'),
                vueIcon: require('../assets/logo.png'),
                vuetifyIcon: require('../assets/logo.svg'),
            }
        }
    }
</script>

<style scoped>

</style>