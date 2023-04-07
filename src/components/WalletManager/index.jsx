import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import style from "./wallet-manager.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEthers, shortenIfAddress } from "@usedapp/core";
import Image from "next/image";

const providers = [
  {
    options: { type: "metamask" },
    displayName: "MetaMask",
    icon: "/metamask.png",
  },
  {
    options: { type: "coinbase" },
    displayName: "Coinbase Wallet",
    icon: "/coinbase.svg",
  },
  {
    options: { type: "walletConnect" },
    displayName: "WalletConnect",
    icon: "/walletConnect.svg",
  },
];

function WalletManager({ isOpen, onCloseModal }) {
  const { activateBrowserWallet, account, deactivate, error, isLoading } =
    useEthers();
  const [selectedKey, setSelectedKey] = useState(-1);

  const [copied, setCopied] = useState(false);
  const [hasCoinbaseWallet, setHasCoinbaseWallet] = useState(false);

  useEffect(() => {
    if (window.walletLinkExtension != null) {
      setHasCoinbaseWallet(true);
    }
  }, []);

  useEffect(() => {
    if (account && isLoading) {
      setSelectedKey(-1);
    }
  }, [account]);

  const addressCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleConnectWallet = (options, key) => {
    setSelectedKey(key);
    if (key == 1 && !hasCoinbaseWallet) {
      alert(
        `Coinbase wallet is not installed - you can get it from 'https://www.coinbase.com/wallet'`
      );
      return;
    }
    try {
      activateBrowserWallet(options);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {account == undefined ? (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className={style.wallet_dialog}
            onClose={onCloseModal}
          >
            <div className={style.wallet_dailog_containter}>
              <Dialog.Overlay className={style.wallet_dialog_overlay} />

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className={style.wallet_dialog_containter_spacer}
                aria-hidden="true"
              >
                &#8203;
              </span>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className={style.wallet_dialog_content}>
                  <div className={style.wallet_dialog_header}>
                    <div className={style.wallet_dialog_header_content}>
                      <Dialog.Title
                        as="h3"
                        className={style.wallet_dialog_title}
                      >
                        Select a wallet
                      </Dialog.Title>
                      <span
                        onClick={onCloseModal}
                        className={style.wallet_dialog_close}
                      >
                        &times;
                      </span>
                    </div>
                  </div>

                  <div className={style.wallet_dialog_providers}>
                    <ul className={style.wallet_dialog_providers_list}>
                      {providers.map(({ options, displayName, icon }, key) => (
                        <li key={key}>
                          <button
                            disabled={isLoading}
                            onClick={() => handleConnectWallet(options, key)}
                          >
                            <Image src={icon} width={34} height={34} alt="Wallet icons"/>
                            <span>{displayName}</span>
                            {isLoading && key == selectedKey && (
                              <span>
                                <img src={"/spinner.svg"} alt="" />
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      ) : (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className={style.wallet_dialog}
            onClose={onCloseModal}
          >
            <div className={style.wallet_dailog_containter}>
              <Dialog.Overlay className={style.wallet_dialog_overlay} />

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className={style.wallet_dialog_containter_spacer}
                aria-hidden="true"
              >
                &#8203;
              </span>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className={style.wallet_dialog_content}>
                  <div className={style.wallet_dialog_header}>
                    <div className={style.wallet_dialog_header_content}>
                      <Dialog.Title
                        as="h3"
                        className={style.wallet_dialog_title}
                      >
                        Account
                      </Dialog.Title>

                      <span
                        onClick={onCloseModal}
                        className={style.wallet_dialog_close}
                      >
                        &times;
                      </span>
                    </div>
                  </div>

                  <div className={style.wallet_dialog_body}>
                    <div className={style.wallet_dialog_provider}>
                      <p>Connected to Flux</p>
                      <button
                        onClick={() => {
                          deactivate();
                        }}
                        className={style.wallet_dialog_disconnect}
                      >
                        Disconnect
                      </button>
                    </div>

                    <div className={style.wallet_dialog_address}>
                      <p>{shortenIfAddress(account)}</p>
                      <div
                        className={style.wallet_dialog_address_copy_etherscan}
                      >
                        <CopyToClipboard
                          text={account}
                          onCopy={() => addressCopied()}
                        >
                          <p className={style.wallet_dialog_bottom_text}>
                            <Image
                              alt=""
                              src={"/copy.svg"}
                              width={10}
                              height={10}
                            />
                            <span>Copy Address</span>
                            {copied ? (
                              <span className={style.tooltip}>Copied.</span>
                            ) : null}
                          </p>
                        </CopyToClipboard>

                        <p className={style.wallet_dialog_bottom_text}>
                          <a
                            href={`https://etherscan.io/address/${account}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={"/external-link.svg"}
                              alt=""
                              width={16}
                              height={16}
                            />
                            <span>View on Etherscan</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
}

export default WalletManager;
