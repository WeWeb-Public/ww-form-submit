<template>
    <div class="elem-button">
        <button type="submit">
            <wwObject :ww-object="wwObject.content.data.wwObject"></wwObject>
        </button>
    </div>
</template>


<script>
export default {
    name: "ww-form-submit",
    props: {
        wwObjectCtrl: Object,
    },
    data() {
        return {
            wwLang: wwLib.wwLang
        }
    },
    computed: {
        wwObject() {
            return this.wwObjectCtrl.get();
        }
    },
    methods: {
        submit() {

        }
    },
    mounted() {
        this.wwObject.content.data = this.wwObject.content.data || {}
        this.wwObject.content.data.wwObject = this.wwObject.content.data.wwObject || wwLib.wwObject.getDefault({ type: 'ww-button' })

        this.wwObjectCtrl.update(this.wwObject)
        this.$emit('ww-loaded', this);
    }
};
</script>

<style lang="scss" scoped>
.elem-button {
    cursor: pointer;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    button {
        outline: none;
        -webkit-appearance: none;
        appearance: none;
        text-rendering: auto;
        color: inherit;
        background-color: inherit;
        font: inherit;
        padding: none;
        border: none;
        cursor: pointer;
    }
}
</style>