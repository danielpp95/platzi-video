import React from 'react'
import {render} from 'react-dom'
import Media from '@/playlist/components/media'

const app = document.getElementById('app')

render(<Media type="video" title="marico el que lo lea" author="la puta esa" image="./images/covers/responsive.jpg" />, app)