import { createVuetify } from 'vuetify'
// import { VCard, VCardText } from 'vuetify/components/VCard'
// import { VApp } from 'vuetify/components/VApp'
// import { VProgressCircular } from 'vuetify/components/VProgressCircular'
// import { VIcon } from 'vuetify/lib/components/VIcon'
// import { VContainer } from 'vuetify/lib/components'

import {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VCard,
    VCardItem,
    VCardActions,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VContainer,
    VToolbar,
    VToolbarTitle,
    VMenu,
    VList,
    VListItem,
    VListItemAction,
    VListItemTitle,
    VAvatar,
    VIcon,
    VBtn,
    VSelect,
    VTextField,
    VForm,
    VAlert,
    VSpacer,
    VImg,
    VNavigationDrawer,
    VMain,
    VSnackbar,
    VSwitch,
    VDivider,
    VDialog,
    VFileInput,
} from 'vuetify/lib/components'

// import { VBtn } from 'vuetify/components/VBtn'
// import { VRating } from 'vuetify/components/VRating'
// import { VToolbar } from 'vuetify/components/VToolbar'
import { Ripple } from 'vuetify/directives'

const metalicDarkTheme = {
    dark: true,
    colors: {
        primary: '#757575',
        'primary-darken-1': '#696969',
        secondary: '#424242',
        'secondary-darken-1': '#3b3b3b',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    }
}


const vuetify = createVuetify({
    theme: {
        defaultTheme: 'metalicDarkTheme',
        themes: {
            metalicDarkTheme
        }
    },
    components: {
        VApp,
        VAppBar,
        VAppBarNavIcon,
        VCard,
        VCardItem,
        VCardActions,
        VCardTitle,
        VCardSubtitle,
        VCardText,
        VContainer,
        VToolbar,
        VToolbarTitle,
        VMenu,
        VList,
        VListItem,
        VListItemAction,
        VListItemTitle,
        VAvatar,
        VIcon,
        VBtn,
        VSelect,
        VTextField,
        VForm,
        VAlert,
        VSpacer,
        VImg,
        VNavigationDrawer,
        VMain,
        VSnackbar,
        VSwitch,
        VDivider,
        VDialog,
        VFileInput,
        // VApp,
        // VBtn,
        // VCard,
        // VCardText,
        // VRating,
        // VToolbar,
        // VProgressCircular,
        // VIcon,
        // VContainer
    },
    directives: {
        Ripple,
    },
})

export default vuetify