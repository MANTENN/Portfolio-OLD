<template>
    <ul>
        <li v-for="link in links" v-bind:key="link.id">
            <router-link :to="{ name: link.page}">
                {{link.name}}
            </router-link>
        </li>
    </ul>
</template>


<script>
export default {
    name: 'Navigation',
    data () {
      return {
        links: [
          {
            id: 1,
            page: "",
            name: "Home"
          },
          {
            id: 2,
            page: "projects",
            name: "Portfolio"
          },
          {
            id: 3,
            page: "about",
            name: "About"
          },
          {
            id: 4,
            page: "contact",
            name: "Contact"
        }
        ]
      }
    }
}
</script>

<style scoped>
    ul:after {
        content: '';
        clear: both;
    }
    li {
        float: left;
    }
</style>