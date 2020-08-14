<template>
    <div>
        <div class="text-center my-3">
            <v-icon size="60">person</v-icon>
        </div>
        <div class="text-h3 text-center font-weight-thin pa-6">
            Who I am?
        </div>
        <v-row>
            <v-col v-for="(c, ind) in cards" :key="ind"
                   class="d-flex align-center justify-center"
                   sm="12" md="4">
                <v-card flat
                        :ripple="false"
                        @click.prevent="$emit('category-click', c.title)"
                        style="height: 300px; width: 300px"
                        class="d-flex flex-column justify-center align-center hoverable">
                    <lottie :options="{animationData: c.anim['default']}"
                            class="ma-3"
                            :height="lottieSize" :width="lottieSize"/>
                    <div class="headline py-3 mb-3">{{c.title}}</div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import Lottie from 'vue-lottie';
    import * as guitarAnim from '../assets/lottie/guitar';
    import * as codeAnim from '../assets/lottie/code';
    import * as teacherAnim from '../assets/lottie/teacher';

    export default {
        name: "AboutTop",
        components: {
            Lottie
        },
        data() {
            return {
                lottieSize: 150,
                // defaultOptions: {animationData: guitarAnim.default},
                cards: [
                    {
                        anim: codeAnim,
                        title: 'Developer'
                    },
                    {
                        anim: guitarAnim,
                        title: 'Musician'
                    },
                    {
                        anim: teacherAnim,
                        title: 'Teacher'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>