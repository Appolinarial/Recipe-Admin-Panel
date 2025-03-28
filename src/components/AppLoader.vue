<template>
    <Transition appear>
        <div class="root">
            <div class="heading">
                Loading...
            </div>
        </div>
    </Transition>
</template>

<style lang="sass" scoped>
@use "../assets/styles/index" as area;

.root 
    z-index: 2
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    top:0
    bottom: 0
    left: 0
    right: 0
    background-color: rgba(#fff, 0.8)

.heading
    font-size: 28px
    font-weight: 700px
</style>
