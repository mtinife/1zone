import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Import the Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import specific icons you need
import { faEllipsisVertical, faGear, faHandHoldingDollar, faPiggyBank, faCoins, faReceipt, faSackXmark } from '@fortawesome/free-solid-svg-icons'

// Import the Font Awesome Vue component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add icons to the library
library.add(faEllipsisVertical, faGear, faHandHoldingDollar, faPiggyBank, faCoins, faReceipt, faSackXmark)

const oneZoneApp = createApp(App)

oneZoneApp.component('font-awesome-icon', FontAwesomeIcon)

oneZoneApp.mount('#app')

