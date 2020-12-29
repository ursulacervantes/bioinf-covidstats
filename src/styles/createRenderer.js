/* global FELA_CONFIG */

import { createRenderer } from 'fela'
import {
    TINY_SCREEN,
    SMALL_SCREEN,
    MEDIUM_SCREEN,
    INBETWEEN_SCREEN,
    LARGE_SCREEN,
    LARGER_SCREEN,
    WIDE_SCREEN,
} from 'styles/variables'

const DISABLED_CLASSNAMES = [
    // Short for “advertisment”
    'ad',
    'ads',
    'adv',
    // See: https://github.com/adblockultimate/AdBlocker-Ultimate-for-Chrome/blob/3f07afbffa5c389270abe9ee4dc13333ca35613e/filters/filter_9.txt#L867
    'bi',
    // Short for “Facebook”
    'fb',
    // Short for “Instagram”
    'ig',
    // Short for “Pinterest”
    'pin',
    // Short for “Twitter”
    'tw',
    // Short for “VKontakte”
    'vk',
]

let plugins
let enhancers

// FELA_CONFIG is not necessarily provided in testing environments.
try {
    plugins = FELA_CONFIG.plugins
    enhancers = FELA_CONFIG.enhancers
} catch (error) {
    plugins = []
    enhancers = []
}

export default () =>
    createRenderer({
        plugins,
        enhancers,
        keyframePrefixes: [],
        mediaQueryOrder: [
            TINY_SCREEN,
            INBETWEEN_SCREEN,
            SMALL_SCREEN,
            MEDIUM_SCREEN,
            LARGE_SCREEN,
            LARGER_SCREEN,
            WIDE_SCREEN,
        ].map(mq => mq.replace('@media ', '')),
        filterClassName: className => !DISABLED_CLASSNAMES.includes(className),
    })
