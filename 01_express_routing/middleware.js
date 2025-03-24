const SpaceStationMW = (req, res, next) => {
    if (req.url === '/favicon.ico') return res.status(204).end(); // Ignore cette requête

    const timeStamp = new Date().toISOString();
    req.spacestation = "International Space Station";

    const userIP = req.headers?.['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress.replace(/^::ffff:/, '') || 'IP inconnue';

    console.log(`[${timeStamp}] Requête ${req.method} reçue sur ${req.url} depuis ${req.spacestation} - IP: ${userIP}`);

    next();

}

module.exports = SpaceStationMW;