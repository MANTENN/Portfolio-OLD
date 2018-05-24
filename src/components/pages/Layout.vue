<template>
    <div class="app-container">
        <Header>Header</Header>
        <HelloWorld/>
    </div>
</template>


<script>
import Header from '@/components/pages/Header'
import HelloWorld from '@/components/HelloWorld'

export default {
    components: {
        Header,
        HelloWorld
    },
    name: 'Layout'
}
</script>