<template>
    <v-app id="m-app">
        <v-main>
            <!--<v-app>-->
            <!---->
            <!--</v-app>-->
            <NavBar :in-color="colorToolBar"/>
            <Header id="header"/>
            <v-container>
                <AboutTop v-scroll="onScroll" @category-click="onCategorySelected"/>
                <v-expand-transition group mode="in-out">
                    <AboutCardItem v-if="currentCategory" :key="`aci_${currentCategory}`"
                                   :info="currentCategory"/>
                </v-expand-transition>
                <p v-for="i in 30" :key="i">{{i}}</p>
            </v-container>
            <v-overlay :value="overlay" absolute color="white" opacity="1">
                <div>
                    <div class="text-h2 black--text animate__animated animate__backInDown">@knpreacher</div>
                    <div class="d-flex align-center justify-center">
                        <div class="text-subtitle-1 text-center animate__animated animate__backInUp black--text mt-3">
                            Made with love
                            <v-icon color="red" class="ml-1 animate__animated animate__delay-2s animate__heartBeat">
                                favorite
                            </v-icon>
                        </div>
                        <!--<div><v-icon color="red">favorite</v-icon></div>-->
                    </div>
                </div>
            </v-overlay>
        </v-main>
    </v-app>
</template>

<script>
    import Header from "./components/Header";
    import AboutTop from "./components/AboutTop";
    import NavBar from "./components/NavBar";
    import AboutCardItem from "./components/about_cards/AboutCardItem";

    export default {
        name: 'App',

        components: {AboutCardItem, NavBar, AboutTop, Header},
        computed: {
            colorToolBar: function () {
                return this.mScrollY > 200
            }
        },

        data() {
            return {
                mScrollY: 0,
                overlay: false,
                currentCategory: null
            }
        },

        methods: {
            onScroll(e) {
                this.mScrollY = e.path[1].scrollY;
            },
            onCategorySelected(title) {
                // console.log(title)
                this.currentCategory = title
            }
        },

        mounted() {
            // setTimeout(() => {
            //     this.overlay = false
            // }, 3300)
        }
    };
</script>

<!--<style type="scss">-->
<style type="text/css">
    /*body {*/
    /*font-family: "Lucida Console", "Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", sans-serif, default;*/
    /*}*/
    /*$body-font-family: */
</style>
