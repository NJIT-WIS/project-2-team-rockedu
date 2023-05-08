import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)

  // Filter the default filenames without language code
  const filteredFileNames = fileNames.filter(fileName => {
    // Check if filename has a language code - <filename>.<language code>.md
    // Language code is usually en-US or en-ES
    // Split the filename by "."
    const splitFileName = fileName.split(".")
    // if there are only two parts, then it is a default filename
    return splitFileName.length === 2
  })

  const allPostsData = filteredFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Filter out the posts that do not have a date
  const filteredPostsData = allPostsData.filter(postData => {
    return postData.date !== undefined
  })

  // Sort posts by date
  return filteredPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  // locale based filenames
  const fileIds = fileNames.map(fileName => fileName.replace(/\.md$/, ''))
  const defaultLocale = ["en-US", "en-ES"]
  // Create a list with the fileids for each locale

  const paths = []

  for (const fileId of fileIds) {
    for (const locale of defaultLocale) {
      paths.push({
        params: {
          id: fileId
        },
        locale
      })
    }
  }

  return paths
}

export async function getPostData(id, locale) {
  let noLocaleVersionFound = false

  const defaultLocale = "en-US"
  // Get the filename for the locale
  const fileName = `${id}${locale === defaultLocale ? "" : "." + locale}.md`
  const fullPath = path.join(postsDirectory, fileName)
  // try to check if the file exists, if it does not, then use the default locale
  let fileContents = ""
  if (fs.existsSync(fullPath)) {
    fileContents = fs.readFileSync(fullPath, 'utf8')
  } else {
    noLocaleVersionFound = true
    const defaultFileName = `${id}.md`
    const defaultFullPath = path.join(postsDirectory, defaultFileName)
    fileContents = fs.readFileSync(defaultFullPath, 'utf8')
  }

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    noLocaleVersionFound,
    ...matterResult.data
  }
}
