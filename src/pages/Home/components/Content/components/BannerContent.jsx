import { twMerge } from 'tailwind-merge';
import LaunchAppButton from '../../Navbar/components/LaunchAppButton';
import { OfficalBanner } from './Banner';

export default function Introduction() {
    return (
        <div className="flex flex-col justify-center md:mx-[60px] min-[1200px]:mx-[120px] min-[1200px]:flex-row min-[1200px]:gap-[60px]">
            <div className="flex justify-center min-[1200px]:w-[474.472px]">
                <OfficalBanner className="w-[277px] md:w-[314px] min-[1200px]:max-w-[474.472px] min-[1200px]:w-[474.472px]" />
            </div>
            <BannerContent />
        </div>
    );
}

const BannerContent = () => {
    return (
        <div className="flex flex-col items-center gap-[24px] px-[20px] md:max-w-[600px] md:px-0 min-[1200px]:max-w-[657px]">
            <div className="text-center font-['Roboto'] text-[30px] font-bold leading-tight min-[1200px]:text-start min-[1200px]:text-[68px]">
                <p className="hidden min-[1200px]:block text-start mb-0">
                    LEARN, CREATE, EXPLORE & COLLECT WITH{' '}
                    <span className="text-gradient min-[1200px]:text-[64px]">STARKSPORT</span>
                </p>
                <p className="hidden md:block min-[1200px]:hidden mb-0">
                    LEARN, CREATE, EXPLORE & COLLECT
                    <div>
                        WITH <span className="text-gradient min-[1200px]:text-[64px]">STARKSPORT</span>
                    </div>
                </p>
                <p className="block md:hidden mb-0">
                    LEARN, CREATE,
                    <br /> EXPLORE & COLLECT
                    <br /> WITH <span className="text-gradient">STARKSPORT</span>
                </p>
            </div>
            <div className="text-center font-['Roboto'] text-[14px] md:text-[16px] font-normal text-[#C6C6C6] min-[1200px]:!text-start min-[1200px]:text-[18px]">
                Starksport is an all-in-one Incubation Hub with a full stack DeFi platform across blockchain networks.
                We provide exclusive services including IDO Launchpad, NFT Auction, Marketplace and Exchange.
            </div>
            {/* <CardInfo /> */}
            <div className="flex w-full items-center justify-center gap-[20px] px-[20px] flex-wrap md:px-0 md:flex-row min-[1200px]:justify-start">
                <div className="max-[368px]:w-full">
                    {/* <LaunchAppButton styleButton="py-[12px] px-[10px] md:px-[24px] rounded-[16px] h-[48px] w-[135px] md:w-[175px]" /> */}
                    <a href="https://marketplace.starksport.finance/events" target="_blank" rel="noreferrer">
                        <button
                            style={{
                                background: 'linear-gradient(135deg, #24C3BC 0%, #ADFFFB 100%)',
                            }}
                            className={twMerge(
                                'button-hover-1 h-[36px] items-center justify-center gap-[4px] rounded-[12px] border-0 px-[12px] py-[6px]',
                                'py-[12px] px-[24px] rounded-[16px] h-[48px] w-full min-[368px]:w-[135px] md:w-[189px]',
                            )}
                            // onClick={onClick}
                        >
                            <span className={twMerge("font-['Roboto'] text-[16px] font-bold text-[#1C1A2D]")}>
                                Mint Now
                            </span>
                        </button>
                    </a>
                </div>
                <div className="max-[368px]:w-full">
                    <BannerButtonDocument />
                </div>
            </div>
        </div>
    );
};

const BannerButtonDocument = () => {
    return (
        <a
            href="https://starksport.gitbook.io/starksport/"
            target="_blank"
            rel="noreferrer"
            className="button-hover-3 button-width flex items-center justify-center gap-[4px] self-stretch rounded-[16px] border-[2px] border-[#24C3BC] bg-transparent px-[20px] py-[12px] w-full min-[368px]:w-[135px] md:w-[189px]"
        >
            <div className="font-['Roboto'] text-[16px] font-bold text-white">Documentation</div>
        </a>
    );
};

const CardInfo = () => {
    const cardItemInfo = [
        {
            id: 'project',
            title: '68 Project',
            subTitle: 'Launched',
        },
        {
            id: 'volume',
            title: '$686,868',
            subTitle: 'Volume',
        },
        {
            id: 'participant',
            title: '6,868',
            subTitle: 'Participants',
        },
    ];

    return (
        <div className="flex items-start justify-between self-stretch min-[1200px]:justify-normal min-[1200px]:gap-[60px]">
            {cardItemInfo.map((item) => (
                <div key={item.id} className="flex items-start justify-between self-stretch">
                    <div className="flex h-[76px] flex-col items-center gap-1 rounded-[16px] py-[12px] min-[1200px]:items-start">
                        <div className="font-['Roboto'] text-[16px] md:text-[24px] font-bold text-white min-[1200px]:text-[32px] leading-normal">
                            {item.title}
                        </div>
                        <div className="text-gradient text-[16px] font-bold leading-normal">{item.subTitle}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};