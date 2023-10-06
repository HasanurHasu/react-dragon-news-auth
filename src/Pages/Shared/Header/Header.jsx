import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className='flex flex-col items-center gap-3 mt-5'>
            <img src={logo} alt="" />
            <p className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-lg text-[#706F6F]'>{moment().format("dddd, MMMM D, YYYY")}</p>
            <div className='flex gap-2'>
                <button className='py-2 px-6 bg-[#D72050] text-white text-lg font-medium'>Latest</button>
                <Marquee>
                    <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
        </div>
    );
};

export default Header;