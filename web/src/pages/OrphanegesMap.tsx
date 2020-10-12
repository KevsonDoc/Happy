import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet'
import { motion } from 'framer-motion';

import MapMarkerImg from '../images/map_marker.svg';
import { animations } from '../animations/index';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap: React.FC = () => {
  const { opacity } = animations;

  return (
    <motion.div
      initial="initial"
      animate="final"
      exit="exit"
      variants={opacity}
    >
      <div id="page-map">
        <aside>
          <header>
            <img src={MapMarkerImg} alt=""/>

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>

          <footer>
            <strong>Distrito Fedetal</strong>
            <span>Brasília</span>
          </footer>
        </aside>

        <Map
          center={[-15.7959984,-47.8725795]}
          zoom={12}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        </Map>

        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
      </div>
    </motion.div>
  );
}

export default OrphanagesMap;