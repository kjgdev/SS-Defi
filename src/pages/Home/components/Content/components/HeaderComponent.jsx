import { twMerge } from 'tailwind-merge';

export const HeaderComponent = ({ title, subTitle, className }) => {
    return (
        <div className={twMerge('inline-flex flex-col items-center gap-[4px]', className)}>
            <div className="text-gradient font['Exo_2'] text-center text-[16px] font-bold">{title}</div>
            <div className="font['Exo_2'] flex flex-wrap text-center text-[30px] font-bold leading-normal text-white min-[1440px]:text-[32px]">
                {subTitle}
            </div>
        </div>
    );
};