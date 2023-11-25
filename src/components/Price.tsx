import {ReactElement} from 'react';
import PageBlock from './PageBlock';
import Button from './Button';
import './Price.less'

interface IListItemProps {
    icon: string;
    bgColor: string;
    caption: string;
    description: string;
}

function ListItem(props: IListItemProps): ReactElement {
    return (
        <div className="flex gap-4 items-center">
            <div className={`rounded w-12 h-12 flex justify-center items-center ${props.bgColor} shrink-0`}>
                <img src={props.icon} alt=""/>
            </div>
            <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">
                {props.caption}
            </span>
                <span className="text-sm">
                {props.description}
            </span>
            </div>
        </div>
    )
}

function Price() {
    const items: IListItemProps[] = [{
        icon: 'src/assets/icon1.svg',
        bgColor: 'bg-emerald-100',
        caption: 'Опытный гид',
        description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации ' +
            'соответствующих условий активизации.'
    }, {
        icon: 'src/assets/icon2.svg',
        bgColor: 'bg-indigo-100',
        caption: 'Безопасный поход',
        description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации ' +
            'соответствующих условий активизации.'
    }, {
        icon: 'src/assets/icon3.svg',
        bgColor: 'bg-amber-100',
        caption: 'Безопасный поход',
        description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации ' +
            'соответствующих условий активизации.'
    }]
    return (
        <PageBlock className="price"
                   contentClassName="py-12 xl:pt-20 xl:pb-28 flex justify-center gap-20 flex-wrap xl:flex-nowrap">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <span className="text-base md:text-2xl text-amber-400">
                        наше предложение
                    </span>
                    <span className="font-extrabold text-2xl md:text-3xl">
                        Лучшие программы для тебя
                    </span>
                </div>
                <span className="text-base md:text-lg">
                    Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух
                    тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.
                </span>
                {items.map((item) => (
                    <ListItem {...item} key={item.caption}/>
                ))}
                <Button size="l" className="self-center xl:self-baseline">
                    Стоимость программ
                </Button>
            </div>
            <div className="grid-cols-2 gap-2.5 shrink-0 self-center hidden md:grid order-last xl:order-first">
                <img src="src/assets/img6.jfif" alt="" className="price__img_left w-60 h-60 object-cover"/>
                <img src="src/assets/img5.jfif" alt="" className="price__img_right w-60 h-60 object-cover"/>
                <img src="src/assets/img4.jfif" alt="" className="price__img_right w-60 h-60 object-cover"/>
                <img src="src/assets/img3.jfif" alt="" className="price__img_left w-60 h-60 object-cover"/>
            </div>
        </PageBlock>
    )
}

export default Price