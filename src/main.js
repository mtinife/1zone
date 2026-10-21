import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Import the Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import specific icons you need
import { faGear, faHandHoldingDollar, faPiggyBank, faCoins, faReceipt, faSackXmark } from '@fortawesome/free-solid-svg-icons'

// Import the Font Awesome Vue component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add icons to the library
library.add(faGear, faHandHoldingDollar, faPiggyBank, faCoins, faReceipt, faSackXmark)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

