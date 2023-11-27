import PageBlock from './PageBlock';
import Button from './Button';
import './Gallery.less'

function Gallery() {
    const items = [{
        img: './assets/img14.jfif',
        isBig: true
    }, {
        img: './assets/img15.jfif',
        isBig: false
    }, {
        img: './assets/img16.jfif',
        isBig: false
    }, {
        img: './assets/img17.jfif',
        isBig: false
    }, {
        img: './assets/img18.jfif',
        isBig: true
    }, {
        img: './assets/img19.jfif',
        isBig: false
    }]
    return (
        <PageBlock className="gallery"
                   contentClassName="py-12 xl:pt-20 xl:pb-12 xl:pb-48 flex flex-col gap-10 items-start xl:items-center">
            <div className="flex flex-col items-start xl:items-center gap-2">
                <span className="text-base md:text-2xl text-amber-400">
                    фото-отчет
                </span>
                <span className="font-extrabold text-2xl md:text-3xl">
                    Делимся впечатлениями
                </span>
            </div>
            <div className="gallery__cards-wrapper flex flex-col -mx-6 xl:-mx-0 pb-4 xl:pb-0 overflow-x-auto">
                <div className="gallery__cards grid grid-flow-col xl:grid-flow-row xl:grid-cols-4 gap-5 w-max
                                xl:w-auto px-6 xl:px-0">
                    {items.map((item) => (
                        <div
                            className={`gallery__card rounded-md relative col-span-1 ${item.isBig ? 'xl:col-span-2' : ''}
                                         cursor-pointer overflow-hidden`}>
                            <img src={item.img} className="w-full h-full object-cover"/>
                        </div>
                    ))}
                </div>
            </div>
            <Button className="self-center">
                Наш pinterest
            </Button>
        </PageBlock>
    )
}

export default Gallery