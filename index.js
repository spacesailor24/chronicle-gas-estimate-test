import * as ethers from "ethers";

(async () => {
  const ethersProvider = new ethers.providers.JsonRpcProvider(
    "https://chain-rpc.litprotocol.com/http"
  );
  const response = await ethersProvider.estimateGas({
    to: "0xa89543a7145c68e52a4d584f1ceb123605131211",
    value: ethers.utils.parseEther("0.0001"),
  });
  console.log(`Response: ${response}`);
})();
