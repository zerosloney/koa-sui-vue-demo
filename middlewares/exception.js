module.exports = function(locale) {
    return function*(ctx, next) {
        let _locale = locale || 'EN';
        let msg;
        let code = 500;
        try {
            yield next;
        } catch (e) {
            msg = e.message;
            if (e.name == "token_error") {
                code = 302;
            } else if (e.name == "access_denied") {
                code = 403;
            } else if (["login_error", "checkcode_error", "Error"].indexOf(e.name) > -1) {

            } else {
                switch (_locale) {
                    case 'CN':
                        msg = "操作失败,系统异常!";
                        break;
                    case 'EN':
                        msg = "Oops, system is busy now!";
                        break;
                    default:
                        msg = "Oops, system is busy now!";
                        break;
                }
            }

        } finally {
            if (msg) {
                ctx.body = { code: code, msg: msg };
            }
        }
    }
}