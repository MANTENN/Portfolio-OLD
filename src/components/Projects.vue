<template>
  <div class="container">
  <div class="col-25 skills">
    <h2>{{section}}</h2>
    <ul>
      <li v-for="skill in skills"
              v-bind:key="skill.id"
      >
        <span class="skill-label">{{skill.area}}</span>
      <span class="skill-rating">{{skill.rating*100}}%</span></li>
    </ul>
  </div>
  <div class="col-75 projects">
    <h1>{{ msg }}</h1>
    <Project v-for="Project in projects"
             v-bind:title="Project.name"
             v-bind:description="Project.description"
             v-bind:key="Project.id"
    ></Project>
  </div>
  </div>
</template>

<script>
  import Project from './Project'

  export default {
    name: 'Projects',
    components: {
      Project
    },
    data () {
      return {
        msg: 'Projects',
        projects: [
            {
                id: 1,
                name: "Days4God",
                description: "Worked on for a non-profit website, built a player generator, designed the logo, and created custom page layouts."
            },
            {
                id: 2,
                name: "FreeCodeCamp",
                description: "Worked on for a non-profit website, built a player generator, designed the logo, and created custom page layouts."
            },
            {
                id: 3,
                name: "Youtube Channel",
                description: "Worked on for a non-profit website, built a player generator, designed the logo, and created custom page layouts."
            },
            {
                id: 4,
                name: "CalPERS",
                description: "Worked on for a non-profit website, built a player generator, designed the logo, and created custom page layouts."
            }
        ],
        section: "Skills",
        skills: [
          {
            id: 1,
            area: "HTML",
            rating: .95
          },
          {
            id: 2,
            area: "JavaScript",
            rating: .75
          },
          {
            id: 3,
            area: "CSS",
            rating: .75
          },
          {
            id: 4,
            area: "PHP",
            rating: .75
          },
          {
            id: 5,
            area: "Python",
            rating: .75
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.col-25 {
  width: 25%;
  float: left;
}
.col-75 {
  width: 75%;
  float: right;
}
.skill-label {
  font-weight: bold;
}
.skill-rating {
  display: block;
}
</style>
