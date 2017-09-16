function TennisApp() {
  let playerAScore = 0
  let playerBScore = 0
  const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
  this.reset = () => {
    playerAScore = 0
    playerBScore = 0
  }

  this.echo = () => {
    if (playerAScore > 3) {
      return 'Player A wins game'
    }

    if (playerBScore > 3) {
      return 'Player B wins game'
    }

    return `${scoreString[playerAScore]} - ${scoreString[playerBScore]}`
  }

  this.playerAGetScore = () => {
    playerAScore++
  }

  this.playerBGetScore = () => {
    playerBScore++
  }
}


describe('Tennis App', () => {
  describe('Player A gets score', () => {
    let app

    function repeatPlayerAGetScore(number) {
      for(let i = 0; i < number; i++) {
        app.playerAGetScore()
      }
    }

    beforeEach(() => {
      app = new TennisApp()
      app.reset()

    })


    it('should echo "Love - Love" when game starts', () => {
      let result = app.echo()

      expect(result).toBe('Love - Love')
    })

    it('should echo "Fifteen - Love" when score is 15-0', () => {
      repeatPlayerAGetScore(1)
      let result = app.echo()

      expect(result).toBe('Fifteen - Love')
    })

    it('should echo "Thirty - Love" when score is 30-0', () => {
      repeatPlayerAGetScore(2)
      let result = app.echo()

      expect(result).toBe('Thirty - Love')
    })

    it('should echo "Forthy - Love" when score is 40-0', () => {
      repeatPlayerAGetScore(3)
      let result = app.echo()

      expect(result).toBe('Forthy - Love')
    })

    it('should echo "Player A wins game" when player A gets next score at 40-0', () => {
      repeatPlayerAGetScore(4)
      let result = app.echo()

      expect(result).toBe('Player A wins game')
    })

  })

  describe('Player B gets score', () => {
    let app

    function repeatPlayerBGetScore(number) {
      for(let i = 0; i < number; i++) {
        app.playerBGetScore()
      }
    }

    beforeEach(() => {
      app = new TennisApp()
      app.reset()

    })


    it('should echo "Love - Love" when game starts', () => {
      let result = app.echo()

      expect(result).toBe('Love - Love')
    })

    it('should echo "Love - Fifteen" when score is 0-15', () => {
      repeatPlayerBGetScore(1)
      let result = app.echo()

      expect(result).toBe('Love - Fifteen')
    })

    it('should echo "Love - Thirty" when score is 0-30', () => {
      repeatPlayerBGetScore(2)
      let result = app.echo()

      expect(result).toBe('Love - Thirty')
    })

    it('should echo "Love - Forthy" when score is 0-40', () => {
      repeatPlayerBGetScore(3)
      let result = app.echo()

      expect(result).toBe('Love - Forthy')
    })

    it('should echo "Player B wins game" when player B gets next score at 0-40', () => {
      repeatPlayerBGetScore(4)
      let result = app.echo()

      expect(result).toBe('Player B wins game')
    })

  })

})
