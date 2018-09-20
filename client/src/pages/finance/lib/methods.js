import config from './config.js'
import ajax from './ajax'
import Methods from '../../../common/methods';

export default {
    Ajax(...opt){
        return ajax(...opt)
    },
    ...Methods,
}