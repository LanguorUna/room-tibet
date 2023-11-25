import Button from './Button';
import Navigation from './Navigation';
import PageBlock from './PageBlock';
import './Info.less';

function Info() {
    return (
        <PageBlock className="info bg-cover pt-4 pb-24">
            <Navigation/>
            <div className="info__slogan-container">
                <span className="info__slogan font-bold">
                    Насладись прогулкой в горах с&nbsp;командой единомышленников
                </span>
            </div>
            <form
                className="bg-zinc-50/20 backdrop-blur-sm rounded-xl p-10 box-border flex gap-6 flex-wrap justify-center">
                <div className="flex flex-col flex-1">
                    <select id="location"
                            className="select py-3.5 pl-4 pr-10 rounded-lg border-2 box-border bg-zinc-50/0 font-bold">
                        <option value="Локация для тура">Локация для тура</option>
                    </select>
                    <label htmlFor="location" className="p-2 text-sm">
                        выберите из списка
                    </label>
                </div>
                <div className="flex flex-col flex-1">
                    <select id="meeting-time"
                            className="select select_dates py-3.5 pl-4 pr-10 rounded-lg border-2 box-border bg-zinc-50/0 font-bold">
                        <option value="Дата похода">Дата похода</option>
                    </select>
                    <label htmlFor="meeting-time" className="p-2 text-sm">
                        укажите диапазон
                    </label>
                </div>
                <div className="flex flex-col flex-1">
                    <select id="participants"
                            className="select py-3.5 pl-4 pr-10 rounded-lg border-2 box-border bg-zinc-50/0 font-bold">
                        <option value="Участники">Участники</option>
                    </select>
                    <label htmlFor="participants" className="p-2 text-sm">
                        минимум 4 человека
                    </label>
                </div>
                <Button color="secondary" size="l" className="self-baseline">
                    Найти программу
                </Button>
            </form>
        </PageBlock>
    )
}

export default Info