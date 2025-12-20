import type { IHnJob } from "types"
import parse from 'html-react-parser';
import useMeasure from "react-use-measure";
import type { CSSProperties } from "react";

interface IHnPostProps {
  display: boolean
  post?: IHnJob
  tableScroll: number
}

export const HnPost = (props: IHnPostProps) => {
  if (!props.post || !props.display) return null
  const [ ref, bounds ] = useMeasure()
  const style: CSSProperties = { 
    height: bounds.height,
    left: props.tableScroll,
  }

  return (
    <tr>
      <td colSpan={1}>
        <hr />
      </td>
      <td colSpan={5}>
        <div className="hnPost" style={style}>
          <div className="content" ref={ref}>
            {parse(props.post.text)}
            <footer>
              <a href={String(props.post.id)} target="_blank" className="minor">
                Source post
              </a>
            </footer>
          </div>
        </div>
      </td>
    </tr>

    
  )
}
