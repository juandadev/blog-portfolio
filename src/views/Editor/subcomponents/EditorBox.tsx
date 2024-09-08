import { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function EditorBox({ s }) {
  const [markdownText, setMarkdownText] = useState(`# Welcome to Markdown

  Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.
  
  ## How to use this?
  
  1. Write markdown in the markdown editor window
  2. See the rendered markdown in the preview window
  
  ### Features
  
  - Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
  - Name and save the document to access again later
  - Choose between Light or Dark mode depending on your preference
  
  > This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).
  
  #### Headings
  
  To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.
  
  ##### Lists
  
  You can see examples of ordered and unordered lists above.
  
  ###### Code Blocks`)
  const [width, setWidth] = useState(200)
  const ref = useRef(null!)

  const handleResize = (event) => {
    const currentRef = ref.current as HTMLDivElement

    const newWidth = event.pageX - currentRef?.getBoundingClientRect().left
    setWidth(newWidth)
  }

  const handleOnMouseDown = () => {
    document.addEventListener('mousemove', handleResize)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleResize)
    })
  }

  const handleEditorChange = (event) => {
    const { value } = event.target

    setMarkdownText(value)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.markdown_editor}>
        <textarea
          ref={ref}
          style={{ width: `${width}px` }}
          className={s.markdown_editor_box}
          onChange={handleEditorChange}
        >
          {markdownText}
        </textarea>
        <span
          role="button"
          tabIndex={0}
          className={s.markdown_editor_edge}
          onMouseDown={handleOnMouseDown}
          onKeyDown={() => {
          }}
        />
      </div>
      <div className={s.markdown_preview}>
        <ReactMarkdown className={s.markdown_preview_box}>
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  )
}
