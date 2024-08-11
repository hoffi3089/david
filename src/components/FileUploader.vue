<template>
    <div class="file-uploader">
        <input type="file" @change="handleFileUpload" accept=".csv, .xlsx, .xls"/>
        <div class="upload-btn" v-if="file">
            <button @click="uploadFile">Upload</button>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

import restApi from "../services/index";
import {showToast} from "../utils/helper";

export default {
    name: 'FileUploader',
    setup() {
        const file = ref(null);
        const jsonData = ref(null);

        const handleFileUpload = (event) => {
            const target = event.target;
            if (target.files && target.files.length > 0) {
                file.value = target.files[0]; // Get the file directly
            }
        };


        const uploadFile = async () => {
            if (!file.value) return;
            if (file.value.name.split(".")[1] === "csv") {
                Papa.parse(file.value, {
                    header: true,
                    complete: (results) => {
                        console.log(JSON.stringify(results.data, null, '\t'))

                        jsonData.value = JSON.stringify(results.data, null, '\t');
                    },
                    error: (error) => {
                        console.error("Error parsing CSV: ", error)
                    }
                })
            } else {
                const reader = new FileReader();

                reader.onload = (e) => {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });

                    const opts = {
                        header: true,
                        raw: false,
                        defval: '',
                    };

                    const json = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], opts);
                    console.log(json)
                    jsonData.value = JSON.stringify(json, null, '\t');
                };

                // Read the file as an ArrayBuffer
                reader.readAsArrayBuffer(file.value); // Use the file directly
            }
            try {
                //api to send request to feeddata
                
                const resp = await restApi('feeddata', {data: jsonData});

                if ('error' in resp) {
                    console.log(resp.data);
                    showToast('File sent successfully.', 'success')
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        };

        return {
            file,
            jsonData,
            handleFileUpload,
            uploadFile,
        };
    },
};
</script>
  
<style scoped>
.file-uploader {
    text-align: center;

    input {
        font-size: 14px;
        font-weight: 600;
    }

    .upload-btn {
        margin-top: 1em;
    }
}
</style>
  