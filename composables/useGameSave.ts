export function useGameSave(map: MapData, player: PlayerData) {
  function getPlayerPosition() {
    const position = localStorage.getItem('playerPosition')

    if (position) {
      const parsed = JSON.parse(position)

      return {
        x: Number(parsed.x),
        y: Number(parsed.y),
      }
    }

    return null
  }

  const savePlayerPosition = () => {
    localStorage.setItem('playerPosition', JSON.stringify(player.position))
  }

  return {}
}
