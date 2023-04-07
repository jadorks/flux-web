import React, { useEffect } from "react";
import { ChainId, useEthers, useUpdateConfig } from "@usedapp/core";
import FluxDappContext from "./context";

function FluxDappProvider({ children }) {
  const { account, library } = useEthers();
  const updateConfig = useUpdateConfig();

  useEffect(() => {
    try {
      if (account != undefined && library != undefined) {
        updateConfig({ readOnlyUrls: { [ChainId.Mainnet]: library } });
      } else {
        updateConfig({
          readOnlyUrls: {
            [ChainId.Mainnet]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
          },
        });
      }
    } catch (e) {
      console.error("Provider switch failed. Going back to alchemy: ", e);
      updateConfig({
        readOnlyUrls: {
          [ChainId.Mainnet]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
        },
      });
    }
  }, [account]);

  return <FluxDappContext.Provider>{children}</FluxDappContext.Provider>;
}

function useFluxDapp() {
  const context = React.useContext(FluxDappContext);
  if (context === undefined) {
    throw new Error("useFluxDapp must be used within a FluxDappProvider");
  }
  return context;
}

export { FluxDappProvider, useFluxDapp };
