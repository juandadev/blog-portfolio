const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { compareDesc } = require('date-fns')

const getAll = (dir) => {
  const directory = path.join(process.cwd(), `src/${dir}`)
  const fileNames = fs.readdirSync(directory)
  const content = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    delete matterResult.content

    return {
      slug,
      ...matterResult.data,
    }
  })
  const sortedByDateDesc = content.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return JSON.stringify(sortedByDateDesc.slice(0, 7))
}

const allPosts = getAll('posts')

const postFileContents = `${allPosts}`

fs.writeFile('src/utils/posts.json', postFileContents, (err) => {
  if (err) return console.log(err)
  console.log('Posts cached.')
})
