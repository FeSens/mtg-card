import sharp from 'sharp'
import { readdir, unlink } from 'node:fs/promises'
import { join } from 'node:path'

const assetsDir = new URL('../src/assets', import.meta.url).pathname

const files = await readdir(assetsDir)
const pngs = files.filter(f => f.startsWith('bg') && f.endsWith('.png'))

console.log(`Converting ${pngs.length} PNG files to WebP...`)

for (const png of pngs) {
  const input = join(assetsDir, png)
  const output = join(assetsDir, png.replace('.png', '.webp'))
  await sharp(input).webp({ quality: 80 }).toFile(output)
  await unlink(input)
  console.log(`  ${png} -> ${png.replace('.png', '.webp')}`)
}

console.log('Done!')
