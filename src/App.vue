<template>
    <v-app>
        <v-main>
            <Header></Header>
            <v-container>
                <v-card>
                    <v-card-title>kek</v-card-title>
                    <v-card-text>
                        <v-icon>home</v-icon>
                    </v-card-text>
                </v-card>
            </v-container>
            <v-overlay :value="overlay" absolute color="white" opacity="1">
                <div>
                    <div class="text-h2 black--text animate__animated animate__backInDown">@knpreacher</div>
                    <div class="d-flex align-center justify-center">
                        <div class="text-subtitle-1 text-center animate__animated animate__backInUp black--text mt-3">
                            Made with love
                            <v-icon color="red" class="ml-1 animate__animated animate__delay-2s animate__heartBeat">favorite</v-icon>
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

    export default {
        name: 'App',

        components: {Header},

        data() {
            return {
                overlay: true
            }
        },

        mounted() {
            setTimeout(() => {
                this.overlay = false
            }, 3000)
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
