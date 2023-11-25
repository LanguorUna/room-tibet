import PageBlock from './PageBlock';
import Button from './Button';

function Mailing() {
    return (
        <PageBlock className="mailing" contentClassName="flex flex-col xl:flex-row relative">
            <div className="bg-white shadow-2xl rounded-md flex gap-5 xl:gap-16 p-6 lg:px-24 lg:py-10 static xl:absolute
                mb-12 xl:mb-0 xl:top-0 xl:-translate-y-2/4 flex-wrap xl:flex-nowrap">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-base md:text-lg text-amber-400 self-baseline">
                        актуально
                    </span>
                    <span className="font-extrabold text-lg md:text-2xl">
                        Получайте полезные рассылки&nbsp;о&nbsp;путешествиях
                    </span>
                </div>
                <form className="flex flex-col gap-2 flex-wrap xl:flex-nowrap">
                    <span className="font-bold">
                        Введите e-mail адрес
                    </span>
                    <div className="flex gap-4 flex-col md:flex-row">
                        <input placeholder="name@domain.com" className="p-4 bg-slate-100 rounded flex-1 text-sm"/>
                        <Button>
                            Подписаться на новости
                        </Button>
                    </div>
                    <span className="font-bold text-sm mt-4 xl:mt-auto">
                        подписываясь на новости, вы автоматически соглашаетесь с <a href="#" className="underline">
                        условиями обработки персональных данных</a> и <a href="#" className="underline">
                        правилами рекламных рассылок</a>
                    </span>
                </form>
            </div>
        </PageBlock>
    )
}

export default Mailing