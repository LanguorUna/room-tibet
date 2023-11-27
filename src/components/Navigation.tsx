import Button from './Button';

function Navigation() {
    const items = ['Главная', 'Про гида', 'Программа тура', 'Стоимость', 'Блог', 'Контакты']
    return (
        <div className="flex justify-center xl:justify-between items-center flex-wrap gap-12">
            <img src="./assets/logo.png" alt="logo" className="cursor-pointer"/>
            <div className="flex justify-center gap-12 lg:justify-between items-baseline flex-wrap">
                <div className="text-lg flex gap-6 items-baseline flex-wrap justify-center">
                    {items.map((item) => (
                        <div className="cursor-pointer hover:underline" key={item}>
                            {item}
                        </div>
                    ))}
                </div>
                <Button>
                    Консультация
                </Button>
            </div>
        </div>
    )
}

export default Navigation