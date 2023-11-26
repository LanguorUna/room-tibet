import {ReactElement} from 'react';
import PageBlock from './PageBlock';
import Button from './Button';
import './Blog.less'

interface ICardProps {
    caption: string;
    description: string;
    date: Date;
    img: string;
}

function BlogCard(props: ICardProps): ReactElement {
    const monthText = (props.date.getMonth() + 1).toString().padStart(2, '0')
    const dayText = props.date.getDate().toString().padStart(2, '0')
    const dateText = `${props.date.getFullYear()}/${monthText}/${dayText}`
    return (
        <div className="blog__card p-0 xl:p-4 rounded-xl flex gap-6 flex-wrap flex-col xl:flex-row xl:flex-nowrap
                        w-72 xl:w-auto overflow-hidden">
            <img src={props.img}
                 className="w-72 h-72 xl:w-60 xl:h-72 xl:rounded-md object-cover shrink-0"/>
            <div className="flex flex-col gap-6 px-4 pb-4 xl:py-4 xl:px-0 xl:w-3/6">
                <span className="font-bold text-xl xl:text-2xl hover:underline hover:text-cyan-950 cursor-pointer">
                    {props.caption}
                </span>
                <div className="grow">
                    <span className="text-sm line-clamp-4">
                        {props.description}
                    </span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                    <span className="text-amber-400 cursor-pointer">
                     {dateText}
                    </span>
                    <span className="text-cyan-950 cursor-pointer">
                        читать статью
                    </span>
                </div>
            </div>
        </div>
    )
}

function Blog() {
    const items: ICardProps[] = [{
        caption: 'Красивая Италя, какая она в реальности?',
        description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации ' +
            'соответствующих условий активизации.',
        date: new Date('2023-04-01'),
        img: '../assets/img10.jfif',
    }, {
        caption: 'Долой сомнения! Весь мир открыт для вас!',
        description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации ' +
            'соответствующих условий активизации независимые способы реализации соответствующих условий активизации ' +
            'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих ' +
            'условий активизации независимые способы реализации соответствующих условий активизации',
        date: new Date('2023-04-01'),
        img: '../assets/img11.jfif',
    }, {
        caption: 'Как подготовиться к путешествию в одиночку?',
        description: 'Для современного мира базовый вектор развития предполагает.',
        date: new Date('2023-04-01'),
        img: '../assets/img12.jfif',
    }, {
        caption: 'Индия ... летим?',
        description: 'Для современного мира базовый.',
        date: new Date('2023-04-01'),
        img: '../assets/img13.jfif',
    }]

    return (
        <PageBlock className="blog"
                   contentClassName="py-12 xl:pt-20 xl:pb-24 flex flex-col gap-10 items-start xl:items-center">
            <div className="flex flex-col items-start xl:items-center gap-2">
                <span className="text-2xl text-amber-400">
                    делимся впечатлениями
                </span>
                <span className="font-extrabold text-2xl md:text-3xl">
                    Блог о путешествиях
                </span>
            </div>
            <div className="blog__cards-wrapper flex flex-col -mx-6 xl:-mx-0 pb-4 xl:pb-0 overflow-x-auto">
                <div
                    className="grid grid-flow-col xl:grid-flow-row xl:grid-cols-2 gap-6 w-max xl:w-auto px-6 xl:px-0">
                    {items.map((item) => (
                        <BlogCard {...item} key={item.caption}/>
                    ))}
                </div>
            </div>
            <Button className="self-center">
                Другие материалы
            </Button>
        </PageBlock>
    )
}

export default Blog