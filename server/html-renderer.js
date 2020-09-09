module.exports = (nextApp) => (req, res) => {
  const mock = {
    setHeader: () => {},
    getHeader: () => {},
    hasHeader: () => {},
    end: (html) => {
      res.json({ html })
    }
  }

  nextApp.render(req, mock, '/experience-editor')
}
