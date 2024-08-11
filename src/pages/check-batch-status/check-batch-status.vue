<template>
    <div class="container main">
        <div class="title">Check Current Batch Status</div>
        <div class="form">
            <div class="fill-form">
                <div class="title">FROM DATE <span>*</span></div>
                <input class="form-field" type="date">
            </div>
            <div class="fill-form">
                <div class="title">TO DATE <span>*</span></div>
                <input class="form-field" type="date">
            </div>
            <div class="fill-form">
                <div class="title">FILTER TYPE <span>*</span></div>
                <select class="form-field">
                    <option>Processed</option>
                    <option>Unprocessed</option>
                </select>
            </div>
            <div class="fill-form">
                <div class="title">CAMPAIGN DATE <span>*</span></div>
                <input class="form-field" type="text">
            </div>
            <div class="btns">
                <button>SUBMIT</button>
                <button id="reset">RESET</button>
            </div>
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <td>Batch ID</td>
                        <td>Date Submitted</td>
                        <td>Date Processed</td>
                        <td>Campaign Name</td>
                        <td>Total Records</td>
                        <td>Success</td>
                        <td>Failed</td>
                        <td>Batch Status</td>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="k" v-for="(i, k) in  tableData ">
                        <td>{{ i.batchId }}</td>
                        <td>{{ i.dateSubmitted }}</td>
                        <td>{{ i.dateProcessed }}</td>
                        <td>{{ i.campaignName }}</td>
                        <td>{{ i.totalRecords }}</td>
                        <td>{{ i.success }}</td>
                        <td>{{ i.failed }}</td>
                        <td class="status" >
                            <span :style="{ 
                                backgroundColor: i.batchStatus === 'Progress' ? 'var(--success)' 
                                    : i.batchStatus === 'Open' ? 'var(--warning)' 
                                    : 'var(--danger)' 
                            }">{{ i.batchStatus }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script >
import { ref } from 'vue';

export default {
    name: 'CheckBatchStatus',
    setup() {
        const tableData = ref([
            {
                batchId: "1201",
                dateSubmitted: "Aug 07 2024 3:06 AM",
                dateProcessed: "Aug 07 2024 3:06 AM",
                campaignName: "ALL NY Grids",
                totalRecords: "850",
                success: "843",
                failed: "7",
                batchStatus: "Progress",
            },
            {
                batchId: "1201",
                dateSubmitted: "Aug 07 2024 3:06 AM",
                dateProcessed: "Aug 07 2024 3:06 AM",
                campaignName: "ALL NY Grids",
                totalRecords: "850",
                success: "843",
                failed: "7",
                batchStatus: "Open",
            },
            {
                batchId: "1201",
                dateSubmitted: "Aug 07 2024 3:06 AM",
                dateProcessed: "Aug 07 2024 3:06 AM",
                campaignName: "ALL NY Grids",
                totalRecords: "850",
                success: "843",
                failed: "7",
                batchStatus: "On hold",
            },
        ]);
        return {
            tableData
        }
    }
};
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    gap: .5em;
    margin-top: 2em;

    .title {
        text-align: center;
        font-size: 25px;
        color: rgb(7, 111, 143);
        font-weight: 600;
    }

    .form {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 2.5em;
        border: 1px solid lightgray;
        border-radius: .5em;
        widows: 100%;
        padding: 2em;

        .fill-form {
            display: flex;
            flex-direction: column;
            gap: .2em;

            .title {
                font-size: 13px;
                font-weight: 800;
                text-align: left;
                color: black;
            }

            span {
                color: red;
                font-size: 16px;
                font-weight: 800;
            }

            .form-field {
                width: 100%;
                padding: .5em 1em;
                font-size: 14px;
                border-radius: .3em;
                width: 150px;
                outline: none;
                border: 2px solid lightgray;
            }
        }

        .btns {
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

    .table-container {
        padding-top: 1em;

        table {
            border-collapse: collapse;
            width: 100%;
            border: 2px solid lightgray;
        }

        thead {
            padding-top: 12px;
            color: blue;
            font-size: 14px;
            font-weight: bold;
        }

        td {
            padding: .5em 0;
            padding: 1em;
        }

        tbody {
            padding-top: 12px;
            font-size: 14px;
            font-weight: bold;

            tr {
                background-color: #f2f2f2;

            }

            tr:nth-child(even) {
                background-color: #ffffff;
            }

            .status {
                span {
                    border-radius: .5em;
                    color: white;
                    padding: .7em 1em;
                }

                ;
            }
        }
    }

}
</style>
