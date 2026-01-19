class HealthController {
  async checkHealth(req, res) {
    try {
      res.json({
        status: 'OK',
        message: 'Nutri I.A API está funcionando!',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
      });
    } catch (error) {
      res.status(500).json({
        status: 'ERROR',
        message: error.message
      });
    }
  }
}

module.exports = new HealthController();
