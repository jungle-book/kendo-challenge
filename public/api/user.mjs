/// <reference types="../../node_modules/njs-types/ngx_http_js_module.d.ts" />

const getUserInfo =/** @type (r: NginxHTTPRequest) => Promise<void> */ (r) => {
    r.return(200, JSON.stringify(r.headersIn))
    return
}

export default { getUserInfo };
