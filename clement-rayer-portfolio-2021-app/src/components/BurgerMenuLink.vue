<template>
    <div>
        <span class="animated-line top-line top-line-first"></span>
        <span class="animated-line top-line top-line-second"></span>
        <span class="animated-line bottom-line bottom-line-first"></span>
        <span class="animated-line bottom-line bottom-line-second"></span>
        <span class="burger-menu-links-item">{{ buttonText }}</span>
    </div>
</template>

<script>
export default {
    name: "BurgerMenuLink",
    props: {
        buttonText: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.animated-line{
    width: 100%;
    height: 1vh;
    position: absolute;
    left: 0;
    background: #ffffff;
    display: none;
}
.top-line{
    top: 0;
}
.top-line-first{
    animation: 400ms roll-effect linear infinite;
}
.top-line-second{
    left: -105%;
    animation: 400ms roll-effect 45ms linear infinite;
}
.bottom-line{
    top: 9vh;
}
.bottom-line-first{
    animation: 400ms roll-effect-reverse linear infinite;
}
.bottom-line-second{
    left: 105%;
    animation: 400ms roll-effect-reverse 45ms linear infinite;
}
.burger-menu-links-item{
    height: 10vh;
    line-height: 10vh;
    color: transparent;
    -webkit-text-stroke: 1px #ffffff;
    &:hover{
        color: #ffffff;
        -webkit-text-stroke: none;
    }
}
@media screen and (max-width: 415px) {
    .animated-line{
        height: 2vh;
    }
    .top-line-first{
        animation: 500ms roll-effect linear infinite;
    }
    .top-line-second{
        animation: 500ms roll-effect 50ms linear infinite;
    }
    .bottom-line{
        top: 13vh;
    }
    .bottom-line-first{
        animation: 500ms roll-effect-reverse linear infinite;
    }
    .bottom-line-second{
        animation: 500ms roll-effect-reverse 50ms linear infinite;
    }
    .burger-menu-links-item{
        height: 15vh;
        line-height: 15vh;
    }
}
@keyframes roll-effect {
  0% {
    transform:translateX(0);
  }
  99.99%
  {
    transform:translateX(115%);
    opacity: 1;
  }
  100%{
      opacity: 0;
      transform: translateX(0);
  }
}
@keyframes roll-effect-reverse {
  0% {
    transform:translateX(0);
  }
  99.99%
  {
    transform:translateX(-115%);
    opacity: 1;
  }
  100%{
      opacity: 0;
      transform: translateX(0);
  }
}
</style>