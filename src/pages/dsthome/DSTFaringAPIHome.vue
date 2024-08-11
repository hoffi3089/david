<template>
    <div class="container">
        <!-- <div v-if="healthStatus" class="health-status">
            <p>Service Status: {{ healthStatus.status }}</p>
            <p>Last Checked: {{ new Date(healthStatus.timestamp).toLocaleString() }}</p>
        </div> -->
        <div class="main">
            <!-- <p>Loading...</p> -->
            <div class="">
                <div class="quick-links">
                    <div class="title">QUICK LINKS</div>
                    <div class="links">
                        <router-link to="/bfm" class="nav-link">Feed BFM Input Data</router-link>
                        <router-link to="/learn" class="nav-link">Search Fares & Availability</router-link>
                        <router-link to="/check-batch-status" class="nav-link">Check Batch Status</router-link>
                        <router-link to="/learn" class="nav-link">BFM APIs Playground</router-link>
                    </div>
                </div>
                <div class="chart">
                    <div class="title">RECORDS PROCESSED BY AUTOMATION</div>
                    <div class="text-lg text-red-400 bg-red-100">RECORDS PROCESSED BY AUTOMATION</div>
                    <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
                </div>
            </div>

            <div>
                <div class="current-state">
                    <div class="title">CURRENT STATE</div>

                    <div class="progress-container">
                        <div :key="k" v-for="(i, k) in progressData">
                            <div class="progress-title">
                                <div>{{ i.title }}</div>
                                <div>{{ i.amount }}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{ width: i.progress }"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about">
                    <div class="title">ABOUT API FARING DASHBOARD</div>
                    <div class="desc">
                        The Bing Search APIs add intelligent
                        padding-bottom: 2em;search to your app, combing hundreds of billions of webpages,
                        images, videos, and news to provide relevant results with no ads. The results can be
                        automatically
                        customized to your user's locations or markets, increasing relevancy by staying local. It
                        includes 8
                        features.
                    </div>
                    <styled-accordion :items="accordionItems" />
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import { ref, onMounted } from 'vue';
import ApiService from '../../services/FaringApiDashboardService';
import StyledAccordion from '../../components/StyledAccordion.vue';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export default {
    name: 'MainDashboardHome',
    components: {
        StyledAccordion,
        Line,
    },
    setup() {
        const healthStatus = ref(null);
        const accordionItems = ref([
            { title: 'Section 1', content: 'Content for section 1.' },
            { title: 'Section 2', content: 'Content for section 2.' },
            { title: 'Section 3', content: 'Content for section 3.' },
        ]);
        const chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [20, 19, 10, 50, 39, 80, 80, 20, 19, 10, 50, 39, 80, 80]
                },
                {
                    label: 'Data Two',
                    backgroundColor: '#f87979',
                    data: [60, 39, 30, 40, 20, 10, 40, 60, 39, 30, 40, 20, 10, 40]
                }
            ]
        }
        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false
        }

        const progressData = [
            {
                title: "Direct",
                amount: "1,42,382",
                progress: "40%"
            },
            {
                title: "Referral",
                amount: "87,974",
                progress: "30%"
            },
            {
                title: "Social Media",
                amount: "45,211",
                progress: "40%"
            },
            {
                title: "Twitter",
                amount: "21,893",
                progress: "40%"
            }
        ]

        onMounted(async () => {
            try {
                const response = await ApiService.healthCheck();
                healthStatus.value = response;
            } catch (error) {
                console.error('Failed to fetch health check:', error);
            }
        });
        return {
            healthStatus,
            accordionItems,
            chartOptions,
            chartData,
            chartConfig,
            progressData
        };
    }
};
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;

    &>:first-child {
        display: flex;
        gap: 1em;

        .quick-links {
            width: 25%;
            padding: 1em;
            border: 1px solid lightgrey;
            border-radius: .5em;
            height: 300px;

            .title {
                font-weight: 900;
                text-decoration: underline;
            }

            .links {
                display: flex;
                margin-top: 1em;
                flex-direction: column;
                gap: .3em;
                font-size: 12px;
                font-weight: bolder;

                .nav-link {
                    text-decoration: none;
                    color: blue;
                    font-size: 15px;
                    font-weight: 600;
                }
            }
        }

        .chart {
            width: 75%;
            padding: 1em;
            padding-bottom: 2em;
            border: 1px solid lightgrey;
            border-radius: .5em;
            height: 300px;

            .title {
                font-weight: 900;
            }
        }

        @media screen and (max-width: 969px) {
            flex-direction: column;
            .quick-links {
                width: 100%;
                height: auto;
            }
            .chart {
                width: 100%;
                height: 300px;
            }
        }
    }

    &>:nth-child(2) {
        display: flex;
        gap: 1em;
        margin-bottom: 2em;

        .current-state {
            width: 40%;
            padding: 1em;
            border: 1px solid lightgrey;
            border-radius: .5em;

            .title {
                font-weight: 900;
                margin-bottom: 2em;
            }

            .progress-container {
                .progress-title {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    margin-bottom: .5em;
                }

                .progress {
                    width: 100%;
                    height: .4em;
                    background-color: rgb(229 231 235);
                    border-radius: 50px;
                    margin-bottom: 1em;

                    .progress-bar {
                        height: 100%;
                        border-radius: 50px;
                        background-color: rgb(79 70 229);
                    }
                }
            }
        }

        .about {
            width: 60%;
            padding: 1em;
            border: 1px solid lightgrey;
            border-radius: .3em;
            display: flex;
            flex-direction: column;
            gap: 1em;

            .title {
                font-weight: 900;
            }

            .desc {
                font-size: 13px;
                font-weight: 900;
            }
        }

        @media screen and (max-width: 767px) {
            flex-direction: column;
            .current-state, .about {
                width: 100%;
            }
        }
    }

}

.health-status {
    margin-top: 20px;
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
}
</style>
