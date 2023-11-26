import PageBlock from './PageBlock';
import Button from './Button';
import './Program.less'

function Program() {
    return (
        <PageBlock className="program"
                   contentClassName="py-12 xl:py-24 box-border flex justify-center gap-16 xl:gap-32 flex-wrap xl:flex-nowrap">
            <div className="program__cards shrink-0 relative top-0 left-0 order-last xl:order-first">
                <img src="../assets/img2.jfif" alt=""
                     className="program__card hidden md:block absolute md:top-0 md:left-0 object-cover rounded-3xl cursor-pointer"/>
                <img src="../assets/img1.jfif" alt=""
                     className="program__card absolute md:bottom-0 md:right-0 object-cover rounded-3xl cursor-pointer"/>
                <div className="program__play rounded-full bg-zinc-50/60 absolute flex justify-center items-center cursor-pointer">
                    <img src="../assets/play.svg" className="w-6 h-6"/>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                        <span className="text-base md:text-2xl text-amber-400">
                            о нашем походе
                        </span>
                    <span className="font-extrabold text-2xl md:text-3xl">
                            Исследуйте все горные массивы мира вместе с нами
                        </span>
                </div>
                <span className="text-base md:text-lg">
                        Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.
                        Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых
                        странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
                    </span>
                <Button className="self-center xl:self-baseline">
                    Программа тура
                </Button>
            </div>
        </PageBlock>
    )
}

export default Program