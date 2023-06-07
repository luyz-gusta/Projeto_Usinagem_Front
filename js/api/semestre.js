'use strict'

export const getTodosSemestres = async () => {
  const url = `http://localhost:8080/v1/projeto-usinagem/semestre`
  const response = await fetch(url)
  const dado = await response.json()

  return dado
}