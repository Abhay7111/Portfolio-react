import React from 'react';

const Maxdiv = () => {
  const bars = Array.from({ length: 500 }, (_, index) => (
    <div key={index} className='w-2 h-full bg-[#b4adfc] flex items-center justify-center relative'>
    </div>
  ));

  return (
    <div className='relative w-full h-full overflow-hidden'>
      <div className='w-[1500%] h-[10000%] rotate-[40deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='w-full h-full flex items-center justify-center gap-[4px] overflow-x-scroll overflow-hidden relative'>
          {bars}
        </div>
      </div>
    </div>
  );
};

export default Maxdiv;