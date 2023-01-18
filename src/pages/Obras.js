import { Link } from 'react-router-dom'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { motion } from 'framer-motion'
import { API_URL } from '../api'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Obras = () => {
  const [poemas, setPoemas] = useState(null)

  useEffect(() => {
    axios.get(`${API_URL}/poemas?per_page=100`).then(res => {
      setPoemas(res.data)
    })
  }, [])

  console.log(poemas)

  const images = [
    '/imgs/logo_icon.png',
    '/imgs/logo_icon.png',
    '/imgs/logo_icon.png'
  ]

  const buttonStyle = {
    width: '100px',
    border: '0px'
  }

  return (
    poemas && (
      <motion.div
        class='container'
        /*initial={{opacity: 0, width: 0}}
            animate={{opacity: 1, width: "100vw"}}
            exit={{opacity: 0, width: 0}}**/
      >
        <div class='obras-container'>
          <div class='left'>
            <div class='menu' id='menu'>
              <p>
                <Link to='#pessoa'>Fernando Pessoa</Link>
              </p>
              <p>
                <Link to='#campos'>Álvaro de Campos</Link>
              </p>
              <p>
                <Link to='#caeiro'>Alberto Caeiro</Link>
              </p>
              <p>
                <Link to='#reis'>Ricardo Reis</Link>
              </p>
            </div>
          </div>

          <div class='right'>
            <div class='poemas-container'>
              <div class='left-autor' id='pessoa'>
                <img
                  src='imgs/logo_icon.png'
                  alt='Fernando Pessoa'
                  class='logo'
                />
                <span class='author-caption'> Pessoa </span>
              </div>

              <div class='right-poemas'>
                <div class='carousel-wrap'>
                  <div class='owl-carousel'>
                    <div>
                      {poemas
                        .filter(
                          poema =>
                            !poema.title.rendered
                              .toLowerCase()
                              .includes('análise') && poema.categories[0] == 3
                        )
                        .map(poema => (
                          <div>
                            <Link
                              onClick={() => {
                                localStorage.setItem(
                                  'poema',
                                  JSON.stringify(poema)
                                )
                              }}
                              to='/poema'
                            >
                              <h2 className='poema_titulo'>
                                {poema.title.rendered}
                              </h2>
                            </Link>
                          </div>
                        ))}
                    </div>
                    {/* <div class="poema_titulo" id="poema_titulo">poema1</div>
              <div class="poema_titulo" id="poema_titulo">poema2</div>
              <div class="poema_titulo" id="poema_titulo">poema3</div> */}
                  </div>
                </div>
              </div>
            </div>

            <div class='poemas-container'>
              <div class='left-autor' id='campos'>
                <img
                  src='imgs/Alvaro de Campos.png'
                  alt='Alvaro de Campos'
                  class='logo'
                />
                <span class='author-caption'> Campos </span>
              </div>

              <div class='right-poemas'>
                <div class='carousel-wrap'>
                  <div class='owl-carousel'>
                    <div>
                      {poemas
                        .filter(
                          poema =>
                            !poema.title.rendered
                              .toLowerCase()
                              .includes('análise') && poema.categories[0] == 5
                        )
                        .map(poema => (
                          <div>
                            <Link
                              onClick={() => {
                                localStorage.setItem(
                                  'poema',
                                  JSON.stringify(poema)
                                )
                              }}
                              to='/poema'
                            >
                              <h2 className='poema_titulo'>
                                {poema.title.rendered}
                              </h2>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='poemas-container'>
              <div class='left-autor' id='caeiro'>
                <img
                  src='imgs/Alberto Caeiro.png'
                  alt='Alberto Caeiro'
                  class='logo'
                />
                <span class='author-caption'> Caeiro </span>
              </div>

              <div class='right-poemas'>
                <div class='carousel-wrap'>
                  
                  <div class='owl-carousel'>
                  <div>
                      {poemas
                        .filter(
                          poema =>
                            !poema.title.rendered
                              .toLowerCase()
                              .includes('análise') && poema.categories[0] == 4
                        )
                        .map(poema => (
                          <div>
                            <Link
                              onClick={() => {
                                localStorage.setItem(
                                  'poema',
                                  JSON.stringify(poema)
                                )
                              }}
                              to='/poema'
                            >
                              <h2 className='poema_titulo'>
                                {poema.title.rendered}
                              </h2>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class='poemas-container'>
              <div class='left-autor' id='reis'>
                <img
                  src='imgs/Ricardo Reis.png'
                  alt='Ricardo Reis'
                  class='logo'
                />
                <span class='author-caption'> Reis </span>
              </div>

              <div class='right-poemas'>
                <div class='carousel-wrap'>
                  
                  <div class='owl-carousel'>

                      {poemas
                        .filter(
                          poema =>
                            !poema.title.rendered
                              .toLowerCase()
                              .includes('análise') && poema.categories[0] == 1
                        )
                        .map(poema => (
                          <div  >
                            <Link
                              onClick={() => {
                                localStorage.setItem(
                                  'poema',
                                  JSON.stringify(poema)
                                )
                              }}
                              to='/poema'
                            >
                              <h2 className='poema_titulo'>
                                {poema.title.rendered}
                              </h2>
                            </Link>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  )
}

export default Obras
