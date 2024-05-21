import React from 'react'
import EatWell from '../../components/EatWell'
import EatCook from '../../components/EatCook'
import News from '../../components/News'
import Gallery from '../../components/Gallery'
import Offer from '../../components/Offer'
import Helmet from "react-helmet"
const Home = () => {
  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Demos Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <EatWell/>
      <EatCook/>
<Offer/>
      <News/>
      <Gallery/>
    </>
  )
}

export default Home
