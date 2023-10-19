import React from 'react';
import icons from '../../../../../assets/icons';
import { HeaderComponent } from './HeaderComponent';
import { twMerge } from 'tailwind-merge';

const contentStyle = {
    margin: 0,
    color: '#fff',
    lineHeight: '36px',
    textAlign: 'center',
    gap: '24px',
};

export default function OurRoadmap() {
    return (
        <div className="flex flex-col justify-center gap-[30px] md:gap-[60px] md:mx-[60px] min-[1200px]:gap-[80px] min-[1200px]:mx-[120px]">
            <HeaderComponent title="ROADMAP" subTitle="Our Roadmap" />
            <div className="max-w-[342px] md:hidden">
                <RoadmapMobile />
            </div>
            <div className="hidden md:flex">
                <RoadmapDesktop />
            </div>
        </div>
    );
}

const RoadmapDesktop = () => {
    return (
        <div className="relative h-[265px] min-w-[648px] min-[1200px]:h-[412px] min-[1200px]:min-w-[1120px]">
            <div className="min-[1200px]:hidden">
                <img src={icons.roadmap_md} alt="roadmap_desktop" className="w-full" />
            </div>
            <div className="hidden min-[1200px]:block min-[1920px]:hidden">
                <img src={icons.roadmap_1440} alt="roadmap_desktop" className="w-full" />
            </div>
            <div className="hidden min-[1920px]:block">
                <img src={icons.roadmap_1440} alt="roadmap_desktop" className="w-full" />
            </div>
        </div>
    );
};

const RoadmapMobile = () => {
    return (
        <div className="inline-flex flex-col items-start gap-[20px] rounded-[24px]">
            {roadmapItemList.map((item, idx) => (
                <RoadmapItem key={idx} item={item} />
            ))}
        </div>
    );
};

const RoadmapItem = (props) => {
    return (
        <div className="w-full">
            <div
                style={contentStyle}
                className={twMerge(
                    'flex h-[56px] w-full items-start gap-[20px] pb-[20px]',
                    props.item.date !== '2024' && 'border-b-[0.5px] border-b-[#24C3BC]',
                )}
            >
                <div
                    style={{
                        background: 'linear-gradient(135deg, #24C3BC 0%, #ADFFFB 100%)',
                    }}
                    className="flex flex-col items-start justify-center gap-[4px] rounded-2xl px-[20px] pt-[9px] pb-[8px]"
                >
                    <div className="font-['Roboto'] text-[16px] font-bold leading-normal text-[#1C1A2D] whitespace-nowrap">
                        {props.item.quarter} - {props.item.date}
                    </div>
                </div>
                <div className="font-['Roboto'] text-start text-[14px] font-normal text-white leading-normal min-[400px]:w-[200px]">
                    <span>{props.item.demoContent[0]}</span>
                    <br />
                    <span>{props.item.demoContent[1]}</span>
                </div>
            </div>
        </div>
    );
};

const roadmapItemList = [
    {
        quarter: 'Q1',
        date: '2023',
        demoContent: ['Website Launch &', 'Token Creation'],
    },
    {
        quarter: 'Q2',
        date: '2023',
        demoContent: ['Audit & Development', 'of Dapp Beta'],
    },
    {
        quarter: 'Q3',
        date: '2023',
        demoContent: ['Starksport', 'Exchange & Marketplace'],
    },
    {
        quarter: 'Q4',
        date: '2023',
        demoContent: ['Private Round &', 'Starksport Launchpad'],
    },
    {
        quarter: 'Q1',
        date: '2024',
        demoContent: ['Public Round &', 'Starksport Multichain'],
    },
];