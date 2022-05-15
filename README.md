Installation:

```
sudo git clone https://github.com/smramr/BaucetFuster.git && cd BaucetFuster && chmod +x ./run.sh
```

**Install packages**

```
npm install
```

**Instal libs**

```
sudo apt install libxkbcommon-x11-0 libxdamage1 libgbm-dev libpangocairo-1.0-0 libpango-1.0-0
```


**How to run: **

```
nohup ./run.sh &
```


The script has a dynamic cooldown which depends on the following:

- amount of wallets
- performance time of each loop

This way the script is at its peak efficiency and will start as soon as the first wallet is out of its 5 minute cooldown.


**Add as many wallets as you like in wallets.js**

have fun.
