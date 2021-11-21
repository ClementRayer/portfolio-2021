<template>
    <div class="socials-details-item">
        <a :href="link" target="_blank"><img :src="require(`../../public/${source}`)" :alt="alt" class="socials-details-item-logo"></a>
        <p class="socials-details-item-name"><a :href="link" target="_blank" class="link-hover">{{ title }}</a></p>
    </div>
</template>

<script>
export default {
    name: "HomeAboutSocials",
    props: {
        link:{
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        source:{
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.socials-details-item{
    margin-left: 50px;
    text-align: center;
    .socials-details-item-logo{
        height: 50px;
        width: auto;
    }
    .socials-details-item-name{
        margin-top: 15px;
        font-size: 1.125rem;
    }
}
@media screen and (max-width: 415px) {
    .socials-details-item{
        margin-left: 0;
    }
}
</style>