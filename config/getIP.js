var os = require('os');
var ifaces = os.networkInterfaces();


export default function getIP() {
  const IPs = [];
  Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        IPs.push({ 
          ifname, 
          address: iface.address,
          alias,
        })
      } else {
        // this interface has only one ipv4 addresss
        console.log(ifname, iface.address);
        IPs.push({ ifname, address: iface.address})
      }
      ++alias;
    });
  });

  for (let i = 0; i < IPs.length; i += 1) {
    if (/WiFi|eth0|Wi-Fi/i.test(IPs[i].ifname)) {
      return IPs[i].address;
    }
  }

  return false;
}
