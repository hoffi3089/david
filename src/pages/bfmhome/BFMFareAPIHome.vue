<template>
  <div class="container">
    <div class="wrapper">
      <div>
        <div class="upload">
          <div class=" pl-1">
            <div class="title">UPLOAD BFM INPUT DATA</div>
            <file-uploader />
            <div class="upload-warning">select only .csv or .xsl files or .xlsx</div>
          </div>

          <div class="upload-desc">
            Upload BFM Fare input data using excel or csv file format. Fields on right side input form will help you to
            override values from excel input before submit data.
          </div>
        </div>
      </div>
      <div class="select">
        <div class="select-form">
          <select-field :options="selectionData" />
        </div>

        <div class="btns">
          <button id="reset">RESET</button>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>


  </div>
</template>
  
<script>
import { ref } from 'vue';

import SelectField from "./components/SelectField.vue";
import FileUploader from '../../components/FileUploader.vue';
export default {
  name: 'BFMHome',
  components: {
    SelectField,
    FileUploader
  },
  setup() {
    const selectionData = ref([
      {
        title: "CORPORATE FARES",
        value: false,
        placeholder: "Select"
      },
      {
        title: "ALLOW MIN-MAX RESTRICTION",
        value: false,
        placeholder: "Select"
      },
      {
        title: "EDIFACT / NDC ?",
        value: false,
        placeholder: "Select"
      },
      {
        title: "TRIP TYPE",
        value: "",
        placeholder: "Select"
      },
      {
        title: "FARE TYPES",
        value: "",
        placeholder: "Select"
      },
      {
        title: "ALLOW REFUND PENALTY",
        value: "",
        placeholder: "Select"
      },
      {
        title: "ALLOW REFUND PENALTY",
        value: "",
        placeholder: "Select"
      },
      {
        title: "TICKETING RESTRICTION",
        value: "",
        placeholder: "Select"
      },
    ])
    return {
      selectionData,
    }
  },
};
</script>
  
<style scoped>
.wrapper {
  display: flex;
  gap: 1em;
  margin-top: 1em;
  margin-bottom: 2em;

  &>:first-child {
    width: 25%;

    .upload {
      padding: 1em;
      border: 1px solid lightgrey;
      border-radius: .5em;

      &>:nth-child(2) {
        display: flex;
        justify-content: center;
      }

      .upload-warning {
        color: var(--danger);
        font-size: 12px;
        font-weight: 700;
        padding: .7em 0;
      }

      .upload-desc {
        color: var(--gray);
        font-size: 13px;
        font-weight: 900;
      }
    }
  }

  .select {
    width: 75%;

    .select-form {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      padding: 1em;
      border: 1px solid lightgrey;
      border-radius: .5em;
    }

    .btns {
      margin-top: 2em;
      display: flex;
      justify-content: center;
      gap: 1em;

      button {
        background-color: green;
        border: none;
        color: white;
        padding: .5em 1.5em;
        border-radius: .3em;
      }

      #reset {
        background-color: var(--gray);
      }
    }
  }

  .title {
    margin-top: .6em;
    margin-bottom: .5em;
    color: var(--primary);
    font-weight: 700;
  }

  @media screen and (max-width: 969px) {
    flex-direction: column;

    &>:first-child {
      width: 100%;
    }

    &>:last-child {
      width: 100%;
    }
  }
}
</style>
  