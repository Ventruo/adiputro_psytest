<template>
    <div class="flex justify-center mb-1">
        <img src="../../assets/logo.png" alt="" class="w-32 bg-primary-900 py-2 px-3 rounded-xl">
    </div>
    
    <hr style="border-top: 2px solid black;">

    <div class="flex mt-2">
        <div class="flex">
            <div class="font-bold text-sm">
                <p>Nama</p>
                <p>Jenis Kelamin (L/P)</p>
            </div>
            <div class="ml-2 text-sm">
                <p>: {{this.nama}}</p>
                <p>: L</p>
            </div>
        </div>
        
        <div class="flex ml-3">
            <div class="font-bold text-sm">
                <p>Pendidikan</p>
                <p>Kode</p>
            </div>
            <div class="ml-3 text-sm">
                <p>: S1</p>
                <p>: 1</p>
            </div>
        </div>
    </div>

    <div class="grow text-sm mt-3">
        <canvas :id="id" width="400" height="350"></canvas>
    </div>

    <div class="text-xs mb-2">
        <div class="w-full">
            <p class="font-bold">PT. Adiputro Wirasejati</p>
            <div class="flex justify-between relative w-full">
                <div>
                    <div>
                        <p>Jl. Raya Balearjosari no. 35</p>
                        <p>Malang, Jawa Timur - Indonesia 65126</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="flex gap-2">
                            <p class="font-bold">T</p>
                            <p>+62 (0) 341 491 139</p>
                        </div>
                    </div>
                    <div>
                        <div class="flex gap-2">
                            <p class="font-bold">F</p>
                            <p>+62 (0) 341 491 904</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-end">
                    <p class="font-bold">Adiputrogroup.com</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        "data": { type: Object, default: [], required: true },
        "id": { type: String, required: true },
        "nama": { type: String, default: '', required: true },
    },
    data() {
        return {
            dataGrafik: null,
            plugin: {
                id: 'custom_canvas',
                beforeDraw: (chart) => {
                    const ctx = chart.canvas.getContext('2d');
                    ctx.save();
                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.fillStyle = 'white';
                    ctx.fillRect(0, 0, chart.width, chart.height);
                    ctx.restore();
                }
            }
        }
    },
    mounted() {
        var temp = Object.entries(this.data)
        var data = []
        for (let i = 0; i < 15; i++) {
            data.push(temp[i][1].Percentile)
        }

        this.dataGrafik = data
        const ctx = $('#'+this.id)
        const percentileChart = new Chart(ctx, {
            plugins: [this.plugin],
            type: 'line',
            data: {
                labels: ['ach', 'def', 'ord', 'exh', 'aut', 'aff','int','suc','dom','aba','nur','chg','end','het','agg'],
                datasets: [{
                    label: 'Grafik Precentile',
                    data: this.dataGrafik,
                    backgroundColor: [
                        'red'
                    ],
                    borderColor: [
                        'blue'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes:{
                        ticks:{
                        color: 'black'
                        },
                        grid: { 
                        color: "#ffffff",
                        }
                    },
                    yAxes: {
                        beginAtZero: true,
                        min: 0,
                        max: 100,
                        ticks:{
                        stepSize: 5,
                        color: 'black'
                        },
                        grid: { color: "#000000" }
                    }
                },
                plugins:{
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Grafik Percentile',
                        color: "black",
                        font: {
                            size: 20
                        }
                    }
                }
            }
        });
    },
}
</script>

<style>

</style>