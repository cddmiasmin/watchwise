import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const AvailabilityModal = ({ openModal,  handleCloseModal }) => {

    const styleBox = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '32rem',
        bgcolor: '#678',
        boxShadow: 24,
        p: 4,
        radius: '10px'
    };

    const providers = [
        {
            index: 0,
            name: 'Google Drive',
            image: '/public/google_drive_logo.svg'
        },
        {
            index: 1,
            name: 'Telegram',
            image: '/public/telegram_logo.svg'
        }
    ]

    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styleBox} className='rounded-xl'>
                <div className='flex flex-col justify-center items-center'>
                    <span className='text-xl font-bold font-lora'>
                        Adicionar disponibilidade
                    </span>
                    <span className='text-sm font-lora text-center'>
                        Selecione os provedores de streaming onde este filme está disponível. Isso ajudará a organizar sua watchlist com base na disponibilidade
                    </span>
                </div>
                <div className='flex mt-5 w-full flex-col'>
                    <div className='flex flex-row'>
                        <div className={`flex bg-background justify-center items-center  w-[3.5rem] h-[2rem] border rounded-t-lg border-background`}>
                            <img alt={providers[0].name} src={providers[0].image} className='size-[1.1rem]'/>
                        </div>
                        <div className={`flex bg-[#434f5b] justify-center items-center  w-[3.5rem] h-[2rem] border rounded-t-lg border-[#434f5b]`}>
                            <img alt={providers[1].name} src={providers[1].image} className='size-[1.1rem]'/>
                        </div>
                    </div>

                    <div className='flex flex-col border border-background p-4 rounded-b-lg'>
                        <span className='text-md font-bold'>Link:</span>
                        <input className='text-sm' type="text" value="https://www.w3schools.com/Tags/tag_input.asp"/>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}

export default AvailabilityModal
