<template>
  <div class="container construction">
    <img class="img-ani" src='../../assets/lds.gif' >
    <div class="system">
      <div class="flex-column flex-margin">
        <div class="group1">
          <SystemBtn :size="'7vw'" :bgColor="'green'" :title="'UNIX'" @click="changeBgColor"></SystemBtn>
        </div>
        <div class="group2">
          <SystemBtn :size="'5vw'" :bgColor="'blue'" :title="'LINUX'" @click="changeBgColor"></SystemBtn>
          <SystemBtn :size="'5vw'" :bgColor="'#ff9933'" :title="'W94'" @click="changeBgColor"></SystemBtn>
        </div>
        <div class="group3">
          <SystemBtn :size="'2.5vw'" :bgColor="'#33ccff'" :title="'A2'" @click="changeBgColor"></SystemBtn>
          <SystemBtn :size="'7vw'" :bgColor="'#cc9900'" :title="'WINDOWS'" @click="changeBgColor"></SystemBtn>
        </div>
        <div class="group4">
          <SystemBtn :size="'5vw'" :bgColor="'red'" :title="'DEBIAN'" @click="changeBgColor"></SystemBtn>
          <SystemBtn :size="'5vw'" :bgColor="'#ffccff'" :title="'UBUNT'" @click="changeBgColor"></SystemBtn>
        </div>
        <div class="group5">
          <SystemBtn :size="'2.5vw'" :bgColor="'#9900cc'" :title="'P3'" @click="changeBgColor"></SystemBtn>
        </div>
        <div class="group6">
          <SystemBtn :size="'5vw'" :bgColor="'#ccccff'" :title="'DEBIAN'" @click="changeBgColor"></SystemBtn>
          <SystemBtn :size="'5vw'" :bgColor="'black'" :title="'UBUNT'" @click="changeBgColor"></SystemBtn>
        </div>
        <div class="group7">
          <SystemBtn :size="'5vw'" :bgColor="'#336600'" :title="'DEBIAN'" @click="changeBgColor"></SystemBtn>
          <SystemBtn :size="'5vw'" :bgColor="'#cfcecf'" :title="'UBUNT'" @click="changeBgColor"></SystemBtn>
        </div>
      </div>
      <div class="flex-container flex-margin" >
        <div class="detail-item" :key="i" v-for="(v, i) in detaildata">
          <DetailItem :title="v" :bgColor="bgColor"/>
        </div>
      </div>
    </div>
    <div class="playground">
      <carousel :touch-drag="true" v-bind="setting" :mouse-drag="true" :items-to-show="setting.itemsToShow" :wrap-around="true" :snap-align="setting.snapAlign" :breakpoints="breakpoints">
        <slide v-for="(v, i) in carouseldata" :key="i">
          <CarouselBtn :title="v" @click="onClick"/>
        </slide>

        <template #addons>
          <navigation />
          <!-- <pagination /> -->
        </template>
      </carousel>
      <div class="editor-group">
        <MonacoEditor class="editor" />
        <monaco-editor :code="code" class="editor" :onSend="onSend" :title="'Run'"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import SystemBtn from './components/SystemBtn.vue';
  import DetailItem from './components/DetailItem.vue';
  import CarouselBtn from './components/CarouselBtn.vue';
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  import MonacoEditor from './components/MonacoEditor.vue';
  import restApi from '@/services';


  export default {
    name: 'LearnDST',
    data() {
      const detaildata = [
        "Mobile Application",
        "Cloud Servers",
        "Deployments",
        "Servers",
        "Desktop Application",
        "Mobile Application",
        "Cloud Servers",
        "Deployments",
        "Servers",
        "Desktop Application",
      ]
      const carouseldata = [
        "HTML & JavaScript",
        "Java & Python",
        "Ruby on Rails",
        "HTML",
        "TEST Components",
        "UI and UX Items",
        "Design",
        "Front End Interface",
        "HTML & JavaScript",
        "Java & Python",
        "Ruby on Rails",
        "HTML",
        "TEST Components",
        "UI and UX Items",
        "Design",
        "Front End Interface",
        "HTML & JavaScript",
        "Java & Python",
        "Ruby on Rails",
        "HTML",
        "TEST Components",
        "UI and UX Items",
        "Design",
        "Front End Interface"
      ]
      
      return {
        detaildata,
        carouseldata
      }
    },
    components: {
      Carousel,
      Slide,
      // Pagination,
      Navigation,
      SystemBtn,
      DetailItem,
      CarouselBtn,
      MonacoEditor
    },
    setup() {
      const code = ref(`<template class="d-flex justify-center">\n\t<v-btn>\n\t\tblock\n\t\t<v-overlay\n\t\t\tactivator="parent"\n\t\t\tlocation-strategy="connected" \n\t\t\tscroll-strategy="block"\n\t\t>\n\t\t\t<v-card class="pa-2"> \n\t\t\t\tHello!\n\t\t\t</v-card>\n\t\t</v-overlay>\n\t</v-btn>\n</template>`)

      const bgColor = ref('green');
      
      const changeBgColor = (event) => {
        const el = event.target;
        if (event.target.className.includes('system-btn')) {
          bgColor.value = el.style.backgroundColor;
        }
      }

      const onClick = (event) => {
        console.log(event);
        alert()
      }

      const setting = ref({
        itemsToShow: 5,
        snapAlign: 'center',
      })
      const breakpoints =  {
        // 700px and up
        669: {
          itemsToShow: 5,
          snapAlign: 'center',
        },
        // 1024 and up
        1024: {
          itemsToShow: 12,
          snapAlign: 'start',
        },
      }
      const onSend = async () => {
            try {
                const res = await restApi('play', {code: code.value});
                if ("error" in res) {
                    code.value = res.data
                }
            } catch (error) {
                console.log("send error: ", error)
            }
      }

      return {
        bgColor,
        setting,
        breakpoints,
        changeBgColor,
        onClick,
        onSend,
      }
    }
  };
