import wwObject from './wwObject.vue'

const name = "__NAME__";
const version = '__VERSION__';

const addComponent = function () {
    if (window.vm) {

        wwLib.wwObject.register({
            /* wwManager:start */
            cmsOptions: {
                displayName: {
                    en: 'Form Submit',
                    fr: 'Bouton de Formulaire'
                },
            },
            /* wwManager:end */
            content: {
                type: name,
                data: {
                    wwObject: wwLib.wwObject.getDefault({
                        type: 'ww-button',
                        data: {
                            text: wwLib.wwObject.getDefault({
                                type: 'ww-text',
                                data: {
                                    text: {
                                        fr: 'Envoyer',
                                        en: 'Submit'
                                    }
                                }
                            })
                        }
                    }),
                    wwObjectOnLoading: wwLib.wwObject.getDefault({
                        type: 'ww-button',
                        data: {
                            text: wwLib.wwObject.getDefault({
                                type: 'ww-text',
                                data: {
                                    text: {
                                        fr: 'Chargement...',
                                        en: '<p>[[wwObject=0]] Loading...</p>'
                                    },
                                    children: [
                                        wwLib.wwObject.getDefault({
                                            type: 'ww-icon',
                                            data: {
                                                icon: 'fa fa-spinner fa-spin',
                                                style: {
                                                    borderWidth: 0,
                                                    size: 20
                                                }
                                            }
                                        })
                                    ]
                                }
                            })
                        }
                    }),
                    wwObjectOnSuccess: wwLib.wwObject.getDefault({
                        type: 'ww-text',
                        data: {
                            text: {
                                fr: '<p><span style="color: #19947c;">Formulaire envoyé</span></p>',
                                en: '<p><span style="color: #19947c;">Sent</span></p>'
                            }
                        }
                    }),
                    wwObjectOnError: wwLib.wwObject.getDefault({
                        type: 'ww-text',
                        data: {
                            text: {
                                fr: '<p><span style="color: #ce003b;">Une erreur est survenue. Veuillez essayer plus tard.</span></p>',
                                en: '<p><span style="color: #ce003b;">An error occured. Please try again later.</span></p>'
                            }
                        }
                    })
                }
            },
            upsales: {
                wwAnalytics: {
                    click: true
                }
            }
        });

        window.vm.addComponent({
            name: name,
            version: version,
            content: wwObject
        });

        return true;
    }
    return false;
}

if (!addComponent()) {
    const iniInterval = setInterval(function () {
        if (addComponent()) {
            clearInterval(iniInterval);
        }
    }, 10);
}