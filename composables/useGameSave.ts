export function useGameSave() {
  const hasGameSave = localStorage.getItem('playerLevel') !== null

  function getPlayerLevel() {
    const level = localStorage.getItem('playerLevel')

    if (level) {
      const parsedLevel = Number(level)

      if (!isNaN(parsedLevel) && parsedLevel) {
        return parsedLevel
      } else {
        return null
      }
    }
  }

  const savePlayerLevel = (level: number) => {
    localStorage.setItem('playerLevel', level.toString())
  }

  const resetGameSave = () => {
    localStorage.removeItem('playerLevel')
  }

  return {
    hasGameSave,
    getPlayerLevel,
    resetGameSave,
    savePlayerLevel,
  }
}
