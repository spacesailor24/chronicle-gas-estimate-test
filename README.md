1. `yarn`
2. `yarn start`

Yields the error:

```
Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (error={"reason":"processing response error","code":"SERVER_ERROR","body":"{\"jsonrpc\":\"2.0\",\"id\":44,\"error\":{\"code\":-32000,\"message\":\"gas required exceeds allowance (15000000)\"}}\n","error":{"code":-32000},"requestBody":"{\"method\":\"eth_estimateGas\",\"params\":[{\"value\":\"0x5af3107a4000\",\"to\":\"0xa89543a7145c68e52a4d584f1ceb123605131211\"}],\"id\":44,\"jsonrpc\":\"2.0\"}","requestMethod":"POST","url":"https://chain-rpc.litprotocol.com/http"}, method="estimateGas", transaction={"to":"0xA89543a7145C68E52a4D584f1ceb123605131211","value":{"type":"BigNumber","hex":"0x5af3107a4000"},"accessList":null}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)
    at Logger.makeError (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/logger/lib/index.js:238:21)
    at Logger.throwError (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/logger/lib/index.js:247:20)
    at checkError (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:175:16)
    at JsonRpcProvider.<anonymous> (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:751:47)
    at step (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.throw (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at rejected (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  reason: 'cannot estimate gas; transaction may fail or may require manual gas limit',
  code: 'UNPREDICTABLE_GAS_LIMIT',
  error: Error: processing response error (body="{\"jsonrpc\":\"2.0\",\"id\":44,\"error\":{\"code\":-32000,\"message\":\"gas required exceeds allowance (15000000)\"}}\n", error={"code":-32000}, requestBody="{\"method\":\"eth_estimateGas\",\"params\":[{\"value\":\"0x5af3107a4000\",\"to\":\"0xa89543a7145c68e52a4d584f1ceb123605131211\"}],\"id\":44,\"jsonrpc\":\"2.0\"}", requestMethod="POST", url="https://chain-rpc.litprotocol.com/http", code=SERVER_ERROR, version=web/5.7.1)
      at Logger.makeError (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/logger/lib/index.js:238:21)
      at Logger.throwError (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/logger/lib/index.js:247:20)
      at /Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/web/lib/index.js:313:32
      at step (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/web/lib/index.js:33:23)
      at Object.next (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/web/lib/index.js:14:53)
      at fulfilled (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/web/lib/index.js:5:58)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
    reason: 'processing response error',
    code: 'SERVER_ERROR',
    body: '{"jsonrpc":"2.0","id":44,"error":{"code":-32000,"message":"gas required exceeds allowance (15000000)"}}\n',
    error: Error: gas required exceeds allowance (15000000)
        at getResult (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:191:21)
        at processJsonFunc (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/web/lib/index.js:356:22)
        at /Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/web/lib/index.js:288:46
        at step (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/web/lib/index.js:33:23)
        at Object.next (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/web/lib/index.js:14:53)
        at fulfilled (/Users/whyit/tmp/chronicle-gas-estimate-test/node_modules/@ethersproject/web/lib/index.js:5:58)
        at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
      code: -32000,
      data: undefined
    },
    requestBody: '{"method":"eth_estimateGas","params":[{"value":"0x5af3107a4000","to":"0xa89543a7145c68e52a4d584f1ceb123605131211"}],"id":44,"jsonrpc":"2.0"}',
    requestMethod: 'POST',
    url: 'https://chain-rpc.litprotocol.com/http'
  },
  method: 'estimateGas',
  transaction: {
    to: '0xA89543a7145C68E52a4D584f1ceb123605131211',
    value: BigNumber { _hex: '0x5af3107a4000', _isBigNumber: true },
    accessList: null
  }
}
```