</script>

<style scoped>
.construction {
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: start;  
  gap: 1em;
  
  img {
    width: 100%;
  }
  /* .img-ani {
    animation-name: imgani;
    animation-duration: 3s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
  }

  @keyframes imgani {
    to {
      
    }
  } */
  .system {
    border: 1px solid lightgray;
    border-radius: 5px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    /* align-items: center; */
    height: 100%;
    
    .flex-column,
    .flex-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    } 
    .flex-column {
      width: 60%;
      justify-content:space-between;
    } 

    .flex-container {
      width: 40%;
      align-items: center;
    }

    .group1,
    .group2,
    .group3,
    .group4,
    .group5,
    .group6,
    .group7{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .group3, .group7 {
      margin-top: -1em;
    }
    .group4, .group6 {
      margin-top: 5em;
    }
    .group5 {
      margin-top: 3em;
    }
    &>:first-child {
      border-right: solid 1px lightgray;
    }
    .flex-margin {
      margin: 10px;
    }
  }

  .playground {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 20px;
    width: 100%;
    height: auto;
    button.carousel__prev,
    button.carousel__next {
      box-sizing: content-box;
      border: 5px solid black;
      color: red !important;
      width: 20px !important;
      height: 20px !important;
    }

    .carousel__slide {
      width: auto !important;
      margin: 0 5px;
    }

    .carousel {
      margin: 0 20px;
      padding: 0 50px;
    }
  }

  .editor-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vm;
    .editor {
      margin: 10px;
      width: 48%;
    }
  }
  

  
  @media screen and (max-width: 669px) {
      .system, 
      .flex-column {
        justify-content: center;
        align-items: start;
        /* align-items: center; */
        flex-direction: column;
      }
      .system {
        .detail-item {
          width: 100%;
        }
        .flex-container,
        .flex-column {
          width: 100%;
        }
        .flex-margin{
          margin: 0 !important;
        }

        .system:first-child {
          border-right: none;
          border-bottom: solid 1px lightgray;
        }

        .group1,
        .group2,
        .group3,
        .group4,
        .group5,
        .group6,
        .group7{
          flex-direction: row;
          align-items: start;
          margin-top: 0;
        }
      }

      
      .editor-group {
        flex-direction: column;
        .editor {
          width: 100%;
        }
      }
  }
}
</style>
