<template>
    <div class="thumb" v-bind:class="{green: startValue  > 0 && startValue % 5 === 0, red: startValue  > 0 && startValue % 5 !== 0 && startValue % 3 === 0}">
        <input class="input" type="number" min="0" max="20" @keydown="onKeyPress" v-model="enteredValue">
        <p class="warn" v-if="enteredValue < 0 || enteredValue > 20">Value you provide to the input should be in range from 0 to 20!</p>
        <button type="button" class="decrease-btn btn" @click="onClick" v-bind:disabled="startValue<=0">Decrease</button>
        <span class="value">{{startValue}}</span>
        <button type="button" class="increase-btn btn" @click="onClick" v-bind:disabled="startValue>=20">Increase</button>
    </div>
</template>

<script>
export default ({
    data () {
        return {
            startValue: 0,
            step: 1,
            enteredValue: null,
        }
    },

    methods: {
        onClick (e) {
            const target = e.target;

            if (target.classList.contains("decrease-btn")){
                this.startValue -= this.step;
                if (this.startValue === 0){
                    return target.disabled = true
                }
                target.disabled = false;
            }else{
                this.startValue += this.step;
                if (this.startValue === 20){
                    return target.disabled = true
                }
                target.disabled = false;
            }
        },

        onKeyPress (e) {
            if (e.key === "Enter" && e.target.value >= 0 && e.target.value <= 20){
                this.startValue = parseInt(e.target.value);
                this.enteredValue = null;
            }
        }
    }
})
</script>

<style scoped>
    .thumb {
        position: relative;
        margin-top: 20px;
        font-size: 20px;
    }

    .thumb.green{
        color: #67bf63;
    }

    .thumb.red{
        color: #bf4d4d;
    }

    .input {
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 50px;
    }

    .warn {
        margin: 0;
        position: absolute;
        top: 31px;
        left: 50%;
        transform: translateX(-50%);
    }

    .btn {
        padding: 5px;
    }

    .decrease-btn {
        background-color: #e66960;
    }

    .increase-btn {
        background-color: #9edb86;
    }

    .value {
        font-size: 24px;
        padding: 0 40px;
    }
</style>