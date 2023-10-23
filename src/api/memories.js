export const getMemories = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/memories`)
  const data = await response.json()
  return data
}

// Add a room
export const addMemories = async memoryData => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/add-memory`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(memoryData),
  })

  const data = await response.json()
  return data
}
