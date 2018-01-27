<template>
    <span class="project" v-bind:class="{hidden: isHidden}">
        <h3>
            <a href="{{project.path}}">
                {{project.title}}
            </a>
        </h3>
		<p>
            {{project.description}}
        </p>
    </span>
</template>

<script>
    export default {
        name: "Project",
        data () {
            return {
                projects: {
                    [{

                    }],
                    [{
                        
                    }],
                    [{

                    }],
                    [{

                    }],
                    [{
                        
                    }]
                }
            }
        }

    }
</script>