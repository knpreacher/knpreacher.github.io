<template>
    <v-toolbar class="fw m-toolbar" flat tile :color="inColor ? 'red darken-5' : 'transparent'" dark>
        <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
        <transition name="slide-y-transition">
            <div v-if="inColor" class="d-flex align-center">
                <v-btn icon @click="$vuetify.goTo(0)">
                    <v-icon>vertical_align_top</v-icon>
                </v-btn>
                <v-toolbar-title>knpreacher</v-toolbar-title>
            </div>
        </transition>
        <v-spacer></v-spacer>
        <v-btn icon @click="switchTheme">
            <v-icon>nights_stay</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>translate</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            inColor: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            switchTheme() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            }
        }
    }
</script>

<style scoped>

    .m-toolbar {
        z-index: 9999;
        position: fixed;
    }

</style>