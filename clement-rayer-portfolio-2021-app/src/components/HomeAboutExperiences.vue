<template>
    <div><span id="bold-text">{{ date }} —</span> <span id="extra-bold-text">{{ jobTitle }}</span> {{ additionalDetail }}<br></div>
</template>

<script>
export default {
    name: "HomeAboutExperiences",
    props: {
        id:{
            type: Number,
            required: true
        },
        date:{
            type: String,
            required: true
        },
        jobTitle: {
            type: String,
            required: true
        },
        additionalDetail:{
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
#bold-text{
    font-weight: 700;
}
#extra-bold-text{
    font-weight: 900;
}
</style>>