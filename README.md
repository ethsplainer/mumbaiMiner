Installation:

```
sudo git clone https://github.com/ethsplainer/mumbaiMiner.git
```
**Install packages**
```
npm install
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
It's possible that some libs arent installed properly. If that's the case run this
```
sudo apt install libxkbcommon-x11-0 libxdamage1 libgbm-dev libpangocairo-1.0-0 libpango-1.0-0
```

You can now add your wallet to index.js and run it. You can copy index.js as many times to use multiple wallets.

Can be scaled by number of wallets you use.

have fun.
