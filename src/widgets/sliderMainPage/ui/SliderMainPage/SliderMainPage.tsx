import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './SliderMainPageStyle.module.scss';
import { Slider } from '@/shared/ui/Slider/Slider';
import { FirstPage } from '../pages/firstPage/FirstPage';
import { SecondPage } from '../pages/secondPage/SecondPage';

interface SliderMainPageProps {
    className?: string;
}

export const SliderMainPage = memo(({ className }: SliderMainPageProps) => {
    return (
        <div className={classNames(cl.SliderMainPage, {}, [className])}>
            <Slider
                elems={[
                    <FirstPage />,
                    <SecondPage />
                ]}
            />
        </div>
    );
});