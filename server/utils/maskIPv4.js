// Function to mask IPv4 address
const maskIPv4 = (req, res, next) => {
  // Replace the last octet of the IP address with '0' for anonymization
  const ipParts = req.ip.split('.');
  ipParts[ipParts.length - 1] = '0';
  req.anonymizedIP = ipParts.join('.');
  next();
};

export default maskIPv4;
