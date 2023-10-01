import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './PortfolioList.module.scss';
import { PortfolioListItem, ProjectProps } from '../PortfolioListItem/PortfolioListItem';
import js from '@/shared/assets/icons/instruments/js.png';
import ts from '@/shared/assets/icons/instruments/ts.png';
import screen_one from "@/shared/assets/screens/screen_one.png";
import { VStack } from '@/shared/ui/Stack';

interface PortfolioListProps {
    className?: string;
}

const mockData: ProjectProps[] = [
    {
        title: 'Чат + VK UI',
        about: [
            'Самый обычный чат с использованием VK UI',

        ],
        stacks: [js, ts],
        screen: screen_one,
    },
    {
        title: 'Платформа со статьями',
        about: [
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',
            'Платформа со статьями',

        ],
        stacks: [js, ts],
        screen: screen_one,
    },
    {
        title: 'Видео-чат',
        about: [
            'Видео-чат',

        ],
        stacks: [js, ts],
        screen: screen_one,
    },
    {
        title: 'Интернет-магазин',
        about: [
            'Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин ',
            'Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин ',
            'Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин ',
            'Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин ',
            'Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин ',
            'Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин ',
            'Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин ',
            'Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин Интернет-магазин ',
        ],
        stacks: [js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, js, ts, ],
        screen: screen_one,
    },
]

export const PortfolioList = memo(({ className }: PortfolioListProps) => {
    return (
        <VStack
            max
            className={classNames(cl.PortfolioList, {}, [className])}
            gap='32'
        >
            {
                mockData.map(elem =>
                    <PortfolioListItem
                        project={elem}
                        key={elem.title}
                    />
                )
            }
        </VStack>
    );
});
