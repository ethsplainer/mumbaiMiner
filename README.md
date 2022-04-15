Installation:

```
sudo git clone https://github.com/ethsplainer/mumbaiMiner.git
```

For this to work we need to install NodeJS v12.13.0

**install nvm**
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

You may have to run this if nvm commands dont work
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

**Install and enable NodeJS v12**</br>
```
nvm install 12.13.0
nvm use 12.13.0
```

You can now add your wallet to index.js and run it. You can copy index.js as many times to use multiple wallets.

You may chose to combine this with https://github.com/ethsplainer/Mumbai-Gen/blob/main/faucet.js
Can be scaled by number of wallets you use.

have fun.
