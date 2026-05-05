const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
  let files

  try {
    files = await fs.readdir(directory)
  } catch (err) {
    console.error(pc.red(`Error al leer el directorio: ${directory}`))
    process.exit(1)
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(directory, file)

    let fileStats
    try {
      fileStats = await fs.stat(filePath)
    } catch (err) {
      console.error(pc.red(`Error al obtener información del archivo: ${filePath}`))
      process.exit(1)
    }

    const isDirectory = fileStats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = fileStats.size
    const fileModified = fileStats.mtime.toLocaleString()

    return `${fileType} ${file} ${fileSize} ${fileModified}`
  })

  const filesInfo = await Promise.all(filePromises)
  filesInfo.forEach(info => console.log(info))
}

ls(folder)
