import { Box  } from "@chakra-ui/react"
import Cards from "../components/cards/Card"
import styles from '../styles/Home.module.css'
import { images } from "../constants/constants"

import { useState } from "react"
export default function Home() {
 
  const [like, setLike] = useState(2)
  return (
    <div className={styles.container}>
<Box display="flex" flexWrap="wrap" justifyContent="space-around">
<Cards serialNo="B8/457843" bid={true} price={250} image={images[0].image} setLike={setLike} like={like} />
<Cards  serialNo="B8/457843" bid={false} price={250} image={images[1].image} setLike={setLike} like={like} />
<Cards  serialNo="B8/457843" bid={false} price={250} image={images[2].image} setLike={setLike} like={like} />

</Box>
    </div>
  )
}
// .old-price{ margin-top: 10px; font-size:0.8em;  text-decoration: line-through;  color:grey;}
// .new-price{  color:#f6eb14; font-size:1.45em; line-height: 1.1; }    