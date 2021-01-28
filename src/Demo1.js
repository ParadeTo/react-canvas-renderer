import {useEffect, useState} from 'react'

const R = 20
const W = 100
const H = 100

function App() {
  const [x, setX] = useState(R)
  const [y, setY] = useState(R)
  useEffect(() => {
    setTimeout(() => {
      if (y === R && x < W - R) {
        setX(x + 1)
      } else if (x === W - R && y < H - R) {
        setY(y + 1)
      } else if (y === H - R && x > R) {
        setX(x - 1)
      } else {
        setY(y - 1)
      }
    }, 10)
  }, [x, y])
  return (
    <>
      <text
        x={10}
        y={20}
        content='DEMO1'
        font='18px serif'
        fillStyle='orange'
      />
      <rect x={50} y={50} width={W} height={H} color='blue'>
        <circle x={x} y={y} radius={R} color='red'>
          <rect x={-10} y={-10} width={20} height={20} color='green' />
        </circle>
      </rect>
    </>
  )
}

export default App
