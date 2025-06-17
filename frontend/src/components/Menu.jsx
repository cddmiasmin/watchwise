import { user } from '../data/user';
import { options } from '../utils/options';

const Menu = () => {
    return (
        <div className="bg-midnight-slate w-full flex flex-col justify-center items-center px-2 gap-2 py-5">
            <div className="flex flex-col justify-center items-center">
                <img 
                    className="size-7 rounded-full"
                    src={user.icon}
                    alt={`${user.name}'icon`}
                />
                <h1 className="text-dusty-sky font-bold font-nunito-sans">
                    {user.username.toLocaleUpperCase()}
                </h1>
            </div>
            <div className='w-full h-[1px] bg-midnight-blue'/>
            <div className="w-full grid grid-cols-2 grid-rows-4 justify-items-center items-center">
                {options.navs.map((nav, key) => (
                    <h1 
                        key={key}
                        className="text-dusty-sky font-nunito-sans cursor-pointer text-xs hover:text-white"
                    >
                        {nav.name.toLocaleUpperCase()}
                    </h1>
                ))}
            </div>        
            <div className='w-full h-[1px] bg-midnight-blue'/>
            <div className="w-full grid grid-cols-2 grid-rows-1 justify-items-center items-center">
                {options.account.map((acc, key) => (
                    <h1 
                        key={key}
                        className="text-dusty-sky font-nunito-sans cursor-pointer text-xs hover:text-white"
                    >
                        {acc.name.toLocaleUpperCase()}
                    </h1>
                ))}
            </div>
        </div>
    );
};

export default Menu;