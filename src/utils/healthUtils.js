export const getHealthColor = health => {
  if (health >= 0 && health <= 50) return '#5cb85c'
  if (health > 51 && health <= 70) return '#f0ad4e'
  if (health > 71 && health <= 100) return '#f0ad4e'
}
