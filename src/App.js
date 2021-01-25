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
    <juxing x={50} y={50} width={W} height={H} color='blue'>
      <yuan x={x} y={y} radius={R} color='red'>
        <juxing x={-10} y={-10} width={20} height={20} color='green' />
      </yuan>
    </juxing>
  )
}

export default App
