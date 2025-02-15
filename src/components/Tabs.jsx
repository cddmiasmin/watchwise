import { useState } from 'react'

const Tabs = () => {

    const [selected, setSelected] = useState(0);

    const options = ['RECOMENDAÇÕES', 'EM CARTAZ', 'NETFLIX', 'AMAZON PRIME', 'MAX', 'GLOBOPLAY', 'OUTROS'];

    const styleSelected = 'h-8 bg-white border border-white px-2 py-1';
    const styleNoSelected = 'h-8 border border-white px-2 py-1';

    return (
        <div className='flex flex-row w-full h-18 justify-center items-center overflow-hidden rounded-sm'>
            {
                options.map((option, index) => (
                    <button 
                        className={`
                            ${index === selected ? styleSelected : styleNoSelected} 
                            ${index === (options.length - 1) ? 'rounded-r-xs' : ''}
                            ${index === 0 ? 'rounded-l-xs' : ''}
                        `}
                        onClick={() => setSelected(index)}
                    >
                        <p className={`font-roboto ${index === selected ? 'text-black font-bold' : 'text-white'}`}>
                            {option}
                        </p>
                    </button>
                ))
            }
        </div>
    )
}

export default Tabs
