import React from 'react';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const AboutMe = () => {
  return (
    <div>
      <p className="uppercase font-extrabold text-center text-3xl tracking-widest">
        About me
      </p>
      <p className="uppercase font-light text-center text-sm tracking-wide my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit
        quas deserunt atque accusamus quibusdam quaerat, repellendus incidunt
        necessitatibus? Corrupti voluptates alias aperiam consequuntur illum
        autem minima vero nobis saepe.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 h-96">
        <div></div>
        <div>
          <p className="uppercase text-lg font-bold">My Biography</p>
          <ul className="text-justify">
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia rem
              accusamus odio dolorem assumenda soluta distinctio doloremque eum
              veritatis molestias voluptatum tempore recusandae, et quasi qui
              dolore repellendus, vel enim.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia rem
              accusamus odio dolorem assumenda soluta distinctio doloremque eum
              veritatis molestias voluptatum tempore recusandae, et quasi qui
              dolore repellendus, vel enim.
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia rem
              accusamus odio dolorem assumenda soluta distinctio doloremque eum
              veritatis molestias voluptatum tempore recusandae, et quasi qui
              dolore repellendus, vel enim.
            </li>
          </ul>
          <p>
            <button className="w-40 h-10 uppercase rounded-md  border-black border-2 flex items-center justify-around mt-5">
              download cv
              <HiOutlineDocumentDownload className="text-lg" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
