<template>
    <div>
        <input type="radio" :value="values" :name="names" :checked="isChecked" :id="label" class="w-5 h-5 mr-2" 
            @change="$emit('change', $event.target.value)" />
        <label :for="label" class="text-xl mr-2">{{ label }}</label>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props: {
        "label": { type: String, default: "", required:true },
        "modelValue": { default: "" },
        "value": { type: String, default: undefined },
        "names": { type: String, default: "" }
    },
    computed: {
        isChecked() {
            return this.modelValue == this.value
        }
    }
}
</script>