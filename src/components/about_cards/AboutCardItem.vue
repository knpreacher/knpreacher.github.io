<template>
    <v-card outlined>
        <v-card-title>
            {{info}}
        </v-card-title>
        <v-card-text>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium autem commodi cumque debitis
                doloremque explicabo harum itaque nemo nobis odit quas quasi quis sunt, temporibus ut vel velit
                voluptates!
            </div>
            <div v-if="info === 'Teacher'">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto delectus, dolorum eius iure
                libero officia pariatur soluta totam ullam. Debitis dignissimos nisi quos repudiandae voluptas? Adipisci
                dolores nihil saepe.
            </div>

        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "AboutCardItem",
        props: {
            info: {}
        }
    }
</script>

<style scoped>

</style>