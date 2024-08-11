<template>
    <div class="container">
        <div class="navbar">
            <button v-if="title" @click="onSend" class="btn-gray">{{ title }}</button>
            <button v-else class="btn-gray">Template</button>
            <div class="flex-right">
                <div style="cursor: pointer;"><img src="../../../assets/icon/vue.svg" class="btn" width="30px" height="30px" ></div>
                <div style="cursor: pointer;" @click="copy2Clipboard"><img src="../../../assets/icon/copy.svg" class="btn" width="30px" height="30px"></div>
                
                <div style="cursor: pointer;">
                    <div @click="onCollapse" v-if="isCollpase"><img src="../../../assets/icon/arrow-up.svg" class="btn" width="25px" height="25px"></div>
                    <div @click="onCollapse" v-else><img src="../../../assets/icon/arrow-down.svg" class="btn" width="25px" height="25px"></div>
                </div>
            </div>
        </div>
        <VueMonacoEditor language="javascript" :code="code" theme="vs-dark" :options="MONACO_EDITOR_OPTIONS" :height="isCollpase ? '200px' : '500px'" @mount="handleMount" />
    </div>
</template>

<script>
    import { ref, shallowRef, watch } from 'vue';
    import { VueMonacoEditor } from '@guolao/vue-monaco-editor'

    export default {
        
        name: 'MonacoEditor',
        components: {
            VueMonacoEditor
        },
        props:{
            onSend: Function,
            title: String,
            code: String,
        },
        setup(props) {
            const isCollpase = ref(false);
            const editorRef = shallowRef();
            const onCollapse = () => {
                isCollpase.value = !isCollpase.value;
            }
            
            const localCode = ref(props.code);
            const handleMount = editor => (editorRef.value = editor);
            const MONACO_EDITOR_OPTIONS = {
                automaticLayout: true,
                formatOnType: true,
                formatOnPaste: true,
                fontSize: '20px',
            }
            const copy2Clipboard = () => navigator.clipboard.writeText(localCode.value);

            watch(() => props.code, (newCode) => {
                localCode.value = newCode;
            });
            return {
                MONACO_EDITOR_OPTIONS,
                handleMount,
                onCollapse,
                copy2Clipboard,
                isCollpase,
                localCode
            }
        }
    }
</script>


<style scoped>
    .navbar {
        background-color: lightgray;
        width: 100%;
        height: 3em;
        border-radius: 5px 5px 0 0;
        display: flex;
        align-items: center;
        position: relative;
        padding: 0 10px;
        .btn-gray {
            border-radius: 5px 8px;
            padding: 5px;
            border: none;
            text-align: center;
            color: rgb(88, 88, 88);
            font-size: 1.3em;
            cursor: pointer;
        }
        .btn-gray:hover {
            background-color: darkgray;
        }
        .btn-gray:active {
            background-color: rgb(133, 133, 133);
        }
        .flex-right {
            position: absolute;
            right: 20px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .btn {
            margin: 10px;
            color: rgb(88, 88, 88);
            padding: 5px;
        }

        
    .btn:hover {
        background-color: darkgray;
        color: white;
        border-radius: 50%;
    }

    .btn:active {
        background-color: rgb(133, 133, 133);
    }
}
</style>