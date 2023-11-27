import {ReactElement} from 'react';
import Button from './Button';
import PageBlock from './PageBlock';
import './Popular.less'

interface ICardProps {
    rating: number;
    price: number;
    caption: string;
    additionalCaption: string;
    description: string;
    img: string;
}

function PopularCard(props: ICardProps): ReactElement {
    const ratingText = props.rating.toFixed(1)
    return (
        <div className="popular__card shrink-0 relative overflow-hidden">
            <img src={props.img} alt="" className="w-full h-full object-cover absolute"/>
            <div className="popular__card-content absolute bg-zinc-50/20 backdrop-blur-sm w-full
                            h-20 xl:h-24 bottom-0 flex flex-col pb-5 pt-6 xl:pt-5 px-8 justify-between">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-lg xl:text-2xl font-bold">
                            {props.caption}
                        </span>
                        <span className="popular__card-title text-sm hidden xl:inline">
                            {props.additionalCaption}
                        </span>
                    </div>
                    <div className="shrink-0 bg-zinc-50/30 py-1.5 xl:py-2 px-3 xl:px-4 rounded">
                        <span className="font-bold text-base xl:text-xl">
                            {props.price} $
                        </span>
                    </div>
                </div>
                <div className="mt-9 text-sm xl:text-base">
                    {props.description}
                </div>
                <Button className="bottom-0 self-start">
                    Программа тура
                </Button>
            </div>
            <div className="popular__card-rating absolute w-16 h-8 top-12 right-0 px-2 py-1
                                bg-zinc-50/40 backdrop-blur-sm flex gap-1 justify-center items-center">
                <img src="./assets/star.svg" alt="" className="shrink-0"/>
                <span className="font-bold">
                    {ratingText}
                </span>
            </div>
        </div>
    )
}

function Popular() {
    const items: ICardProps[] = [{
        rating: 4.9,
        price: 480,
        caption: 'Озеро возле гор',
        additionalCaption: 'романтическое приключение',
        description: 'Его корни уходят в один фрагмент классической латыни 45 года н.э., ' +
            'то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа ' +
            'Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur" и ' +
            'занялся его поисками в классической латинской литературе.',
        img: './assets/img7.jfif',
    }, {
        rating: 4.5,
        price: 500,
        caption: 'Ночь в горах',
        additionalCaption: 'в компании друзей',
        description: 'Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий' +
            ' назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых ' +
            'странных слов в Lorem Ipsum, "consectetur" и занялся его поисками в классической латинской литературе.',
        img: './assets/img8.jfif',
    }, {
        rating: 5.0,
        price: 230,
        caption: 'Йога в горах',
        additionalCaption: 'для тех, кто забоится о себе',
        description: 'Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий ' +
            'назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых ' +
            'странных слов в Lorem Ipsum, "consectetur" и занялся его поисками в классической латинской литературе.',
        img: './assets/img9.jfif',
    }]

    return (
        <PageBlock className="popular"
                   contentClassName="py-12 xl:pt-20 xl:pb-24 flex flex-col gap-12 items-start xl:items-center">
            <div className="flex flex-col items-start xl:items-center gap-2">
                <span className="text-base md:text-2xl text-amber-400">
                    по версии отдыхающих
                </span>
                <span className="font-extrabold text-3xl text-2xl md:text-3xl">
                    Популярные направления
                </span>
            </div>
            <div className="popular__cards-wrapper flex flex-col -mx-6 xl:-mx-0 pb-4 xl:pb-0 overflow-x-auto">
                <div className="flex xl:justify-center gap-5 flex-nowrap w-max xl:w-auto px-6 xl:px-0">
                    {items.map((item) => (
                        <PopularCard {...item} key={item.caption}/>
                    ))}
                </div>
            </div>
            <Button className="self-center">
                Рейтинг направлений
            </Button>
        </PageBlock>
    )
}

export default Popular