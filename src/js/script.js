'use strict'

import { router } from './modules/router.js'
import { getData } from './modules/api.js'
import { googleTranslateElementInit } from './modules/translate.js'

router()
getData('Nederlands', 'Book')
getData('Taalcafe', 'Activiteiten')
googleTranslateElementInit()
