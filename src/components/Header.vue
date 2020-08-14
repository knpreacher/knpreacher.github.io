<template>
    <div class="page-header"
         :style="{'background-image': `url('${backgroundImage}')`}">
        <div class="fw fh d-flex align-end" style="background: rgba(0, 0, 0, 0.6)">
            <v-container>
                <v-card flat dark tile
                        class="d-flex align-center transparent pa-3">
                    <div>
                        <v-avatar size="180" class="avatar-wb">
                            <!--<span>It's me!</span>-->
                            <v-img src="https://sun9-13.userapi.com/c851432/v851432251/1647ca/aFjBtkzZbQs.jpg"
                                   alt="It's me!"
                            ></v-img>
                        </v-avatar>
                    </div>
                    <div class="ml-6 pa-3 text-h2 font-weight-bold">
                        <!--<span class="font-weight-light">@</span>-->
                        <!--<span class="font-weight-bold red&#45;&#45;text text&#45;&#45;lighten-3">@</span>-->
                        knpreacher
                    </div>
                </v-card>
            </v-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                backgroundImage: require('../assets/knp_logo_g.png'),
                // avatar: require("https://sun9-13.userapi.com/c851432/v851432251/1647ca/aFjBtkzZbQs.jpg")
            }
        }
    }
</script>

<style scoped>
    .page-header {
        background-size: 80px;
        height: 400px;
        background-repeat: repeat;
    }
    .avatar-wb {
        border: 3px aliceblue solid;
    }
</style>