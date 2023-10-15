import { metaMaskHooks, metaMask } from "@/connectors/metaMask";
import { useWeb3React } from "@web3-react/core";
import React from "react";

const { useIsActive } = metaMaskHooks;

export default function MetaMaskCard() {
  const isActive = useIsActive();

  return (
    <div>
      <h2>MetaMask</h2>
      {isActive ? (
        <button
          onClick={() => {
            metaMask.resetState()
            metaMask.deactivate?.();
          }}
        >
          Disconnect
        </button>
      ) : (
        <button
          onClick={() => {
            metaMask.activate();
          }}
        >
          Connect
        </button>
      )}
    </div>
  );
}
