import PageBlock from './PageBlock';
import './Footer.less'

function Item({text, isNew}: {text: string, isNew?: boolean}) {
    return (
        <div className="flex gap-2.5">
            <img className="self-start py-1 px-0.5" src="src/assets/Group.svg" alt=""/>
            <span className="text-sm whitespace-wrap hover:underline hover:text-amber-400">
                {text}
            </span>
            {isNew && (
                <div className="py-0.5 px-2.5 bg-white text-cyan-950 text-xs rounded font-bold self-baseline">
                    new
                </div>
            )}
        </div>
    )
}

function Footer() {
    const aboutItems = [
        {text: 'Прогулки в горы летом'},
        {text: 'Зимние походы в горы'},
        {text: 'Посещение храмов в горах'},
        {text: 'Экстремальные виды туризма'},
        {text: 'Походы в джунглях Амазонии', isNew: true},
        {text: 'Поездка в Африку'}
    ]

    const tipItems = [
        {text: 'Как собрать в долгий поход?'},
        {text: 'Жизненно важные предметы для похода'},
        {text: 'Медицинская страховка, гарантии безопасности'},
        {text: 'Если вы врач - загляните сюда'},
    ]

    return (
        <div className="flex flex-col">
            <PageBlock className="footer" contentClassName="pt-12 xl:pt-44 pb-20 flex flex-col lg:flex-row gap-12 lg:gap-10">
                <div className="flex basis-0 flex-col grow-[2]">
                    <span className="text-xl font-bold mb-4">
                        Компания «РумТибет»
                    </span>
                    <span className="text-sm mb-7 lg:mb-20">
                        Его корни уходят в один фрагмент классической латыни 45 года н.э., то&nbsp;есть более
                        двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.
                    </span>
                    <div className="flex gap-6 font-bold text-sm mb-8 flex-wrap">
                        <span className="underline">
                            info@domain.com
                        </span>
                        <span className="underline">
                            +7 (123) 456-78-90
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <img className="cursor-pointer" src="src/assets/telegram.svg" alt=""/>
                        <img className="cursor-pointer" src="src/assets/vk.svg" alt=""/>
                        <img className="cursor-pointer" src="src/assets/pinterest.svg" alt=""/>
                        <img className="cursor-pointer" src="src/assets/skype.svg" alt=""/>
                    </div>
                </div>
                <div className="flex basis-0 grow-[3] flex-wrap gap-12 lg:gap-28 lg:flex-nowrap">
                    <div className="flex flex-col grow">
                        <span className="text-xl font-bold mb-4">
                            Наши услуги
                        </span>
                        <div className="flex flex-col gap-4">
                            {aboutItems.map((item) => (
                                <Item {...item}/>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col grow">
                        <span className="text-xl font-bold mb-4">
                            Важно для путешествий
                        </span>
                        <div className="flex flex-col gap-4">
                            {tipItems.map((item) => (
                                <Item {...item}/>
                            ))}
                        </div>
                    </div>
                </div>
            </PageBlock>
            <PageBlock className="bg-gray-950 py-6"
                       contentClassName="flex justify-center gap-4 sm:justify-between text-white text-sm flex-wrap">
                <div>
                    ИП Константинопольский К.К., {new Date().getFullYear()}
                </div>
                <div className="underline">
                    Политика обработки персональных данных
                </div>
            </PageBlock>
        </div>
    )
}

export default Footer