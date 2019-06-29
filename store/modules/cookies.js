const cookieparser = process.server ? require('cookieparser') : undefined;
const Cookie = process.client ? require('js-cookie') : undefined;
import * as _ from 'lodash';

export default {
    namespaced: true,
    state: {
        data: {
            auth: null
        }
    },
    mutations: {
        set(state, {name, value, params}) {
            Cookie.set(name, value, params);
            state[name] = value;
        },
        initCookies(state, serverReq) {
            if (serverReq) {
                state.data = cookieparser.parse(serverReq.headers.cookie)
            } else {
                _.forOwn(state, (val, key) => {
                    state.data[key] = Cookie.get(key);
                });
            }
        }
    }
}

