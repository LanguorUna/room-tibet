import {PropsWithChildren, ReactElement} from 'react';
import './PageBlock.less';

export interface IPageBlockProps {
    className?: string;
    contentClassName?: string;
}

function PageBlock({className, contentClassName, children}: PropsWithChildren<IPageBlockProps>): ReactElement {
    return (
        <div className={'flex flex-col items-center px-6 xl:px-0 ' + (className || '')}>
            <div className={'page-block__content w-full ' + (contentClassName || '')}>
                {children}
            </div>
        </div>
    )
}

export default PageBlock