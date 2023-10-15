import { walletConnect, walletConnectHooks } from "@/connectors/walletConnect";
import { useWeb3React } from "@web3-react/core";
import React from "react";

const { useIsActive } = walletConnectHooks;

export default function WalletConnectCard() {
  const isActive = useIsActive();
  const { connector } = useWeb3React();

  return (
    <div>
      <h2>WalletConnect V2</h2>
      {isActive ? (
        <button
          onClick={() => {
            walletConnect.resetState()
            walletConnect.deactivate?.();
          }}
        >
          Disconnect
        </button>
      ) : (
        <button
          onClick={() => {
            console.log("walletConnect.activate()");
            walletConnect.activate();
          }}
        >
          Connect
        </button>
      )}
    </div>
  );
}
