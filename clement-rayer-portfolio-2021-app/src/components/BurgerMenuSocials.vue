<template>
    <div id="burger-menu-socials">
        <a :href="link" target="_blank" class="burger-menu-socials-image-container"><img :src="require(`../../public/${source}`)" :alt="alt" class="burger-menu-socials-image"></a>
        <p><a :href="link" target="_blank" class="burger-menu-socials-text">{{ title }}</a></p>
    </div>
</template>

<script>
export default {
    name: "BurgerMenuSocials",
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
#burger-menu-socials{
    height: 3vh;
    margin-left: 2vw;
    font-family: 'Sen', sans-serif;
    font-size: 1.5rem;
    text-transform: none;
    display: flex;
    align-items: center;
    .burger-menu-socials-image-container{
        height: 3vh;
        .burger-menu-socials-image{
            height: 3vh;
            width: auto;
        }
    }
    .burger-menu-socials-text{
        margin-left: 7px;
        color: #ffffff;
        -webkit-text-stroke: none;
    }
}
</style>