import Image from 'next/image';
import React from 'react';
import Client1 from '/public/clients/Bebe Clothing UK Limited, UK.png';
import Client2 from '/public/clients/DEICHMANN,GERMANY.png';
import Client3 from '/public/clients/JM VIBES,US.png';
import Client4 from '/public/clients/TUC TUC,SPAIN.png';
import Client5 from '/public/clients/WHITE LABEL SOURCING,UK.png';

export default function Clients() {
  return (
    <div className="clients" id="clients">
      <Image src={Client1} alt="Bebe Clothing" width={100} height={35} />
      <Image src={Client2} alt="DEICHMANN" width={140} height={50} />
      <Image src={Client3} alt="JM VIBES" width={50} height={35} />
      <Image src={Client4} alt="TUC TUC" width={50} height={35} />
      <Image src={Client5} alt="WHITE LABEL SOURCING" width={100} height={35} />
    </div>
  );
}
