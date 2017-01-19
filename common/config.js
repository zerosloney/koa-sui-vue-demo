module.exports = {
    db: {
        'host': 'localhost',
        'port': '3306',
        'user': 'root',
        'password': '',
        'database': 'biz_account'
    },
    apiStoreKey: '',
    jwtOptions: {
        payload: {
            scope: 'xhr',
            iss: 'sui-plan',
            expires: Math.round((new Date().getTime() / 1000)) + 3600
        },
        sercet: '74bb0d2c7a6bad2a633e8a15edeeb592',
    },
    jsonRes: {
        error: 0,
        msg: '',
        data: null
    }
}