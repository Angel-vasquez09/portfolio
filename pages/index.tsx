import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { Banner, PortFolioLayout, SobreMi } from 'components';
import { Carousel } from 'components';
import { proyects } from 'database';
import { SeedProyects } from 'interfaces/proyects';

const Home: NextPage = () => {

  const [ data, setData ] = useState<SeedProyects[]>([]);
  const [ carga, setCarga ] = useState(false);

  useEffect(() => {
    setData(proyects.seedData.proyects);
    setCarga(true);
  },[])

  return (
    <PortFolioLayout
      title={'PortFolio | Angel'}
      description={'Portafolio de Luis Angel'}>
        <Banner
          title={`Mi nombre es Luis Angel y soy`}
          subtitle={'Desarrollador web'}
          img={'/images/Saly.png'}
        />

        <SobreMi />
        {
          carga && (
            <Carousel proyects={data} />
          )
        }

    </PortFolioLayout>
  )
}

export default Home
