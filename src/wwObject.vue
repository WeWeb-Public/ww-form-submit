<template>
    <div class="elem-button">
        <button type="submit" v-show="status === 'default'">
            <wwObject ww-no-link :ww-object="wwObject.content.data.wwObject"></wwObject>
        </button>
        <div v-show="status === 'loading'">
            <wwObject ww-no-link :ww-object="wwObject.content.data.wwObjectOnLoading"></wwObject>
        </div>
        <div v-show="status === 'success'">
            <wwObject ww-no-link :ww-object="wwObject.content.data.wwObjectOnSuccess"></wwObject>
        </div>
        <div v-show="status === 'error'">
            <wwObject ww-no-link :ww-object="wwObject.content.data.wwObjectOnError" @click="!editMode && setStatus('default')"></wwObject>
        </div>
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
            wwLang: wwLib.wwLang,
            status: 'default'
        }
    },
    computed: {
        wwObject() {
            return this.wwObjectCtrl.get();
        },
        editMode() {
            return this.wwObjectCtrl.getSectionCtrl().getEditMode() == 'CONTENT'
        }
    },
    mounted() {
        this.init()
        wwLib.$on('ww-form-status', (status) => { this.setStatus(status) })
        this.$emit('ww-loaded', this);
    },
    methods: {
        init() {
            this.wwObject.content.data = this.wwObject.content.data || {}
            this.wwObject.content.data.wwObject = this.wwObject.content.data.wwObject || wwLib.wwObject.getDefault({ type: 'ww-button' })
            if (!this.wwObject.content.data.wwObjectOnLoading) {
                this.wwObject.content.data.wwObjectOnLoading = this.wwObject.content.data.wwObject
                wwLib.wwUtils.changeUniqueIds(this.wwObject.content.data.wwObjectOnLoading)
            }
            this.wwObject.content.data.wwObjectOnSuccess = this.wwObject.content.data.wwObjectOnSuccess ||  wwLib.wwObject.getDefault({
                type: 'ww-text',
                data: {
                    text: {
                        fr: '<p><span style="color: #19947c;">Formulaire envoyé</span></p>',
                        en: '<p><span style="color: #19947c;">Sent</span></p>'
                    }
                }
            })
            this.wwObject.content.data.wwObjectOnError = this.wwObject.content.data.wwObjectOnError || wwLib.wwObject.getDefault({
                type: 'ww-text',
                data: {
                    text: {
                        fr: '<p><span style="color: #ce003b;">Une erreur est survenue. Veuillez essayer plus tard.</span></p>',
                        en: '<p><span style="color: #ce003b;">An error occured. Please try again later.</span></p>'
                    }
                }
            })
            this.wwObjectCtrl.update(this.wwObject)
        },
        setStatus(status) {
            this.status = status
            this.wwObjectCtrl.update(this.wwObject)
        }
    }
};
</script>

<style lang="scss" scoped>
.elem-button {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    button {
        cursor: pointer;
        outline: none;
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