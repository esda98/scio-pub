<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>What is this?</v-card-title>
          <v-card-text>
            <b><i>Scio</i></b> - Latin for knowledge, knowing, or being able to do.
            <br/><br/>
            Scio Code is a platform for me as a developer to have some fun with modern web technologies. Scio is written entirely in VueJS with a multitude of backend services to support it. The point of this project is for me to have an open playground to try new technology and share it with the world! This entire project is public on my GitHub for you to check out!
            On each page, you'll see links to my GitHub for their backend functionality. On this card, you'll find a link to the GitHub repository for the entire front end!
          </v-card-text>
          <v-card-actions>
            <link-button text="Scio Code Repo" icon="github" link="https://github.com/esda98/scio-pub"></link-button>
          </v-card-actions>
        </v-card>
        <v-card class="mt-4">
          <v-card-title>
            Serverless? You can do that?
          </v-card-title>
          <v-card-text>
            Darn right you can! Serverless is a developing architecture style that focuses around two main components. Single Page Application (SPA) front end interface and a microservice backend.
            <br> <br/>
            In Scio Code's case, the SPA front-end you are viewing now is written in VueJS and hosted within Amazon Web Services (AWS) in a Simple Storage Service (S3) bucket. This bucket only acts to serve the index.html that pulls the JavaScript chunks required to render the page on your screen locally, no server needed for pre-rendering!
            <br/><br/>
            Of course, websites need more logic than can live in the webpage. For this, Scio Code uses AWS Lambda, which is a cloud computing platform designed to abstract the need to worry about the servers running the code. This allows immense flexibility in code deployment, code environments, and patching. For example, Scio Code uses 3 different programming environments to power the demos you see! In a monolithic architecture, this would be much harder to mix and match. In Serverless, this is easy!
            <br/><br/>
            I added links below to the services we use in AWS for you to check out!
          </v-card-text>
          <v-card-actions>
            <link-button text="AWS Lambda" icon="aws" link="https://aws.amazon.com/lambda/"></link-button>
            <link-button text="AWS S3" icon="aws" link="https://aws.amazon.com/s3/"></link-button>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>Who Am I?</v-card-title>
          <v-card-text>
            Hi! My name's Erik Abramczyk. I've been a Software Developer since 2013. Now, after college and starting in the industry, I've become a Full-Stack Web Developer on multiple applications, leveraging architectures from monolithic to entirely serverless.
          </v-card-text>
          <v-card-actions>
            <link-button text="My GitHub" icon="github" link="https://github.com/esda98"></link-button>
            <link-button text="My LinkedIn" icon="linkedin" link="https://www.linkedin.com/in/erik-abramczyk-b47ba8126/"></link-button>
          </v-card-actions>
        </v-card>
        <v-card class="mt-4">
          <v-card-title>Frameworks / Tools</v-card-title>
          <v-card-text>
            <p class="mb-0">Front-End</p>
            <ul>
              <li>VueJS - Progressive, Reactive Front-End Framework</li>
              <li>Vuetify - Material Design Component Library</li>
              <li>TypeScript - JavaScript Superset for static typing in JS</li>
            </ul>
            <v-card-actions>
              <link-button text="VueJS" icon="vuejs" link="https://vuejs.org/"></link-button>
              <link-button text="Vuetify" icon="vuetify" link="https://vuetifyjs.com/en/"></link-button>
              <link-button text="TypeScript" icon="language-typescript" link="https://www.typescriptlang.org/"></link-button>
            </v-card-actions>
            <p class="mb-0 mt-2">API</p>
            <ul>
              <li>Serverless - CLI Tool for consistent "Code As Architecture" serverless deployment</li>
              <li>.NET Core - Cross-platform .NET Development (C# as the language when .NET is used)</li>
              <li>GoLang - C-like Garbage Collected language designed by Google</li>
              <li>NodeJS - Serverside JavaScript framework (TypeScript as the language when NodeJS is used)</li>
            </ul>
            <v-card-actions>
              <link-button text="Serverless" icon="server-remove" link="https://www.serverless.com/"></link-button>
              <link-button text=".NET Core" icon="dot-net" link="https://dotnet.microsoft.com/"></link-button>
              <link-button text="GoLang" icon="google" link="https://golang.org/"></link-button>
              <link-button text="NodeJS" icon="nodejs" link="https://nodejs.org/en/"></link-button>
            </v-card-actions>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import LinkButton from "@/components/LinkButton.vue";

export default Vue.extend({
  name: "About",
  components: {
    LinkButton
  }
});
</script>
